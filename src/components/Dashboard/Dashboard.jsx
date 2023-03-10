import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import Dropdown from "../Dropdown/Dropdown";
import "./Dashboard.scss";

const Dashboard = () => {
    const { userData } = useContext(UserContext);
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
    const fetchData = useRef(() => {});
    fetchData.current = async () => {
        try {
            const result = await axios.get(
                process.env.REACT_APP_API_URL + "/api/usersdata",
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUsers(result.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData.current();
    }, []);

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
                        onChange={(e) => setSelectedOption(e.target.value)}
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
                    {users
                        .filter((user) => {
                            if (selectedOption === "ALL") return user;
                            return user.college === selectedOption;
                        })
                        .map(({ name, phone, isSafe, regNo, college }) => (
                            <div className='table-row'>
                                <div className='table-cell'>{regNo}</div>
                                <div className='table-cell'>{name}</div>
                                <div className='table-cell'>{phone}</div>
                                <div className='table-cell'>{college}</div>
                                <div
                                    className='table-cell'
                                    style={{
                                        marginLeft: "20px",
                                        color:
                                            isSafe === "DANGER"
                                                ? "#FF0000"
                                                : "#3ccf7f",
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
