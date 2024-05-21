// import { Container } from "postcss";
import { IconArrowRight } from "@tabler/icons-react";
import { Navbar } from "./Navbar";
import { BackgroundImage, Box, Button, Center, Flex,Group,Text, Title, filterProps, rgba } from "@mantine/core";

function HomeContent(){
  return (
    <Flex h={"100vh"}>
      <BackgroundImage
        src="../public/bg-book.jpg"
        opacity={10}
      >
        <Navbar/>

        <Flex
          align={"center"}
          justify={"center"}
          // bg={"rgba(0,0,0,.3)"}
          h={"80%"}
          direction={"column"}
        >
          <Title>All In One Destination</Title>
          <Group>
             <Button variant="filled" color="black" rightSection={<IconArrowRight size={14} />}>Browse All Books</Button>
          </Group>
        </Flex>
      </BackgroundImage> 
    </Flex>
  )
}


export function Home(){
    return(
      <Flex
        direction={"column"}
      >
        {/* <Navbar/> */}
        <HomeContent/>
        
      </Flex>
    )
}
