
// import SwiperCard from '@/app/components/SwiperCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Page({ params }) {
  const { id } = params;
  console.log(id)

  const res = await fetch(`http://localhost:3000/data.json`);
  const data = await res.json();
  console.log(data);

  const Products = data.find(item => item.id == id);
  console.log(Products)


  if (!Products) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {
  Products && (
    <div key={Products.id}>
      <section className="product-container py-5">
    <div className="row">
      {/* Product Gallery */}
      <div className="col-md-6">
        <div className="product-gallery">
          <div className="side-img d-flex flex-column gap-3 d-none d-lg-block">
           <img
  src={Products.image}
  alt="Chocolate Peanut Butter Main Image"
  decoding="async" // Correct
  loading="lazy"
/>
<Image
  src={`/${Products.image}`} // prepend with a slash
  width={500}
  height={500}
  alt="Product Image"
/>

           <img
  src={Products.image}
  alt="Chocolate Peanut Butter Main Image"
  decoding="async" // Correct
  loading="lazy"
/>

           <img
  src={Products.image}
  alt="Chocolate Peanut Butter Main Image"
  decoding="async" // Correct
  loading="lazy"
/>

          </div>
          <div className="main-image-container">
            <img
              src={Products.image}
              alt="Chocolate Peanut Butter Main Image"
              decorating="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Product Details */}
      <div className="col-md-6 px-4 md:px-0">
        <div aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Breakfast &amp; Snacks</a>
            </li>
            <li className="breadcrumb-item active d-none d-lg-block">
             {Products.title}
            </li>
            <li className="breadcrumb-item d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 23 25"
                fill="none"
              >
                <path
                  d="M14.4182 6.25L8.70947 12.5L14.4182 18.75"
                  stroke="black"
                  strokeWidth="0.99"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 22 22"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width={9}
                  height={9}
                  fill="white"
                  stroke="black"
                />
                <rect
                  x="12.5"
                  y="0.5"
                  width={9}
                  height={9}
                  fill="white"
                  stroke="black"
                />
                <rect
                  x="0.5"
                  y="12.5"
                  width={9}
                  height={9}
                  fill="white"
                  stroke="black"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width={9}
                  height={9}
                  fill="white"
                  stroke="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 23 25"
                fill="none"
              >
                <path
                  d="M8.70947 6.25L14.4182 12.5L8.70947 18.75"
                  stroke="black"
                  strokeWidth="0.99"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ol>
        </div>
        <h1 className="chocolate-head">
        {Products.title}-{Products.subtitle}
        </h1>
        <div className="d-flex gap-2">
          <h2 className="price mb-4 text-decoration-line-through">৳ 1300</h2>
          <h2 className="h3 mb-4">৳ 1190</h2>
        </div>
        <div className="product-description my-2">
          <p>
            পরিচয় করিয়ে দিচ্ছি আমাদের ব্যতিক্রমধর্মী {Products.subtitle}রের সাথে যা অতি
            যত্ন সহকারে প্রাকৃতিক উপাদান দিয়ে সম্পূর্ণ ঘরোয়া পরিবেশে তৈরি। পিনাট
            বাটার প্রস্তুতের জন্য আমরা <strong>ভাজা চিনাবাদামকে</strong> ব্লেন্ড
            করে <strong>লিচু ফুলের মধুর</strong> সাথে মিশ্রিত করি, যা পিনাট
            বাটারকে করে তোলে সুমিষ্ট ও সুঘ্রাণযুক্ত। এর সাথে আরও যোগ করা হয়
            বাজারের সবচাইতে
            <strong>
              প্রিমিয়াম কোয়ালিটির ডার্ক চকোলেট , হিমালয়ান পিংক সল্ট এবং এক্সট্রা
              ভার্জিন অলিভ অয়েল,
            </strong>{" "}
            যা আমাদের পিনাট বাটারকে করে তোলে পুষ্টিকর ও সুস্বাদু।
          </p>
        </div>
        <div className="mb-4">
          <div className="weight-select active">500gm</div>
          <div className="weight-select">1000gm</div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="quantity-selector me-3">
            <button>-</button>
            <input
              className="border"
              type="text"
              defaultValue={1}
              readOnly=""
            />
            <button>+</button>
          </div>
          <button className="btn btn-cart me-2">ADD TO CART</button>
          <a href="/checkout.html" className="btn btn-buy text-decoration-none">
            BUY NOW
          </a>
        </div>
        <a
          href="#"
          className="wishlist-link d-inline-flex align-items-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-heart me-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          Add to Wishlist
        </a>
        <hr />
        <div className="product-info mb-4">
          <p>
            <strong>SKU:</strong> 02-CPB-500
          </p>
          <p>
            <strong>Categories:</strong> Breakfast &amp; Snacks, New Arrivals,
            Nuts &amp; Seeds
          </p>
          <p className="d-flex align-items-center gap-2">
            <strong>Share:</strong>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M7.91508 5.13187V7.53637H6.15283V10.4764H7.91508V19.2141H11.5323V10.4772H13.9605C13.9605 10.4772 14.188 9.06762 14.2982 7.52587H11.5472V5.51512C11.5472 5.215 11.941 4.81075 12.3312 4.81075H14.3035V1.75H11.6225C7.82496 1.75 7.91508 4.69262 7.91508 5.13187Z"
                  fill="#818181"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_235_2973)">
                  <path
                    d="M15.75 0.9375H18.8175L12.1175 8.615L20 19.0625H13.8287L8.995 12.725L3.46375 19.0625H0.395L7.56125 10.85L0 0.9375H6.32875L10.6975 6.72875L15.75 0.9375ZM14.675 17.2225H16.375L5.40375 2.68125H3.58125L14.675 17.2225Z"
                    fill="#818181"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_235_2973">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_235_2975)">
                  <path
                    d="M0 8V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V8L10 12L0 8Z"
                    fill="#818181"
                  />
                  <path
                    d="M2 2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4L0 6L10 10L20 6V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2H2Z"
                    fill="#818181"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_235_2975">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.9404 2.17725C8.89467 2.19076 6.91719 2.91478 5.34635 4.22541C3.7755 5.53605 2.70894 7.35184 2.32916 9.36208C1.94937 11.3723 2.27998 13.4521 3.26439 15.2455C4.24881 17.0388 5.82586 18.4344 7.72568 19.1933C7.59799 18.3579 7.59799 17.5079 7.72568 16.6725L8.7661 12.2606C8.60168 11.861 8.51968 11.4322 8.52502 11.0002C8.52502 9.77733 9.23727 8.857 10.12 8.857C10.2799 8.85457 10.4383 8.88673 10.5846 8.95127C10.7308 9.01581 10.8614 9.1112 10.9674 9.23091C11.0733 9.35062 11.1522 9.49181 11.1984 9.64482C11.2447 9.79783 11.2574 9.95905 11.2356 10.1174C11.2356 10.6051 11.0358 11.2504 10.8268 11.9269C10.7122 12.3 10.5939 12.6832 10.5041 13.0544C10.4497 13.2495 10.4432 13.4549 10.485 13.6531C10.5269 13.8513 10.6159 14.0365 10.7445 14.193C10.8731 14.3495 11.0376 14.4727 11.2239 14.5521C11.4102 14.6316 11.613 14.6649 11.8149 14.6494C13.3778 14.6494 14.5878 12.9912 14.5878 10.6097C14.6033 10.1256 14.5178 9.6437 14.3367 9.19456C14.1556 8.74542 13.883 8.33892 13.5361 8.00096C13.1893 7.663 12.7758 7.40099 12.3222 7.23162C11.8685 7.06226 11.3845 6.98925 10.901 7.01725C10.3848 6.99504 9.86945 7.07782 9.38616 7.26058C8.90287 7.44333 8.46169 7.72226 8.08934 8.08048C7.71698 8.4387 7.42119 8.86875 7.21987 9.34461C7.01855 9.82046 6.91589 10.3322 6.9181 10.8489C6.91149 11.5687 7.13219 12.2722 7.54877 12.8592C7.57912 12.8928 7.60069 12.9334 7.61156 12.9774C7.62244 13.0214 7.62228 13.0673 7.6111 13.1112C7.54235 13.389 7.3911 13.994 7.36543 14.1132C7.34068 14.2323 7.23343 14.3084 7.06935 14.2323C5.9666 13.7162 5.28002 12.1093 5.28002 10.8113C5.28002 8.032 7.3031 5.47358 11.11 5.47358C14.1653 5.47358 16.5477 7.65341 16.5477 10.5721C16.5477 13.609 14.6575 16.0537 11.9662 16.0537C11.5717 16.0671 11.1802 15.9819 10.8269 15.8058C10.4737 15.6297 10.1699 15.3684 9.9431 15.0454L9.39493 17.1446C9.13207 17.9601 8.76349 18.7376 8.2986 19.4573C9.15523 19.7112 10.0452 19.8345 10.9386 19.8231C13.2786 19.8231 15.5227 18.8935 17.1773 17.2389C18.832 15.5843 19.7615 13.3401 19.7615 11.0002C19.7615 8.66018 18.832 6.41604 17.1773 4.76142C15.5227 3.1068 13.2786 2.17725 10.9386 2.17725"
                  fill="#818181"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.85734 7.474H10.9523V9.01567C11.3982 8.129 12.5415 7.33234 14.259 7.33234C17.5515 7.33234 18.3332 9.09734 18.3332 12.3357V18.3332H14.9998V13.0732C14.9998 11.229 14.554 10.189 13.419 10.189C11.8448 10.189 11.1907 11.3098 11.1907 13.0723V18.3332H7.85734V7.474ZM2.1415 18.1915H5.47484V7.33234H2.1415V18.1915ZM5.95234 3.7915C5.95246 4.0709 5.89705 4.34753 5.78933 4.60533C5.6816 4.86312 5.52371 5.09693 5.32484 5.29317C5.12537 5.4916 4.88876 5.64878 4.62852 5.75574C4.36829 5.86269 4.08953 5.91732 3.80817 5.9165C3.24117 5.91523 2.69727 5.69174 2.29317 5.294C2.09509 5.09704 1.93778 4.86296 1.83025 4.60514C1.72272 4.34733 1.66708 4.07084 1.6665 3.7915C1.6665 3.22734 1.8915 2.68734 2.294 2.289C2.69709 1.88974 3.24165 1.66598 3.809 1.6665C4.37734 1.6665 4.92234 1.89067 5.32484 2.289C5.72734 2.68734 5.95234 3.22734 5.95234 3.7915Z"
                  fill="#818181"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M17.4627 4.50105C16.6222 3.65231 15.6212 2.97935 14.5179 2.52138C13.4147 2.06341 12.2314 1.82959 11.0369 1.83355C6.03189 1.83355 1.95273 5.91271 1.95273 10.9177C1.95273 12.5219 2.37439 14.0802 3.16273 15.4552L1.87939 20.1669L6.69189 18.9019C8.02106 19.626 9.51523 20.011 11.0369 20.011C16.0419 20.011 20.1211 15.9319 20.1211 10.9269C20.1211 8.49771 19.1769 6.21521 17.4627 4.50105ZM11.0369 18.471C9.68023 18.471 8.35106 18.1044 7.18689 17.4169L6.91189 17.2519L4.05189 18.0035L4.81273 15.2169L4.62939 14.9327C3.87548 13.7292 3.47524 12.3379 3.47439 10.9177C3.47439 6.75605 6.86606 3.36438 11.0277 3.36438C13.0444 3.36438 14.9419 4.15271 16.3627 5.58271C17.0664 6.28292 17.624 7.11588 18.0032 8.03326C18.3824 8.95065 18.5757 9.93421 18.5719 10.9269C18.5902 15.0885 15.1986 18.471 11.0369 18.471ZM15.1802 12.8244C14.9511 12.7144 13.8327 12.1644 13.6311 12.0819C13.4202 12.0085 13.2736 11.9719 13.1177 12.1919C12.9619 12.421 12.5311 12.9344 12.4027 13.081C12.2744 13.2369 12.1369 13.2552 11.9077 13.136C11.6786 13.026 10.9452 12.7785 10.0836 12.0085C9.40523 11.4035 8.95606 10.661 8.81856 10.4319C8.69023 10.2027 8.80023 10.0835 8.91939 9.96438C9.02023 9.86355 9.14856 9.69854 9.25856 9.57021C9.36856 9.44188 9.41439 9.34105 9.48773 9.19438C9.56106 9.03855 9.52439 8.91021 9.46939 8.80021C9.41439 8.69021 8.95606 7.57188 8.77273 7.11355C8.58939 6.67355 8.39689 6.72855 8.25939 6.71938H7.81939C7.66356 6.71938 7.42523 6.77438 7.21439 7.00355C7.01273 7.23271 6.42606 7.78271 6.42606 8.90105C6.42606 10.0194 7.24189 11.101 7.35189 11.2477C7.46189 11.4035 8.95606 13.6952 11.2294 14.676C11.7702 14.9144 12.1919 15.0519 12.5219 15.1527C13.0627 15.3269 13.5577 15.2994 13.9519 15.2444C14.3919 15.1802 15.2994 14.6944 15.4827 14.1627C15.6752 13.631 15.6752 13.1819 15.6111 13.081C15.5469 12.9802 15.4094 12.9344 15.1802 12.8244Z"
                  fill="#818181"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_235_2984)">
                  <path
                    d="M10 0.3125C4.64813 0.3125 0.3125 4.64875 0.3125 10C0.3125 15.3512 4.64875 19.6875 10 19.6875C15.3512 19.6875 19.6875 15.3512 19.6875 10C19.6875 4.64875 15.3512 0.3125 10 0.3125ZM14.7581 6.94938L13.1681 14.4419C13.0506 14.9731 12.7344 15.1019 12.2931 14.8519L9.87125 13.0669L8.70312 14.1919C8.57438 14.3206 8.465 14.43 8.215 14.43L8.38688 11.965L12.875 7.91C13.0706 7.73812 12.8319 7.64062 12.5737 7.8125L7.02688 11.3044L4.63625 10.5581C4.11688 10.3944 4.105 10.0387 4.74563 9.78875L14.0856 6.18688C14.5194 6.03063 14.8981 6.2925 14.7575 6.94875L14.7581 6.94938Z"
                    fill="#818181"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_235_2984">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
    <hr className="my-4" />
    {/* description text  */}
    <div className="description">
      <div className="borderless-accordion">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Description
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="chocolate-accordion">
                  <h3 className="Chocolate-bold my-2">{Products.subtitle}:</h3>
                  <p className="Chocolate-normal">
                    পরিচয় করিয়ে দিচ্ছি আমাদের ব্যতিক্রমধর্মী {Products.subtitle}রের সাথে
                    যা অতি যত্ন সহকারে প্রাকৃতিক উপাদান দিয়ে সম্পূর্ণ ঘরোয়া
                    পরিবেশে তৈরি। পিনাট বাটার প্রস্তুতের জন্য আমরা ভাজা
                    চিনাবাদামকে ব্লেন্ড করে লিচু ফুলের মধুর সাথে মিশ্রিত করি, যা
                    পিনাট বাটারকে করে তোলে সুমিষ্ট ও সুঘ্রাণযুক্ত। এর সাথে আরও
                    যোগ করা হয় বাজারের সবচাইতে প্রিমিয়াম কোয়ালিটির ডার্ক চকোলেট
                    , হিমালয়ান পিংক সল্ট এবং এক্সট্রা ভার্জিন অলিভ অয়েল, যা
                    আমাদের পিনাট বাটারকে করে তোলে পুষ্টিকর ও সুস্বাদু। আমরা
                    ‘হেলদি ইটস’ ব্র‍্যান্ড আমাদের গ্রাহকদের কাছে সব ধরনের
                    কৃত্রিম রাসায়নিক উপাদানমুক্ত পিনাট বাটার সরবরাহ নিশ্চিত করে
                    থাকি।
                  </p>
                  <h3 className="Chocolate-bold">
                    {Products.title}রের উপকারিতা:
                  </h3>
                  <ul>
                    <li className="Chocolate-normal">
                      <strong>শক্তি বাড়ায়:</strong> {Products.subtitle}রে প্রচুর
                      পরিমাণে ফ্যাট ও প্রোটিন আছে, যা শরীরকে দীর্ঘক্ষণ শক্তিশালী
                      রাখে।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>হৃদরোগের ঝুঁকি কমায়:</strong> এতে থাকা
                      মনোআনস্যাচুরেটেড ফ্যাট হৃদরোগের ঝুঁকি কমাতে সাহায্য করে।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>পেশী গঠনে সহায়তা করে:</strong> পিনাট বাটারে থাকা
                      প্রোটিন পেশী গঠনে গুরুত্বপূর্ণ ভূমিকা রাখে।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>খনিজ উপাদান:</strong> এতে বিদ্যমান হিমালয়ান পিংক
                      সল্টে প্রয়োজনীয় খনিজ উপাদান থাকে যা দেহের ইলেক্ট্রোলাইট
                      ভারসাম্য রক্ষা করে।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>ভিটামিন ও খনিজ পদার্থের উৎস:</strong>
                      পিনাট বাটারে ভিটামিন ই, ম্যাগনেসিয়াম ও অন্যান্য
                      গুরুত্বপূর্ণ খনিজ পদার্থ থাকে।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>ক্ষুধা নিয়ন্ত্রণ করে:</strong> এতে থাকা ফাইবার
                      দীর্ঘক্ষণ পেট ভরা রাখে এবং ক্ষুধা কমায়।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>
                        মস্তিষ্কের কার্যক্ষমতা ও স্মৃতিশক্তি বৃদ্ধি:
                      </strong>
                      {Products.subtitle} মস্তিষ্কের কার্যক্ষমতা ও স্মৃতিশক্তি বাড়ায়।
                      এছাড়াও এতে রয়েছে ট্রিপটোফেন নামক এমন একটি উপাদান যা আমাদের
                      মুড ভালো রাখে।
                    </li>
                  </ul>
                  <h3 className="Chocolate-bold">
                    {Products.subtitle}রের ব্যবহারঃ
                  </h3>
                  <ul>
                    <li className="Chocolate-normal">
                      <strong>সকালের নাস্তা / বাচ্চার টিফিন:</strong>
                      পাউরুটিতে পিনাট বাটার স্প্রেড করে সহজেই তৈরি করুন পুষ্টিকর
                      ও সুস্বাদু সকালের নাস্তা অথবা বাচ্চার টিফিন।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>স্মুদি তৈরী:</strong> ২ চামচ চকোলেট পিনাট বাটার,
                      এক গ্লাস দুধ এবং ২ চামচ মধু ব্লেন্ড করে খুব সহজেই তৈরি
                      করুন স্বাস্থ্যকর পিনাট বাটার স্মুদি।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>বেকিং:</strong> কেক, কুকিজ ইত্যাদি বেকিং করতে
                      যুক্ত করুন পিনাট বাটার।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>শিশুর খাবার:</strong> শিশুর খাবারে প্রোটিন,
                      ভিটামিন ও মিনারেলস যোগ করতে ব্যবহার করুন পিনাট বাটার।
                    </li>
                    <li className="Chocolate-normal">
                      <strong>স্ন্যাকস হিসেবে:</strong> কাজের ফাঁকে স্ন্যাকস
                      হিসেবে খেতে পারেন এক চামচ পিনাট বাটার। আপনি চাইলে সাথে
                      আখরোট, টোস্ট ইত্যাদির সাথেও খেতে পারেন।
                    </li>
                  </ul>
                  <h3 className="Chocolate-bold">
                    <strong>সতর্কতা:</strong>
                  </h3>
                  <p className="Chocolate-normal">
                    যাদের চিনাবাদামে এলার্জি আছে, তাদের পিনাট বাটার খাওয়ার আগে
                    সতর্কতা অবলম্বন করা উচিৎ।
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Additional information
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="Chocolate-weight"> Weight</h5>
                  <p className="Chocolate-normal">0.8 kg</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="Chocolate-weight">size</h5>
                  <p className="Chocolate-normal">400gm,800gm</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}


  {/* product details section end  */}
  <hr className="my-4" />
  {/* product card section start */}
  <section>
    <div className="other-container d-none d-lg-block my-5">
      <h3 className="product-head my-4">Related products</h3>
      {/* <SwiperCard></SwiperCard> */}
    </div>
  </section>
    </div>
  );
}
