import React from "react";
import { FaGithubAlt } from "react-icons/fa";

export default function PortfolioCard({
  CardImage,
  OverlayTitle,
  OverlayData,
  ReporLink,
}) {
  return (
    <div>
      <div className="Portfolio-card">
        <img src={CardImage} className="portfolio-card-image" alt="..." />
        <div className="portfolio-card-overlay">
          <div className="portfolio-overlay-title">
            <h5>{OverlayTitle}</h5>
            <a href={ReporLink} className="Portfolio-overlay-icon">
              <FaGithubAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
