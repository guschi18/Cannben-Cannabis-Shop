import  {Card, Rate}from "antd";
import { Link } from "react-router-dom";
import"./Results.css";
import {produkte} from "../Produkte.js";

function Results({category, rating, priceMin, priceMax}) {

const produkteCategory = produkte[category].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
    console.log(produkteCategory);
    return (
        <>
        {produkteCategory.map((e,i) => {
          return (
            <Card>
            <div style={{ display: "flex" }}>
              <img src={e.image} alt={i} width="300px"></img>
              <div>
                <p className="title">
                  {e.Name}
                </p>
                <Rate value={e.rating} disabled={true}></Rate>
                <h2> €{e.price}</h2>
                <p>
                  Versandkosten nur innerhalb Deutschland
                </p>
                <Link to="/product" state={e} className="login">
                Zum Produkt
              </Link>
              </div>
            </div>
          </Card>
          );
        })}
        </>
        )
      }
      
      export default Results