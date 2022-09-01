import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "./Table/Tablestudent";
import SimilarCollege from './Table/Table';

const Collegedetails = () => {
  const [data, setData] = useState({});
  const [cdata, setCData] = useState([]);
  const [sdata, setsdata] = useState([]);
  const [col,setcol]=useState([]);
  const { CollegeId } = useParams();
  const fetchdata = async () => {
    try {
      const response = await fetch(`/col/Colleg/${CollegeId}`);
      const data = await response.json();
      if (data.status === "ok") {
        setData(data.result);
        setCData(data.Course);
        console.log(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchsdata = async () => {
    try {
      const response = await fetch(`/stud/student/${CollegeId}`);
      const data = await response.json();
      if (data.status === "ok") {
        setsdata(data.result);
        console.log(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchsimilardata = async () => {
    try {
      const response = await fetch(`/col/Collegelist/${CollegeId}`);
      const data = await response.json();
      if (data.status === "ok") {
        setcol(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
    fetchsdata();
    fetchsimilardata();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{data.Name}</td>
            </tr>
            <tr>
              <th>Year:</th>
              <td>{data.YearF}</td>
            </tr>
            <tr>
              <th>City:</th>
              <td>{data.City}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{data.State}</td>
            </tr>
            <tr>
              <td>No of Students:</td>
              <td>{data.Noofstudents}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="single category">
              <h3 className="side-title">Courses</h3>
              <ul className="list-unstyled">
                {cdata.map((course) => {
                  return <li key={course}>{course}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm">
        <h1>Students</h1>
        <Table data={sdata} rowsPerPage={4} />
      </div>
      <div className="container-sm">
        <h1>Similar Colleges</h1>
        <SimilarCollege data={col} rowsPerPage={4} />
    </div>
    </>
  );
};

export default Collegedetails;
