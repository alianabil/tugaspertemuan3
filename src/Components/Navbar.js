import React from "react";

function Navbar(props) {
  return (
    <div style={styles.navbar}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div style={styles.navlinks}>
        <a href="#home" style={styles.link}>
          Home
        </a>
        <a href="#product" style={styles.link}>
          Product
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#008000",
    color: "#fff",
    padding: "2px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navlinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};
export default Navbar;
