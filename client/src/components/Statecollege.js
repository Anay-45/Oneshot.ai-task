import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Table from "./Table/Table";
const Statecollege = () => {
  const [data, setData] = useState([]);
  const { State } = useParams();
  const fetchdata = async () => {
    try {
      const response = await fetch(`/col/College/${State}`);
      const data = await response.json();
      if (data.status === "ok") {
        setData(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
  },[]);
  return (
    <div className="container-sm">
        <Table data={data} rowsPerPage={4} />
    </div>
  );
};

export default Statecollege;
