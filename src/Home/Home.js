import React from "react";
import styles from "./Home.module.css";
import SideBar from "./Sidebar";

const Home = () => {
  return (
    <div className={styles["home-page"]}>
      <SideBar />
      Home
    </div>
  );
};

export default Home;
