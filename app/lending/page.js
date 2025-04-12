import React from 'react'

export default function page() {
  return (
    <main className="lending-page">
  <section className="cards">
    <div className="card-container p-0">
      <div className=" d-flex flex-column align-items-center">
        {/* Logo */}
        <div className="landing-logo my-3 my-md-5">
          <img
            src="assets/media/logo.png"
            alt="healthy-logo"
            loading="lazy"
            decoding="async"
            className="img-fluid"
          />
        </div>
        {/* Bengali Text */}
        <div className="text-section">
          <h2 className="bengali-text">
            বাচ্চাদের <br /> <span className="text-warning">খাবারের অনীহা</span>{" "}
            <br />
            <span>ও</span>
            <br />
            <span className="text-warning">স্বাস্থ্যকর খাদ্যাভ্যাস </span>
            <br />
            <span>দূর করুন</span>
          </h2>
          <p className="secondary-text my-3 my-md-5">
            পিনাট বাটার দিয়ে দিন পুষ্টি ও সুস্থির নিশ্চয়তা
          </p>
        </div>
        {/* Product Image */}
        <div className="product-container">
          <img
            src="/assets/media/Screenshot from 2025-03-11 22-33-48.png"
            alt="Healthy Eats Peanut Butter"
            className="product-image"
          />
        </div>
        {/* CTA Button */}
        <button className="btn btn-success lending-order-btn text-white my-5">
          অর্ডার করুন
        </button>
      </div>
    </div>
  </section>
  {/* chamos section  */}
  <section className="chamos-section">
    <div className="main-container">
      <div className="my-2 my-md-5">
        <h1 className="heading-container">
          মাত্র <br />{" "}
          <span className="text-warning">
            {" "}
            <span className="two-size">২</span>
            চামচ!
          </span>{" "}
          <br /> <span>পিনাট বাটের রয়েছে</span>
        </h1>
      </div>
      <div>
        <div className="benefit mx-auto m-0 p-0">
          <p>১</p>
          <p>
            দৈনিক প্রোটিন
            <br />
            <span className="fw-bold">প্রায় চাহিদার ১৬%</span>
            <br />
            পূরণ করে দারে
          </p>
          <div className="dotted-line line-center">
            <span className="dot dot-start" />
            <span className="dot dot-end" />
          </div>
        </div>
      </div>
      <div className="benefits-container m-0 p-0">
        <div className="benefit">
          <p>২</p>
          <p>
            ভিটামিন, মিনারেল
            <br />ও এন্টিঅক্সিডেন্ট
            <br />
            ভরপুর
          </p>
          <div className="dotted-line line-left">
            <span className="dot dot-start" />
            <span className="dot dot-end" />
          </div>
        </div>
        <div className="benefit">
          <p>৩</p>
          <p>
            ১৯০ ক্যালরি
            <br />
            <span className="fw-bold">ইনস্ট্যান্ট এনার্জি</span>
            <br />
            সাপ্লাই করে
          </p>
          <div className="dotted-line line-right">
            <span className="dot dot-start" />
            <span className="dot dot-end" />
          </div>
        </div>
      </div>
      <div className="spoons-container">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2019-05-27-WVUbOseDB2Oc0V31PB85bh9BJxKoU4.png"
          alt="Two spoons of peanut butter"
          className="spoons-image"
        />
      </div>
    </div>
  </section>
  {/* quality section  */}
  {/* img & banner section  */}
  <section className="karon-section">
    {/* text section  */}
    <div className="my-3">
      <button className="btn btn-success lending-order-btn text-white my-5">
        অর্ডার করুন
      </button>
      <h2 className="text-center text-white pinat-batter-header d-none d-md-block">
        <span className="heading">যে ৭ টি</span>
        <br /> <span>কারণে আপনার</span>
        <br />
        <span>সন্তানের</span>
        <br /> <span className="heading">পিনাট বাটার</span> <br />
        <span>খেতে দিবেন</span>
      </h2>
      <h2 className="text-center text-white pinat-batter-header d-block d-md-none">
        <span className="heading">যে ৭ টিকারণে আপনার সন্তানের</span>
        <br /> <span className="heading">পিনাট বাটার</span> খেতে দিবেন
      </h2>
    </div>
    {/* img & text section  */}
    <div className="main-container">
      <div className="d-flex flex-column-reverse flex-md-row  align-items-center mx-auto gap-5">
        <div className="image-container">
          <div className="frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-32-15-TTCqtNNQKQWtW1DkdSAum0TMFlQpRW.png"
              alt="Healthy Snacks"
              loading="lazy"
              decoding="async"
              className="lg:w-full lg:h-auto"
            />
          </div>
        </div>
        <div className="text-content text-md-center">
          <h2 className="heading">
            স্বাস্থ্যকর <br /> স্ন্যাকসের বিকল্প:
          </h2>
          <p className="description">
            ফাস্টফুড, চিপস, বিস্কুট,
            <br />
            এর বদলে নিরাট জাতীয়,
            <br />
            পুষ্টিকর ও স্বাস্থ্যকর অপসন
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row  align-items-center mx-auto gap-5">
        <div className="text-content text-md-center ">
          <h2 className="heading">
            স্বাস্থ্যকর <br /> স্ন্যাকসের বিকল্প:
          </h2>
          <p className="description">
            ফাস্টফুড, চিপস, বিস্কুট,
            <br />
            এর বদলে নিরাট জাতীয়,
            <br />
            পুষ্টিকর ও স্বাস্থ্যকর অপসন
          </p>
        </div>
        <div className="image-container">
          <div className="frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-32-15-TTCqtNNQKQWtW1DkdSAum0TMFlQpRW.png"
              alt="Healthy Snacks"
              loading="lazy"
              decoding="async"
              className="lg:w-full lg:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-md-row  align-items-center mx-auto gap-5">
        <div className="image-container">
          <div className="frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-32-15-TTCqtNNQKQWtW1DkdSAum0TMFlQpRW.png"
              alt="Strength Building"
              loading="lazy"
              decoding="async"
              className="lg:w-full lg:h-auto"
            />
          </div>
        </div>
        <div className="text-content text-md-center">
          <h2 className="heading">শক্তি বৃদ্ধি:</h2>
          <p className="description">
            প্রোটিন ও ভালো চর্বি
            <br />
            নিয়মিত শক্তি জোগায়,
            <br />
            রুটিন দূর করে।
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row  align-items-center mx-auto gap-5">
        <div className="text-content text-md-center">
          <h2 className="heading">মেধা বিকাশ:</h2>
          <p className="description">
            স্বাস্থ্যকর ফ্যাট
            <br />
            মস্তিষ্কের বিকাশে
            <br />
            সাহায্য করে।
          </p>
        </div>
        <div className="image-container">
          <div className="frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-32-15-TTCqtNNQKQWtW1DkdSAum0TMFlQpRW.png"
              alt="Brain Development"
              loading="lazy"
              decoding="async"
              className="lg:w-full lg:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-md-row  align-items-center mx-auto gap-5">
        <div className="image-container">
          <div className="frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-32-15-TTCqtNNQKQWtW1DkdSAum0TMFlQpRW.png"
              alt="Immunity"
              loading="lazy"
              decoding="async"
              className="lg:w-full lg:h-auto"
            />
          </div>
        </div>
        <div className="text-content text-md-center">
          <h2 className="heading">
            রোগ প্রতিরোধ <br /> ক্ষমতা:
          </h2>
          <p className="description">
            ভিটামিন ই ও<br />
            অ্যান্টিঅক্সিডেন্টস
            <br />
            ইমিউনিটি শক্তিশালী করে।
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* product card css  */}
  <section className="product-section">
    <div className="container py-5">
      <div className="header-title">
        <h1>
          উপাদান <span className="icon-layer">≡</span>
          <br />
          <span>সমূহ</span>
        </h1>
      </div>
      <div className="product-container">
        <div className="row justify-content-center">
          {/* First row with 3 products */}
          <div className="col-md-4 col-6">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-12%2005-45-31-CyqsQDhP4hLJasLMvNwjDTZYE6o2SY.png"
                  alt="Peanuts"
                  className="img-fluid"
                />
              </div>
              <p className="product-title">প্রিমিয়াম কোয়ালিটি চিনাবাদাম</p>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924"
                  alt="Honey"
                  className="img-fluid"
                />
              </div>
              <p className="product-title">লিচু ফুলের মধু</p>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1573053009372-3dd4b0ae7b33"
                  alt="Olives"
                  className="img-fluid"
                />
              </div>
              <p className="product-title">এক্সট্রা ভার্জিন অলিভ অয়েল</p>
            </div>
          </div>
          {/* Second row with 2 products */}
          <div className="col-md-4 col-6">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d"
                  alt="Salt"
                  className="img-fluid"
                />
              </div>
              <p className="product-title">হিমালয়ান পিঙ্ক সল্ট</p>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
                  alt="Chocolate"
                  className="img-fluid"
                />
              </div>
              <p className="product-title">ইম্পোর্টেড ডার্ক চকলেট</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* last section  */}
  <section className="last-section">
    <div className="main-container">
      <h1 className="main-heading">
        কেন আমাদের
        <br />
        থেকে
        <br />
        কিনবেন?
      </h1>
      <div className="products-container">
        <div className="product">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-41-37-Rh7nDHQUjd5kuzp3AemdfzxUHf99MG.png"
            alt="Healthy Eats Peanut Butter"
          />
          <p className="product-descrpton">
            হেলদি ইটস
            <br />
            <span className="product-name">পিনাট বাটার</span>
          </p>
        </div>
        <div className="product">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-03-11%2017-41-37-Rh7nDHQUjd5kuzp3AemdfzxUHf99MG.png"
            alt="Generic Peanut Butter"
          />
          <p className="product-descrpton">
            সাধারণ
            <br />
            <span className="product-name">পিনাট বাটার</span>
          </p>
        </div>
      </div>
      <div className="comparison-container">
        <div className="d-flex flex-column flex-md-row ">
          <div className="we-are  flex-fill p-3">
            <div className="feature d-flex align-items-center">
              <span className="check-icon positive">✓</span>
              <h4 className="feature-text">প্রটি দিন ফ্রেশ মধু</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon positive">✓</span>
              <h4 className="feature-text">এক্সট্রা ভার্জিন অলিভ অয়েল</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon positive">✓</span>
              <h4 className="feature-text">উচ্চমানের দেশীয় চিনাবাদাম</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon positive">✓</span>
              <h4 className="feature-text">স্বাস্থ্যসম্মত কীটের চার</h4>
            </div>
          </div>
          <div className="thy-are flex-fill p-3 ">
            <div className="feature d-flex align-items-center">
              <span className="check-icon negative">✗</span>
              <h4 className="feature-text">নিম্নমানের বাদাম</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon negative">✗</span>
              <h4 className="feature-text">সাদা চিনি</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon negative">✗</span>
              <h4 className="feature-text">নিম্নমানের পাম অয়েল</h4>
            </div>
            <div className="feature d-flex align-items-center">
              <span className="check-icon negative">✗</span>
              <h4 className="feature-text">নিম্নমানের সিনথেটিক চার</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-info">
        <svg
          className="payment-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#0D5A2F" />
          <circle cx={12} cy={12} r={8} stroke="#0D5A2F" fill="none" />
          <path d="M12 8v8M8 12h8" stroke="#0D5A2F" />
        </svg>
        <p className="payment-text">
          নগদ হাতে পেয়, টেস্ট করে,
          <br />
          মূল্য পরিশোধ করুন
        </p>
      </div>
      <button className="lending-order-btn"> অর্ডার করুন</button>
    </div>
  </section>
</main>

  )
}
