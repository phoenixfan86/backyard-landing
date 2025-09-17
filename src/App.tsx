import About from "./components/About";
import Header from "./components/header";
import Whatis from "./components/Whatis";

function App() {


  return (
    <>
      <Header />
      <main className="flex flex-col gap-[67px] md:gap-[146px]">
        <About />
        <Whatis />
      </main>
    </>
  )
}

export default App
