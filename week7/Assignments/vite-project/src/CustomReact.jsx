import React from 'react'

const CustomReact = () => {
    const customAnchor = {
        type:'a',
        innerText: "clickMe",
        props : {
            href: "https://google.com/",
            target: "_blank",
           
        }
    }
   
    const generateHtml = (element) =>{
        const {type, props,innerText} = customAnchor
        const attributes = Object.keys(props).map(key=>  `${key}=${props[key]}`).join(' ')

        return `<${type} ${attributes}>${innerText}</${type}>`

    }

    const customRender = (element,targetSelector)=>{
        const html = generateHtml(element)
        const selector = document.querySelector(targetSelector)
        selector.innerHTML = html


    }
  return (
    <div>ok{customRender(customAnchor, "#root")}</div>
  )
}

export default CustomReact