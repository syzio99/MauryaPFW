import React from "react";
import { Button } from "../ButtonElements";
import PortfolioCard from "./PortfolioCard";
import {
  PortfolioCardOne,
  PortfolioCardTwo,
  PortfolioCardThree,
} from "./PortfolioCardData";

export default function Portfolios() {
  return (
    <div className="container portfolio-container ">
      <div className="row text-center">
        <div className="col-md mb-3">
          <PortfolioCard {...PortfolioCardOne} />
        </div>
        <div className="col-md mb-3">
          <PortfolioCard {...PortfolioCardTwo} />
        </div>
        <div className="col-md mb-3">
          <PortfolioCard {...PortfolioCardThree} />
        </div>
      </div>
      <div className="row  portfolio-button-wrapper">
        <Button
          onClick={() => window.open("https://github.com/syzio99", "_blank")}
          target="_blank"
          smooth={true}
          spy={true}
          exact="true"
          offset={-80}
          primary={true ? 1 : 0}
        >
          See More Protfolio{" "}
        </Button>
      </div>
    </div>
  );
}
