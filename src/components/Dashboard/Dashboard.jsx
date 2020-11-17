import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Dashboard.scss";

const users = [
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "OK",
    },
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "DANGER",
    },
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "OK",
    },
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "OK",
    },
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "DANGER",
    },
    {
        name: "John Doe",
        regNo: 180905470,
        contact: "9792972971",
        vitals: "OK",
    },
];

const Dashboard = () => {
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
    };
    return (
        <div className='dashboard-container'>
            <div className='dashboard-heading'>
                <div className='dashboard-main-heading'>Dashboard</div>
                <div className='dashboard-sub-heading'>Monitor your campus</div>
            </div>
            <div className='dashboard-dropdown'>
                <Dropdown
                    options={collegeOptions}
                    onChange={handleCollegeChange}
                    selectedValue={selectedOption}
                    imgSrc={uniSvg}
                />
            </div>
            <div className='custom-table'>
                <div className='custom-table-headers'>
                    <div>REG NO.</div>
                    <div>NAME</div>
                    <div>CONTACT</div>
                    <div>VITALS</div>
                </div>

                <div className='custom-table-data'>
                    {users.map(({ name, regNo, contact, vitals }) => (
                        <div className='custom-table-row'>
                            <div className='custom-table-cell'>{name}</div>
                            <div className='custom-table-cell'>{regNo}</div>
                            <div className='custom-table-cell'>{contact}</div>
                            <div className='custom-table-cell'>{vitals}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
