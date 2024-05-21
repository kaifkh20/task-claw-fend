import { Flex,Button,TextInput,Title } from "@mantine/core";
import {IconSearch} from "@tabler/icons-react"

export function Navbar(){

  return (
    <Flex
      mih={60}
      bg="rgba(0, 0, 0, .5)"  
      align={"center"}
      justify={"space-between"}
      gap={10}
      p={10}
    >
      <Title>
        bookinfo.com
      </Title>
      <Flex>
        <TextInput
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
