import React, { useState, useEffect } from "react";
import { CustomInput, PageHOC, CustomButton } from "../components";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const createPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);
      if (playerExists && playerTokenExists) navigate("/create-battle");
    };

    if (contract) createPlayerToken();
  }, [contract]);

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName);
        setShowAlert({
          status: true,
          type: "info",
          message: `${playerName} is being summoned!`,
        });
      }
    } catch (error) {
      console.log(error.message);
      setShowAlert({
        status: true,
        type: "failure",
        message: "Somethin went wrong! Please try again!",
      });
    }
  };
  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeholder="Enter your player's name..."
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
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
