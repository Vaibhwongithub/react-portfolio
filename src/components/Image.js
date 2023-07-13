import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import ParticlesBg from "particles-bg";
export default function Image() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="image"
      style={{
        height: "80vh",
        flex: 1,

        alingItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80vh",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        <ParticlesBg type="circle" bg={true} />
      </div>

      <div
        style={{
          paddingTop: 70,
          flex: 1,
          width: "100%",
          justifyContent: "center",
          display: "flex",
          zIndex: 1,
          position: "absolute",
          top: 120,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            flex: 1,
          }}
        >
          <p style={{ color: "black", fontWeight: "bold" }}>
            Welcome to my World
          </p>
          <h3 className="font" style={{ color: "white", fontWeight: "bold" }}>
            I'm <span style={{ color: "#0FE8D6" }}>Vaibhav </span>
          </h3>
          <h6
            className="font2"
            style={{ color: "#E1054B", fontWeight: "bold" }}
          >
            I am a flexible person seeking employment <br></br> which will allow
            development, growth and make use of my existing skills.
            <br></br>
            <br></br>
          </h6>
        </div>
      </div>
    </div>
  );
}
