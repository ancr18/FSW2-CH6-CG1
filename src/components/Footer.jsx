export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>
                Jalan Suroyo No. 161 Mayangan Kota
                <br className="visible-xs" />
                Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-2 navigation">
              <p>
                <a href="#" className="link fw-semibold">
                  Our services
                </a>
              </p>
              <p>
                <a href="#" className="link fw-semibold">
                  Why Us
                </a>
              </p>
              <p>
                <a href="#" className="link fw-semibold">
                  Testimonial
                </a>
              </p>
              <p>
                <a href="#" className="link fw-semibold">
                  FAQ
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <p>Connect with us</p>
              <div className="icon-footer">
                <a href="https://www.facebook.com/">
                  <img
                    src="/images/icon_facebook.svg"
                    alt="facebook"
                    className="me-3"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src="/images/icon_instagram.svg"
                    alt="instagram"
                    className="me-3"
                  />
                </a>
                <a href="https://twitter.com/">
                  <img
                    src="/images/icon_twitter.svg"
                    alt="twitter"
                    className="me-3"
                  />
                </a>
                <a href="https://mail.google.com/">
                  <img
                    src="/images/icon_mail.svg"
                    alt="mail"
                    className="me-3"
                  />
                </a>
                <a href="https://www.twitch.tv/">
                  <img
                    src="/images/icon_twitch.svg"
                    alt="twitch"
                    className="me-3"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
              <a href="https://www.binaracademy.com/">
                <img
                  src="./images/logo.png"
                  alt="logo"
                  width={100}
                  height={34}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
