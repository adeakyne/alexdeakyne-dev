import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Publication from './components/Publication.tsx'


// A component is just a function that returns JSX
function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Publications</h2>
          <ol>
            <Publication
              title="Paper 1"
              journal="Journal 1"
              year={2021}
              url="https://doi.org/10.0000/one"
              />
            <Publication
              title="Paper 2"
              journal="Journal 2"
              year={2022}
              url="https://doi.org/10.0000/two"
              />
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Make App available to main.tsx's "import App from './App.tsx'"
export default App