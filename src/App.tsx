import { Routes, Route} from 'react-router'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Patents from './components/Patents.tsx'
import Publications from './components/Publications.tsx'
import NotFound from './components/NotFound.tsx'
import HomePage from './components/Home.tsx'
import Education from './components/Education.tsx'


// A component is just a function that returns JSX
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/education" element = {<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

// Make App available to main.tsx's "import App from './App.tsx'"
export default App