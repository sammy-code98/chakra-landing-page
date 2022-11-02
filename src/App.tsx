import React, { useRef } from "react"
import {
  ChakraProvider,
  Box,
  theme,
  useDisclosure
} from "@chakra-ui/react"
import { Nav, DrawerComponent, HeroComponent } from "./components"


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()

  return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
        <Nav ref={btnRef} onOpen={onOpen} />

        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        <HeroComponent />
    </Box>
  </ChakraProvider>
)
}

export default App
