import  { useState }from "react"

export  const UseStateWithObjects = ()=>{
    const [person,setPerson] = useState({name:"Deepak",age:25,hobby:"nothing"})
    const showPerson = ()=>{
        setPerson({...person, name:"puneet"})
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