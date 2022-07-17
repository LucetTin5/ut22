import { useEffect, useState } from "react";
import Headers from "../components/Headers";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <Headers />
    </>
  );
};

export default Home;
