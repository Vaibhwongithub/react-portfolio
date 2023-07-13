import React from "react";
import Typography from "@mui/material/Typography";
import "../styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-scroll";

export default function About() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div
      id="about"
      style={{
        flex: 1,
        backgroundColor: "#212727",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 30,
        minHeight: "80vh",
      }}
    >
      '{" "}
      <div
        style={{
          width: 55,
          height: 55,
          backgroundColor: "black",
          borderRadius: 55,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          zIndex: 1,
          position: "fixed",
          bottom: 50,
          right: 25,
        }}
      >
        <Link to="image" smooth={true} duration={1000}>
          <KeyboardArrowUpIcon
            style={{ color: "white", fontSize: 50, cursor: "pointer" }}
          />
        </Link>
      </div>
      '
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 20,
          paddingBottom: 60,
          justifyContent: "center",
        }}
      >
        <Typography
          className="typo"
          style={{
            color: "white",
            padding: 10,
            minWidth: 360,
            wordBreak: "break-word",
            maxWidth: "50%",
          }}
        >
          <h2
            data-aos="fade-up"
            className="aboutme"
            style={{ color: "#2CE13E" }}
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            className="about"
            style={{ color: "grey", fontSize: 20 }}
          >
            Hi there! I am Vaibhav!. I'm learning to be a Full Stack developer
            and interested in working on new technologies like Blockchain and
            more,<br></br>right now I'm a undergraduate at JSSATE NOIDA.
            <br />
          </p>
          <p
            data-aos="fade-up"
            className="about"
            style={{ width: 250, fontSize: 20 }}
          >
            <span style={{ color: "#0F4CE8", fontSize: 28 }}>
              Contact Details
            </span>
            <br /> Vaibhav Ojha
            <br />
            Varanasi
            <br />
            Uttar Pradesh
            <br />
            hhhvaibhaw@gmail.com
          </p>
        </Typography>
      </div>
    </div>
  );
}
