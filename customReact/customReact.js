// how reacts works here first it will select root element and  get component try to break down into tree type structure
// like in react element variable


// after that react render that tree info into selected element with. means try to inject that tree into root div tag.
// this process is render.



const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank',
    },
    children:'Click me to visit google'
}


const mainConatiner = document.querySelector("#root")

const customRender = ()=>{
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // mainConatiner.appendChild(domElement)

    // custom render in react way

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // now use loop to set prop
    for (const prop in reactElement.props){
        console.log(prop)
      
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainConatiner.appendChild(domElement)

}
customRender()
