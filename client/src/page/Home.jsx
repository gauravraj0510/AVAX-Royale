import React from "react";
import { PageHOC } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const {} = useGlobalContext();
  return (
    <div>
      <h1 className="text-xl text-white"></h1>
    </div>
  );
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
