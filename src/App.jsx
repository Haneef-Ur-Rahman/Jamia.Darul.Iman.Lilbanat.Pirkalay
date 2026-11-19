// import { useState } from 'react'
// import Ticker from './components/Ticker'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Pillars from './components/Pillars'
// import About from './components/About'
// import Stats from './components/Stats'
// import Courses from './components/Courses'
// import Gallery from './components/Gallery'
// import Footer from './components/Footer'
// import Modal from './components/Modal'         // 👈 ADD
// import Results from './components/Results'     // 👈 ADD
// import NotificationModal from './components/NotificationModal'

// function App() {
//   const [isResultsOpen, setIsResultsOpen] = useState(false)  // 👈 ADD

//   return (
//     <>
//        <NotificationModal />
//       <Ticker />
//       <Header onOpenResults={() => setIsResultsOpen(true)} />   {/* 👈 MODIFY */}
//       <main>
//         <Hero />
//         <About />
//         <Stats />
//         <Courses />
//         <Pillars />
//         <Gallery />
//       </main>
//       <Footer />

//       {/* 👇 ADD: Results Modal */}
//       <Modal isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)}>
//         <Results onClose={() => setIsResultsOpen(false)} />
//       </Modal>
//     </>
//   )
// }

// export default App

//--------------------------------------------------------------------------------------------------

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Ticker from './components/Ticker'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Stats from './components/Stats'
import Courses from './components/Courses'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Results from './components/Results'
import NotificationModal from './components/NotificationModal'

function App() {
  const [isResultsOpen, setIsResultsOpen] = useState(false)

  // Shared layout: every page gets Ticker, Header, Footer, and the modals.
  // This keeps your existing look & feel on every route.
  const Layout = ({ children }) => (
    <>
      <NotificationModal />
      <Ticker />
      <Header onOpenResults={() => setIsResultsOpen(true)} />
      <main>{children}</main>
      <Footer />

      <Modal isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)}>
        <Results onClose={() => setIsResultsOpen(false)} />
      </Modal>
    </>
  )

  return (
    <Routes>
      {/*
        Homepage keeps the full single-page experience:
        all sections rendered in order.
      */}
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <About />
            <Stats />
            <Courses />
            <Pillars />
            <Gallery />
          </Layout>
        }
      />

      {/*
        Each section ALSO has its own URL so Google can index it
        as a separate page. Add more as you build new pages
        (admissions, faq, contact, etc.).
      */}
      <Route path="/about"    element={<Layout><About /></Layout>} />
      <Route path="/stats"    element={<Layout><Stats /></Layout>} />
      <Route path="/courses"  element={<Layout><Courses /></Layout>} />
      <Route path="/pillars"  element={<Layout><Pillars /></Layout>} />
      <Route path="/gallery"  element={<Layout><Gallery /></Layout>} />
    </Routes>
  )
}

export default App
