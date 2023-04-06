"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Divider, Row } from "antd";
import moment from "moment/moment";
import { ClockCircleTwoTone, UserOutlined } from "@ant-design/icons";
import whosout from "../../public/whosoutt.png";
import Image from "next/image";
import { BiLogOut } from 'react-icons/Bi';

const employeeLeaveDetails = [
  { name: "John", leaveDate: "2023-04-06" },
  { name: "Jane", leaveDate: "2023-04-07" },
  { name: "Mary", leaveDate: "2023-04-08" },
  { name: "Lary", leaveDate: "2023-04-012" },
  // add more employee leave details here
];

// Group the employee leave details by date
const leaveStatus = employeeLeaveDetails.reduce((acc, { name, leaveDate }) => {
  const dateDiff = moment(leaveDate).diff(moment(), "days");
  let date;

  if (dateDiff === 0) {
    date = "TODAY";
  } else if (dateDiff === 1) {
    date = "TOMORROW";
  } else {
    date = moment(leaveDate).format("MMMM D, YYYY");
  }

  if (!acc[date]) {
    acc[date] = [];
  }

  acc[date].push(name);

  return acc;
}, {});

// Sort the leave status by date
const sortedLeaveStatus = Object.entries(leaveStatus).sort(([a], [b]) => {
  if (a === "TODAY") {
    return -1;
  } else if (b === "TODAY") {
    return 1;
  } else if (a === "TOMORROW") {
    return -1;
  } else if (b === "TOMORROW") {
    return 1;
  } else {
    return moment(a, "MMMM D, YYYY").diff(moment(b, "MMMM D, YYYY"), "days");
  }
});

export default function WhosOut() {
  return (
    <div className="m-10">
      <div className="w-1/3 bg-whitesmoke-200 mt-10 border-2 border-solid rounded-md">
        <div className="flex items-center mb-1 shadow-md w-full p-5">
          <Image src={whosout} width={22} height={28} />
          <h3 className="text-[18px] font-semibold mx-2">WHO'S OUT</h3>
        </div>
        <div className="py-5">
          {sortedLeaveStatus.map(([date, members], index, array) => (
            <div key={date} className=" px-5 ">
              <h3 className="text-[12px] my-2">
                {date}({members?.length})
              </h3>
              <Row gutter={[16, 16]}>
                {members.map((member) => (
                  <Col key={member}>
                    <Avatar
                      size="small"
                      src={`employee/${member}.jpg`}
                      icon={<UserOutlined />}
                    />
                    <h3>{member}</h3>
                  </Col>
                ))}
              </Row>
              {index < array.length - 1 && (
                <Divider style={{ height: "4px" }} className="my-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      <h3>static</h3>
      <div className="w-full md:w-1/3 bg-whitesmoke-200 mt-10 border-2 border-solid rounded-md pb-5">
        <div className="flex items-center mb-1 shadow-md w-full p-5">
          <BiLogOut className="text-xl"/>
          <h3 className="text-[18px] font-semibold mx-2">WHO'S OUT</h3>
        </div>
        <div className="">
          <div className=" px-5 ">
            <h3 className="text-[12px] my-2">TODAY (5)</h3>
            <Row gutter={[16, 16]}>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
            </Row>

            <Divider style={{ height: "4px" }} className="my-2" />
          </div>
        </div>
        <div className="">
          <div className=" px-5 ">
            <h3 className="text-[12px] my-2">TOMORROW (3)</h3>
            <Row gutter={[16, 16]}>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
            </Row>

            <Divider style={{ height: "4px" }} className="my-2" />
          </div>
        </div>
        <div className="">
          <div className=" px-5 ">
            <h3 className="text-[12px] my-2">MONDAY, NOV 21 (2)</h3>
            <Row gutter={[16, 16]}>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
              <Col>
                <Avatar size="medium" icon={<UserOutlined />} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
