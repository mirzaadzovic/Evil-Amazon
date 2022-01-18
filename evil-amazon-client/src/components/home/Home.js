import React from "react";
import "./Home.css";
import amazonBanner from "../../assets/amazonBanner.jpg";
import Product from "../product/Product";
function Home() {
  return (
    <div class="home">
      <div className="home__container">
        <img className="home__image" src={amazonBanner} alt="amazon-banner" />
        <div className="home__row">
          <Product
            title={"Female bestsellers pack: Boost your ego Businesses"}
            price={"19.99"}
            img={"https://m.media-amazon.com/images/I/61ii0vPLUlL.jpg"}
          />
          <Product
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
          />
          <Product
            title={"Alexa - Making random noises at 3 AM and freaks you out"}
            price={"49.99"}
            img={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
            }
          />
        </div>

        <div className="home__row"></div>

        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
