// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { loggeIN } from "../reused/loggedin";
function CreatePost() {
  axios.defaults.withCredentials = true;
  const [files, setFiles] = useState();
  const [filename, setFilename] = useState("");
  const [showFiles, setShowFiles] = useState();
  const [content, setContent] = useState("");
  const [postedBy, setPostedBy] = useState("");

  axios.get("http://localhost:3001/login").then((data) => {
    if (data.data.logged) {
      setPostedBy(data.data.user[0].firstname);
    }
  });

  const savePost = (e: any) => {
    if (e.target.files[0] != 0) {
      setShowFiles(URL.createObjectURL(e.target.files[0]));
    }
    setFiles(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append("file", files);
    formData.append("filename", filename);
    formData.append("content", content);
    formData.append("postedBy", postedBy);
    axios.post("http://localhost:3001/createpost", formData).then((data) => {
      console.log(data.data);
    });
  };
  return (
    <div className="flex flex-wrap justify-center p-2 pb-8 border rounded ml-20 mr-20 mt-4 shadow-xl">
      <div className="flex flex-col ">
        <div className=" p-5">
          <h3 className="w-80 ml-52 text-2xl">Write a poste</h3>
        </div>
        <div>
          <button>
            <input type="file" onChange={savePost} />
            <BiImageAdd className="h-6 w-6 " />
            <h6 className="text-sm">upload an image</h6>
          </button>
          <img src={showFiles} className="h-72 w-72" name="imagefile" />
        </div>
        <div>
          <textarea
            placeholder="Say Something ...."
            className="border rounded h-52 w-full resize-none p-9 mb-10 mt-6 shadow-md"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <button className="bg-blue-500 rounded p-3 w-2/6" onClick={onUpload}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
