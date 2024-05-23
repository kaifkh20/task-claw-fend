import { Flex,Alert,Button,Notification } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import { useNavigate, useParams } from "react-router-dom"

import { URL } from "../App"

async function DeletBook(id) {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers : {'Authorization':localStorage.getItem("access_token")||""}
    })
    if(!response.ok){
      throw new Error("Some error occured")
    }
}

export function DeleteBooks(){
    
    const {id} = useParams()
    const navigate = useNavigate()


    return(
        <Flex h={"80vh"} align={"center"} justify={"center"} direction={"column"}>
            <Alert variant="light" color="red" title="Alert">
                This will delete the Book permanently.
            </Alert>
            <Button m={"sm"} color="red" size='sm' rightSection={<IconTrash />}
                onClick={(e)=>{
                    e.preventDefault()
                    const deleteData = async()=>{
                        try{
                          await DeletBook(id)
                          alert("Book Deleted")
                          navigate('/allBooks?isDeleted=true')
                          
                        }catch(e){
                          navigate(`/books/${id}`)
                          // <Navigate to={"/"}/>
                          console.error(e)
                        }
                      }
                      deleteData()
                }}
            >
                    Delete
            </Button>
        </Flex>
    )
}