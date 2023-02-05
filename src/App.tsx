import "./index.css";
import Page from "./components/Page";
import Footer from "./components/Footer";
import { pageData } from "./pageData";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import telegramAlert from "./TelegramAlerter";
import ActionCall from "./components/ActionCall";
import Showcase from "./components/Showcase";
import uuid from "react-uuid";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    telegramAlert();
  }, []);

  let pages = pageData.map((page, index) => {
    return (
      <Page
        key={uuid()}
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
        <ActionCall
          {...{
            text: "HANDCRAFTED BOARDS FROM ITALY 🇮🇹",
            text2: "made with passion",
          }}
        />
        {pages}
        <Showcase />
        <Contact
          {...{
            text: "Contact me on Instagram",
            text2: "get yours today!",
          }}
        />
        <Footer />
      </>
    </>
  );
}

export default App;
