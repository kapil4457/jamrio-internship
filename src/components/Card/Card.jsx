import React from "react";
import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card-main">
      <img src={data?.image} alt="" />
      <div className="info">
        <div className="likes">
          <FavoriteIcon /> {data?.likes}
        </div>
        <button
          onClick={() => {
            navigate(`/posts/${data?.id}`);
          }}
        >
          Read More
        </button>
      </div>
      <div
        className="author"
        title={data?.owner?.firstName + " " + data?.owner?.lastName}
      >
        <img src={data?.owner?.picture} alt="" />
      </div>
    </div>
  );
};

export default Card;
