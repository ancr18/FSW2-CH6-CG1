export default function Testimonial() {
  return (
    <>
      <section className="testimonial-section my-5" id="testimonial-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="h2">Testimonial</h2>
              <p className="sub-title mb-4">
                Berbagai review positif dari para pelanggan kami
              </p>
            </div>
          </div>

          <div className="row p-3">
            <div className="col-md-8 mx-auto col-sm-12 testimonial">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row my-4">
                      <div className="col-md-1 offset-md-2">
                        <img
                          src="/images/img_photo.svg"
                          className="my-5 testi-img d-flex justify-content-center"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-6 offset-md-1">
                        <img
                          src="/images/stars.svg"
                          className="img-star my-3"
                          alt=""
                        />
                        <p className="sub-title comment my-3 mx-auto">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <span className="fw-bold">John Dee 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row my-4">
                      <div className="col-md-1 offset-md-2">
                        <img
                          src="/images/img_photo.svg"
                          className="my-5 testi-img d-flex justify-content-center"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-6 offset-md-1">
                        <img
                          src="/images/stars.svg"
                          className="img-star my-3"
                          alt=""
                        />
                        <p className="sub-title comment my-3 mx-auto">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <span className="fw-bold">Ardiyansyah R 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row my-4">
                      <div className="col-md-1 offset-md-2">
                        <img
                          src="/images/img_photo.svg"
                          className="my-5 testi-img d-flex justify-content-center"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-6 offset-md-1">
                        <img
                          src="/images/stars.svg"
                          className="img-star my-3"
                          alt=""
                        />
                        <p className="sub-title comment my-3 mx-auto">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <span className="fw-bold">R 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev arrow-button"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span className="" aria-hidden="true">
                    <img src="/images/left_button.svg" alt="" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next arrow-button"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span className="" aria-hidden="true">
                    <img src="/images/right_button.svg" alt="" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
