import React, { useState } from "react";
import Productcard from "./Productcard";

function Counter() {
  const [daftarProduk, setdaftarProduk] = useState([]);
  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");

  const handleTambah = (e) => {
    e.preventDefault();
    const produkBaru = {
      gambar: gambar,
      namaproduk: nama,
      harga: harga,
    };
    setdaftarProduk([...daftarProduk, produkBaru]);
    setGambar("");
    setNama("");
    setHarga("");
  };

  const handleGambarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGambar(URL.createObjectURL(file));
    }
  };

  const handleHapus = (index) => {
    const newProduk = daftarProduk.filter((_, i) => i !== index);
    setdaftarProduk(newProduk);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>tambah produk</h3>
      <form
        onSubmit={handleTambah}
        style={{
          display: "column",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          placeholder="nama produk"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          placeholder="harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleGambarChange}
          required
        />
        <button type="submit">Tambah produk</button>
      </form>

      <h3>daftar produk</h3>
      <div>
        {daftarProduk.map((item, index) => (
          <Productcard
            key={index}
            namaproduk={item.namaproduk}
            harga={item.harga}
            image={item.gambar}
            onDelete={() => handleHapus(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Counter;
