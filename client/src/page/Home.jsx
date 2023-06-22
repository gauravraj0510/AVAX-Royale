import React, { useState } from "react";
import { CustomInput, PageHOC, CustomButton } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeholder="Enter your player's name..."
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton title="Register" handleClick={() => {}} restStyles="mt-6" />
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
