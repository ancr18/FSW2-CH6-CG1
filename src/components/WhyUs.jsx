export default function WhyUs() {
  return (
    <>
      <section className="why-us-section my-5 mx-2" id="why-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 head">
              <h2 className="h2">Why Us</h2>
              <p className="sub-title mb-5">
                Mengapa harus pilih Binar Car Rental?
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="images/icon_complete.svg"
                    width="32"
                    className="item-card mb-4"
                    alt=""
                  />
                  <h6 className="card-subtitle item-card mb-2">
                    Mobil Lengkap
                  </h6>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="images/icon_price.svg"
                    width="32"
                    className="item-card mb-4"
                    alt=""
                  />
                  <h6 className="card-subtitle item-card mb-2">Harga Murah</h6>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="images/icon_24hrs.svg"
                    width="32"
                    className="item-card mb-4"
                    alt=""
                  />
                  <h6 className="card-subtitle item-card mb-2">
                    Layanan 24 Jam
                  </h6>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="images/icon_professional.svg"
                    width="32"
                    className="item-card mb-4"
                    alt=""
                  />
                  <h6 className="card-subtitle item-card mb-2">
                    Sopir Profesional
                  </h6>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
