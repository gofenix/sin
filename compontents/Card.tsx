import { Avatar } from "@chakra-ui/avatar"
import { Box, Flex, Link } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/system"

export default function CardWindow(props) {
  const option = props.option

  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.800"
      }}
      shadow="md"
      rounded="lg"
      overflow="hidden">
      <Flex
        w={2}
        bg="gray.800"
        _dark={{
          bg: "gray.900"
        }}></Flex>

      <Flex alignItems="center" px={2} py={3}>
        <Avatar
          boxSize={10}
          name={option.host}
          src={option.favIconUrl}
          onClick={async () => {
            const currWindow = await chrome.windows.getCurrent()
            if (currWindow.id == option.windowId) {
              chrome.tabs.update(option.id, {
                active: true
              })
            } else {
              chrome.windows.update(
                option.windowId,
                { focused: true },
                function () {
                  chrome.tabs.update(option.id, {
                    active: true
                  })
                }
              )
            }
          }}
        />
        <Box mx={3}>
          <chakra.p
            color="gray.600"
            _dark={{
              color: "gray.200"
            }}>
            <Box>
              <Text as="b">{option.title}</Text>
            </Box>
            <Link
              color="blue.500"
              _dark={{
                color: "blue.300"
              }}
              _hover={{
                color: "blue.400",
                textDecor: "underline"
              }}>
              <Box noOfLines={1} lineHeight="tight">
                {option.url}
              </Box>
            </Link>
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  )
}
