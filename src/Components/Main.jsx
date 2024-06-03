import React, { useState } from "react";
import "./Main.css";
import { FaHeadset, FaMapMarkerAlt, FaMotorcycle } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from "./images/digital.png";
import image2 from "./images/AI.png";
import image3 from "./images/standardize.png";
import image4 from "./images/trained.png";
import image5 from "./images/find.png";
import image6 from "./images/affordable.png";
import image7 from "./images/promise.png";
import image8 from "./images/trained - 11.png";
import image9 from "./images/support.png";
import locationImage1 from "./images/locationImage1.jpeg";
import locationImage2 from "./images/locationImage2.jpeg";
import locationImage3 from "./images/locationImage3.jpeg";
import locationImage4 from "./images/locationImage4.jpeg";
import locationImage5 from "./images/locationImage5.jpeg";

const Main = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ];

  const gridItems = [
    {
      id: 1,
      src: imageUrls[0],
      text: "COMPLETELY DIGITAL",
      additionalText: "01",
      smalltext:
        "Right from mechanics to spares to providing services we are digital."
    },
    {
      id: 2,
      src: imageUrls[1],
      text: "AI POWERED",
      additionalText: "02",
      smalltext:
        "Our AI powered application helps mechanics and customers to find perfect fit spares just with vehicle registration number."
    },
    {
      id: 3,
      src: imageUrls[2],
      text: "STANDARDIZED",
      additionalText: "03",
      smalltext:
        "All our garages are compliance with standard operating procedures, Kaizens and 5S"
    },
    {
      id: 4,
      src: imageUrls[3],
      text: "WELL TRAINED",
      additionalText: "04",
      smalltext:
        "All our mechanics and management are trained with the latest trends and technologies in the market."
    },
    {
      id: 5,
      src: imageUrls[4],
      text: "FIND US ANYWHERE",
      additionalText: "05",
      smalltext:
        "Small or big garage, We aim to partner with as many garages as we can to give smoother and larger network experience to our customers."
    },
    {
      id: 6,
      src: imageUrls[5],
      text: "CHEAPER FOR SURE",
      additionalText: "06",
      smalltext:
        "Having a larger network of garages will workout to provide the cheaper price to the end customers."
    },
    {
      id: 7,
      src: imageUrls[6],
      text: "OUR PROMISE",
      additionalText: "07",
      smalltext:
        "We will stand as a mediator between local garages and the customers to make sure we deliver the best possible service."
    },
    { id: 8, src: imageUrls[7], text: "" },
    {
      id: 9,
      src: imageUrls[8],
      text: "24*7 SUPPORT",
      additionalText: "09",
      smalltext: "We are available 24x7 for any assistance on 8888222992."
    }
  ];
  //garages
  const locationItems = [
    {
      id: 1,
      src: locationImage1,
      text: "Shree Sai Auto Service Center",
      description: "MOTO001",
      location:
        "https://www.google.com/maps/dir//1,+Fulbag+Galli,+Raviwar+Peth,+Belagavi,+Karnataka+590001/@15.8526275,74.4366207,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbf67e8a48e437f:0xf76c635f04d4e7f9!2m2!1d74.5190225!2d15.8526431?entry=ttu"
    },
    {
      id: 2,
      src: locationImage2,
      text: "Sudhir Auto",
      description: "MOTO002",
      location:
        "https://www.google.com/maps/dir/15.8686403,74.5055356/15.8553896,74.512001/@15.8606457,74.507469,14.82z/data=!4m11!1m5!3m4!2zMTXCsDUxJzE5LjQiTiA3NMKwMzAnNDMuMiJF!8m2!3d15.8553896!4d74.512001!4m4!1m1!4e1!1m0!3e3?entry=ttu"
    },
    {
      id: 3,
      src: locationImage3,
      text: "Om Auto Garage",
      description: "MOTO003",
      location:
        "https://www.google.com/maps/dir//VGF5%2BV46,+behind+Maharastra+Bank,+Sadashiv+Nagar,+Belagavi,+Karnataka+590019/@15.8746365,74.4253571,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbf61532789f657:0x3cd5414ed33e0d37!2m2!1d74.5077506!2d15.8746589?entry=ttu"
    },
    {
      id: 4,
      src: locationImage4,
      text: "New Hero Bike Point",
      description: "MOTO004",
      location:
        "https://www.google.com/maps/dir//RGG5%2BHJX,+Seventh+Cross+Rd,+Bhagya+Nagar,+Angol,+Belagavi,+Karnataka+590006/@15.826477,74.4267164,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbf667d71d170fd:0xc1388199a13d9bcc!2m2!1d74.5091027!2d15.8264919?entry=ttu"
    },
    {
      id: 5,
      src: locationImage5,
      text: "New Model Auto Garage",
      description: "MOTO005",
      location:
        "https://www.google.com/maps/dir/15.8627008,74.5111716/new+model+auto+garage+bike+service+center+belgaum/@15.8699494,74.5055887,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bbf66b513846999:0xd9139ca64ef482a2!2m2!1d74.5205058!2d15.8730808?entry=ttu"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  return (
    <div>
      <div>
        <nav className={`one ${showMenu ? "show-menu" : ""}`}>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="logo">
            <img
              src="https://motocrossindia.in/img/logo.jpg"
              alt="Motocross India"
            />
          </div>
          <div className={`nav-links ${showMenu ? "show" : ""}`}>
            <a href="/login">Login</a>
            <a href="/partner">Partner</a>
            <a href="/training">Training</a>
            <a href="/shop">Shop</a>
            <a href="/career">Career</a>
          </div>
        </nav>
      </div>

      <div className="fullscreen-image-container">
        <img
          src="https://motocrossindia.in/img/demo2.gif"
          alt="Fullscreen Background"
          className="fullscreen-image"
        />
      </div>

      <h1 className="head1">
        WELCOME TO <span className="head2">MOTOCROSS INDIA</span>
      </h1>
      <br />
      <div className="paragraph-container">
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
      <div className="container">
        <div className="row1">
          <div className="icon1">
            <FaHeadset className="icon" />
          </div>
          <p className="text1">24/7 SERVICE SUPPORT</p>
        </div>

        <div className="row2">
          <div className="icon2">
            <FaMotorcycle className="icon" />
          </div>
          <p className="text2">FREE PICKUP AND DROP</p>
        </div>

        <div className="row3">
          <div className="icon3">
            <FaMapMarkerAlt className="icon" />
          </div>

          <p className="text3">LOTS OF PICKUP LOCATIONS</p>
        </div>
      </div>

      <div className="Service">
        <h1>WHAT WE DO?</h1>
      </div>
      <div className="grid-container">
        {gridItems.map((item) => (
          <div key={item.id} className="grid-item">
            <div className="item-content">
              <img src={item.src} alt={`Image ${item.id}`} />
              <div className="text-content">
                <p>{item.additionalText}</p>
              </div>
            </div>
            <div className="additional-text">
              <h4>{item.text}</h4>
              <p>{item.smalltext}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Offer">
        <div className="section">
          <h1>50% OFF</h1>
          <h2>SPECIAL OFFER FOR NEW MEMBERS</h2>
          <h3>Only for Sunday from 1st Jan to 30th Jan 2045</h3>
          <div className="btn">
            <button>Register Now</button>
          </div>
        </div>
      </div>
      {/* //garages */}
      <div className="location">
        <h2>NEARBY GARAGE</h2>
        <div className="location-grid">
          {locationItems.map((item) => (
            <div key={item.id} className="location-item">
              <a href={item.location} target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.text} />
              </a>
              <h3>{item.text}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="contact">CONTACT US</h1>
        <div className="contact-container">
          <div className="cform">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject"></label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message"></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="contact-block">
          <h2>GET IN TOUCH</h2>
          <p>3rd Main, Club Road, Basavnagar, Belgaum - 590001</p>
          <p>8888222992</p>
          <p>info@motocrossindia.in</p>
          <h4>FOLLOW US</h4>

          <div className="social-media-container">
            <div className="inner-box">
              <a
                href="https://www.facebook.com/motocrossind/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
            </div>
            <div className="inner-box">
              <a
                href="https://x.com/MotocrossIndia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
            </div>
            <div className="inner-box">
              <a
                href="https://www.instagram.com/motocrossind/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={25} />
              </a>
            </div>
            <div className="inner-box">
              <a
                href="https://www.youtube.com/channel/UCzzHG1i136eR4VFyJXBw0oA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-block">
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>
              <a href="#">Partners Agreement</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Pricing Policy</a>
            </li>
            <li>
              <a href="#">Help & FAQs</a>
            </li>
          </ul>
        </div>
        <div className="contact-block">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Service Points</a>
            </li>
            <li>
              <a href="#">Nearby Garage</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className="contact-block">
          <h2>NEWSLETTER</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Your Email"
              value={query}
              onChange={handleInputChange}
              className="SIGN UP"
            />
            <button
              type="submit"
              className="search-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer">
          <p>
            Motocross India - Largest local garage chain for two-wheelers in
            Bharat driven by AI.
          </p>
          <p>Copyright ©2018-2023. by Motocross India Private Limited.</p>
        </footer>
      </div>
    </div>
  );
};
export default Main;
