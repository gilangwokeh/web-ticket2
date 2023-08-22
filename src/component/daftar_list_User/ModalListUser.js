import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
const ModalListUser = ({ data, closeModal }) => {
  const [detailUser, setDetailUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDataListUser = useCallback(async () => {
    const dataDetail = new URLSearchParams();
    dataDetail.append("model", `${process.env.REACT_APP_REST_API_MODEL_USERS}`);
    dataDetail.append("url", `${process.env.REACT_APP_API_URL}`);
    dataDetail.append("db", `${process.env.REACT_APP_API_DB}`);
    dataDetail.append("username", `${process.env.React_App_API_USERNAME}`);
    dataDetail.append("password", `${process.env.React_App_API_PASSWORD}`);
    dataDetail.append("fields[]", "name");
    dataDetail.append("fields[]", "login");
    dataDetail.append("fields[]", "write_date");
    dataDetail.append("fields[]", "write_uid");
    dataDetail.append("fields[]", "partner_latitude");
    dataDetail.append("fields[]", "partner_longitude");
    dataDetail.append("fields[]", "id");
    dataDetail.append("domain[id]", data.id);

    try {
      const response = await axios.post(
        process.env.REACT_APP_REST_API_DAFTAR_LIST_USER,
        dataDetail,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setDetailUser(response.data.data[0]);
      setLoading(false);
    } catch (error) {
      return [];
    }
  }, [data.id]);

  useEffect(() => {
    getDataListUser();
  }, [getDataListUser]);
  return (
    <div className="fixed inset-0 flex p-4 items-center justify-center bg-black bg-opacity-50 z-30">
      {loading ? (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex justy-center m-4">
            <button className="p-2 px-5 flex item-center justify-center bg-teal-500 rounded-md">
              <span className="mr-2 py-1 text-white">Loading</span>
              <div className="flex justify-center items-center bg-gradient-to-t from-white to-teal-500 w-7 h-7 rounded-full animate-spin">
                <div className="bg-teal-500 w-6 h-6 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 w-full rounded-lg shadow-lg overflow-auto h-full w-[80%] h-[80%] md:h-[80%] sm:w-[60%] md:w-[50%]">
          <h2 className="text-xl font-bold mb-4">DETAILS</h2>
          <form>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="id"
              >
                ID :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                type="text"
                name="id"
                value={detailUser.id}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="name"
              >
                NAME :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mt-2"
                type="text"
                name="name"
                value={detailUser.name}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="write by"
              >
                WRITE BY :
              </label>
              <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                <p>
                  {detailUser.write_uid
                    ? detailUser.write_uid[1]
                    : detailUser.write_uid}
                </p>
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="write date"
              >
                WRITE DATE :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 "
                type="text"
                name="write date"
                value={detailUser.write_date}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="write by"
              >
                EMAIL :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 "
                type="text"
                name="write"
                value={detailUser.login}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="write by"
              >
                PARTNER LATITUDE :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 "
                type="text"
                name="write"
                value={detailUser.partner_latitude}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="write by"
              >
                PARTNER LONGITUDE :
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 "
                type="text"
                name="write"
                value={detailUser.partner_longitude}
              />
            </div>
          </form>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-[12px] md:text-xl"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalListUser;
