import {InputGroup} from "./inputGr.js"
import { signIn } from "./signin.js";
import {setScreen} from "./app.js"
class Register {
    $container;
    $formRegister
    $title;

    $inputGroupDisplayName;
    $inputGroupemail;
    $inputGroupPassword;
    $inputGroupCfpassword;

    $btnSubmit
    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("container")

        this.$title = document.createElement("h3")
        this.$title.innerHTML = "Register"
        this.$title.classList.add("title")

        this.$formRegister = document.createElement("form")
        this.$formRegister.addEventListener("submit",this.handleSubmit)

        this.$inputGroupDisplayName = new InputGroup("text", "Display Name", "name", "Enter your name");
        this.$inputGroupemail = new InputGroup("email", "Email", "email", "Enter your email address");
        this.$inputGroupPassword = new InputGroup("password", "Password", "password", "Enter your password");
        this.$inputGroupCfpassword = new InputGroup("password", "Confirm password", "cfpassword", "Confirm password");

        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.type = "submit"
        this.$btnSubmit.innerHTML = "Register"
        this.$btnSubmit.classList.add("btn")

        this.linktoLogin = document.createElement('p')
        this.linktoLogin.innerHTML="You have account"
        this.linktoLogin.classList.add('link')
        this.linktoLogin.addEventListener('click',this.movetoLogin)

        
    }
    movetoLogin = ()=>{
        const login = new signIn()
        setScreen(login)
    }
    handleSubmit = (e)=>{
        e.preventDefault();

        //validate the form
        const email = this.$inputGroupemail.getInputValue()
        const password = this.$inputGroupPassword.getInputValue()
        const name = this.$inputGroupDisplayName.getInputValue()
        const cfpassword = this.$inputGroupCfpassword.getInputValue()

        this.$inputGroupDisplayName.setMsg(null)
        this.$inputGroupCfpassword.setMsg(null)
        this.$inputGroupPassword.setMsg(null)
        this.$inputGroupemail.setMsg(null)

        if(!email){
            this.$inputGroupemail.setMsg("Email is required")
        }
        if(!name){
            this.$inputGroupDisplayName.setMsg("Name is required")
        }
        if(password.length < 6){
            this.$inputGroupPassword.setMsg("Password length must be at least 6 characters")
        }
        if(cfpassword != password){
            this.$inputGroupCfpassword.setMsg("Comfirm password not matched ")
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    alert("success")
    const login = new signIn()
        setScreen(login)
  })
  .catch((error) => {
    
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    }
    render(){
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render())
        this.$formRegister.appendChild(this.$inputGroupemail.render())
        this.$formRegister.appendChild(this.$inputGroupPassword.render())
        this.$formRegister.appendChild(this.$inputGroupCfpassword.render())
        this.$formRegister.appendChild(this.$btnSubmit)

        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$formRegister)
        this.$container.appendChild(this.linktoLogin)
        return this.$container
    }
}

export { Register }