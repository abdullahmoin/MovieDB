import React, { useState } from "react";
import Table from "./common/table";

function StudentList(props) {
  const [students, setStudents] = useState([
    {
      name: "habib",
      roll: 15,

      imgPath:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    },
    {
      name: "iqbal",
      roll: 0,
      father_name: "555",
      imgPath:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    },
  ]);

  const columns = [
    {
      label: "Name",
      path: "name",
      content: (item, path) => <td> {item[path]} </td>,
    },
    {
      label: "Roll",
      path: "roll",
      content: (item, path) => <td> {item[path]} </td>,
    },
    {
      label: "Photo",
      path: "imgPath",
      content: (item, path) => (
        <td>
          {" "}
          <img src={item[path]} alt="" />
        </td>
      ),
    },
    {
      label: "Father's Name",
      path: "father_name",
      content: (item, path) => <td> {item[path]} </td>,
    },
  ];

  return <Table items={students} columns={columns} />;
}

export default StudentList;
