import React from "react";
import FileSaver from "file-saver";
import ProgressBar from "react-bootstrap/ProgressBar";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import Button from "@mui/material/Button";
export default function Resume() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const saveFile = () => {
    FileSaver.saveAs(process.env.PUBLIC_URL + "/resources/cv.pdf", "MyCV.pdf");
  };
  return (
    <div
      style={{
        backgroundColor: "black",

        flex: 1,

        textAlign: "center",
        paddingTop: 60,
        paddingBottom: 60,
      }}
      id="resume"
    >
      <h3 className="myskills" style={{ color: "#2CE13E" }}>
        My Skills
      </h3>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div
          className="resume"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              paddingTop: 20,
              textAlign: "left",
            }}
          >
            <h4 style={{ color: "white" }}>Reactjs</h4>
            <ProgressBar
              now={65}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              paddingTop: 20,
              textAlign: "left",
            }}
          >
            <h4 style={{ color: "white" }}>Ethereum Blockchain</h4>
            <ProgressBar
              now={60}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10,
            }}
          >
            <h4 style={{ color: "white" }}>Solidity</h4>
            <ProgressBar
              now={60}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10,
            }}
          >
            <h4 style={{ color: "white" }}>Java</h4>
            <ProgressBar
              now={50}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10,
            }}
          >
            <h4 style={{ color: "white" }}>HTML/CSS/JAVASCRIPT</h4>
            <ProgressBar
              now={60}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
        </div>
        <div
          className="king"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p
            data-aos="fade-up"
            className="data"
            style={{ color: "#EC7063", fontWeight: "bold" }}
          >
            Databases: MYSQL
            <br />
            Programming Languages:Java
            <br />
          </p>
          <Button
            data-aos="fade-up"
            variant="contained"
            style={{
              backgroundColor: "#E11B57",
              color: "white",
              width: 230,
              fontSize: 14,
              marginTop: 20,
              position: "relative",
              left: 20,
            }}
            onClick={saveFile}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
