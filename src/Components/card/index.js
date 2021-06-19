import React from "react";
import cx from 'classnames';

import "./card.css";

function Card({ plan, onClick, highlightedCard }) {
  return (
    <div style={{ width: 250 }}>
      {
        highlightedCard && (
          <p className="most-popular-label">Most Popular</p>
        )
      }
      <div className="card-container">
        <div className="title-container">
          <p>{plan.planName}</p>
        </div>
        <div className="details">
          <p className="pricing-details-text price">${plan.priceLiveTransfer}</p>
          <p className="pricing-details-text">Per Qualified Lead</p>
        </div>
        <div className="details">
          <p className="pricing-details-text">Qualified Leads Per Month</p>
          <p className="pricing-details-text">{plan.qualifiedLeads}</p>
        </div>
        <div className="details no-border">
          <p className="pricing-details-text">Platform Fee Per Month</p>
          <p className="pricing-details-text">{plan.totalPlatformPrice}</p>
        </div>
        <div className="title-container">
          <p>${plan.totalQualifiedLeadPrice} / mo</p>
        </div>
      </div>
      <button 
        className={cx(
          "free-trial-button",
          {
            "free-trial-button-active": highlightedCard,
          }
        )} 
        onClick={onClick}
      >Start your free trial</button>
    </div>

  );
}

export default Card;
