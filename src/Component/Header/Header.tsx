"use client";
import { Nav_Data } from "@/FetchData/NavData/Nav";
import React, { Fragment, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [isActive, setIsActive] = useState<number>(1);
  const handleRenderNav = () => {
    return Nav_Data.map((item, index) => {
      return (
        <Fragment key={item.id}>
          <h2
            className={`hover:text-yellow-500 ${
              isActive === item.id ? "text-yellow-500" : ""
            } relative hover:cursor-pointer hover:opacity-80 hover:duration-300 hover:ease-linear hover:delay-100 group`}
            onClick={() => {
              handleActiveNav(item.id);
            }}
          >
            {item.title}
            {isActive === item.id ? (
              <div className="w-full h-[3px] bg-yellow-500 rounded-sm absolute bottom-[-20%] left-0  "></div>
            ) : (
              <div className="w-0 h-[3px] bg-yellow-500 rounded-sm absolute bottom-[-20%] left-0 group-hover:w-full  group-hover:duration-300 group-hover:ease-linear group-hover:delay-100  "></div>
            )}
          </h2>
        </Fragment>
      );
    });
  };
  const handleActiveNav = (item: number) => {
    setIsActive(item);
  };
  return (
    <div className="px-10 py-5 flex items-center">
      <div className="w-1/3">
        <h1 className="text-xl text-red-600 font-bold">My Portfolio</h1>
      </div>
      <div className="grow flex items-center justify-between text-white font-medium">
        {handleRenderNav()}
      </div>
    </div>
  );
}
