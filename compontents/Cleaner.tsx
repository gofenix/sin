import { Box, Button } from "@chakra-ui/react"
import _ from "lodash"
import { groupByHost } from "~utils/util"

async function doIt() {
  const data = await groupByHost()
  for (let k of Object.keys(data)) {
    const tabIds = data[k].map((item) => item.id)
    await chrome.tabs.group({ tabIds })
  }
}

function Cleaner() {
  return (
    <Box p={3}>
      <Button
        onClick={async () => {
          const data = await groupByHost()
          doIt()
        }}>
        一键整理
      </Button>
    </Box>
  )
}

export default Cleaner
