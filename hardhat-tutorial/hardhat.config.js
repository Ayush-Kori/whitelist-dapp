require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = "https://small-falling-sanctuary.ethereum-goerli.discover.quiknode.pro/2d09b4fe6e115bd1a36d8eadf1701bf319d6e63c/" ;
const PRIVATE_KEY = "5db21ae90fd940594aa405feea3f8b58882e44bab01210d418b1db664a304eaf" ;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};