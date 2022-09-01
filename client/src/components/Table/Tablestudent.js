import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">StudentId</th>
            <th scope="col">Name</th>
            <th scope="col">Year of Passwout</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
        
            <tr key={el.StudentId}>
              <td ><button onClick={(e)=>{
                e.preventDefault();
                navigate(`/Student/${el.StudentId}`);  
              }}>{el.StudentId}</button></td>
              <td >{el.Name}</td>
              <td >{el.YearB}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;