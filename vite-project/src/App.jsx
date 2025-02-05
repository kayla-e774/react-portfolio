// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>
      <main className="mx-3">
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
