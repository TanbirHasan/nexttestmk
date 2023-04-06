"use client";

import { useState, useEffect } from "react";
import { Col, Row, Divider, Avatar } from "antd";
import { CrownOutlined, UserOutlined } from "@ant-design/icons";

export default function TestPage() {
  const [upcomingCelebrations, setUpcomingCelebrations] = useState([]);
  // Data structure to store celebrations
  const celebrations = [
    { name: "John Doe's Birthday", date: "2023-04-10" },
    { name: "Jane Doe's Anniversary", date: "2023-04-15" },
    { name: "Mainul Islam BirthDay", date: "2023-04-07" },
    { name: "Fatema BirthDay", date: "2023-04-13" },
    { name: "Luis BirthDay", date: "2023-04-11" },
    { name: "Tanbir BirthDay", date: "2023-04-10" },
    // Add more celebrations here...
  ];

  // Function to filter out celebrations within next 7 days
  const getUpcomingCelebrations = () => {
    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return celebrations
      .filter((celebration) => {
        const celebrationDate = new Date(celebration.date);
        return celebrationDate >= today && celebrationDate <= oneWeekLater;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
  };

  // Function to get the date display string for a celebration
  const getDisplayDate = (date) => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const celebrationDate = new Date(date);
    if (celebrationDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (celebrationDate.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      const dateStr = celebrationDate.toLocaleDateString();
      const dateObj = new Date(dateStr);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });

      return formattedDate;
    }
  };

  useEffect(() => {
    // Update upcoming celebrations on mount
    setUpcomingCelebrations(getUpcomingCelebrations());
  }, []);

  return (
    <div className="p-10">
      <h2>Test Page</h2>

      <div>
        <div className="w-full sm:w-1/3 bg-whitesmoke-200 mt-10 rounded p-5 border-2 border-solid">
          <div className="flex items-center mb-1">
            <span className="m-1">
              <CrownOutlined />
            </span>
            <h3 className="m-1">CELEBRATIONS</h3>
          </div>

          <div>
            <ul>
              {upcomingCelebrations.slice(0, 4).map((celebration) => (
                <>
                  <div className="flex flex-col md:flex-row justify-between w-full mt-5">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Avatar size="medium" icon={<UserOutlined />} />
                      <div className="mx-2">
                        <h6 className="text-[12px] md:text-base">
                          {celebration.name}{" "}
                        </h6>
                        <span className="text-[12px] md:text-base">
                          {getDisplayDate(celebration.date)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>Icon</span>
                    </div>
                  </div>
                  <Divider style={{ height: "4px" }} className="my-2" />
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
