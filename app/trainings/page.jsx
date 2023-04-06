"use client";

import { Avatar, Divider } from "antd";
import React from "react";
import { AiFillTrophy } from "react-icons/Ai";
import { BiCake } from "react-icons/Bi";
import { GiSwan } from "react-icons/Gi";
import { CiCalendarDate } from "react-icons/Ci";
import { UserOutlined } from "@ant-design/icons";

const Trainings = () => {
  return (
    <div className="flex items-center m-10 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="w-full md:w-1/3 bg-whitesmoke-200 mt-10 border-2 border-solid rounded-md pb-5">
        <div className="flex items-center mb-1 shadow-md w-full p-5">
          <AiFillTrophy className="text-xl" />
          <h3 className="text-[18px] font-semibold mx-2">TRAININGS</h3>
        </div>
        <div className="px-5">
          <ul>
            <>
              <div className="flex justify-between w-full mt-5 items-end ">
                <div className="mx-2">
                  <h6 className="text-[12px] md:text-base font-semibold">Unlawful Harasment</h6>
                  <div className="flex items-center">
                    <CiCalendarDate className="text-xl mr-1" />

                    <p className="text-[10px] md:text-base text-[#003087] mx-1">
                      12 October - 2022
                    </p>
                  </div>
                </div>
              </div>
            </>
          </ul>
          <Divider style={{ height: "4px" }} className="my-2" />
        </div>
       

        <div className="px-5">
          <ul>
            <>
              <div className="flex justify-between w-full mt-5 items-end ">
                <div className="mx-2">
                  <h6 className="text-[12px] md:text-base  font-semibold">Unlawful Harasment</h6>
                  <p className=" text-[#2F80ED]">Care4UK Management Training </p>
                  <div className="flex items-center">
                    <CiCalendarDate className="text-xl mr-1" />

                    <p className="text-[10px] md:text-base mx-1  text-[#003087]">
                    12 October - 2022
                    </p>
                  </div>
                </div>
              </div>
            </>
          </ul>
          <Divider style={{ height: "4px" }} className="my-2" />
        </div>

        <div className="px-5">
          <ul>
            <>
              <div className="flex justify-between w-full mt-5 items-end ">
                <div className="mx-2">
                  <h6 className="text-[12px] md:text-base  font-semibold">Unlawful Harasment</h6>
                  <div className="flex items-center">
                    <CiCalendarDate className="text-xl mr-1" />

                    <p className="text-[10px] md:text-base text-[red] mx-1">
                      Due 12 October - 2022
                    </p>
                  </div>
                </div>
              </div>
            </>
          </ul>
          <Divider style={{ height: "4px" }} className="my-2" />
        </div>

        <div className="px-5">
          <ul>
            <>
              <div className="flex justify-between w-full mt-5 items-end ">
                <div className="mx-2">
                  <h6 className="text-[12px] md:text-base  font-semibold">Unlawful Harasment</h6>
                  <p className=" text-[#2F80ED]">Care4UK Management Training </p>
                  <div className="flex items-center">
                    <CiCalendarDate className="text-xl mr-1" />

                    <p className="text-[10px] md:text-base text-[red] mx-1">
                     Due 12 October - 2022
                    </p>
                  </div>
                </div>
              </div>
            </>
          </ul>
          
        </div>
      </div>
      <div className="w-4/6 bg-orange-400 rounded sm mx-5 h-auto">
        <h3>Box</h3>
      </div>
    </div>
  );
};

export default Trainings;
