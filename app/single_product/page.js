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
            <a className="raf-tag" href="/single-ghee.html">
              Ghee
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* product details section start  */}
  <section>
    <div className="details-container my-5">
      <div className="details-content row">
        {/* left side  */}
        <div className="left-side col-12 col-lg-8">
          <div className="text-center">
            <h4 className="ghee-kitchen">GHEE KITCHEN ESSENTIALS</h4>
            <h3 className="ghee-head my-2">বেলোনা ঘি এর বৈশিষ্ট্য</h3>
          </div>
          <div className="d-flex align-items-center gap-1 gap-md-3 icons justify-content-center">
            <p className="m-0 p-0">Posted by</p>
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
            <p className="m-0 p-0">On September 4, 2024</p>
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
          </div>
          {/* ghee img and text start  */}
          <div className="p-3">
            <img
              src="assets/media/ghee/ghee-image.png"
              alt="বেলোনা-ঘি-এর-বৈশিষ্ট্য"
              className="img-fluid"
            />
          </div>
          <div className="ghee-text my-4 p-3">
            <div>
              <p className="text-large">
                আপনি কি জানেন যে আপনি যে ঘি গ্রহণ করেন তার গুণমান তার পুষ্টিগুণ
                এবং স্বাস্থ্য উপকারিতাকে ব্যাপকভাবে সংজ্ঞায়িত করে? গুণমান
                নিশ্চিত করতে, সর্বদা আপনার ঘি তৈরির প্রক্রিয়া সম্পর্কে ভালভাবে
                সচেতন থাকুন।
              </p>
            </div>
            <p className="text-normal">
              এই ব্লগে আরও এগিয়ে যাওয়ার আগে, একটি সাধারণ এবং সম্ভবত সবচেয়ে
              জনপ্রিয় ঘি মিথটি ভেঙে ফেলা গুরুত্বপূর্ণ যে এটি মানুষকে মোটা করে
              তোলে। এটি সত্য নয়, ভেজাল এবং অতিরিক্ত ব্যবহার নেতিবাচক প্রভাবের
              দিকে নিয়ে যেতে পারে যা ইতিবাচককে ছাড়িয়ে যায়। ঘি এর উপকারিতা
              সম্পূর্ণরূপে গ্রহণ করার জন্য, বুদ্ধিমত্তার সাথে বেছে নেওয়া এবং
              এটিকে মন দিয়ে সেবন করা অত্যন্ত গুরুত্বপূর্ণ।
            </p>
            <p className="text-normal">
              আজ আমরা বেলোনা ঘি সম্পর্কে কথা বলব। বেলোনা ঘি বলতে ঘি তৈরির একটি
              পদ্ধতিকে বোঝায়, যেখানে একটি কাঠের বিটারকে বলা হয় – ‘বেলোনা’ দই
              থেকে মাখন মন্থন করতে ব্যবহৃত হয়, এবং তারপর ঘি তৈরির জন্য মাখনকে
              ধীর আঁচে রান্না করা হয়।
            </p>
            <p className="text-bold my-4">
              আসুন বেলোনা ঘি তৈরির প্রক্রিয়া জেনে আসি-
            </p>
            <p className="text-normal">
              ১। বেলোনা পদ্ধতি ব্যবহার করে ঘি তৈরির প্রথম ধাপ হল তাজা গরুর দুধ
              সংগ্রহ করা। A2 গাভীকে হাতে দোহন করা হয় কারণ এই গাভীতে A2A2 জিন
              থাকে যা দুধ সহজে হজম করে, স্বাস্থ্যের উন্নতি করে এবং কিছু রোগের
              ঝুঁকি কমায়।
            </p>
            <p className="text-normal">
              ২। দুধকে ধীর গতিতে গরম করা দুধের জলের উপাদানকে বাষ্পীভূত করতে
              সাহায্য করে, যা ঘিকে দীর্ঘ সময় ধরে রাখতে সাহায্য করে। দুধকে ধীরে
              ধীরে গরম করার ফলে, জলের উপাদানগুলি ধীরে ধীরে সরে যায়, যা ঘিকে খুব
              শুষ্ক বা ভঙ্গুর হতে বাধা দেয়। ধীরগতিতে গরম করা ঘি তৈরির বেলোনা
              পদ্ধতিতে একটি গুরুত্বপূর্ণ পদক্ষেপ কারণ এটি নিশ্চিত করতে সাহায্য
              করে যে ঘিটি উচ্চ মানের এবং একটি ভাল গন্ধ এবং টেক্সচার রয়েছে।
            </p>
            <p className="text-normal">
              ৩। তাজা গরুর দুধকে ৮-১০ ঘন্টার জন্য দই তৈরি করতে দিন। দই ঘন হতে
              হবে এবং কিছুটা টক স্বাদ থাকতে হবে।
            </p>
            <p className="text-normal">
              ৪। বেলোনা নামে পরিচিত একটি কাঠের মন্থনে দই রাখুন। দই থেকে মাখন
              আলাদা না হওয়া পর্যন্ত দই ম্যানুয়ালি কয়েক ঘন্টা মন্থন করুন।
            </p>
            <p className="text-normal">
              ৫। দই থেকে আলাদা করা মাখন সংগ্রহ করুন এবং এটি একটি ভারী তল প্যানে
              স্থানান্তর করুন। একটি ভারী তল প্যান ব্যবহার করা খুবই গুরুত্বপূর্ণ
              যাতে গরম করার সময় মাখন জ্বলে না।
            </p>
            <p className="text-normal">
              ৬। অল্প আঁচে মাখন গরম করুন যতক্ষণ না এটি গলে যায় এবং ফুটতে শুরু
              করে। মাখনটি প্যানের নীচে আটকানো থেকে বিরত রাখতে ক্রমাগত নাড়ুন।
              মাখন গরম হওয়ার সাথে সাথে এটি জল এবং দুধের কঠিন পদার্থ ছেড়ে দেবে।
              এই অমেধ্য প্যানের নীচে স্থির হবে।
            </p>
            <p className="text-normal">
              ৭। অল্প আঁচে মাখন গরম করতে থাকুন যতক্ষণ না এটি সোনালি বাদামী হয়ে
              যায় এবং একটি সমৃদ্ধ সুগন্ধ প্রকাশ করে। ঘি তৈরি হওয়ার সাথে সাথে
              দুধের কঠিন পদার্থগুলি আলাদা হয়ে প্যানের নীচে স্থির হয়ে যাবে এবং
              জলের উপাদান বাষ্পীভূত হবে।
            </p>
            <p className="text-normal">
              ৮। আঁচ থেকে প্যানটি সরান এবং এটি আধা ঘন্টার জন্য ঠান্ডা হতে দিন।
            </p>
            <p className="text-normal">
              ৯। কোন অমেধ্য অপসারণ করতে একটি মসলিন কাপড় বা চিজক্লথ ব্যবহার করে
              ঘি ফিল্টার করুন। এটি নিশ্চিত করবে যে ঘি খাঁটি এবং দুধের কঠিন
              পদার্থ বা জলের উপাদান থেকে মুক্ত।
            </p>
            <p className="text-bold my-4">
              আপনি অবশ্যই এই ঘি এর পুষ্টি সম্পর্কে চিন্তা করছেন! পুষ্টিগুণগুলো
              হলো-{" "}
            </p>
            <p className="text-normal">
              ১। বেলোনা ঘি এ, ডি, ই, এবং কে এর মত চর্বি-দ্রবণীয় ভিটামিনের উচ্চ
              পরিমাণে থাকে, যা রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে। এই
              ভিটামিনগুলি হার্ট এবং মস্তিষ্কের কার্যকারিতার পাশাপাশি হাড়ের
              বৃদ্ধির জন্য অপরিহার্য।
            </p>
            <p className="text-normal">
              ২। বেলোনা ঘি তাত্ক্ষণিক শক্তির একটি দুর্দান্ত উত্স কারণ এটি সহজেই
              শোষিত হতে পারে। চর্বি দ্রুত শক্তিতে রূপান্তরিত হওয়ার কারণে শরীর
              ততক্ষণে আরও শক্তিশালী বোধ করে।
            </p>
            <p className="text-normal">
              ৩। খাবারের সময় কমপক্ষে এক চা চামচ বেলোনা ঘি খাওয়া পরিপাকতন্ত্রের
              মাধ্যমে লিপিড-দ্রবণীয় মত টক্সিন দ্রবীভূত ও নির্মূল করতে সাহায্য
              করে এবং শরীরকে সুস্থ ও টক্সিন মুক্ত রাখে।
            </p>
            <p className="text-normal">
              ৪। বেলোনা ঘি মেটাবলিজম বাড়াতে সাহায্য করে যা অবাঞ্ছিত চর্বি
              পোড়াতে সাহায্য করে এবং এইভাবে ওজন কমাতে সাহায্য করে।
            </p>
            <p className="text-normal">
              ৫। বেলোনা ঘিতে আরও সংযোজিত লিনোলিক অ্যাসিড রয়েছে, যা খারাপ
              কোলেস্টেরলের মাত্রা কমাতে সাহায্য করে এবং ভাল কোলেস্টেরল বাড়ায়
              এবং সুস্থ হৃদপিণ্ডকে উৎসাহিত করে।
            </p>
            <p className="text-normal">
              ৬। এটি ভিটামিন এ, ই এবং বুট্রিক অ্যাসিডের মতো অ্যান্টিঅক্সিডেন্টে
              সমৃদ্ধ যা ফ্রি র‌্যাডিক্যালের বিরুদ্ধে লড়াই করে এবং ক্যান্সারের
              বিরুদ্ধেও সাহায্য করে।
            </p>
            <p className="text-normal">
              তাই, পরের বার থেকে আপনার ঘি বিচক্ষণতার সাথে বেছে নিন।
            </p>
            <div className="icon-conainer">
              <div className="icon-content d-flex align-items-center justify-content-between my-2">
                <div className="tags-container d-flex gap-2">
                  <a href="#" className="tag">
                    <li>Bilona ghee</li>
                  </a>
                  <a href="#" className="tag">
                    <li>ghee</li>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap my-4">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      fill="#1877F2"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      viewBox="0 0 56 55"
                      fill="none"
                    >
                      <rect
                        x="0.857422"
                        width="54.6021"
                        height={55}
                        rx="27.301"
                        fill="black"
                      />
                      <path
                        d="M36.0759 15H40.0348L31.3878 26.0132L41.5609 41H33.5963L27.3579 31.909L20.2193 41H16.2588L25.5075 29.2193L15.749 15H23.9169L29.5552 23.3074L36.0759 15ZM34.6885 38.3606H36.8825L22.7231 17.5014H20.371L34.6885 38.3606Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={45}
                      viewBox="0 0 50 50"
                    >
                      {/* Orange Circle Background */}
                      <circle cx={25} cy={25} r={25} fill="#f77f00" />
                      {/* White Email Icon */}
                      <path
                        fill="#ffffff"
                        d="M12 15a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3H12zm-1 3c.18.145.357.283.53.4l12.16 8.476a2 2 0 0 0 2.62 0L39 18.4c.173-.117.35-.255.53-.4v14a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V18zm14 7L11.87 16H38.13L25 25z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      viewBox="0 0 56 55"
                      fill="none"
                    >
                      <rect
                        x="0.874023"
                        width="54.6021"
                        height={55}
                        rx="27.301"
                        fill="#CB2027"
                      />
                      <path
                        d="M28.6204 12C24.9247 12.0245 21.3524 13.3374 18.5147 15.7141C15.677 18.0908 13.7503 21.3835 13.0642 25.0289C12.3781 28.6742 12.9753 32.4456 14.7537 35.6977C16.532 38.9498 19.3809 41.4805 22.813 42.8567C22.5823 41.3418 22.5823 39.8004 22.813 38.2855L24.6925 30.285C24.3954 29.5603 24.2473 28.7829 24.257 27.9993C24.257 25.7819 25.5436 24.113 27.1383 24.113C27.4271 24.1086 27.7134 24.1669 27.9776 24.2839C28.2418 24.4009 28.4777 24.5739 28.6691 24.791C28.8605 25.0081 29.0029 25.2641 29.0865 25.5416C29.1701 25.8191 29.193 26.1114 29.1536 26.3986C29.1536 27.2829 28.7926 28.4531 28.415 29.6799C28.208 30.3564 27.9944 31.0513 27.8321 31.7245C27.7339 32.0783 27.7221 32.4507 27.7977 32.8101C27.8733 33.1695 28.0341 33.5054 28.2664 33.7892C28.4988 34.0729 28.7958 34.2963 29.1325 34.4404C29.4691 34.5845 29.8353 34.645 30.2002 34.6168C33.0236 34.6168 35.2094 31.6098 35.2094 27.2912C35.2373 26.4135 35.0828 25.5396 34.7557 24.7251C34.4286 23.9106 33.936 23.1735 33.3095 22.5606C32.6829 21.9478 31.936 21.4727 31.1164 21.1655C30.2969 20.8584 29.4225 20.726 28.5492 20.7768C27.6166 20.7365 26.6857 20.8866 25.8126 21.218C24.9395 21.5494 24.1426 22.0552 23.4699 22.7048C22.7972 23.3544 22.2629 24.1343 21.8992 24.9972C21.5355 25.8601 21.3501 26.7881 21.3541 27.7251C21.3421 29.0303 21.7408 30.306 22.4934 31.3704C22.5482 31.4314 22.5872 31.5051 22.6068 31.5848C22.6264 31.6646 22.6262 31.7479 22.606 31.8275C22.4818 32.3312 22.2085 33.4283 22.1622 33.6444C22.1175 33.8605 21.9237 33.9985 21.6273 33.8605C19.6352 32.9246 18.3949 30.0107 18.3949 27.6569C18.3949 22.6169 22.0496 17.9775 28.9267 17.9775C34.446 17.9775 38.7498 21.9304 38.7498 27.2231C38.7498 32.7302 35.3353 37.1634 30.4734 37.1634C29.7608 37.1876 29.0535 37.0331 28.4154 36.7138C27.7772 36.3945 27.2285 35.9206 26.8187 35.3349L25.8284 39.1415C25.3536 40.6203 24.6878 42.0303 23.8479 43.3354C25.3954 43.7958 27.0032 44.0194 28.6171 43.9987C32.8442 43.9987 36.8983 42.313 39.8873 39.3126C42.8764 36.3121 44.5556 32.2426 44.5556 27.9993C44.5556 23.7561 42.8764 19.6866 39.8873 16.6861C36.8983 13.6856 32.8442 12 28.6171 12"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      viewBox="0 0 50 50"
                    >
                      {/* LinkedIn Blue Circle Background */}
                      <circle cx={25} cy={25} r={25} fill="#0077B5" />
                      {/* White LinkedIn Logo */}
                      <path
                        fill="#ffffff"
                        d="M14 19h5v16h-5V19zm2.5-7c1.6 0 2.5 1.1 2.5 2.5S18.1 17 16.5 17s-2.5-1.1-2.5-2.5S14.9 12 16.5 12zm7 7h4.7v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V35h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V35h-5V19z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      viewBox="0 0 50 50"
                    >
                      {/* WhatsApp Green Circle Background */}
                      <circle cx={25} cy={25} r={25} fill="#25D366" />
                      {/* White WhatsApp Logo */}
                      <path
                        fill="#ffffff"
                        d="M35.6 14.5a13.8 13.8 0 0 0-9.6-4A14 14 0 0 0 12 31.9l-1.8 6.7 6.8-1.8a14 14 0 0 0 6.6 1.7h.1c7.7 0 14-6.3 14-14a13.8 13.8 0 0 0-4.1-9.9zm-9.7 22.4a11.7 11.7 0 0 1-6.1-1.7l-4.4 1.2 1.2-4.3a11.8 11.8 0 0 1-1.7-6 11.6 11.6 0 0 1 3.5-8.2c2.2-2.2 5.2-3.5 8.2-3.5a11.6 11.6 0 0 1 8.2 3.5c2.2 2.2 3.5 5.2 3.5 8.2s-1.3 6-3.5 8.2c-2.2 2.2-5.2 3.5-8.2 3.5zm6.4-9c-.4-.2-2.5-1.2-2.9-1.3s-.7-.2-1 .2c-.3.4-1.2 1.3-1.5 1.5s-.5.2-.9 0a9.8 9.8 0 0 1-5-4.4c-.4-.8.4-.8 1-2s.1-1.2 0-1.6c-.2-.4-1-2.5-1.3-3.4-.3-.8-.7-.7-1-.7h-1a2 2 0 0 0-1.4.7c-.4.4-1.8 1.7-1.8 4.2s1.9 4.9 2.2 5.3c.3.3 3.7 5.9 9 7.9 4.4 1.7 5.3 1.5 6.3 1.4 1-.1 3-1.2 3.4-2.4.5-1.2.5-2.1.3-2.3-.2-.2-.5-.3-1-.6z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={46}
                      height={45}
                      viewBox="0 0 50 50"
                    >
                      {/* Telegram Blue Circle Background */}
                      <circle cx={25} cy={25} r={25} fill="#0088CC" />
                      {/* White Telegram Paper Plane Logo */}
                      <path
                        fill="#ffffff"
                        d="M38.5 12.3c-.3-.3-.8-.3-1.3-.2 0 0-22.7 8.9-24.3 9.6-1.6.7-1.6 1.6-1.6 1.9s.5 1 .9 1.1c.4.1 2.2.7 2.8.9.6.2 1.5 0 2.2-.6 2.8-2.5 7.2-6.1 7.4-6.2.2-.2.4 0 .3.2s-5.7 5.1-6.6 5.9c-.8.7-.6 1.4 0 1.9.6.5 4.6 3.4 5.3 3.9.7.5 1.4.4 2-.3s2.8-8.2 3.3-10.5c.5-2.2.9-3.7.4-4.2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="horizental-line">
                <div className="d-flex justify-content-end my-5">
                  <div className="align-items-center d-flex justify-content-between end-justice">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <rect width={22} height={22} fill="white" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width={9}
                          height={9}
                          fill="white"
                          stroke="#696868"
                        />
                        <rect
                          x="12.5"
                          y="0.5"
                          width={9}
                          height={9}
                          fill="white"
                          stroke="#696868"
                        />
                        <rect
                          x="0.5"
                          y="12.5"
                          width={9}
                          height={9}
                          fill="white"
                          stroke="#696868"
                        />
                        <rect
                          x="12.5"
                          y="12.5"
                          width={9}
                          height={9}
                          fill="white"
                          stroke="#696868"
                        />
                      </svg>
                    </a>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div>
                        <p className="m-0 p-0 order text-end">Older</p>
                        <p className="m-0 p-0 achar">মৌসুমি আচার</p>
                      </div>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={33}
                          height={33}
                          viewBox="0 0 33 33"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width={32}
                            height={32}
                            rx="15.5"
                            stroke="#818181"
                          />
                          <path
                            d="M12.375 8.25L20.625 16.5L12.375 24.75"
                            stroke="#818181"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form  */}
          <div className="comment-section p-3">
            <div className="comment-form">
              <h3 className="form-title">LEAVE A REPLY</h3>
              <p className="privacy-notice colors my-4">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label required">
                    Comment&nbsp;*
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows={6}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label required">
                      Name&nbsp;*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label required">
                      Email&nbsp;*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="website" className="form-label required">
                    Website&nbsp;*
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="website"
                    required=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="saveInfo"
                  />
                  <label className="form-check-label" htmlFor="saveInfo">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button type="submit" className="btn btn-comment my-4">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="right-side d-none d-lg-block col-12 col-lg-4">
          <div className="right-side-container">
            <div className="search-container">
              <form className="search-form">
                <label htmlFor="comment" className="form-label required">
                  search
                </label>
                <div className="d-flex align-items-center">
                  <input
                    className="form-control me-1"
                    type="search"
                    aria-label="Search"
                  />
                  <button className="btn-search">Serach</button>
                </div>
              </form>
              <hr className="my-4" />
              <div>
                <h3 className="right-bold">Recent Posts</h3>
                <a className="right-normal">বেলোনা ঘি এর বৈশিষ্ট্য</a>
                <a className="right-normal">মৌসুমি আচার</a>
                <a className="right-normal">
                  প্রাকৃতিক মিষ্টান্ন এর কার্যকারিতা
                </a>
              </div>
              <hr />
              <div>
                <h3 className="right-bold">Recent Comments</h3>
                <a className="right-normal">No comments to show.</a>
              </div>
              <div>
                <h3 className="right-bold">Archives</h3>
                <a className="right-normal">September 2024</a>
                <a className="right-normal">December 2023</a>
              </div>
              <hr />
              <div>
                <h3 className="right-bold">Categories</h3>
                <a className="right-normal">Ghee</a>
                <a className="right-normal">Kitchen Essentials</a>
                <a className="right-normal">Natural Sweetner</a>
                <a className="right-normal">Pickle</a>
              </div>
              <hr />
              <div>
                <h3 className="right-bold">Categories</h3>
                <a className="right-normal">Ghee</a>
                <a className="right-normal">Kitchen Essentials</a>
                <a className="right-normal">Natural Sweetner</a>
                <a className="right-normal">Pickle</a>
              </div>
              <hr />
              <h3 className="right-bold">Recent Comments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product details section end */}
</main>

  )
}
