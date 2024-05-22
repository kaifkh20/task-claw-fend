import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {AllBooks} from "./components/AllBooks"
import { Book } from './components/Book'
import { AddBooks } from './components/AddBooks'
import { UpdateForm } from './components/UpdateBooks'

function App() {
  return <MantineProvider>
    <Navbar/>   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allBooks' element={<AllBooks/>}/>
        <Route path='/books/:id' element={<Book/>}/>
        <Route path='/addBooks' element={<AddBooks/>}></Route>
        <Route path='/updateBook/:id' element={<UpdateForm/>}></Route>
      </Routes>
    </BrowserRouter>

    {/* <Home/>  */}
  </MantineProvider>
}

export default App
