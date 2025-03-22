import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">WELCOME TO THE FOOD DELIVERY APP</h1>
      <img src="food img4.jpg" alt="Food Delivery" className="hero-image"/>
      
      {/* Internal CSS */}
      <style jsx>{`
        .home-container {
          text-align: center;
          background-color: rgba(100,100,100);
          padding: 2rem;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
        }

        .hero-image {
          width: auto;
          height: 700px;
          max-width: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Home;
