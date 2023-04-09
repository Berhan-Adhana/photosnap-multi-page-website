import { useState } from "react";
import SnapCard from "../components/shared/SnapCard";
import PricingGrid from "../components/pricing/PricingGrid";
import InstalmentSwitch from "../components/pricing/InstalmentSwitch";
import ComparePrice from "../components/pricing/ComparePrice";
import CTA from "../components/common/CTA";
import { groupFeaturesAvailabilityByFeature } from "../util/groupFeaturesAvailabilityByFeature";
import { pricingData, pricingPlan } from "../data";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div>
      <SnapCard data={pricingData} bgIsBlack={true} />
      <div className="mt-[120px] ">
        <InstalmentSwitch isMonthly={isMonthly} handleChange={handleChange} />
        <PricingGrid plans={pricingPlan} isMonthly={isMonthly} />
      </div>
      <ComparePrice
        features={groupFeaturesAvailabilityByFeature(pricingPlan)}
      />
      <CTA />
    </div>
  );
};

export default Pricing;
