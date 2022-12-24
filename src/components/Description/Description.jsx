import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Description.css";
import Loader from "../Loader/Loader";

const Description = () => {
  const params = useParams();
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const config = {
      headers: {
        "app-id": "63a6db18ce8dda3753ade844",
      },
    };
    console.log("In");
    const { data } = await axios.get(
      `https://dummyapi.io/data/v1/post/${params.id}`,
      config
    );
    return data;
  };

  useEffect(() => {
    getPosts().then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);
  return (
    <div className="desc-main-div">
      {posts == null ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="desc-info">
          <img src={posts?.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Description;
