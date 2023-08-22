import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ModalListData from "./ModalListData";
function ListData() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterTicket, setFilterTicket] = useState(dataList);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "TICKET",
      selector: (row) => row.number,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      style: {
        maxWidth: "200px",
      },
    },
    {
      name: "CREATE BY",
      selector: (row) => row.create_uid[1],
    },
    {
      name: "STAGE",
      selector: (row) => row.stage_id[1],
    },
    {
      name: "CREATE ON",
      selector: (row) => row.create_date,
    },
    {
      button: true,
      cell: (row) => (
        <button
          className="hover:text-red-600"
          onClick={() => handleRowClick(row)}
        >
          DETAILS
        </button>
      ),
    },
  ];
  const handleRowClick = (row) => {
    setSelectedData(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getDataListTicket = async () => {
    const data = new URLSearchParams();
    data.append("model", `${process.env.React_App_API_MODEL_TICKET}`);
    data.append("url", `${process.env.REACT_APP_API_URL}`);
    data.append("db", `${process.env.REACT_APP_API_DB}`);
    data.append("username", `${process.env.React_App_API_USERNAME}`);
    data.append("password", `${process.env.React_App_API_PASSWORD}`);
    data.append("fields[]", "name");
    data.append("fields[]", "id");
    data.append("fields[]", "number");
    data.append("fields[]", "stage_id");
    data.append("fields[]", "create_date");
    data.append("fields[]", "create_uid");

    try {
      const response = await axios.post(
        process.env.React_App_DAFTAR_LIST_TICKET,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setDataList(response.data.data.reverse().slice(-500));
      setLoading(false);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    getDataListTicket();
  }, []);

  useEffect(() => {
    const result = dataList.filter((item) => {
      return item.number.toLowerCase().match(search.toLowerCase());
    });
    setFilterTicket(result);
  }, [dataList, search]);
  if (loading) {
    return (
      <div className="flex justy-center m-4">
        <button className="p-2 px-5 flex item-center justify-center bg-teal-500 rounded-md">
          <span className="mr-2 py-1 text-white">Loading</span>
          <div className="flex justify-center items-center bg-gradient-to-t from-white to-teal-500 w-7 h-7 rounded-full animate-spin">
            <div className="bg-teal-500 w-6 h-6 rounded-full"></div>
          </div>
        </button>
      </div>
    );
  }

  function NoDataComponent() {
    return (
      <div className="text-[12px] sm:text-xl md:text-2xl lg:4xl xl:8xl">
        Pencarian Tidak ada Sesuai Nama Ticket.
      </div>
    );
  }
  return (
    <>
      <div className="w-[200px] sm:w-full md:w-[650px] lg:w-[900px] xl:w-[1180px] 2xl:w-[1400px]">
        <div className="mb-4">
          <h3 className="text-sm md:text-xl mt-2 mb-2">DAFTAR LIST TICKET</h3>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="w-26 text-[12px] px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 sm:text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
          <DataTable
            columns={columns}
            data={filterTicket}
            pagination={true}
            paginationPerPage={10}
            responsive
            pointerOnHover={true}
            noDataComponent={<NoDataComponent />}
            highlightOnHover
            striped={true}
            fixedHeader={true}
          />
          {isModalOpen && selectedData && (
            <ModalListData data={selectedData} closeModal={closeModal} />
          )}
      </div>
    </>
  );
}

export default ListData;
