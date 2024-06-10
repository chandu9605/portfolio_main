import React from 'react';
//import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  // return (
  //   <Router>
  //     <div>
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );

  return (
 
      <div>
        <Header />
        <Hero />
        <About />
        <Experience/>
        <Projects/>
        <Contact/>

      </div>

 


  );
}

// function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Projects/>
//       <Experience/>
//     </>
//   );
// }

export default App;
