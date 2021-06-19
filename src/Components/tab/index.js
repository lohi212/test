import React, { useEffect, useState } from "react";
// import { Tab } from "semantic-ui-react";
import cx from "classnames";
import { CATEGORIES } from "../../constants";
import CardList from "../cardlisting";
import "./tab.css";

function generatePanes() {
  const panes = [];
  const plans = Object.keys(CATEGORIES);
  plans.forEach((plan) => {
    panes.push({
      menuItem: plan,
      plans: CATEGORIES[plan]
    });
  });

  return panes;
}

function getSelectedPlan() {
  const selectedPlan = localStorage.getItem('plan');
  return selectedPlan || 2;
}

const TabExampleTabularFalse = () => {
  const [activeIndex, setActiveIndex] = useState(getSelectedPlan());

  useEffect(() => {
    localStorage.setItem('plan', activeIndex);
  }, [activeIndex]);

  const panes = generatePanes();

  return (
    <>
      <div className="tab-container">
        {panes.map((pane, index) => (
          <div
            className={cx("pane", {
              "pane-active": parseInt(activeIndex) === index
            })}
            role="button"
            onClick={() => setActiveIndex(index)}
          >
            {pane?.menuItem}
          </div>
        ))}
      </div>
      <CardList plans={panes[activeIndex].plans}/>
    </>
  );
};

export default TabExampleTabularFalse;
