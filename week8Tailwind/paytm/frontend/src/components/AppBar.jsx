import React from "react";
import { useSetRecoilState } from "recoil";
import { mytokenAtom } from "./atom";
import { Balance } from "./Balance";

const AppBar = () => {
    const setTokenAtom = useSetRecoilState(mytokenAtom)
  return (
    <div className="shadow h-14 flex justify-between">
      AppBar
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>

      <button 
        type="button"
        onClick={()=>{
            localStorage.clear();
            setTokenAtom(false)

        }}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-small rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        logout
      </button>
    </div>
  );
};

export default AppBar;
