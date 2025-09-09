import React from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";

function StoryCard(props) {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={props.name}
          src={props.image}
          className="object-cover w-full h-50 rounded-xl p-3"
        />
      }
      className={`absolute ${props.customClass} shadow-lg z-20 rounded-xl`}
    >
      <div>
        <div className="flex items-center gap-4 mb-3">
          <img src={props.avatar} alt="" className="rounded-full h-10 w-10" />
          <div>
            <h3>{props.name}</h3>
            <p>{props.grade}</p>
          </div>
        </div>
        <p className="text-gray-400 mb-2">{props.description}</p>
        <div className="icons flex items-center gap-3 text-gray-500">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} />
            <span>{props.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faMessage} />
            <span>{props.messages}</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEye} />
            <span>{props.views}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StoryCard;
