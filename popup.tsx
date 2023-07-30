import { ChakraProvider } from "@chakra-ui/react"

import Cleaner from "~compontents/Cleaner"
import SearchWindow from "~compontents/Search"
import SinTab from "~compontents/sin_tab"

function IndexPopup() {
  return (
    <ChakraProvider>
      <SearchWindow />
      {/* <Cleaner />
      <SinTab /> */}
    </ChakraProvider>
  )
}

export default IndexPopup
