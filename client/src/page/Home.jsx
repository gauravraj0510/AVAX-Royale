import React from "react";
import { PageHOC } from "../components";

const Home = () => {
  return <div></div>;
};

export default PageHOC(
  Home,
  <>
    Welcome to AVAX Gods <br /> A Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> The ultimate Web3 battle card
    game.
  </>
);
