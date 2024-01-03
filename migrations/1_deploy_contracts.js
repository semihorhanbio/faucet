const MyContract = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
