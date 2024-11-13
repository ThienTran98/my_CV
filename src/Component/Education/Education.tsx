"use client";
import { education } from "@/FetchData/NavData/Nav";
import React from "react";

export default function Education() {
  return (
    <div className="py-5 px-20 ">
      <h2 className="text-white text-xl font-bold flex items-center justify-center">
        Học vấn
      </h2>
      <div className="w-[40%] mx-auto shadow-lg shadow-yellow-500/50 px-2 py-3 rounded">
        <h3 className="flex items-center">
          <p className="text-white min-w-[120px]">Trường :</p>{" "}
          <span className="text-gray-400 font-semibold mx-2">
            {education.shool}
          </span>
        </h3>
        <h3 className="flex items-center">
          <p className="text-white min-w-[120px]"> Chuyên ngành :</p>

          <span className="text-gray-400 font-semibold mx-2">
            {education.major}
          </span>
        </h3>
        <h3 className="flex items-center">
          <p className="text-white min-w-[120px]">Năm học :</p>
          <span className="text-gray-400 font-semibold mx-2">
            {education.shool_year}
          </span>
        </h3>
        <h3 className="flex items-center">
          <p className="text-white min-w-[120px]">Xếp loại :</p>
          <span className="text-gray-400 font-semibold mx-2">
            {education.degree_classification}
          </span>
        </h3>
      </div>
      <div className="border-b border border-gray-600 mt-5"></div>
    </div>
  );
}
