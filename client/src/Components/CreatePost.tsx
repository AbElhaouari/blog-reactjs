import React from "react";
import { BiImageAdd } from "react-icons/bi";
function CreatePost() {
  return (
    <div className="flex flex-wrap justify-center p-2 pb-8 border rounded ml-20 mr-20 mt-4 shadow-xl">
      <div className="flex flex-col ">
        <div className=" p-5">
          <h3 className="w-80 ml-52 text-2xl">Write a poste</h3>
        </div>
        <div>
          <button>
            <BiImageAdd className="h-6 w-6 " />
            <h6 className="text-sm">upload an image</h6>
          </button>
        </div>
        <div>
          <textarea
            placeholder="Say Something ...."
            className="border rounded h-52 w-full resize-none p-9 mb-10 mt-6 shadow-md"
          />
          <button className="bg-blue-500 rounded p-3 w-2/6">Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
