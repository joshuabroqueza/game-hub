import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformList from "./components/PlatformList";

export default function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        {/* <GridItem area="aside" bg="gold"> */}
        <GridItem area="aside" paddingX={5}>
          <GenreList />
          {/* <PlatformList /> */}
        </GridItem>
      </Show>
      {/* <GridItem area="main" bg="dodgerblue"> */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
