import { BeatLoader } from "react-spinners";
export default function Spinner() {


  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader
        color={"red"}
        loading={true}
        cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          }}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
