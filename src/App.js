import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Themes";
import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Components/Projects/Project";
import { useState } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

//background color for skills and education section
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

//gradiant color for background for skills and education section
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
