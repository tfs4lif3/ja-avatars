import { DefaultOptions, defaultOptions } from "../utils";
import Face from "../face/index";
import Hair from "../hair/index";
import Eyes from "../eyes/index";
import Glasses from "../glasses/index";
import EyeBrow from "../eyebrow/index";
import Nose from "../nose/index";
import Mouth from "../mouth/index";
import Shirt from "../shirt/index";
import JobTitle from "../jobtitle/index";
import ColorPicker from "../colorpicker/index";
import SectionWrapper from "./SectionWrapper/index";

import { AvatarFullConfig, HairStyleMan, HairStyleWoman } from "../types";

import "./index.scss";

interface AvatarEditorProps {
  config: AvatarFullConfig;
  updateConfig: (
    key: string | number,
    value: string | number | boolean
  ) => void;
}

type HairStyle = HairStyleMan | HairStyleWoman;

interface CustomDefaultOptions extends DefaultOptions {
  hairStyle: HairStyle[];
  eyeBrowStyle: string[];
  bgColor: string[];
}

// Modification on defaultOptions for convenient
const genDefaultOptions = (opts: DefaultOptions) => {
  const hairSet = new Set<HairStyle>(
    (opts.hairStyleMan as HairStyle[]).concat(opts.hairStyleWoman)
  );
  return {
    ...opts,
    hairStyle: Array.from(hairSet),
    eyeBrowStyle: opts.eyeBrowWoman,
    bgColor: opts.bgColor.concat(opts.gradientBgColor),
    jobtitle: "Consultant"
  };
};

const AvatarEditor = ({
  config,
  updateConfig
}: AvatarEditorProps) => {
  const myDefaultOptions = genDefaultOptions(defaultOptions);

  const switchConfig = (
    type: keyof CustomDefaultOptions,
    currentOpt: string | undefined
  ) => {
    const opts = myDefaultOptions[type];
    const currentIdx = opts.findIndex((item: string) => item === currentOpt);
    const newIdx = (currentIdx + 1) % opts.length;
    updateConfig(type, opts[newIdx]);
  };

  const switchHairColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig("hairColor", event.target.value);
  };

  return (
    <div className="flex gap-2">
      <div className="AvatarEditor rounded-[1.8rem] px-6 pt-2 pb-4 flex gap-5 items-center bg-white bg-opacity-70 text-sm">
        {/* Face */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Face"
          switchConfig={() => switchConfig("faceColor", config.faceColor)}
        >
          <Face color={config.faceColor!} />
        </SectionWrapper>
  
        {/* Hair style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Hair"
          switchConfig={() => switchConfig("hairStyle", config.hairStyle)}
        >
          {config.hairStyle == "none" ? (
            <span className="text-2xl">🚫</span>
          ) : (
            <Hair
            style={config.hairStyle!}
            color={config.hairColor!}
            colorRandom={true}
          />
          )}
        </SectionWrapper>
  
        {/*Hair color*/}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2 relative"
          tip="Hair Color"
          switchConfig={() => {
            null;
          }}
          tabSkip={true}
        >
          <>
            <input
              type="color"
              className="bg-transparent border-0 opacity-0 absolute h-16 w-16 rounded-full cursor-pointer z-50"
              value={config.hairColor}
              onChange={(e) => switchHairColor(e)}
            />
            <div className="w-16 h-16 absolute">
              <ColorPicker />
            </div>
          </>
        </SectionWrapper>
  
        {/* Eyes style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Eyes"
          switchConfig={() => switchConfig("eyeStyle", config.eyeStyle)}
        >
          <Eyes style={config.eyeStyle!} />
        </SectionWrapper>
  
        {/* EyeBrow style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Eyebrows"
          switchConfig={() => switchConfig("eyeBrowStyle", config.eyeBrowStyle)}
        >
          <EyeBrow style={config.eyeBrowStyle!} />
        </SectionWrapper>
  
        {/* Glasses style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Glasses"
          switchConfig={() => switchConfig("glassesStyle", config.glassesStyle)}
        >
          {config.glassesStyle == "none" ? (
            <span className="text-2xl">🚫</span>
          ) : (
            <Glasses style={config.glassesStyle!} />
          )}
        </SectionWrapper>
  
        {/* Nose style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Nose"
          switchConfig={() => switchConfig("noseStyle", config.noseStyle)}
        >
          <Nose style={config.noseStyle!} />
        </SectionWrapper>
  
        {/* Mouth style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Mouth"
          switchConfig={() => switchConfig("mouthStyle", config.mouthStyle)}
        >
          <Mouth style={config.mouthStyle!} />
        </SectionWrapper>
  
        {/* Shirt style */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Shirt"
          switchConfig={() => switchConfig("shirtStyle", config.shirtStyle)}
        >
          <Shirt style={config.shirtStyle!} color="#fff" />
        </SectionWrapper>
  
        {/* Background Color */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Color"
          switchConfig={() => switchConfig("bgColor", config.bgColor)}
        >
          <div
            className={"w-full h-full bg-white rounded-full"}
            style={{ background: config.bgColor }}
          />
        </SectionWrapper>
        {/* Job Title */}
        <SectionWrapper
          className="w-16 h-16 rounded-full p-2 mx-2"
          tip="Job Title"
          switchConfig={() => switchConfig("jobTitle", config.jobTitle)}
        >
          <JobTitle style={config.jobTitle! } />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default AvatarEditor;
