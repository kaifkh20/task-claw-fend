import { Flex,Button,TextInput,Title, Anchor } from "@mantine/core";
import {IconSearch} from "@tabler/icons-react"
import { useLogin } from "../context/LoginContext";

export function Navbar(){

  const {setIsLoggedIn} = useLogin()
  const value  = localStorage.getItem('isLoggedIn')
  let isLoggedIn = false
  if(value==="true") {
      isLoggedIn = true
  } 
  console.log("navbar",);

  return (
    <Flex
      mih={60}
      bg="#FDFDFD"
      // opacity={"0.5"}
      align={"center"}
      justify={"space-between"}
      gap={10}
      p={10}
    >
      <Title c={"#071952"}>
        bookinfo.com
      </Title>
      <Flex align={"center"} justify={"space-between"}>
        
        <TextInput
          m={2}
          size="sm"
          leftSectionPointerEvents="none"
          leftSection={<IconSearch/>}
          placeholder="Search"
        />
        <Button color="black">
        <Anchor href="/allBooks" m={2} c={"white"}>Home</Anchor>
        </Button>
        {!isLoggedIn && 
        <Button mx={1}>
          <Anchor c={"white"} href="/login">Login</Anchor>
        </Button>}
        {isLoggedIn && <Button>
          <Anchor c={"white"} href="/allBooks" onClick={(e)=>{
            localStorage.removeItem("access_token")
            localStorage.setItem("isLoggedIn",false)
            setIsLoggedIn(false)
          }}>Logout</Anchor>
        </Button>
        }
        {isLoggedIn&&<Button mx={1}>
          <Anchor c={"white"} href="/addBooks">Add Book</Anchor>
        </Button>}
      </Flex>
    </Flex>
  )
}
