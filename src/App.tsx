import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Publication from './components/Publication.tsx'
import Patents from './components/Patents.tsx'
import { publications } from './data/publications.ts'
import {patents} from './data/patents.ts'


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
              title={patents[0].title}
              number={patents[0].number}
              url={patents[0].url}
            />
            <Patents
              title={patents[1].title}  
              number={patents[1].number}
              url={patents[1].url}
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