import { Grid, Image, Title, Text, Button, Tooltip } from "@mantine/core";
import { IconBrandGit,IconTrash } from "@tabler/icons-react";

export function Book({ title = "Unknown" }) {
  return (
    <Grid m={"md"} h={"100%"}>
      <Grid.Col span={2} m={"sm"}>
        <Image
          mih={"50vh"}
          src={"/book-logo.jpeg"}
        />
        <Tooltip color="yellow" position="right" label="Update The Book Details">
        <Button m={"sm"} color="yellow" size='sm' variant='light' rightSection={<IconBrandGit />}>
          Update
        </Button>
        </Tooltip>
        
        <Tooltip position="right" color="red" label="Delete The Book">
        <Button m={"sm"} color="red" size='sm' rightSection={<IconTrash />}>
          Delete
        </Button>
        </Tooltip>
      </Grid.Col>
      <Grid.Col bg={"white"} m={"md"} span={"auto"} h={"100vh"}>
        <Title>Book Title</Title>

        <Text>Author : </Text>
        <Text>Genre : </Text>
        <Text>Year Published : </Text>
        <Text>Description:</Text>
        <Text>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</Text>
      </Grid.Col>
    </Grid>

  )
}
