import Link from 'next/link'
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
        <h1 className="banner-header">Blogs</h1>
        <div className="d-flex gap-2 justify-content-center">
          <p className="banner-home">
            <Link className="raf-tag" href="/index.html">
              Home
            </Link>
          </p>
          <span>/</span>
          <p className="banner-store">
            <a className="raf-tag" href="/blog.html">
              Blog
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* blog card section start */}
  <section>
    <div className="blog-container">
      <div className="blog-content row">
        {/* card 1 */}
        <div className="col-12 col-md-4">
          <div className="card blog-card">
            <div className="card-img-wrapper">
              <div className="date-stamp">
                <div className="date-day">04</div>
                <div className="date-month">SEP</div>
              </div>
              <div className="card-img-box">
                <img
                  src="assets/media/blog/blog2.png"
                  className="card-img-top"
                  alt="Bilona Ghee"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-tags">
                  <span className="category-tag p-1">
                    GHEE KITCHEN ESSENTIALS
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">বেলোনা ঘি এর বৈশিষ্ট্য</h5>
              <div className="icons d-flex align-items-center gap-2 my-3 text-center">
                <p className="m-0 p-0">By</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <p className="m-0 p-0">healthyeatsbd</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chat-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </div>
              <p className="card-text">
                আপনি কি জানেন যে আপনি যে ঘি গ্রহণ করেন তার ভেতর তার পুষ্টিগুন
                এবং স্বাস্থ্য উপকারিতাকে মারাত্মকভাবে সংক্রামিত করে? গুণমান
                নিশ্চিত করতে...
              </p>
              <a href="#" className="continue-reading raf-tag">
                CONTINUE READING
              </a>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-12 col-md-4">
          <div className="card blog-card">
            <div className="card-img-wrapper">
              <div className="date-stamp">
                <div className="date-day">29</div>
                <div className="date-month">DEC</div>
              </div>
              <div className="card-img-box">
                <img
                  src="assets/media/blog/blog1.png"
                  className="card-img-top"
                  alt="Bilona Ghee"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-tags">
                  <span className="category-tag p-1">
                    GHEE KITCHEN ESSENTIALS
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">মৌসুমি আচার</h5>
              <div className="icons d-flex align-items-center gap-2 my-3 text-center">
                <p className="m-0 p-0">By</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <p className="m-0 p-0">healthyeatsbd</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chat-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </div>
              <p className="card-text">
                আচার হলো বাংলাদেশীদের ঐতিহ্য যাতে ফল, শাকসবজি এবং অন্যান্য খাদ্য
                সামগ্রীকে মশলা, লবণ…
              </p>
              <a href="#" className="continue-reading raf-tag">
                CONTINUE READING
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-12 col-md-4">
          <div className="card blog-card">
            <div className="card-img-wrapper">
              <div className="date-stamp">
                <div className="date-day">04</div>
                <div className="date-month">SEP</div>
              </div>
              <div className="card-img-box">
                <img
                  src="assets/media/blog/blog3.png"
                  className="card-img-top"
                  alt="Bilona Ghee"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-tags">
                  <span className="category-tag p-1">
                    GHEE KITCHEN ESSENTIALS
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">প্রাকৃতিক মিষ্টান্ন এর কার্যকারিতা</h5>
              <div className="icons d-flex align-items-center gap-2 my-3 text-center">
                <p className="m-0 p-0">By</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <p className="m-0 p-0">healthyeatsbd</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chat-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </div>
              <p className="card-text">
                গুড় হলো আখ বা খেজুর গাছ বা খেজুরের ঘন রস থেকে প্রাপ্ত একটি
                প্রাকৃতিক মিষ্টান্ন। একটি ঐতিহ্যগত প্রক্রিয়ার মাধ্যমে…
              </p>
              <a href="#" className="continue-reading raf-tag">
                CONTINUE READING
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* blog card section end */}
</main>

  )
}
