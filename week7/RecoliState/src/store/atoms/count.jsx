import { atom, selector } from "recoil";

export const countAtom = atom({
    key:"countAtom",
    default:0 // its kind of state variable initial value like we do in useState
})

export const renderEven =  selector({
    key: 'renderEven', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const even = get(countAtom);
      if (even >=10 && even%2==0) return "even";
  
      
    },
  });