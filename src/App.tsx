import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" bg={"gold"}>
        Aside
      </GridItem>
      </Stack>
      
      <GridItem area="main" bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
