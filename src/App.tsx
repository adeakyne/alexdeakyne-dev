import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Patents from './components/Patents.tsx'
import Publications from './components/Publications.tsx'



// A component is just a function that returns JSX
function App() {
  return (
    <>
      <Header />
      <main>
          <Publications />
          <Patents />
      </main>
      <Footer />
    </>
  )
}

// Make App available to main.tsx's "import App from './App.tsx'"
export default App