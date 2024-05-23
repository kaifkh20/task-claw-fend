import { Anchor, Button, Center, Flex, TextInput, Textarea, Title } from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { useForm } from "@mantine/form"
import { Navigate, useNavigate } from "react-router-dom"
import { useLogin } from "../context/LoginContext"

import { URL } from "../App"

async function LoginPost(values) {
    const response = await fetch( `${URL}/login`,{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    if(!response.ok){
      throw new Error("Some error occured")
    }else{
        const body = await response.json()
        // console.log(body)
        localStorage.setItem("access_token",body.access_token)
    }
}

export function Login() {

  const navigate = useNavigate()

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username:"",
      password:""
    }
  })

  const{setIsLoggedIn} = useLogin()

  return (
    <Flex h={"80vh"} justify={"center"} align={"center"} direction={"column"}>
      <Title my={"md"}>Login</Title>
      <form onSubmit={form.onSubmit((values) => {
        console.log(values)
        const postdata = async()=>{
          try{
            await LoginPost(values)
            setIsLoggedIn(true)
            localStorage.setItem('isLoggedIn',true)
            navigate('/allBooks')
          }catch(e){
            navigate('/login')
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
            <Button m={"md"} type="submit">Login</Button>
            
        </Center>
        <Center>
        <Anchor href="/signup">Register Here</Anchor>
        </Center>
      </form>
    </Flex>
  )
}
