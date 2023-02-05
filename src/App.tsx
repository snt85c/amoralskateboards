import "./index.css";
import Page from "./Page";
import Footer from "./Footer";
import { pageData } from "./pageData";
import Contact from "./Contact";
import Intro from "./Intro";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "./MonumentExtendedBold.ttf";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  let pages = pageData.map((page, index) => {
    return (
      <Page
        key={index}
        index={index}
        direction={index % 2 === 0 ? "left" : "right"}
        data={page}
      />
    );
  });
  return (
    <>
      <>
        {!isLoaded ? <Spinner /> : <></>}
        <Intro setIsLoaded={setIsLoaded} />
        {pages}
        <Contact />
        <Footer />
      </>
    </>
  );
}

export default App;
