import React, { useRef } from "react"
import {
  ChakraProvider,
  Box,
  theme,
  useDisclosure
} from "@chakra-ui/react"
import { Nav, DrawerComponent } from "./components"


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()

  return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
        <Nav ref={btnRef} onOpen={onOpen} />

        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  </ChakraProvider>
)
}

export default App
