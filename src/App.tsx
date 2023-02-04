import "./App.css";
import Page from "./Page";
import Footer from "./Footer";
import { pageData } from "./pageData";
import Contact from "./img/Contact";
import Intro from "./Intro";

function App() {
  let pages = pageData.map((page, index) => {
    return (
      <Page
        key={index}
        index={index}
        direction={index % 2 == 0 ? "left" : "right"}
        data={page}
      />
    );
  });
  return (
    <>
      <Intro />
      {pages}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
