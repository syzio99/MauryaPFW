import React, { Component } from 'react'
import Icon1 from "../../images/Icon1.png";
import { Button } from "../ButtonElements";
import { FaGithubAlt } from "react-icons/fa";

export class Portfolios extends Component {
  render() {
    return (
        <div>
        <div className="row text-center">
          <div className="col-md m-2 services services-down">
            <div className="card border-0 bg-gradient bg-light">
              <img
                src={Icon1}
                class="card-img services-images"
                // style={{ width: "18rem" }}
                alt="..."
              />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content
                  is a little bit longer.
                </p>
                <a href="/" className="SocialIconLink">
                  <FaGithubAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md m-2 services services-down">
            <div className="card  border-0 bg-gradient bg-light">
              <img
                src={Icon1}
                class="card-img services-images"
                // style={{ width: "18rem" }}
                alt="..."
              />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content
                  is a little bit longer.
                </p>
                <a href="/" className="SocialIconLink">
                  <FaGithubAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md m-2 services services-down">
            <div className="card  border-0 bg-gradient bg-light">
              <img
                src={Icon1}
                class="card-img services-images"
                // style={{ width: "18rem" }}
                alt="..."
              />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content
                  is a little bit longer.
                </p>
                <a href="/" className="SocialIconLink">
                  <FaGithubAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row  portfolio-button-wrapper">
          <Button
            onClick={() =>
              window.open("https://github.com/syzio99", "_blank")
            }
            target="_blank"
            smooth={true}
            spy={true}
            exact="true"
            offset={-80}
            primary={true ? 1 : 0}
            // dark= {true ? 1 : 0}
            big={true}
          >
            See More Protfolio{" "}
          </Button>
        </div>
      </div>
    )
  }
}

export default Portfolios