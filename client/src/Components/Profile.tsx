import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsImage } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";
function Profile({ user }: any) {
  const [postData, setData] = useState([]);
  const [otherPosts, setOtherPosts] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [url, setUrl] = useState(false);
  const [userID, setUserID] = useState("");
  const { firstname } = useParams();

  axios.defaults.withCredentials = true;
  console.log(otherPosts);

  const getOtherUsersPosts = () => {
    axios
      .post("http://localhost:3001/otherposts", { firstname: firstname })
      .then((data) => {
        setOtherPosts(data.data);
      });
  };
  const getUserid = () => {
    axios.get("http://localhost:3001/login").then((data) => {
      if (data.data.logged) {
        setUserID(data.data.user[0].firstname);
      }
    });
  };
  const getData = async () => {
    axios.get("http://localhost:3001/userposts").then((data) => {
      setUrl(true);
      setData(data.data);
    });
  };

  const getUsers = () => {
    axios
      .post("http://localhost:3001/allusers", { firstname: firstname })
      .then((data) => {
        setUsersList(data.data);
      });
  };
  useEffect(() => {
    getData();
    getUserid();
    getUsers();
    getOtherUsersPosts();
  }, []);

  const onDelete = (ID: string) => {
    axios.delete(`http://localhost:3001/deletepost/${ID}`).then((data) => {
      setData(
        postData.filter((val: any) => {
          return val.id != ID;
        })
      );
    });
  };
  return (
    <div className="flex flex-wrap border rounded shadow-lg ml-16 mr-16 mt-4 mb-10">
      <div className="flex flex-col">
        {userID === firstname ? (
          <div className="flex flex-row p-9 ml-2">
            {user
              .filter((u: any) => u.firstname == firstname)
              .map((val: any) => {
                return (
                  <>
                    <div>
                      <CgProfile className="h-52 w-52" />
                    </div>
                    <div className="ml-9 mt-4 flex flex-col">
                      <p className="text-2xl">{val.firstname}</p>
                      <p>{val.email}</p>
                      <div className="mt-20">
                        <a href="">0 Following</a>
                        <a href="" className="ml-9">
                          0 followers
                        </a>
                      </div>
                    </div>
                  </>
                );
              })}

            <div className="ml-auto mt-4">
              <button className="rounded bg-gray-300 p-4">Edit profile</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-row p-9 ml-32">
            {usersList
              .filter((u: any) => u.firstname == firstname)
              .map((val: any) => {
                return (
                  <>
                    <div>
                      <CgProfile className="h-52 w-52" />
                    </div>
                    <div className="ml-9 mt-4 flex flex-col">
                      <p className="text-2xl">{val.firstname}</p>
                      <p>{val.email}</p>
                      <div className="mt-20">
                        <a href="">0 Following</a>
                        <a href="" className="ml-9">
                          0 followers
                        </a>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        )}
        {/* post section */}
        <div className="flex flex-row p-5 ml-96">
          <div className="flex flex-col ">
            <div className="border-b border-blue-800 text-lg mb-10">Posts</div>
          </div>
        </div>
        {userID === firstname ? (
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
            {postData.map((val: any, key) => {
              return (
                <div
                  className="flex flex-row grow justify-between ml-9 mb-10 "
                  key={key}
                >
                  <div className=" border rounded p-3 mr-10 shadow-lg">
                    <div>
                      <button
                        onClick={() => {
                          onDelete(val.id);
                        }}
                      >
                        <MdDeleteOutline className="h-7 w-7" />
                      </button>
                    </div>
                    <div>
                      <div>
                        {url && (
                          <img
                            src={require(`../imgs/${val.image}`)}
                            className="w-72 h-72 mb-4 rounded-lg"
                          />
                        )}
                        <div className="ml-10 flex flex-row">
                          0 <FcLikePlaceholder className="h-7 w-7 ml-2" />
                        </div>
                      </div>
                    </div>

                    <div className="ml-10 mt-4 mb-9">{val.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((val: any, key) => {
              return (
                <div
                  className="flex flex-row grow justify-between ml-9 mb-10 "
                  key={key}
                >
                  <div className=" border rounded p-3 mr-10 shadow-lg">
                    <div>
                      <div>
                        {url && (
                          <img
                            src={require(`../imgs/${val.image}`)}
                            className="w-72 h-72 mb-4 rounded-lg"
                          />
                        )}
                        <div className="ml-10 flex flex-row">
                          0 <FcLikePlaceholder className="h-7 w-7 ml-2" />
                        </div>
                      </div>
                    </div>

                    <div className="ml-10 mt-4 mb-9">{val.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
