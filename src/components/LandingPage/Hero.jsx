import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div>
        <main id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 hero-tagline my-auto">
                <h1 className="h1">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="sub-title my-3">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <Link to="/cars">
                  <button className="btn-sewa fw-bold">Mulai Sewa Mobil</button>
                </Link>
              </div>

              <div className="col-md-6 col-sm-12 mt-4 pe-0">
                <img
                  src="images/img_car.png"
                  width="100%"
                  className="display-absolute end-0 bottom-0"
                  alt="Car"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
