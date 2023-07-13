import React from "react";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#212727",
        height: "14vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/vaibhav-ojha-6556b4215/"
        >
          <LinkedInIcon
            style={{
              color: "grey",
              fontSize: 60,
              margin: 10,
              cursor: "pointer",
            }}
          />
        </Button>

        <Button target="_blank" href="https://github.com/Vaibhwongithub">
          <GitHubIcon
            style={{
              color: "grey",
              fontSize: 50,
              margin: 10,
              cursor: "pointer",
            }}
          />
        </Button>

        <Button target="_blank" href="">
          <InstagramIcon
            style={{
              color: "grey",
              fontSize: 50,
              margin: 10,
              cursor: "pointer",
            }}
          />
        </Button>
      </div>
    </div>
  );
}
