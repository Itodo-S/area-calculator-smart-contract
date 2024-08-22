const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AreaCalculatorModule", (m) => {
  // Deploy the AreaCalculator contract
  const areaCalculator = m.contract("AreaCalculator");

  // Return the deployed contract so it can be accessed later
  return { areaCalculator };
});
