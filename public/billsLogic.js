const garbageBills = 25.02;
const homeMaintenance = 267.33; 
const rentBills = 5000;

const waterTariff = 25.28;
const electricityTariff = 1.68;

const previousWaterValue = 579;
const currentWaterValue = 586;

const previousElectricityValue = 47947;
const currentElectricityValue = 48213;

function calculateTheCost(previousValue, currentValue, tariff) {
  return (currentValue - previousValue) * tariff;
}

function calculateFullCost(...costBills) {
  return costBills.reduce((totalValue, bill) => {
    return totalValue + bill;
  }, 0).toFixed(2);
}

const waterBill = calculateTheCost(previousWaterValue, currentWaterValue, waterTariff);
const electricityBill = calculateTheCost(previousElectricityValue, currentElectricityValue, electricityTariff);

