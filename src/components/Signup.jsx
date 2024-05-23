import { Anchor, Button, Center, Flex, TextInput, Textarea, Title } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { Navigate, useNavigate } from "react-router-dom"

async function SignupPost(values) {
    const response = await fetch(`${process.env.URL}/signup`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const body = await response.json()
    
    if(!response.ok){
      throw new Error("Some error occured")
    }
    return body
}

export function Signup() {

  const navigate = useNavigate()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username:"",
      password:""
    }
  })

  return (
    <Flex h={"80vh"} justify={"center"} align={"center"} direction={"column"}>
      <Title my={"md"}>Signup</Title>
      <form onSubmit={form.onSubmit((values) => {
        console.log(values)
        const postdata = async()=>{
          try{
            const body = await SignupPost(values)
            
            navigate('/allBooks')
          }catch(e){
            navigate('/signup')
            // <Navigate to={"/"}/>
            console.error(e)
          }
        }
        postdata()
      })}>
        <Flex direction={"column"}>
          <Flex>
            <TextInput
              label="Username"
              placeholder="Enter Username"
              key={form.key('username')}
              {...form.getInputProps('username')}
            />
          </Flex>
          <Flex>
            <TextInput
              label="Password"
              placeholder="Enter Password"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
          </Flex>
        </Flex>
        <Center>
            <Button m={"md"} type="submit">Signup</Button>
            
        </Center>
        <Center>
        <Anchor href="/login">Login Here</Anchor>
        </Center>
      </form>
    </Flex>
  )
}
