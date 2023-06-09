import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./List.css";
import { useLocation } from "react-router-dom";

const List = () => {
  const location=useLocation();
  console.log(location);
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label >Check-in Date</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
