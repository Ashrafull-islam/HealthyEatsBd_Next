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
        <h1 className="banner-header">My account</h1>
        <div className="d-flex gap-2 justify-content-center">
          <p className="banner-home ">
            <a className="raf-tag" href="#">
              Home
            </a>
          </p>
          <span>/</span>
          <p className="banner-store ">
            <a className="raf-tag" href="#">
              My account
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* form section start  */}
  <section>
    <div className="login-container my-5">
      <h2>LOGIN</h2>
      <form>
        <div className="mb-3 my-4">
          <label htmlFor="username" className="form-label required">
            Username or email address
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label required">
            Password
          </label>
          <div className="password-field">
            <input
              type="password"
              className="form-control"
              id="password"
              required={true}
            />
            <button
              type="button"
              className="password-toggle"
              onclick="togglePassword()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-login text-white">
          LOG IN
        </button>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <a href="#" className="forgot-password">
            Lost your password?
          </a>
        </div>
      </form>
    </div>
  </section>
  {/* form section end  */}
</main>

  )
}
