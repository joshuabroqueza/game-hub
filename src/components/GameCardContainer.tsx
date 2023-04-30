import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box width="100%" borderRadius={10} overflow={"hidden"}></Box>;
};

export default GameCardContainer;
