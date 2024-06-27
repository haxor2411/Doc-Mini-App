import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
  const ref = useRef();
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "purple",
      },
    },
  ];
  return (
    <div ref={ref} className="z-[3] w-full h-screen fixed flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
