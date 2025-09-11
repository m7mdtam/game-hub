import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} alt="logo" boxSize="45px" />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
