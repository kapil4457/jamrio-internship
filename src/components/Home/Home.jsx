import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
const Home = () => {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const config = {
      headers: {
        "app-id": "63a6db18ce8dda3753ade844",
      },
    };

    const { data } = await axios.get(
      "https://dummyapi.io/data/v1/post?limit=20",
      config
    );
    return data.data;
  };
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="main-home-div">
      <h1>Posts</h1>
      <div className="postCards">
        {posts == null ? (
          <>
            <Loader />
          </>
        ) : (
          <div className="card-container">
            {posts.map((post, key) => (
              <Card data={post} key={key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
