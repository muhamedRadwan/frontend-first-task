// Profile card with image and stats
import React from "react";
import { Card } from "antd";

function TeacherCard(props) {
  return (
    <Card
      hoverable
      bodyStyle={{ padding: "10px" }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-95 shadow-md z-10 flex items-center"
    >
      <div className="flex">
        <img
          src={props.image}
          alt="Teacher"
          className="w-15 h-15 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">
            Sir Jaber Ibne Abdullah - 3rd standard
          </p>
          <p className="text-sm text-gray-500">48 students</p>
        </div>
      </div>
    </Card>
  );
}

export default TeacherCard;
