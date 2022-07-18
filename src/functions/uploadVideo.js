import { db, collection, addDoc } from "../firebase";

const uploadVideo = async ({
  uid,
  title,
  videoSrc,
  thumbSrc,
  description,
  tags,
}) => {
  try {
    const docRef = await addDoc(collection(db, "videos"), {
      uploader: uid,
      title,
      videoSrc,
      thumbSrc,
      description,
      tags,
    });
    console.log(docRef);
  } catch (e) {
    console.log(e);
  }
};

export default uploadVideo;
