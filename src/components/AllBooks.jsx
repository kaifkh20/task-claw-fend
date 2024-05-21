import { Grid,Card, Image, Text, Flex,Badge, Button, Group, Center, Anchor } from '@mantine/core';
import { IconBrandGit, IconHttpDelete, IconTrash, IconUpload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


async function fetchAllBooks(){
  try{
    const response = await fetch('http://localhost:3000/books')
    const books = await response.json()
    // console.log(books)
    return books
  }catch(err){
    console.log(err)
    throw Error ('Error Occured')
  }
} 

export function AllBooks() {

  const [error,setError] = useState(null)
  const [booksData,setBooksData] = useState([])

  useEffect(()=>{
    const getBooks = async()=>{
      try{
      const books = await fetchAllBooks()
      // console.log(books)
      setBooksData(books)
      // console.log(booksData)
      setError(null)
      }catch(e){
        console.log(e)
        setError(true)
      }
    }
    getBooks()
  },[])

  if(error){
    return (
      <Flex>
        <Center>
          <Text>
            Error Occured
          </Text>
        </Center>
      </Flex>
    )
  }

  return (

    <Grid p={"md"} m={"md"} justify='center' align='center'>
      {booksData.map((data)=>
        // console.log(data)
        <BookCard key={data._id} id={data._id} title={data.title} genre={data.genre} author={data.author} year={2024}/>
      )}
    </Grid> );
}

function BookCard({id,title,genre,author,year}){
  return(
          <Grid.Col span={4}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="/book-logo.jpeg"
          height={160}
          alt="Book-Image"
          opacity={10}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Anchor href={`/books/${id}`}>
          <Text fw={500}>{title}</Text>
        </Anchor>
        <Badge color="pink">{genre}</Badge>
      </Group>

      
      <Text size="sm" c="dimmed">
          Author : {author}  
      </Text>
      

      <Text size="sm" c="dimmed">
          Year Published: {year}  
      </Text>

      <Flex align={'center'} justify={"space-evenly"} mt={"sm"}>
      {/* <Button color="black" size='sm' variant='light'> */}
      {/*   About  */}
      {/* </Button> */}
      

      <Button color="yellow" size='sm' variant='light' rightSection={<IconBrandGit/>}>
        Update
      </Button>

      <Button color="red" size='sm' rightSection={<IconTrash/>}>
        Delete
      </Button>
      </Flex>
      </Card></Grid.Col>

  )
}


