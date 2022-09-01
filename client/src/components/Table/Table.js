import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";
import { useNavigate } from "react-router-dom";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const navigate = useNavigate();
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">CollegeId</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            
            <tr key={el.CollegeId}>
              <td ><button onClick={(e)=>{
                e.preventDefault();
                navigate(`/College/${el.CollegeId}`);
                setPage((prev)=>prev);  
              }}>{el.CollegeId}</button></td>
              <td >{el.Name}</td>
              <td >{el.YearF}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
