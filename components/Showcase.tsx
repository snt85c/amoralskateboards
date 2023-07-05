import { iShop, shop } from "./pageData";
import uuid from "react-uuid";
import Skate from "./Skate";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});
const builder = imageUrlBuilder(client);

export default function Showcase() {
  const [boards, setBoards] = useState<iShop[] | []>([]);

  useEffect(() => {
    try {
      const query = `*[_type == "board"]`;
      client.fetch(query).then((boards) => {
        setBoards(boards);
      });
    } catch (e) {
      console.warn("FETCH error in Sanity.io", e);
    }
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-20 flex-wrap">
        {boards.length < 1 ? (
          <>
            {/* load a default set of boards if there is an error with the fetch, or the client removed all the boards from the CMS */}
            {shop.map((skate: iShop, i) => {
              return <Skate key={uuid()} skate={skate} i={i} />;
            })}
          </>
        ) : (
          <>
            {boards.map((board:any, i: number) => (
              <Skate
                key={board._id}
                skate={{
                  descr: board.name,
                  img: builder.image(board.image).url(),
                }}
                i={i}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
