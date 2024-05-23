import { Grid, Card, Image, Text, Flex, Badge, Button, Group, Center, Anchor, Loader } from '@mantine/core';
import { IconBrandGit, IconHttpDelete, IconTrash, IconUpload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import {useSearchParams } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';

import { URL } from '../App';


async function fetchAllBooks() {
  try {
    const response = await fetch(`${URL}/books`,{method:"GET"})
    const books = await response.json()
    // console.log(books)
    return books
  } catch (err) {
    console.log(err)
    throw Error('Error Occured')
  }
}

export function AllBooks() {

  const [error, setError] = useState(null)
  const [booksData, setBooksData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let [isDeleted,setIsDeleted] = useSearchParams()
  const value  = localStorage.getItem('isLoggedIn')
  let isLoggedIn = false
  if(value==="true") {
      isLoggedIn = true
  } 

  isDeleted.get("isDeleted")

  if(isDeleted){
    console.log("getting here");
  }


  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await fetchAllBooks()
        // console.log(books)
        setBooksData(books)
        // console.log(booksData)
        setError(null)
      } catch (e) {
        console.log(e)
        setError(true)
      }
    }
    getBooks()
    setIsLoading(false)
  }, [])

  if (error) {
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

  if (isLoading) {
    return (
      <Flex align={'center'} justify={'center'} h={"80vh"}>
        <Loader color='black' />
      </Flex>
    )
  }

  return (
    <Grid p={"md"} m={"md"} justify='center' align='center'>

      {booksData.length===0 &&
        <Center>
          No Books Available. 
          {isLoggedIn && <Anchor href='/addBooks'>Add Now</Anchor>}
          {!isLoggedIn && <Anchor href='/login'>Login Now to Add</Anchor>}
        </Center>
      }
      
      {booksData.map((data) =>
        // console.log(data)
        <BookCard key={data._id} id={data._id} title={data.title} genre={data.genre} author={data.author} year={data.yearPublished} />
      )}
    </Grid>
  )
}
function BookCard({ id, title, genre, author, year }) {
  return (
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
            <Text size='xl' c={"black"} fw={500}>{title}</Text>
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
          <Button color="black" fullWidth variant='light'>
            <Anchor href={`books/${id}`} c={"black"} underline='never'>About</Anchor>
          </Button>



        </Flex>
      </Card></Grid.Col>

  )
}

