import React,{ useState } from "react";
import Card from "../card";
import "./cardlist.css";
import Modal from "../modal";
import PlanForm from "../planform";

function CardList({ plans }) {
  const [open, setOpen] = useState(false);
  const [selectedPlan,setSelectedPlan] = useState("");
  
  function toggle() {
    setOpen(!open);
  }

  function onPlanSelected(plan) {
    setSelectedPlan(plan);
    toggle();
    
  }

  return (
    <div className="cardlist-container">
      {
        plans?.plans.map(plan => <Card 
          plan={plan} onClick={e => onPlanSelected(plan)} 
          highlightedCard={plans?.mostPopular === plan?.planName}
        />
      )
      }
      <Modal 
        showModal={open}
        onModalClose={toggle}
      >
        <PlanForm 
          selectedPlan={selectedPlan}
          onSubmit={toggle}
        />
      </Modal>
    </div>

  );
}

export default CardList;
