import React, { useState, useEffect } from "react";
import { FaPaperclip, FaPaperPlane, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { Tabs } from "antd";
import AlertListData from "./AlertListData";
import qs from "qs";
import ReactHtmlRenderer from "react-html-renderer";
const ModalListData = ({ data, closeModal }) => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [record_id, setRecord_id] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [send, setSend] = useState("");
  const handleShowAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 6000);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };
  const { TabPane } = Tabs;
  useEffect(() => {
    const getDataListTicketModal = async () => {
      const dataDetail = new URLSearchParams();
      dataDetail.append("model", `${process.env.React_App_API_MODEL_TICKET}`);
      dataDetail.append("url", `${process.env.REACT_APP_API_URL}`);
      dataDetail.append("db", `${process.env.REACT_APP_API_DB}`);
      dataDetail.append("username", `${process.env.React_App_API_USERNAME}`);
      dataDetail.append("password", `${process.env.React_App_API_PASSWORD}`);
      dataDetail.append("fields[]", "id");
      dataDetail.append("fields[]", "name");
      dataDetail.append("fields[]", "number");
      dataDetail.append("fields[]", "stage_id");
      dataDetail.append("fields[]", "create_uid");
      dataDetail.append("fields[]", "company_id");
      dataDetail.append("fields[]", "category_id");
      dataDetail.append("fields[]", "partner_id");
      dataDetail.append("fields[]", "team_id");
      dataDetail.append("fields[]", "project_id");
      dataDetail.append("fields[]", "user_id");
      dataDetail.append("fields[]", "partner_email");
      dataDetail.append("fields[]", "resolution");
      dataDetail.append("fields[]", "last_stage_update");
      dataDetail.append("fields[]", "closed_date");
      dataDetail.append("fields[]", "field_team_id");
      dataDetail.append("fields[]", "escalate_description");
      dataDetail.append("fields[]", "rfo_id");
      dataDetail.append("fields[]", "disturb_type");
      dataDetail.append("fields[]", "disturb_type_details");
      dataDetail.append("fields[]", "action");
      dataDetail.append("fields[]", "reason");
      dataDetail.append("fields[]", "end_date");
      dataDetail.append("fields[]", "create_date");
      dataDetail.append("fields[]", "description");
      dataDetail.append("domain[number]", data.number);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_REST_API_DAFTAR_LIST_TICKET_GLOBAL}`,
          dataDetail,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setDetail(response.data.data[0]);
        setLoading(false);
      } catch (error) {}
    };

    getDataListTicketModal();
  }, [data.number]);

  const form = qs.stringify({
    url: `${process.env.REACT_APP_API_URL}`,
    db: `${process.env.REACT_APP_API_DB}`,
    username: `${process.env.React_App_API_USERNAME}`,
    password: `${process.env.React_App_API_PASSWORD}`,
    model: `${process.env.React_App_API_MODEL_TICKET}`,
    record_id: detail.id,
    send_message: send,
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
        if (response) {
          handleShowAlert("success", "send kirim Berhasil!");
        }
        setSend("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(detail.id);

  const getDataListMessage = async () => {
    const dataListMessage = new URLSearchParams();
    dataListMessage.append(
      "model",
      `${process.env.React_App_API_MODEL_TICKET}`
    );
    dataListMessage.append("url", `${process.env.REACT_APP_API_URL}`);
    dataListMessage.append("db", `${process.env.REACT_APP_API_DB}`);
    dataListMessage.append("username", `${process.env.React_App_API_USERNAME}`);
    dataListMessage.append("password", `${process.env.React_App_API_PASSWORD}`);
    dataListMessage.append("record_id", detail.id);
    dataListMessage.append("fields[]", "id");
    dataListMessage.append("domain[id]", data.id);
    console.log();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_REST_API_MESSAGE}`,
        dataListMessage,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setRecord_id(response.data.data.z_message_list);
      setLoading2(false);
      console.log(response);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    getDataListMessage();
  }, []);
  return (
    <div className="fixed inset-0 p-2 flex items-center overflow-auto justify-center bg-opacity-50 z-30">
      {loading ? (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex justy-center m-4">
            <button className="p-2 px-5 flex item-center justify-center bg-teal-500 rounded-md">
              <span className="mr-2 py-1 text-white">LOADING</span>
              <div className="flex justify-center items-center bg-gradient-to-t from-white to-teal-500 w-7 h-7 rounded-full animate-spin">
                <div className="bg-teal-500 w-6 h-6 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-lg overflow-auto h-full w-full">
          <form>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number"
            >
              TIKET {detail.number}
            </label>
            <input
              className="border bg-blue-300 rounded w-full px-2 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mt-2 lg:w-[800px]"
              type="text"
              name="name"
              value={detail.name}
            />
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <form>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-28"
                    htmlFor="Team"
                  >
                    TEAM
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-sm focus:shadow-outline "
                    type="text"
                    name="team"
                    value={detail.team_id ? detail.team_id[1] : detail.team_id}
                  />
                </div>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-[82px]"
                    htmlFor="company"
                  >
                    COMPANY
                  </label>
                  <input
                    className="border bg-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm mb-2 "
                    type="text"
                    name="company"
                    value={
                      detail.company_id
                        ? detail.company_id[1]
                        : detail.company_id
                    }
                  />
                </div>
              </form>
            </div>
            <div>
              <form>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-12"
                    htmlFor="Contact"
                  >
                    CONTACT
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.partner_id === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.partner_id
                          ? detail.partner_id[1]
                          : detail.partner_id}
                      </p>
                    )}
                  </div>
                </div>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-[70px]"
                    htmlFor="Email"
                  >
                    EMAIL
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.partner_email === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>{detail.partner_email}</p>
                    )}
                  </div>
                </div>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-[52px]"
                    htmlFor="project"
                  >
                    PROJECT
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.project_id === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.project_id
                          ? detail.project_id[1]
                          : detail.project_id}
                      </p>
                    )}
                  </div>
                </div>
                <div className="block my-3 sm:flex">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 mr-10"
                    htmlFor="Category"
                  >
                    CATEGORY
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.category_id === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.category_id
                          ? detail.category_id[1]
                          : detail.category_id}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Tabs defaultActiveKey="1" className="mt-8">
            <TabPane tab="Description" key="1">
              <div>
                <form>
                  <label
                    className="block text-gray-700 text-sm font-bold my-2"
                    htmlFor="description"
                  >
                    DESCRIPTION:
                  </label>
                  <div className="border rounded p-2 text-[12px] md:text-sm text-justify">
                    <ReactHtmlRenderer html={detail.description} />
                  </div>
                  <label
                    className="block text-gray-700 text-sm font-bold my-2"
                    htmlFor="RESOLUTION"
                  >
                    RESOLUTION :
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.resolution === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <ReactHtmlRenderer html={detail.resolution} />
                    )}
                  </div>
                </form>
              </div>
            </TabPane>
            <TabPane tab="OTHER INFORMATION" key="2">
              <div className="block sm:flex">
                <p className="mr-2">LAST STAGE UPDATE :</p>
                <p>{detail.last_stage_update}</p>
              </div>
              <div className="block sm:flex">
                <p className="mr-12">ClOSED DATE :</p>
                <p>{detail.closed_date}</p>
              </div>
            </TabPane>
            <TabPane tab="ESCALATE TICKET" key="3">
              <h2 className="mt-3">ESCALATE TICKET</h2>
              <hr />
              <div className="flex my-2">
                <p className="mr-2">FIELD TEAM :</p>
                <p>{detail.field_team_id}</p>
              </div>
              <p>ESCALATE DESCRIPTION</p>
              <div className="flex mb-8">
                <p className="mr-2">{detail.number}</p>
                <p>{detail.name}</p>
              </div>
              {detail.escalate_description === false ? (
                <p>TIDAK ADA KETERANGAN ESCALATE DESCRIPTION</p>
              ) : (
                <ReactHtmlRenderer html={detail.escalate_description} />
              )}
            </TabPane>
            <TabPane tab="RFO" key="4">
              <h2 className="mt-3">RFO DETAILS</h2>
              <hr />
              <form>
                <div className="block my-2 sm:flex">
                  <p className="mr-36">RFO </p>

                  <p className="text-blue-400">{detail.rfo_id}</p>
                </div>
                <div className="block my-2 sm:flex">
                  <label htmlFor="Root Cause" className="my-2 mr-[62px] w-32">
                    ROOT CAUSE
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.disturb_type === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.disturb_type
                          ? detail.disturb_type[1]
                          : detail.disturb_type}
                      </p>
                    )}
                  </div>
                </div>
                <div className="block my-2 sm:flex">
                  <label
                    htmlFor="Root Causes Details"
                    className="my-2 w-[200px]"
                  >
                    ROOT CAUSE DETAILS
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.disturb_type_details === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.disturb_type_details
                          ? detail.disturb_type_details[1]
                          : detail.disturb_type_details}
                      </p>
                    )}
                  </div>
                </div>
                <div className="block my-2 sm:flex">
                  <label htmlFor="action" className="my-2 mr-[120px]">
                    ACTION
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.action === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>{detail.action ? detail.action[1] : detail.action}</p>
                    )}
                  </div>
                </div>
                <div className="block my-2 sm:flex">
                  <label htmlFor="Reason" className="my-2 mr-[112px]">
                    REASON
                  </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.reason === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>{detail.reason ? detail.reason[1] : detail.reason}</p>
                    )}
                  </div>
                </div>
                <div className="block my-3 sm:flex">
                  <label
                    htmlFor="create on"
                    className="mr-[92px]"
                  >
                    CREATE ON 
                  </label>
                  <label htmlFor="create on">
                    {detail.create_date}
                  </label>
                </div>
                <div className="block my-2 sm:flex">
                  <label className="my-2 mr-[85px] w-[100px]">END DATE </label>
                  <div className="border w-full rounded p-2 text-[12px] md:text-sm">
                    {detail.end_date === false ? (
                      <p>TIDAK ADA</p>
                    ) : (
                      <p>
                        {detail.end_date ? detail.end_date[1] : detail.end_date}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </TabPane>
          </Tabs>
          <div className="relative h-screen">
            <div className="relative flex-grow overflow-y-auto ">
              <div className="text-[8px] sm:text-sm md:text-xl  rounded h-screen">
                {loading2 ? (
                  <div className="flex justy-center mt-32">
                    <button className="p-2 px-5 flex item-center justify-center bg-teal-500 rounded-md">
                      <span className="mr-2 py-1 text-white">Loading</span>
                      <div className="flex justify-center items-center bg-gradient-to-t from-white to-teal-500 w-7 h-7 rounded-full animate-spin">
                        <div className="bg-teal-500 w-6 h-6 rounded-full"></div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div>
                    {record_id &&
                      record_id.map((item) => (
                        <div key={item.id} className="p-4 bg-white -mb-2 -ml-5">
                          <div className="bg-teal-200 w-auto text-justify p-2 rounded">
                            <div className="flex items-center mb-1">
                              <FaUserCircle size={26} className="mr-2" />
                              <p className="text-sm ">
                                {item.author[1]}
                              </p>
                            </div>
                            <p className="text-sm ">{item.date}</p>
                            <p className="text-[11px] md:text-xl"><ReactHtmlRenderer html={item.message} /> </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex -ml-2 bg-white">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="-ml-3 p-2 border rounded-md ml-2 bg-neutral-600 text-white "
                    value={send}
                    onChange={(e) => setSend(e.target.value)}
                  />
                  <button className="pl-2 -mr-2">
                    <FaPaperPlane size={24} />
                  </button>
                </form>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-[12px] md:text-xl"
              onClick={closeModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
      {showAlert && (
        <AlertListData
          type={alertType}
          message={alertMessage}
          onClose={handleHideAlert}
        />
      )}
    </div>
  );
};

export default ModalListData;
