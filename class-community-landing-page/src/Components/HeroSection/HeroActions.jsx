// Button group with hover animations
import React from "react";
import { Select } from "antd";

const { Option } = Select;

function HeroActions() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="mb-4">
        <Select
          defaultValue="student"
          className={`rounded-full `}
          style={{ width: 250 }}
          size="large"
        >
          <Option value="student">Sign up as: Student</Option>
          <Option value="parent">Sign up as: Parent</Option>
          <Option value="teacher">Sign up as: Teacher</Option>
        </Select>
      </div>
      <button className="bg-yellow-500 text-white rounded-full px-6 py-2 transition duration-300 ease-in-out">
        Continue
      </button>
    </div>
  );
}

export default HeroActions;
