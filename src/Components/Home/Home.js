import React from "react";
import styles from "./Home.module.css";
import user from "../../Images/user.jpeg";
import Typical from "react-typical";
import SideBar from "./Sidebar";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      <div className={styles["home-content"]}>
        <div className={styles["inner-home-content"]}>
          <div className={styles["home-description"]}>
            <h1>Hello, I'm </h1>
            <h1>Martym Vora</h1>
            <span className={styles.description}>
              I'm a Freelance{"   "}
              <Typical
                className={styles.description}
                loop={Infinity}
                steps={[
                  "Web Developer",
                  2000,
                  "Full Stack",
                  2000,
                  "Mobile App Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
              />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className={styles["home-image"]}>
            <img
              src={user}
              alt="user-profile"
              className={styles["user-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
