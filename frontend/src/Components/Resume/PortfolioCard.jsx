import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import Flip from 'react-reveal/Flip';

export default function PortfolioCard({
  CardImage,
  OverlayTitle,
  OverlayData,
  ReporLink,
}) {
  return (
    <Flip left>
    <div>
      <div className="Portfolio-card">
        <img src={CardImage} className="portfolio-card-image img-fluid" alt="..." />
        <div className="portfolio-card-overlay">
          <div className="portfolio-overlay-title">
            <h5>{OverlayTitle}</h5>
            <p >{ OverlayData}</p>
            <a href={ReporLink} className="Portfolio-overlay-icon">
              <FaGithubAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
    </Flip>

  );
}
