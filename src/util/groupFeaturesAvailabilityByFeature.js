export function groupFeaturesAvailabilityByFeature(pricingPlan) {
  const groupedFeatures = {};
  pricingPlan.forEach(plan => {
    plan.features.forEach(feature => {
      if (!groupedFeatures[feature.name]) {
        groupedFeatures[feature.name] = [];
      }
      groupedFeatures[feature.name].push({
        name: plan.name,
        isAvailable: feature.isAvailable
      });
    });
  });
  return groupedFeatures;
}
