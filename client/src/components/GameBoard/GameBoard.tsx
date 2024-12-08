import { Category } from "@mui/icons-material";
import FlashCard from "../FlashCard/FlashCard";
import { useState } from "react";
import GameFilter from "../GameFilter/GameFilter";

type Props = {};

const FlashCards = (props: Props) => {
  const [categoryChoosen, setCategoryChoosen] = useState(false);
  const [gameDetails, setGameDetails] = useState();

  return <div>{categoryChoosen ? <FlashCard /> : <GameFilter />}</div>;
};

export default FlashCards;
