"use client";

import { useState, useEffect } from "react";
import { Col, Row ,Divider} from "antd";


export default function TestPage() {
  const [upcomingCelebrations, setUpcomingCelebrations] = useState([]);
  // Data structure to store celebrations
  const celebrations = [
    { name: "John Doe's Birthday", date: "2023-04-10" },
    { name: "Jane Doe's Anniversary", date: "2023-04-15" },
    { name: "Mainul Islam BirthDay", date: "2023-04-07" },
    { name: "Mainul Islam BirthDay", date: "2023-04-07" },
    { name: "Fatema BirthDay", date: "2023-04-06" },
    // Add more celebrations here...
  ];

  // Function to filter out celebrations within next 7 days
  const getUpcomingCelebrations = () => {
    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return celebrations.filter((celebration) => {
      const celebrationDate = new Date(celebration.date);
      return celebrationDate >= today && celebrationDate <= oneWeekLater;
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
      return celebrationDate.toLocaleDateString();
    }
  };

  useEffect(() => {
    // Update upcoming celebrations on mount
    setUpcomingCelebrations(getUpcomingCelebrations());
  }, []);

  return (
    <div className="p-10">
      <h2>Test Page</h2>

      <Row justify="center" align="middle">
        <Col span={8} style={{ background: "red", padding: "10px" }}>
          col-8
        </Col>
        <Col span={8} style={{ background: "green", padding: "10px" }}>
          col-8
        </Col>
        <Col span={8} style={{ background: "yellow", padding: "10px" }}>
          col-8
        </Col>
      </Row>

      <div className="w-1/4 bg-whitesmoke-200 mt-10 rounded p-5 border-2 border-solid">
        <div className="flex">
          <span className="m-1">Icon</span>
          <h3 className="m-1">CELEBRETIONS</h3>
        </div>
        <Divider plain />
        <div>
          <ul>
            {upcomingCelebrations.map((celebration) => (
              <li key={celebration.date}>
                {celebration.name} - {getDisplayDate(celebration.date)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
