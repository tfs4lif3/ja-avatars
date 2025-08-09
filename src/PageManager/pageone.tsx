import { useState } from "react";
import intro from "../../config/intro.json";
import quiz_questions from "../../config/quiz_questions.json";

const PageOne = ({ setPage }: PageOneProps) => {
  const [ended, setEnded] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const nextPage = () => {
    setPage(2);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      {
        intro.steps.map((step, index) => {
          if (step.type === "video" && index === currentStepIndex) {
            return (
              <div className="border-sky-100 border relative shadow-md shadow-slate-800 max-w-[1600px]" key={index}>
                <video
                  className="aspect-video"
                  src={`./${step.value}`}
                  controls
                  onEnded={() => {setTimeout(() => {
                    const updatedIndex = currentStepIndex + 1;
                    setCurrentStepIndex(updatedIndex);
                    if (updatedIndex >= intro.steps.length) {
                      nextPage();
                    }
                  }, 1000)}}
              />
              </div>
            );
          }
          if (step.type === "question" && index === currentStepIndex) {
            let question = quiz_questions.questions.filter(q => q.id === step.value)[0];
            return (
              <div className="border-sky-100 border relative shadow-md shadow-slate-800 max-w-[1600px] w-full" key={index}>
                <span className="text-2xl font-bold mb-4 ">{question.question}</span>
                <span>
                {
                  question.options.map((option, optionIndex) => 
                    (
                    <div className="flex flex-col items-center mb-2" key={optionIndex}>
                    <button
                      key={optionIndex}
                      className={`bg-white text-black rounded m-2 p-2 w-192 ${
                          selectedOption === null ? "border-black-100 " : 
                            option === question.answer ? "border-green-100 " : "border-red-100"
                        } border`}
                      onClick={() => {
                        setSelectedOption(optionIndex);
                          setTimeout(() => {
                              setSelectedOption(null);
                              const updatedIndex = currentStepIndex + 1;
                              setCurrentStepIndex(updatedIndex);
                              if (updatedIndex >= intro.steps.length) {
                                nextPage();
                              }
                            }, 2000);
                      }}
                    >
                      {option}
                    </button>
                    </div>
                  ))
                }
                </span>
              </div>
            );
          }
        })
      }
    </main>
  );
};

export default PageOne;

interface PageOneProps {
  // state: {
  //   config: AvatarFullConfig;
  //   shape: NiceAvatarProps["shape"];
  //   name: string;
  // };
  // nameError: boolean;
  // setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  // onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // updateConfig: (
  //   key: string | number,
  //   value: string | number | boolean
  // ) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
