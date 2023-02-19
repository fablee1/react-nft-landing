import React from "react"
import home from "../assets/home.png"
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Already Launched</p>
          <h1 className="title">A PFP like no other</h1>
          <p className="description">
            Don't miss out on becoming an Alpha Room DAO PFP holder. Who knows what the
            Alpha will share with you?
          </p>
          <button>Buy</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
