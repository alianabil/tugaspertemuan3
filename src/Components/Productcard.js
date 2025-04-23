import React from "react";

function Productcard(props) {
  return (
    <div style={Styles.card}>
      <img src={props.image} alt={props.namaproduk} style={Styles.image} />
      <h3>{props.namaproduk}</h3>
      <p>harga: {props.harga}</p>
      <button onClick={props.onDelete}>Hapus</button>
    </div>
  );
}

const Styles = {
  card: {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "20px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Productcard;
