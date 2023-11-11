export default function Faq() {
  return (
    <section className="faq-section my-5" id="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 faq-head">
            <h3>Frequently Asked Question</h3>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="col-md-7 offset-md-1">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded-2 mb-3">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed sub-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facere quam nemo quia fugit. Veniam tempora dolor
                    facere recusandae, eaque iste delectus quia molestiae, rerum
                    eum perspiciatis ab iusto animi reiciendis architecto non
                    ipsum expedita dolores consequatur laborum tempore officiis.
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed sub-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body sub-title">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur illum quae ratione, corrupti cupiditate sit itaque
                    fugiat repellat est tempore fugit atque ducimus impedit
                    exercitationem. Quia velit facilis veritatis laudantium
                    eligendi aliquam, facere consectetur officiis ullam
                    dignissimos distinctio minus odit.
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed sub-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium accusantium autem reiciendis quaerat molestias
                    aut, iure aspernatur minus tempora, at deserunt. Quae
                    adipisci culpa ad, sed quisquam asperiores ullam? Eum
                    laudantium exercitationem neque eius perspiciatis. Ipsa
                    eaque vero reprehenderit tempora?
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed sub-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body sub-title">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos at atque cum libero earum quasi, dicta odit
                    temporibus dolorem iure vero repellendus sapiente
                    voluptatibus? Ducimus dolorem, alias, ipsum reprehenderit
                    nemo culpa quaerat, quos necessitatibus blanditiis quis
                    fugit deserunt sequi sapiente?
                  </div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed sub-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body sub-title">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, nesciunt. Fugiat soluta delectus aspernatur amet
                    architecto, a eius atque incidunt quaerat tempora, labore
                    tenetur similique commodi illo. Laudantium minus omnis sint
                    error vitae eos tempora vero, quod delectus. Eius, minima.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
