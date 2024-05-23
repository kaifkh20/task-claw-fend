import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {AllBooks} from "./components/AllBooks"
import { Book } from './components/Book'
import { AddBooks } from './components/AddBooks'
import { UpdateForm } from './components/UpdateBooks'
import { DeleteBooks } from './components/DeleteBooks'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { LoginProvider } from './context/LoginContext'

export const URL = "https://task-claw-bend.onrender.com"

function App() {
  return <MantineProvider>
    <LoginProvider>
    <Navbar/>   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allBooks' element={<AllBooks/>}/>
        <Route path='/books/:id' element={<Book/>}/>
        <Route path='/addBooks' element={<AddBooks/>}></Route>
        <Route path='/updateBook/:id' element={<UpdateForm/>}></Route>
        <Route path='/deleteBook/:id' element={<DeleteBooks/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>

    {/* <Home/>  */}
    </LoginProvider>
  </MantineProvider>
}

export default App
