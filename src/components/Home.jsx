// import { Container } from "postcss";
import { IconArrowRight } from "@tabler/icons-react";
import { Navbar } from "./Navbar";
import { Anchor,Image, BackgroundImage, Box, Button, Center, Flex, Group, Loader, Text, Title, filterProps, rgba } from "@mantine/core";
import { useState,useEffect } from "react";

function HomeContent() {

    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
      setIsLoading(false);
    }

    useEffect(() => {
      window.addEventListener("load", handleLoading);
      return () => window.removeEventListener("load", handleLoading);
    }, [])

    if(isLoading){
      return (
      <Flex direction={"column"} h={"80vh"} align={"center"} justify={"center"}>
        <Loader color="black"/>
        <Text>Loading...</Text>
      </Flex>
      )
    }

    return (
      <Flex h={"100vh"}>
        <BackgroundImage
          src="../public/front-page.jpg"
          opacity={10}
          
        >
          {/* <Navbar/> */}

          <Flex
            align={"center"}
            justify={"center"}
            // bg={"rgba(0,0,0,.3)"}
            h={"80%"}
            direction={"column"}
          >
            <Title>All In One Destination</Title>
            <Group>
              <Button variant="filled" color="black" rightSection={<IconArrowRight size={14} />}><Anchor href="/allBooks" c={'white'}>Browse All Books</Anchor></Button>
            </Group>
          </Flex>
        </BackgroundImage>
      </Flex>
    )
  }


  export function Home() {
    return (
      <Flex
        direction={"column"}
      >
        {/* <Navbar/> */}
        <HomeContent />

      </Flex>
    )
  }
