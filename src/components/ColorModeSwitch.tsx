import { HStack , Text, } from '@chakra-ui/react'
import { useColorMode,  } from "@/components/ui/color-mode"
import { Switch } from "@chakra-ui/react"

const ColorModeSwitch = () => {
      const { toggleColorMode , colorMode } = useColorMode()

  return (
<HStack>
    <Switch.Root colorPalette='green' onCheckedChange={toggleColorMode} checked={colorMode === "dark"}>
            <Switch.HiddenInput />
            <Switch.Control />
                <Switch.Label>Dark Mode</Switch.Label>
          </Switch.Root>
</HStack>  )
}

export default ColorModeSwitch