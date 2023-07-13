import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import Button from "@mui/material/Button";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: 50,
        backgroundColor: "#212727",
        paddingBottom: 50,
      }}
      id="projects"
    >
      <h3 className="myskills" style={{ color: "#2CE13E" }}>
        My Projects
      </h3>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Card data-aos="fade-up">
          <CardActionArea>
            <img
              alt="Voting Dapp"
              // eslint-disable-next-line
              src="https://user-images.githubusercontent.com/15925608/41502175-b70a2c86-71bc-11e8-9184-7a4df0a5e3af.png"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover",
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Button
                  target="_blank"
                  href="https://voting-dapp-07df.netlify.app"
                  style={{
                    color: "black",
                    borderWidth: "5px",
                    border: "black",
                    fontSize: 20,
                    padding: 0,
                  }}
                >
                  {" "}
                  Voting Dapp
                </Button>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                It is a voting decentralised app created using React and it is
                blockchain application
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card data-aos="fade-up">
          <CardActionArea>
            <img
              alt=""
              src="https://user-images.githubusercontent.com/29474981/43884947-1b8e6e5a-9bd5-11e8-871e-b8d1c27c0195.jpeg"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover",
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "white" }}
              >
                <Button
                  target="_blank"
                  href=""
                  style={{ color: "white", fontSize: 20, padding: 0 }}
                >
                  {" "}
                  E-Commerce Website
                </Button>
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                Online shopping site created using React
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card data-aos="fade-up">
          <CardActionArea>
            <img
              alt=""
              src="https://user-images.githubusercontent.com/65611955/109396933-128a4080-795a-11eb-95c7-221ed6718b29.png"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover",
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "white" }}
              >
                <Button
                  target="_blank"
                  href="https://news-app-8f1c49.netlify.app/"
                  style={{ color: "black", fontSize: 20, padding: 0 }}
                >
                  {" "}
                  News app
                </Button>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                It is a news react app .
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
