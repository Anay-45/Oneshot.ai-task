import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Studentdetails = () => {
  const [data, setData] = useState({});
  const [sdata, setsData] = useState([]);
  const { StudentId } = useParams();
  const fetchdata = async () => {
    try {
      const response = await fetch(`/stud/students/${StudentId}`);
      const data = await response.json();
      if (data.status === "ok") {
        setData(data.result);
        setsData(data.Skill);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div classNameName="container">
      <table className="table">
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{data.Name}</td>
          </tr>
          <tr>
            <th>Year:</th>
            <td>{data.YearB}</td>
          </tr>
          <tr>
            <th>CollegeId:</th>
            <td>{data.CollegeId}</td>
          </tr>
        </tbody>
      </table>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="single category">
              <h3 className="side-title">Skills</h3>
              <ul className="list-unstyled">
                {sdata.map((course) => {
                  return <li key={course}>{course}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentdetails;
