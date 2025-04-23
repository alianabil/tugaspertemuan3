import React from "react";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Productcard from "./Components/Productcard";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar title="TECHMART" />
      <Counter />
      <Productcard
        namaproduk="smartphone"
        harga="Rp. 1.000.000"
        image="https://cdn.timesmedia.co.id/images/2021/12/29/smartphone-2022.jpg"
      />
      <Productcard
        namaproduk="laptop"
        harga="Rp 2.000.000"
        image="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
      />
    </div>
  );
}

export default App;
