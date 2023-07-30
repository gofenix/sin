import { Avatar, Box, Button, Wrap, WrapItem } from "@chakra-ui/react"

const myFavItems = [
  { title: "百度", url: "https://www.baidu.com",  favUrl: "https://www.baidu.com/favicon.ico"  },
  { title: "Google", url: "https://www.google.com" ,  favUrl: "" },
  { title: "Apple", url: "https://www.apple.com",  favUrl: ""  }
]

function MyFav() {
  return (
    <Wrap>
      {myFavItems.map((item) => {
        return (
          <WrapItem>
            <Avatar
              name={item.title}
              src={item.favUrl}
              onClick={() => {
                window.open(item.url, "_blank")
              }}></Avatar>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default MyFav
