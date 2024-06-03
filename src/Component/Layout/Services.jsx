import React, { useState } from "react";
import "./Services.css";
import { serviceData } from "../../utils/data";

function Services() {
  return (
    <div className="serviceMain">
      <h1 className="wedo">what we do?</h1>
      <div className="serviceList">
        {serviceData.map((list) => (
          <div key={list.id} className="serviceCard">
            <div className="S-info">
              <img src={list.src} className="S-cardimg" />
              <h1 className="S-num">{list.id}</h1>
            </div>
            <div className="S-details">
              <h1 className="s_text">{list.text}</h1>
              <p>{list.smalltext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
