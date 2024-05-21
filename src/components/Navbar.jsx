import { Flex,Button,TextInput,Title, Anchor } from "@mantine/core";
import {IconSearch} from "@tabler/icons-react"

export function Navbar(){

  return (
    <Flex
      mih={60}
      bg="rgba(000,000,000,0.1)"
      // opacity={"0.5"}
      align={"center"}
      justify={"space-between"}
      gap={10}
      p={10}
    >
      <Title>
        bookinfo.com
      </Title>
      <Flex align={"center"} justify={"space-between"}>
        <Anchor m={2} c={"black"}>Home</Anchor>
        <TextInput
          m={2}
          size="sm"
          leftSectionPointerEvents="none"
          leftSection={<IconSearch/>}
          placeholder="Search"
        />

        <Button
        >Login</Button>
      </Flex>
    </Flex>
  )
}
