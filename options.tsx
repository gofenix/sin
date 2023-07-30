import { ChakraProvider, Container } from "@chakra-ui/react"
import { useState } from "react"
import Cleaner from "~compontents/Cleaner"
import SearchWindow from "~compontents/Search"

function OptionsIndex() {


  return (
    <ChakraProvider>
      <Container borderWidth="1px" borderRadius="lg">
        <Cleaner />
        <SearchWindow />
      </Container>
    </ChakraProvider>
  )
}

export default OptionsIndex
