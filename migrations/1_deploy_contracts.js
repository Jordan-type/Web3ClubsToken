const Web3ClubsToken = artifacts.require("Web3ClubsToken");

module.exports = function(deployer) {
  deployer.deploy(Web3ClubsToken);
};
