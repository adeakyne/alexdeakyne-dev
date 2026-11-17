import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Publication from './components/Publication.tsx'
import Patents from './components/Patents.tsx'
import { publications } from './data/publications.ts'


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
              title={publications[0].title}
              journal={publications[0].journal}
              year={publications[0].year}
              url={publications[0].url}
            />
            <Publication
              title={publications[1].title}
              journal={publications[1].journal}
              year={publications[1].year}
              url={publications[1].url}
            />
          </ol>
        </section>
        <section>
          <h2>Patents (Pending)</h2>
          <ol>
            <Patents
              title="Patnet One"
              number="number 1"
              url="https://patnetn.org/one"
            />
            <Patents
              title="Patnet two"
              number="number 2"
              url="https://patnetn.org/two"
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