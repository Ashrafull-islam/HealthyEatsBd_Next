"use client"
import React from 'react'
import { useEffect, useState } from 'react'

export default function StoreCard() {
   const [cardData, setCardData] = useState([]);
    
      useEffect(() => {
        fetch('/data.json')
          .then(res => res.json())
          .then(data => setCardData(data))
          .catch(err => console.error("Failed to fetch data:", err));
      }, []);
  return (
    <div>
      {
        cardData.map(card => {
          return (
            <a href="/product.html" className="text-decoration-none" key={card.id}>
              <div className="card store-card text-center position-relative">
                <div className="card-img">
                  <img
                    src={card.image}
                    alt="cardimage"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="new-badge">{card.badge}</div>
                <h6 className="chocolate-p my-1 p-0">
                  {card.title} - {card.subtitle}
                </h6>
                <p className="price text-center mb-2 p-0">৳ {card.priceRange} </p>
                <div>
                  <button className="card-btn card-btn-completed" />
                </div>
                <div className="hover-icon position-absolute d-flex flex-column">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-heart my-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
            </a>
          );
        })
      }
    </div>
  )
}
