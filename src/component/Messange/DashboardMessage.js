import React, { useState, useEffect } from "react";
import { FaPaperclip, FaPaperPlane , FaUserCircle  } from "react-icons/fa";
import axios from "axios";
import ReactHtmlRenderer from "react-html-renderer";
import qs from "qs";
const DashboardMessage = () => {
  const [record_id, setRecord_id] = useState("");
  const [send, setSend] = useState("");
  const form = qs.stringify({
    "url": `${process.env.REACT_APP_API_URL}`,
    "db": `${process.env.REACT_APP_API_DB}`,
    "username": `${process.env.React_App_API_USERNAME}`,
    "password": `${process.env.React_App_API_PASSWORD}`,
    "model": `${process.env.React_App_API_MODEL_TICKET}`,
    "record_id" : `${process.env.REACT_APP_REST_API_RECORD2}`,
    "send_message": send,
  });
  let apiKey = `${process.env.REACT_APP_REST_API_MESSAGE_CREATE}`;
  let Config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: apiKey,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: form,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .request(Config)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const getDataListMessage = async () => {
    const data = new URLSearchParams();
    data.append("model", `${process.env.React_App_API_MODEL_TICKET}`);
    data.append("url", `${process.env.REACT_APP_API_URL}`);
    data.append("db", `${process.env.REACT_APP_API_DB}`);
    data.append("username", `${process.env.React_App_API_USERNAME}`);
    data.append("password", `${process.env.React_App_API_PASSWORD}`);
    data.append("record_id", `${process.env.REACT_APP_REST_API_RECORD2}`);
    try {
      const response = await axios.post(
        process.env.REACT_APP_REST_API_MESSAGE, data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setRecord_id(response.data.data.z_message_list);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    getDataListMessage();
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <div className="relative flex-grow overflow-y-auto -ml-2  h-[90%] w-[270px] sm:ml-32 sm:w-[500px] lg:w-[650px] lg:ml-64 xl:w-[900px]">
          <div className="text-[8px] sm:text-sm md:text-xl  bg-blue-200 rounded">
            {record_id && record_id.map((item) => (
                <div key={item.id} className="p-4 bg-white -mb-2 ">
                  <div className="flex items-center mb-1">
                    <FaUserCircle size={26} className="mr-2" />
                    <p className="text-sm md:text-2xl">{item.author[1]}</p>
                  </div>
                  <p className="text-sm md:text-2xl">{item.date}</p>
                  <p className="text-sm md:text-2xl"><ReactHtmlRenderer html={item.message} /></p>
                </div>
              ))}
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 right-0">
          <div className="flex -ml-2 bg-white">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message..."
                className="-ml-3 w-[200px] p-2 border rounded-md ml-2 bg-neutral-600 text-white sm:w-auto sm:ml-32 lg:w-auto lg:ml-64"
                value={send}
                onChange={(e) => setSend(e.target.value)}
              />
              <button className="p-2">
                <label htmlFor="file-input">
                  <FaPaperclip size={24} />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </button>
              <button className="pl-2 -mr-2">
                <FaPaperPlane size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMessage;
