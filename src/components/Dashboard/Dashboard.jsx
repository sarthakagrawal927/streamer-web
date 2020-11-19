import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import Dropdown from "../Dropdown/Dropdown";
import "./Dashboard.scss";

// const users = [
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "KMC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "DOC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MCOPS",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "SOC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "ICAS",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "KMC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MCODS",
//   },
// ];

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  // console.log(userData.isSuperAdmin);
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/usersdata", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(result);
        setUsers(result.data);
        // console.log(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //   console.log(users);
  const uniSvg = "/assets/svg/university.svg";
  const [selectedOption, setSelectedOption] = useState("ALL");
  const collegeOptions = [
    { id: 0, name: "ALL" },
    { id: 1, name: "MIT" },
    { id: 2, name: "KMC" },
    { id: 3, name: "MCOPS" },
    { id: 4, name: "MCODS" },
    { id: 5, name: "DOC" },
    { id: 6, name: "MIC" },
    { id: 7, name: "ICAS" },
    { id: 8, name: "SOC" },
  ];
  const handleCollegeChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
    console.log("filtered");
    const filteredUsers = users.filter((user) => {
      console.log(user.college === selectedOption);
      return user.college === selectedOption;
    });
    console.log(filteredUsers);
    // setUsers(filteredUsers);
  };
  return (
    <div className='dashboard-container'>
      <div className='dashboard-heading'>
        <div className='dashboard-main-heading'>Dashboard</div>
        <div className='dashboard-sub-heading'>Monitor your campus</div>
      </div>
      {userData.isSuperAdmin ? (
        <div className='dashboard-dropdown'>
          <Dropdown
            options={collegeOptions}
            onChange={handleCollegeChange}
            selectedValue={selectedOption}
            imgSrc={uniSvg}
          />
        </div>
      ) : (
        <h1> {userData.college}</h1>
      )}

      <div className='table'>
        <div className='table-headers'>
          <div>REG NO.</div>
          <div>NAME</div>
          <div>CONTACT</div>
          <div>COLLEGE</div>
          <div style={{ marginRight: "20px" }}>VITALS</div>
        </div>

        <div className='table-data'>
          {users.map(({ name, phone, isSafe, regNo, college }) => (
            <div className='table-row'>
              <div className='table-cell'>{regNo}</div>
              <div className='table-cell'>{name}</div>
              <div className='table-cell'>{phone}</div>
              <div className='table-cell'>{college}</div>
              <div
                className='table-cell'
                style={{
                  marginLeft: "20px",
                  color: isSafe === "DANGER" ? "#FF0000" : "#3ccf7f",
                  fontWeight: "bold",
                }}>
                {isSafe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
