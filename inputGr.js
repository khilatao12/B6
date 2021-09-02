class InputGroup{
    constructor(type, label,name, placeholder){
        this.container = document.createElement('div')
        this.container.classList.add("inputGr") 

        this.input = document.createElement('input')
        this.input.type = type
        this.input.name = name
        this.input.required = true
        this.input.placeholder = placeholder

        this.errMsg = document.createElement('div')
        this.errMsg.classList.add('err')

        this.label = document.createElement('label')
        this.label.innerHTML = label
    }
    getInputValue(){
        return this.input.value.trim()
    }
    setMsg(msg){
        this.errMsg.innerHTML = msg
    }
    render(){
        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
        this.container.appendChild(this.errMsg)

        return this.container
    }
}

export {InputGroup}