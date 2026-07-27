// import Ticker from './components/Ticker'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Pillars from './components/Pillars'
// import About from './components/About'
// import Stats from './components/Stats'
// import Courses from './components/Courses'
// import Gallery from './components/Gallery'
// import Footer from './components/Footer'


// function App() {
//   return (
//     <>
//       <Ticker />
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Stats />
//         <Courses />
//         <Pillars />
//         <Gallery />
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import Ticker from './components/Ticker'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Stats from './components/Stats'
import Courses from './components/Courses'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Modal from './components/Modal'         // 👈 ADD
import Results from './components/Results'     // 👈 ADD

function App() {
  const [isResultsOpen, setIsResultsOpen] = useState(false)  // 👈 ADD

  return (
    <>
      <Ticker />
      <Header onOpenResults={() => setIsResultsOpen(true)} />   {/* 👈 MODIFY */}
      <main>
        <Hero />
        <About />
        <Stats />
        <Courses />
        <Pillars />
        <Gallery />
      </main>
      <Footer />

      {/* 👇 ADD: Results Modal */}
      <Modal isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)}>
        <Results onClose={() => setIsResultsOpen(false)} />
      </Modal>
    </>
  )
}

export default App
