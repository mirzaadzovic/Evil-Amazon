import React from "react";
import "./Home.css";
import amazonBanner from "../../assets/amazonBanner.jpg";
import Product from "../product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonBanner} alt="amazon-banner" />
        <div className="home__row">
          <Product
            id="123"
            title={"Female bestsellers pack: Boost your ego Businesses"}
            price={"19.99"}
            img={"https://m.media-amazon.com/images/I/61ii0vPLUlL.jpg"}
            rating={4}
          />
          <Product
            id="456"
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="789"
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
            rating={5}
          />
          <Product
            id="qwe"
            title={"Female bestsellers pack: Boost your ego Businesses"}
            price={"19.99"}
            img={"https://m.media-amazon.com/images/I/61ii0vPLUlL.jpg"}
            rating={4}
          />
          <Product
            id="rtz"
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="sfgs"
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
