import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'


// A component is just a function that returns JSX
function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

// Make App available to main.tsx's "import App from './App.tsx'"
export default App