import PageTwo from "./pagetwo";
import PageThree from "./pagethree";
import { useState, useCallback, ChangeEvent } from "react";
import "../styles.css";
import "./index.css";
import { genConfig } from "../utils";
import { NiceAvatarProps } from "../types";
import PageOne from "./pageone";
import PageFour from "./pagefour";

const PageManager = (): JSX.Element => {
  const [page, setCurrentPage] = useState(1);
  const [nameError, setNameError] = useState(false);
  const [jobTitleError, setJobTitleError] = useState(false);
  const [state, setState] = useState({
    config: genConfig({
      isGradient: Boolean(Math.round(Math.random())),
      hairStyle: "none",
    }),
    shape: "circle" as NiceAvatarProps["shape"],
    name: "",
    jobTitle: ""
  });

  const avatarId = "myAvatar";

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
    setNameError(false);
  }, []);

  const onJobTitleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, jobTitle: e.target.value }));
    setJobTitleError(false);
  }, []);

  const updateConfig = useCallback(
    (key: string | number, value: string | number | boolean) => {
      setState((prevState) => ({
        ...prevState,
        config: { ...prevState.config, [key]: value },
      }));
    },
    []
  );

  const resetConfig = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      config: genConfig({
        isGradient: Boolean(Math.round(Math.random())),
        hairStyle: "none",
      }),
      name: "",
    }));
    setCurrentPage(1);
  }, []);

  const print = () => {
    window.print();

    resetConfig();
  };

  // const download = useCallback(async () => {
  //   const node = document.getElementById(avatarId);
  //   if (node) {
  //     const blob = await domtoimage.toBlob(node);

  //     saveAs(blob, `${state.name.replace(/\s/g, "").toLowerCase()}-avatar.png`);
  //     resetConfig();
  //   }
  // }, [resetConfig, state.name]);

  switch (page) {
    case 1:
      return <PageOne setPage={setCurrentPage} />;
    case 2:
      return (
        <PageTwo
          state={state}
          nameError={nameError}
          setNameError={setNameError}
          onInputChange={onInputChange}
          updateConfig={updateConfig}
          setPage={setCurrentPage} 
          jobTitleError={jobTitleError}
          setJobTitleError={setJobTitleError}
          onJobTitleInputChange={onJobTitleInputChange}
        />
      );
    case 3:
      return (
        <PageThree avatarId={avatarId} state={state} setPage={setCurrentPage} />
      );
    case 4:
      return <PageFour state={state} setPage={setCurrentPage} print={print} />;
    default:
      return <></>;
  }
};

export default PageManager;
