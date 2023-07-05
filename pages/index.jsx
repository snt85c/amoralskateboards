import Head from "next/head";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Intro from "../components/Intro";
import ActionCall from "../components/ActionCall";
import Showcase from "../components/Showcase";
import { pageData } from "../components/pageData";
import Page from "../components/Page";
import Contact from "../components/Contact";
import uuid from "react-uuid";
import telegramAlerter from "../components/TelegramAlerter";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      telegramAlerter();
    }
    console.info("amoralskateboards.com created by https://github.com/snt85c");
  }, []);

  let Pages = pageData.map((page, index) => {
    return (
      <Page
        key={uuid()}
        index={index}
        direction={index % 2 === 0 ? "left" : "right"}
        data={page}
      />
    );
  });
  useEffect(() => {
    //nextjs api fetch test
    fetch("/api/hello")
      .then((data) => data.json())
      .then((data) => console.log(data.name));
  }, []);

  return (
    <>
      <Head>
        <title>AMORALskateboards</title>
        <meta name="description" content="skateboards from Sicily(🇮🇹)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        {!isLoaded ? <Spinner /> : <></>}
        <Intro setIsLoaded={setIsLoaded} />
        <ActionCall />
        {Pages}
        <Showcase />
        <Contact />
      </main>
    </>
  );
}
