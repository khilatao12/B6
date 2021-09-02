class main{
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add("container")
        this.title = document.createElement('h2')
        this.title.innerHTML = "Success"
        this.title.classList.add("title")
    }
    render(){
        this.container.appendChild(this.title)

        return this.container
    }
}

export {main}