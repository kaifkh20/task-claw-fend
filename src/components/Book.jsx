import { Grid,Flex, Image, Title, Text, Button, Tooltip,Alert, Loader, Badge } from "@mantine/core";
import { IconBrandGit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateForm } from "./UpdateBooks";


async function fetchBookData(id) {
  
  try {
    const response = await fetch(`http://localhost:3000/books/${id}`)
    const book = response.json()
    
    return book
  } catch (e) {
    console.error(e)
    throw Error(e)
  }
}

export function Book({ title = "Unknown" }) {
  
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [book,setBook] = useState()

  const navigate = useNavigate()
  const { id } = useParams()

  const getBooks = async()=>{
    try{
      const book = await fetchBookData(id)
      localStorage.setItem('book',JSON.stringify(book))
      setBook(book)
      setLoading(false)
    }catch(e){
      console.error(e)
      setLoading(false)
      setError(true)
    }
  }
  getBooks()

  if(loading){
    return(
      <Flex align={"center"} justify={"center"}>
          <Loader />
      </Flex>
    )
  }

  

  return (

    <Grid m={"md"} h={"100%"}>
      <Grid.Col span={2} m={"sm"}>
        <Image
          mih={"50vh"}
          src={"/book-logo.jpeg"}
        />
        <Tooltip color="yellow" position="right" label="Update The Book Details">
          <Button m={"sm"} color="yellow" size='sm' variant='light' rightSection={<IconBrandGit />}
            onClick={(e)=>{
              e.preventDefault()
              // const {id} = useParams()
              
              navigate(`/updateBook/${id}`)
            }}
          >
            Update
          </Button>
        </Tooltip>

        <Tooltip position="right" color="red" label="Delete The Book">
          <Button m={"sm"} color="red" size='sm' rightSection={<IconTrash />}
            onClick={(e)=>{
              e.preventDefault()
              navigate(`/deleteBook/${id}`)
            }}
          >
            Delete
          </Button>
        </Tooltip>
      </Grid.Col>
      <Grid.Col bg={"white"} m={"md"} span={"auto"} h={"100vh"}>
        <Title>{book.title}</Title>

        <Text>Author : {book.author}</Text>
        <Badge color="pink" >{book.genre}</Badge>
        <Text>Year Published : {book.yearPublished}</Text>
        <Text size="lg">Description:</Text>
        <Text>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</Text>
      </Grid.Col>
    </Grid>

  )
}
