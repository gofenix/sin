import { ChakraProvider, Divider } from "@chakra-ui/react"
import { useState } from "react"
import Cleaner from "~compontents/Cleaner"
import MyFav from "~compontents/MyFav"
import SearchWindow from "~compontents/Search"

function IndexNewTab() {


  return (
    <ChakraProvider>
      <Cleaner  />
      <SearchWindow />
    </ChakraProvider>
  )
}

export default IndexNewTab
