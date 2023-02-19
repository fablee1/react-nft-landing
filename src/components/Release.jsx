import React from "react"
import { BsArrowRight } from "react-icons/bs"
import release1 from "../assets/release1.png"
import release2 from "../assets/release2.png"
import Card from "./Card"

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Our first 1000 NFT's</h2>
          <p className="description">
            We have released our 1000 limited edition NFTs which can be bought via{" "}
            <a href="#">OpenSea and Blur</a>
          </p>
          <p className="description">
            There will be the only 1000 of these NFTs we ever make, so be sure not to miss
            out!
          </p>
          <p className="description">5% of proceeds go to creators.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Our second collection...</h2>
          <p className="description">
            Not much is known about this yet, but as an ALPHA ROOM DAO, we will share
            everything very soon, don't miss out!
          </p>
          <p className="description">Secret release, for our people.</p>
        </div>
      </div>
    </div>
  )
}
