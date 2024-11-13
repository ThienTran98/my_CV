"use client";

import { profile } from "@/FetchData/NavData/Nav";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="py-5 px-20  ">
      <div className="border-t border border-gray-600"></div>
      <div className="py-10 w-[60%] flex  justify-center mx-auto min-h-[396px]">
        <div className="w-1/2 shadow-lg shadow-indigo-500/40 rounded">
          <h2>Image</h2>
          <h2>Image</h2>
          <h2>Image</h2>
          <h2>Image</h2>
          <h2>Image</h2>
          <h2>Image</h2>
          <h2>Image</h2>
        </div>
        <div className="w-1/2 text-white pl-4">
          <h1 className="text-xl font-bold mb-3">Giới thiệu về bản thân</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(300)
                .typeString(
                  '<span  style="color: #fab946;" >Với kinh nghiệm vận hành và kiểm soát chất lượng sản xuất tại các doanh nghiệp.</span>'
                )
                .pauseFor(300)
                .deleteChars(0)
                .typeString(
                  '<span  style="color: #fab946;">Tôi mong muốn trở thành nhân viên của công ty để có cơ hội được làm việc và đóng góp cho công ty.</span>'
                )
                .pauseFor(300)
                .start();
            }}
            options={{
              loop: true,
              delay: 150,
            }}
          />
          {/* <p className="text-yellow-400">
            Với kinh nghiệm vận hành và kiểm soát chất lượng sản xuất tại các
            doanh nghiệp. Tôi mong muốn trở thành nhân viên của công ty để có cơ
            hội được làm việc và đóng góp cho công ty.
          </p> */}
          <div className="mt-3">
            <h2 className="">
              Họ và tên :
              <span className="mx-2 text-gray-400 font-normal">
                {profile.name}
              </span>
            </h2>
            <h2 className="">
              Ngày tháng năm sinh :
              <span className="mx-2 text-gray-400 font-normal">
                {profile.dob}
              </span>
            </h2>
            <h2 className="">
              SĐT :
              <span className="mx-2 text-gray-400 font-normal">
                {profile.phone}
              </span>
            </h2>
            <h2 className="">
              Email :
              <span className="mx-2 text-gray-400 font-normal">
                {profile.email}
              </span>
            </h2>
            <h2 className="">
              Địa chỉ :
              <span className="mx-2 text-gray-400 font-normal">
                {profile.address}
              </span>
            </h2>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-semibold rounded-3xl px-5 py-2 text-center me-2 mb-2 hover:opacity-80 hover:transition-all"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border border-gray-600"></div>
    </div>
  );
}
