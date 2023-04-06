"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Divider, Row } from "antd";
import moment from "moment/moment";
import { ClockCircleTwoTone, UserOutlined } from "@ant-design/icons";

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
      <div className="w-1/3 bg-whitesmoke-200 mt-10 rounded ">
        <div className="flex items-center mb-1 shadow-md w-full p-5 border-2 border-solid rounded-t-lg">
          <ClockCircleTwoTone className="m-1" />
          <h3>WHO'S OUT</h3>
        </div>
        <div className="border-2 border-solid rounded-b-lg">
          {sortedLeaveStatus.map(([date, members]) => (
            <div key={date} className=" px-5 ">
              <h3>
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
              <Divider className="my-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
