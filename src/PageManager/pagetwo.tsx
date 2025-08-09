import ReactNiceAvatar from "../index";
import AvatarEditor from "../AvatarEditor/index";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import {defaultOptions} from "../utils"; 

const PageTwo = ({
  state,
  nameError,
  setNameError,
  onInputChange,
  updateConfig,
  setPage,
}: PageTwoProps) => {
  const nextPage = () => {
    if (!state.name) {
      setNameError(true);
      return;
    }
    setPage(3);
  };
  const previousPage = () => {
    setPage(1);
  };

  return (
    <main className="flex-grow h-full w-full bg-white/50 rounded-xl flex pt-10">
      <img src="./avanade_logo.png" className="absolute w-80 ml-10" />
      <div className="flex-1 flex flex-col items-center pt-10">
        <div className="mb-10">
          <ReactNiceAvatar
            className="w-80 h-80"
            {...state.config}
            hairColorRandom={true}
            shape={state.shape}
          />
        </div>
        <div className="mb-1 flex flex-col items-center">
          <input
            className={`bg-white/70 w-96 h-10 p-2 mb-1 text-center z-50 text-black placeholder-gray-900 rounded ${
              nameError ? "border-2 border-red-700" : ""
            }`}
            placeholder="Enter name here"
            maxLength={18}
            onChange={onInputChange}
            value={state.name}
          />
          {nameError && (
            <span className="text-red-700">Please enter your name.</span>
          )}
        </div>
        <div className="mb-1 text-3xl">
          <strong className="color: black">{state.config.jobTitle ? state.config.jobTitle : defaultOptions.jobTitle[0]}</strong>
        </div>
        <AvatarEditor config={state.config} updateConfig={updateConfig} />
        <button
          className="mt-10 bg-[#A13368] hover:bg-[#b34479] px-20 py-2 rounded"
          onClick={nextPage}
        >
          Create Badge
        </button>
        <button className="mt-6 underline p-2" onClick={previousPage}>
          Replay intro video
        </button>
      </div>
    </main>
  );
};

export default PageTwo;

interface PageTwoProps {
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };
  nameError: boolean;
  setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateConfig: (
    key: string | number,
    value: string | number | boolean
  ) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
