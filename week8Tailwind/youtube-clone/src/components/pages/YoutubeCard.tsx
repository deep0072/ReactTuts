import React from "react";

const YoutubeCard = ( props:any) => {
  return (
    <div>
     
      <img src="/beastImage.jpg" alt=""  className="rounded-xl pl-5"/>
      <div className="grid grid-cols-12 pt-5 pl-5">
        <div className="col-span-1">
          <img className={"rounded-full w-12 h-12"} src="/beast.jpg" />
        </div>
        <div className="col-span-11 pl-2">
          <div >{props.title}</div>
          <div className=" text-slate-500 text-base">{props.author}</div>
          <div className=" text-slate-500 text-base">{props.views} | {props.timeStamp}</div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
