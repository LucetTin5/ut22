import { db, collection, getDocs } from "../firebase";

const getVideos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (e) {
    console.log(e);
  }
};

export default getVideos;
