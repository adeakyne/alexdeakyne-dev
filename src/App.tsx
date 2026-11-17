// A function to build and return the header
function Header(){
  return (
    <header>
    <h1>Alex Deakyne</h1>
    <p className="tagline"> Software Engineer. Inventor. Backend. Frontend. AI/ML Workflows.</p>
    <p>Hi I am Alex Deakyne. Add more details here.</p>
    </header>
  )
}

// A function to build and return the footer
function Footer() {
  return (
    <footer>
      <p>Email Inquiries: <a href="mailto:adeakyne@alexdeakyne.dev"> Email</a></p>
    </footer>
  )
}

// A component is just a function that returns JSX
function App() {
  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  )
}

// Make App available to main.tsx's "import App from './App.tsx'"
export default App