import React from "react";
import "./About.css";
import { BiSupport } from "react-icons/bi";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

function About() {
  return (
    <div className="abouMain">
      <div className="top">
        <h1 className="head1">
          WELCOME TO <span className="head2">MOTOCROSS INDIA</span>
        </h1>
        <p>
          Motocross India is a two-wheeler service-tech startup, headquartered
          in Belagavi, Karnataka, Bharat. It is Incorporated on 12th Oct 2018
          and is recognized by DPIIT, Govt of Bharat. It operates on an
          asset-light model that aims to become the largest local garage chain
          and largest app-based two-wheeler resellers in Bharat. They train up
          local mechanics with newer technology updates in the vehicles and also
          provide them genuine/OES spare parts through their AI based supply
          chain network under 'Motocross Garage' brand. Currently, the company
          is running a pilot run by partnering with 275 garages in Belagavi
          District, KA. And by 2023, we aim to partner with 5,000 garages across
          the country.
        </p>
      </div>
      <div className="aboutCard">
        <div className="card">
          <div className="cardicon">
            <BiSupport className="iconservice" />
          </div>
          <h1>
            24/7 service <br /> support
          </h1>
        </div>
        <div className="cardmiddle">
          <div className="cardicon">
            <RiMotorbikeFill className="iconservicebike" />
          </div>
          <h1>
            Free pickup <br />
            drop
          </h1>
        </div>
        <div className="card">
          <div className="cardicon">
            <FaLocationDot className="iconservice" />
          </div>
          <h1>
            lots of pickup <br />
            locations
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
