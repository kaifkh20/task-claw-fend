import { Grid,Flex, Image, Title, Text, Button, Tooltip, Loader, Badge, TextInput,Textarea } from "@mantine/core";
import { IconBrandGit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "@mantine/form";

import { URL } from "../App";

async function AddBookPut(values,id) {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json','Authorization':localStorage.getItem("access_token")||"" },
      body: JSON.stringify(values)
    })
    if(!response.ok){
      throw new Error("Some error occured")
    }
}

export function UpdateForm() {

   const {title,author,genre,yearPublished,description} = JSON.parse(localStorage.getItem('book'))

   const {id} = useParams()
   const navigate = useNavigate()

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
          title: title,
          author: author,
          genre: genre,
          yearPublished: yearPublished,
          description: description
        }
      })
  
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)


  if(loading){
    return(
      <Flex align={"center"} justify={"center"}>
          <Loader />
      </Flex>
    )
  }


  return (
    <form onSubmit={form.onSubmit((values) => {
        console.log(values)
        const putdata = async()=>{
          try{
            await AddBookPut(values,id)
            navigate('/allBooks')
          }catch(e){
            navigate(`/updateBooks/${id}`)
            // <Navigate to={"/"}/>
            console.error(e)
          }
        }
        putdata()
      })}>
    <Grid m={"md"} h={"100%"}>
      
      <Grid.Col span={2} m={"sm"}>
        <Image
          mih={"50vh"}
          src={"/book-logo.jpeg"}
        />
        <Tooltip color="yellow" position="right" label="Update The Book Details">
          <Button type="submit" m={"sm"} color="yellow" size='sm' variant='light' rightSection={<IconBrandGit />}>
            Update
          </Button>
        </Tooltip>
        

        <Tooltip position="right" color="red" label="Cancel Editing">
          <Button m={"sm"} color="red" size='sm' rightSection={<IconTrash />}
            onClick={(e)=>{
                e.preventDefault()
                navigate(-1)
            }}
          >
            Cancel
          </Button>
        </Tooltip>
      </Grid.Col>
      <Grid.Col bg={"white"} m={"md"} span={"auto"} h={"100vh"}>

        

        {/* <Title>{book.title}</Title> */}
        <TextInput placeholder={title}  variant="unstyled" size="xl" key={form.key('title')}{...form.getInputProps('title')}/>
        <TextInput placeholder={author} variant="unstyled" size="sm" key={form.key('author')}{...form.getInputProps('author')} />
        <TextInput placeholder={genre} variant="unstyled" size="sm" key={form.key('genre')}{...form.getInputProps('genre')}/>
        <TextInput placeholder={yearPublished} variant="unstyled" size="sm" key={form.key('yearPublished')}{...form.getInputProps('yearPublished')}/>
        <Textarea
          label="Description"
          placeholder="Enter a short description"
          autosize
          minRows={10}
          maxRows={20}
          key={form.key('description')}
          {...form.getInputProps('description')}
        />
        {/* <Text>Author : {book.author}</Text> */}
        {/* <Badge color="pink" >{book.genre}</Badge>
        <Text>Year Published : {book.yearPublished}</Text>
        <Text size="lg">Description:</Text>
        <Text>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</Text> */}
      </Grid.Col>
    </Grid>
    </form>
  )
}
