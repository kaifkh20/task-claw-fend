import { Button, Flex, TextInput, Textarea } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { Navigate, useNavigate } from "react-router-dom"

import { URL } from "../App"

async function AddBookPost(values) {
    const response = await fetch(`${URL}/books`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Authorization':localStorage.getItem("access_token")||""},
      body: JSON.stringify(values)
    })
    if(!response.ok){
      throw new Error("Some error occured")
    }
}

export function AddBooks() {

  const navigate = useNavigate()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: '',
      author: '',
      genre: '',
      year: '',
      description: ''
    }
  })

  return (
    <Flex h={"80vh"} justify={"center"} align={"center"}>
      <form onSubmit={form.onSubmit((values) => {
        console.log(values)
        const postdata = async()=>{
          try{
            await AddBookPost(values)
            navigate('/allBooks')
          }catch(e){
            navigate('/addBooks')
            // <Navigate to={"/"}/>
            console.error(e)
          }
        }
        postdata()
      })}>
        <Flex direction={"column"}>
          <Flex>
            <TextInput
              label="Book Name"
              placeholder="Eg: Harry Potter"
              key={form.key('title')}
              {...form.getInputProps('title')}
            />
          </Flex>
          <Flex>
            <TextInput
              label="Book Author"
              placeholder="Eg: J.K Rowling"
              key={form.key('author')}
              {...form.getInputProps('author')}
            />
            <TextInput
              label="Genre"
              placeholder="Eg: Fantasy "
              key={form.key('genre')}
              {...form.getInputProps('genre')}
            />

            <TextInput
              label="Year Published"
              placeholder="Eg: 2000"
              key={form.key('year')}
              {...form.getInputProps('year')}
            />
          </Flex>
        </Flex>
        <Textarea
          label="Description"
          placeholder="Enter a short description"
          autosize
          minRows={2}
          maxRows={4}
          key={form.key('description')}
          {...form.getInputProps('description')}
        />
        <Button my={"sm"} type="submit">Add Book</Button>
      </form>
    </Flex>
  )
}
