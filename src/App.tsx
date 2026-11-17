import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Publication from './components/Publication.tsx'
import Patent from './components/Patent.tsx'
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
            {publications.map(pub => (
              <Publication
                title={pub.title}
                journal={pub.journal}
                year={pub.year}
                url={pub.url}
                />
            ))}
          </ol>
        </section>
        <section>
          <h2>Patents (Pending)</h2>
          <ol>
            <Patent
              title={patents[0].title}
              number={patents[0].number}
              url={patents[0].url}
            />
            <Patent
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