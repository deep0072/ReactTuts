import  { useState }from "react"

export  const UseStateWithObjects = ()=>{
    const [person,setPerson] = useState({name:"Deepak",age:25,hobby:"singing"})
    const showPerson = ()=>{
        setPerson({name:"puneet",age:15, hobby:"figuring out"})
        document.getElementById('myBtn').onclick = function() {
            document.getElementById('myBtn').innerHTML = 'show deepak';
        }
        
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.hobby}</h1>

            <button id ="myBtn" onClick={()=>showPerson()}>show puneet</button>

        </div>
    )
    
}