// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import imgg from "../imgs";
function Page() {
  const [postData, setData] = useState([]);
  const [url, setUrl] = useState(false);
  axios.defaults.withCredentials = true;
  const getData = async () => {
    axios.get("http://localhost:3001/posts").then((data) => {
      setUrl(true);
      setData(data.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {postData.map((val) => {
        return (
          <div>
            <div>{val.postedBy}</div>
            <div>{val.content}</div>
            <div>
              {url && (
                <img
                  src={require(`../imgs/${val.image}`)}
                  className="h-72 w-72"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
