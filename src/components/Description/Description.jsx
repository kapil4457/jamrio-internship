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
          <div className="info-main">
            <div className="source info">
              <b>Source </b>
              <a href={posts.link} target="__blank" className="source">
                Link
              </a>
            </div>
            <div className="likes info">
              <b>Likes </b>
              {posts.likes}
            </div>
            <div className="tags info">
              <b>Tags </b>
              <div>
                {posts.tags.map((tag, key) => (
                  <span key={key}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="publish-date info">
              <b>Published On </b>
              {posts.publishDate.substr(0, 10)}
            </div>
            <div className="description info">
              <b>Description </b>
              {posts.text}
            </div>
            <div className="owner info">
              <b>Owner </b>
              {posts.owner.title +
                ". " +
                posts.owner.firstName +
                " " +
                posts.owner.lastName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
