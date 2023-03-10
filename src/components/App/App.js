import './App.css'
import { Header } from '../Header'
import { Mainscreen } from '../Mainscreen'
import { Odds } from '../Odds'
import { Footer } from '../Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Mainscreen />
        <Odds />
      </main>
      <Footer />
    </>
  )
}

export default App
