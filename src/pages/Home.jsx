import { useEffect, useState } from "react";
import getVideos from "../functions/getVideos";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  return <></>;
};

export default Home;
