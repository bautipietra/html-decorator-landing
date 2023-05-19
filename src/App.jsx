import { Docs } from './components/Docs'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import './config/LoadHtmlDecorator.js'

function App() {
  return (
    <>
      <div data-theme='winter' className='container m-auto'>
        <Nav></Nav>
        <Home></Home>
        <Docs></Docs>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
