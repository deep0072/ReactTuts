import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todo";

//---------------------------------------------------------------------------------------------
// atomFamily ==> used in context of multiple atoms
// 

// export const todoAtomFamily = atomFamily({
//     key:"todoAtomFamily",
//     default: id =>{
//         return TODOS.find(x=>x.id === id)

//         // find method return first element which satisfy the condition
//     }
// })

// export const todoAtom = atom({
//     key:"todoAtom",
//     default:{
//         id:"1",
//         title:"todo1",
//         description:"todoAtomDescription"

//     }
   
// })

//-------------------------------------------------------------------------------------
// selector family 
// when we are supposed to get data from backend and rendering it rather than getting data in memory we use
// selector family

// as atoms cant have async backend call in default value. so we need selector.
// in context of atomFamily we need to use selectorFamily  

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default: selectorFamily({
        key:"selectorFamily",
        get: function (id){
            return async ({get}) => {
                const  res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                console.log(res.data)
                return res.data.todo
            }
        }
    })
})