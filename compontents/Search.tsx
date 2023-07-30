import { Search2Icon, SearchIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Box, Flex } from "@chakra-ui/layout"
import { InputGroup, InputLeftElement } from "@chakra-ui/react"
import _ from "lodash"
import { useEffect, useState } from "react"

import { getAllTabs } from "~utils/util"

import CardWindow from "./Card"

function SearchWindow() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    getAllTabs().then((value) => {
      setOptions(value)
    })
  }, [])

  return (
    <Box w={400} justifyContent="center">
      <InputGroup>
        <InputLeftElement>
          <SearchIcon></SearchIcon>
        </InputLeftElement>

        <Input
          placeholder="Search for your tabs..."
          onChange={async (event) => {
            const searchTerm = event.target.value
            if (searchTerm == "") {
              const tabs = await getAllTabs()
              setOptions(tabs)
              return
            }

            let pattern = new RegExp(searchTerm, "i")

            const filteredData = options.filter((item) => {
              return pattern.test(item.url.trim())

            })
            console.log(filteredData)
            setOptions(filteredData)
          }}
        />
      </InputGroup>

      {options.map((tab) => {
        return (
          <Box p={1}>
            <CardWindow option={tab}> </CardWindow>
          </Box>
        )
      })}
    </Box>
  )
}

export default SearchWindow
