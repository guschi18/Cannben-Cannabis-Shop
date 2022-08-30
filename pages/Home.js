import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.jpg";
import Carousel2 from "../images/carousel2.jpg";
import Carousel3 from "../images/carousel3.jpg";
import Blüte1 from "../images/og.jpg";
import Öle from "../images/öle.jpg";
import Grinder from "../images/grinder.jpg";
import Paper from "../images/paper.jpg";
import Aktivkohlefilter from "../images/aktivkohlefilter.jpg";
import Roller from "../images/roller.jpg";



const carousel = [Carousel1, Carousel2, Carousel3];
const catCard = [Grinder, Paper, Aktivkohlefilter, Roller];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className='carousel'>
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
      </Carousel>
      <div className="cards">  
      <Card className="card">
        <h1>Auswahl unserer besten Blüten</h1>
        <img src={Blüte1} alt="Blüten" className="card-content1"></img>
        <br />
        <Link to="/categories" state={"Blüten"} className="link">
          Jetzt einkaufen
        </Link>
      </Card>
      <Card className="card">
        <h1>Auswahl unserer besten Öle</h1>
        <img src={Öle} alt="Öle" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Blüten"} className="link">
          Jetzt einkaufen
        </Link>
      </Card>
      <Card className="card">
        <h1>Unsere Kategorien</h1>
        <div className="card-content2">
          {catCard.map((e) => {
            return (
              <img
                src={e}
                alt="category"
                className="card-category"
                onClick={() => console.log("beauty")}
              ></img>
            );
          })}
          <br />
          <Link to="/categories" className="link">
            Zur Auswahl
          </Link>
        </div>
      </Card>
    </div>
    </div>
  </>
)
}

export default Home;
