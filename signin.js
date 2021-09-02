import {InputGroup} from "./inputGr.js"
import { Register } from "./register.js"
import {setScreen} from "./app.js"
import {main} from "./web.js"
class signIn{
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add("container")
        this.title = document.createElement('h2')
        this.title.innerHTML = "Sign In"
        this.title.classList.add("title")

        this.formSignIn = document.createElement('form')
        this.formSignIn.addEventListener("submit",this.handleSubmit)       

        this.inputGroupEmail = new InputGroup("email","Email :","Email","Your email")

        this.inputGroupPassword = new InputGroup("password","Password :","password","Your password")

        

        this.btnSubmit = document.createElement('button')
        this.btnSubmit.type = "submit"
        this.btnSubmit.innerHTML = "SignIn"
        this.btnSubmit.classList.add("btn")

        this.linktoRegister = document.createElement('p')
        this.linktoRegister.innerHTML="You don't have account"
        this.linktoRegister.classList.add('link')
        this.linktoRegister.addEventListener('click',this.movetoRegister)
    }
    movetoRegister = ()=>{
        const register = new Register()
        setScreen(register)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        
        const email = this.inputGroupEmail.getInputValue()
        const password = this.inputGroupPassword.getInputValue()

        if(!email){
            this.inputGroupEmail.setMsg("Email không được bỏ trống")    
        }else{
            this.inputGroupEmail.setMsg("")
        }
        if(password.length<8){
            this.inputGroupPassword.setMsg("Password không được ngắn hơn 8 kí tự")
        }else{
            this.inputGroupPassword.setMsg("")
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    const web = new main()
    setScreen(web)
  })
  .catch((error) => {
    
    var errorMessage = error.message;
    alert(errorMessage);
  });
    }
    render(){        
        this.formSignIn.appendChild(this.inputGroupEmail.render())
        this.formSignIn.appendChild(this.inputGroupPassword.render())
        this.formSignIn.appendChild(this.btnSubmit)

        this.container.appendChild(this.title)
        this.container.appendChild(this.formSignIn)
        this.container.appendChild(this.linktoRegister)

        return this.container
    }
}

export{signIn}