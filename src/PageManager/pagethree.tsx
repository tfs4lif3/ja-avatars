import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import ReactNiceAvatar from "../index";
import {defaultOptions} from "../utils"; 

const PageThree = ({ avatarId, state, setPage }: PageThreeProps) => {
  const print = () => {
    setPage(4);
  };

  const previousPage = () => {
    setPage(2);
  };
  return (
    <main className="flex-grow h-full w-full flex pt-20">
      <div className="flex-1 flex flex-col items-center">
        <div id={avatarId}>
          <div className="badge w-[224px] rounded-lg h-[327px] flex flex-col items-center">
            <img src="./ja biztown small.png" className="z-20 badge-upper-logo-left" />
            <img src="./Avanade Logo RGB small.png" className="z-20 badge-upper-logo-right" />
            <div className="z-10">
              <ReactNiceAvatar
                className="w-40 h-40 mt-2"
                {...state.config}
                hairColorRandom={true}
                shape={state.shape}
              />
            </div>
            <div className="text-black text-2xl text-center z-20">
              {state.name}
            </div>            
            <div className="text-black text-2xl text-center z-20">
              {state.config.jobTitle ? state.config.jobTitle : defaultOptions.jobTitle[0]}
            </div>
            <div className="text-black text-2xl text-center mt-2 z-20">
              Avanade Avatar
            </div>
          </div>
        </div>
        <button
          className="flex gap-4 mt-5 py-2 w-[375px] justify-center items-center text-xl bg-[#DD3C10] hover:bg-[#e7572f] rounded"
          onClick={print}
        >
          <FontAwesomeIcon icon={faPrint} className="text-3xl" />
          <span>Print Badges</span>
        </button>
        <button className="mt-6 underline p-2" onClick={previousPage}>
          Return to previous page
        </button>
      </div>
    </main>
  );
};

export default PageThree;

interface PageThreeProps {
  avatarId: string;
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
