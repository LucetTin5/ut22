import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../App";
import { storage, ref, uploadBytes, getDownloadURL } from "../firebase";
import uploadVideo from "../functions/uploadVideo";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbFile, setThumbFile] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const [videoSrc, setVideoSrc] = useState("");
  const [thumbSrc, setThumbSrc] = useState("");

  const isLogin = useContext(LoginContext);
  const uid = localStorage.getItem("uid") ?? null;

  useEffect(() => {
    if (!isLogin) {
      location.href = "/";
    }
  }, [isLogin]);

  const handleChange =
    (prop) =>
    ({ target }) => {
      switch (prop) {
        case "title":
          setTitle(target.value);
          break;
        case "videoFile":
          setVideoFile(target.files[0]);
          break;
        case "thumbFile":
          setThumbFile(target.files[0]);
          break;
        case "description":
          setDescription(target.value);
          break;
        case "tags":
          setTags(target.value);
          break;
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: videoName } = videoFile;
    const { name: thumbName } = thumbFile;

    const newVideoRef = ref(storage, `videos/${videoName}`);
    const newThumbRef = ref(storage, `images/${thumbName}`);

    uploadBytes(newVideoRef, videoFile).then((snapshot) => {
      console.log("Uploaded Video!");

      getDownloadURL(newVideoRef).then((url) => setVideoSrc(url));
    });
    uploadBytes(newThumbRef, thumbFile).then((snapshot) => {
      console.log("Uploaded Thumb!");

      getDownloadURL(newThumbRef).then((url) => setThumbSrc(url));
    });
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="video">Video</label>
        <input
          type="file"
          name="video"
          id="video"
          file={videoFile}
          onChange={handleChange("videoFile")}
          accept="video/*"
          required
        />
        <label htmlFor="thumb">Thumbnail Image</label>
        <input
          type="file"
          name="thumb"
          id="thumb"
          file={thumbFile}
          onChange={handleChange("thumbFile")}
          accept="image/*"
          required
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange("title")}
          maxLength={50}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleChange("description")}
          maxLength={30}
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={tags}
          onChange={handleChange("tags")}
          placeholder="Tags, separated by comma"
          required
        />
        <input type="submit" value="Upload Video" />
      </form>
    </>
  );
};

export default Upload;
