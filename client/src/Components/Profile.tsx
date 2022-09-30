import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsImage } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
function Profile() {
  return (
    <div className="flex flex-wrap border rounded shadow-lg ml-16 mr-16 mt-4 mb-10">
      <div className="flex flex-col">
        <div className="flex flex-row p-9 ml-32">
          <div>
            <CgProfile className="h-52 w-52" />
          </div>
          <div className="ml-9 mt-4 flex flex-col">
            <p className="text-2xl">Firt name</p>
            <p>email</p>
            <div className="mt-20">
              <a href="">0 Following</a>
              <a href="" className="ml-9">
                0 followers
              </a>
            </div>
          </div>
          <div className="ml-96 mt-4">
            <button className="rounded bg-gray-300 p-4">Edit profile</button>
          </div>
        </div>
        {/* post section */}
        <div className="flex flex-row p-5 ml-96">
          <div className="flex flex-col ">
            <div className="border-b border-blue-800 text-lg mb-10">Posts</div>
          </div>
        </div>

        <div className="flex flex-row justify-between ml-9 mb-10 ">
          <div className="border rounded p-3 mr-10 shadow-lg">
            <div>
              <button>
                <MdDeleteOutline className="h-6 w-6 mt-5 ml-3" />
              </button>
            </div>
            <BsImage className="h-72 w-72 m-5" />
            <div className="ml-10 flex flex-row">
              0 <FcLikePlaceholder className="h-7 w-7 ml-2" />
            </div>
            <div className="ml-10 mt-4 mb-20">Post text</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
