import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {AllBooks} from "./components/AllBooks"

function App() {
  return <MantineProvider>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allBooks' element={<AllBooks/>}/>
      </Routes>
    </BrowserRouter>

    {/* <Home/>  */}
  </MantineProvider>
}

export default App
