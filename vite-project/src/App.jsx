// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <main className="mx-3">
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
