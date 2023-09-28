import { people } from "../../data"
import Person from "./Person"

const List = () => {
  return (
    <div>
        List
    {people.map((man, index)=>{
       
        return <Person key = {man.id} {...man}/>
    })}
    </div>
  )
}

export default List