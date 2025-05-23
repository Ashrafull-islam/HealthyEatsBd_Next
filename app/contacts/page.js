import React from 'react'

export default function page() {
  return (
    <main>
  {/* hero section start  */}
  <section>
    <div
      className="hero-container d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "url(assets/media/store/banner/Home-Image-1-scaled-1.jpg)"
      }}
    >
      <div className="hero-content">
        <h1 className="banner-header">Contact us</h1>
        <div className="d-flex gap-2 justify-content-center">
          <p className="banner-home">Home</p>
          <span>/</span>
          <p className="banner-store">Contact us</p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* contact form section start  */}
  <section>
    <div className="contact-container">
      <div className="contact-content row g-5">
        <div className="info-container col-12 col-lg-6 border-end p-5">
          <div className="company-info-content">
            <h2 className="section-title">COMPANY INFO</h2>
            <hr />
            <p className="mb-4 section-text">
              Healthy Eats collects pure and fresh groceries directly
              <br />
              from core farmers and serve you to your door
            </p>
            <h2 className="section-title">CONTACT US</h2>
            <hr />
            <div className="contact-info"></div>
            <div className="about-us row">
              <div className="email-shiping col-12 col-md-6">
                {/* Email Info */}
                <div className="info-item">
                  <div className="info-icon d-flex align-items-center gap-2">
                    {/* svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 53 53"
                      fill="none"
                    >
                      <path
                        d="M38.9219 0H14.0781C10.4195 0 7.45312 2.96633 7.45312 6.625V46.375C7.45312 50.0337 10.4195 53 14.0781 53H38.9219C42.5805 53 45.5469 50.0337 45.5469 46.375V6.625C45.5469 2.96633 42.5805 0 38.9219 0ZM42.2344 46.375C42.2344 48.2052 40.752 49.6875 38.9219 49.6875H14.0781C12.248 49.6875 10.7656 48.2052 10.7656 46.375V41.4062H42.2344V46.375ZM42.2344 38.0938H10.7656V11.5938H42.2344V38.0938ZM42.2344 8.28125H10.7656V6.625C10.7656 4.79483 12.248 3.3125 14.0781 3.3125H38.9219C40.752 3.3125 42.2344 4.7965 42.2344 6.625V8.28125ZM26.5 48.0312C27.8714 48.0312 28.9844 46.9183 28.9844 45.5469C28.9844 44.1755 27.8714 43.0625 26.5 43.0625C25.1286 43.0625 24.0156 44.1755 24.0156 45.5469C24.0156 46.9183 25.1286 48.0312 26.5 48.0312Z"
                        fill="#D1D1D1"
                      />
                    </svg>
                    <div className="email-phone">
                      <div className="info-content">
                        <div className="info-content">
                          <div className="info-label">
                            Phone:{" "}
                            <span className="info-text">+8801581044495</span>
                          </div>
                          <div className="info-label">Email:</div>
                          <p className="info-text m-0 p-0">
                            info@healthyeatsbd.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shipping Info */}
                <div className="info-item">
                  <div className="d-flex align-items-center gap-2 my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 45 60"
                      fill="none"
                    >
                      <path
                        d="M43.0382 1.50653C41.3512 -0.837943 38.3884 -0.288343 36.6933 2.06731L28.0675 13.9997L12.0645 5.70784C10.5331 5.15834 8.98943 4.44933 7.08732 7.09017C6.11866 8.43682 4.10156 11.2389 7.08732 15.3857L18.0604 27.8413L10.9213 37.7179L4.25982 35.411C3.27093 35.0565 2.60663 35.3342 2.09932 36.1087C1.84361 36.5514 -0.0111241 38.4588 1.28085 40.2537L9.02734 48.6074L15.0516 59.3468C15.9878 60.6466 16.8577 59.8363 18.0468 58.2703C18.8004 57.2237 18.638 56.6855 18.4107 55.1588L16.905 45.9892L23.9954 36.1257L32.9648 51.3383C35.9506 55.4852 37.9678 52.6831 38.9363 51.3383C40.8385 48.6957 40.3271 46.5519 39.932 44.425L34.0025 22.2052L42.5945 10.2523C44.291 7.89477 44.7253 3.84924 43.0382 1.50653ZM41.2078 7.77663L31.1263 21.8039L37.2223 45.0514C37.5226 46.383 37.3359 48.0316 36.9477 48.5699C35.8451 50.1023 35.0577 49.3745 34.6411 48.7313L24.8937 30.4746L14.1046 45.4866L16.0459 55.4833C15.2802 54.418 10.8036 46.1073 10.6954 45.9573C10.6237 45.8579 4.73737 39.7737 4.10149 38.8903L11.0173 41.4766L22.012 26.5097L8.93668 13.0975C8.56196 12.6324 8.06949 11.2595 9.07875 9.8566C9.4657 9.31828 10.6427 9.15514 11.6018 9.57151L28.2974 17.959L38.5157 4.04796C39.2286 3.05759 40.6274 3.15896 41.2524 4.02738C41.8789 4.8957 41.9208 6.78626 41.2078 7.77663Z"
                        fill="#D1D1D1"
                      />
                    </svg>
                    <div className="info-content">
                      <div className="info-label">Standard shipping</div>
                      <p className="info-text">on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address-support col-12 col-md-6">
                {/* Address Info */}
                <div className="info-item">
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 53 53"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_187_2751)">
                        <path
                          d="M26.5 11.5938C21.9271 11.5938 18.2188 15.3021 18.2188 19.875C18.2188 24.4479 21.9271 28.1563 26.5 28.1563C31.0729 28.1563 34.7812 24.4479 34.7812 19.875C34.7812 15.3021 31.0729 11.5938 26.5 11.5938ZM26.5 24.8438C23.7556 24.8438 21.5312 22.6194 21.5312 19.875C21.5312 17.1306 23.7556 14.9063 26.5 14.9063C29.2444 14.9063 31.4688 17.1306 31.4688 19.875C31.4688 22.6194 29.2444 24.8438 26.5 24.8438ZM26.5 0C15.524 0 6.625 8.89906 6.625 19.875C6.625 28.1845 23.1958 53.0167 26.5 53.0001C29.7529 53.0166 46.375 28.0735 46.375 19.875C46.375 8.89906 37.476 0 26.5 0ZM26.5 48.0313C23.7457 48.0462 9.9375 26.7998 9.9375 19.875C9.9375 10.7276 17.3525 3.3125 26.5 3.3125C35.6475 3.3125 43.0625 10.7276 43.0625 19.875C43.0625 26.7071 29.2113 48.0462 26.5 48.0313Z"
                          fill="#D1D1D1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_2751">
                          <rect width={53} height={53} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-content">
                      <div className="info-label">
                        Address:{" "}
                        <span className="info-text">Tejgaon, Dhaka 1215, </span>
                      </div>
                      <p className="info-text">Bangladesh</p>
                    </div>
                  </div>
                </div>
                {/* Support Info */}
                <div className="info-item">
                  <div className="d-flex align-items-center gap-2 my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 55 55"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_187_2756)">
                        <path
                          d="M22.3438 22.3439C23.7669 22.3439 24.9219 21.1906 24.9219 19.7658C24.9219 18.3427 23.7669 17.1876 22.3438 17.1876C20.9206 17.1876 19.7657 18.3427 19.7657 19.7658C19.7656 21.1905 20.9206 22.3439 22.3438 22.3439ZM32.6562 22.3439C34.0794 22.3439 35.2344 21.1906 35.2344 19.7658C35.2344 18.3427 34.0793 17.1876 32.6562 17.1876C31.2331 17.1876 30.0782 18.3427 30.0782 19.7658C30.0781 21.1905 31.2331 22.3439 32.6562 22.3439ZM17.4212 39.0794C18.7584 39.296 21.7954 39.5314 23.2031 39.5314C35.5438 39.5314 43.8281 30.3481 43.8281 19.5508C43.8281 8.75358 33.4761 0 23.2031 0C10.8453 0 0.859375 8.75366 0.859375 19.5508C0.859375 25.8054 3.24327 31.1164 7.73439 34.9407V44.6877L17.4212 39.0794ZM4.29688 19.7657C4.29688 10.7474 12.4661 3.43753 23.2031 3.43753C31.7504 3.43753 40.3905 10.7474 40.3905 19.7657C40.3905 28.784 33.6445 36.094 23.2031 36.094C21.6683 36.094 18.4662 35.9186 17.038 35.6212L11.1719 39.5314V33.4402C6.97983 30.0388 4.29688 25.4943 4.29688 19.7657ZM47.1779 15.706C47.2105 16.1993 47.2656 16.6875 47.2656 17.1876C47.2656 18.2808 47.1607 19.3515 47.006 20.4086C49.3195 23.1174 50.7031 26.4535 50.7031 30.0784C50.7031 35.807 47.2794 40.8395 42.1094 43.7527V49.8441L36.2432 45.9339C34.815 46.2312 33.3317 46.4065 31.7969 46.4065C27.3454 46.4065 24.9803 45.0694 21.7491 42.8453C20.8124 42.921 19.8653 42.9691 18.9063 42.9691C18.2223 42.9691 17.5519 42.9192 16.8781 42.8814C20.9688 46.8827 25.178 49.4144 31.7969 49.4144C33.2045 49.4144 34.5777 49.2872 35.9133 49.0689L45.5468 55.0004V45.2515C50.7701 41.673 54.1406 36.1181 54.1406 29.8617C54.1406 24.2861 51.4593 19.269 47.1779 15.706ZM12.0313 22.3439C13.4544 22.3439 14.6094 21.1906 14.6094 19.7658C14.6094 18.3427 13.4544 17.1876 12.0313 17.1876C10.6081 17.1876 9.45314 18.3427 9.45314 19.7658C9.45314 21.1905 10.6081 22.3439 12.0313 22.3439Z"
                          fill="#D1D1D1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_2756">
                          <rect width={55} height={55} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="info-content">
                      <div className="info-label">Support forum</div>
                      <p className="info-text">for over 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-5">
            <p className="mb-2 section-text">Stay Connected</p>
            <div className="social-links d-flex gap-3">
              <a href="https://www.facebook.com/" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="green"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a href="https://web.whatsapp.com/" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="green"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="green"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="green"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>
          <hr />
          <div className="question-text">
            <p className="mb-1 section-text text-black">
              Do you have questions about how we can help your company?
            </p>
            <a href="#" className="section-text text-success">
              Send us an email and we,ll get in touch shortly.
            </a>
          </div>
        </div>
        <div className="form-container col-12 col-lg-6 border-start p-5">
          <h2 className="section-title">SEND US AN EMAIL</h2>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="section-text"
                >
                  Your Name
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="section-text"
                >
                  Your Email
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="section-text"
                >
                  Phone Number
                </label>
                <input type="tel" className="form-control" />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="section-text"
                >
                  Company
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="section-text"
                >
                  Your Message
                </label>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success section-text text-light"
                >
                  ASK A QUESTION
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* contact form section end  */}
</main>

  )
}
