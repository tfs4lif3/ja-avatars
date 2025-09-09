import React, { useEffect } from "react";
import "./index.css";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import ReactNiceAvatar from "../index.tsx";

const PageFour = ({ state, setPage, print }: PageFourProps) => {
  useEffect(() => {
    print();

    return () => {
      setPage(1);
    };
  }, [setPage, print]);

  return (
    <div className="WordSection1">
      <table
        className="MsoTableGrid"
        border={0}
        cellSpacing="0"
        cellPadding="0"
        style={{
          marginLeft: "-.75pt",
          borderCollapse: "collapse",
          border: "none",
          tableLayout: "fixed",
        }}
      >
        <tbody>
          <tr style={{ overflow: "hidden", pageBreakInside: "avoid", height: "167.75pt", }}>
            <td
              width="324"
              valign="top"
              style={{
                width: "243.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden",
              }}
            >
              <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                <img src="./ja biztown small.png" className="z-20 badge-upper-logo-left-horizontal -rotate-90" />
                <img src="./Avanade Logo RGB small.png" className="z-20 badge-upper-logo-right-horizontal -rotate-90" />
                <div className="z-10">
                  <ReactNiceAvatar
                    className="w-40 h-40 -rotate-90 avatar-horizontal"
                    {...state.config}
                    hairColorRandom={true}
                    shape={state.shape}
                  />
                </div>
                <div className="text-black text-2xl text-center z-20 write-vertical rotate-180 name-horizontal">
                  {state.name}
                </div>
                <div className="text-black text-xl text-center z-20 write-vertical rotate-180 job-title-horizontal">
                  {state.jobTitle}
                </div>
              </div>
            </td>
            <td
              width="36"
              valign="top"
              style={{
                width: "27.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden",
              }}
            >
              <p
                className="MsoNormal"
                style={{
                  marginTop: "0in",
                  marginRight: "6.1pt",
                  marginBottom: "0in",
                  marginLeft: "6.1pt",
                  lineHeight: "normal",
                }}
              >
                &nbsp;
              </p>
            </td>
            <td
              width="324"
              valign="top"
              style={{
                width: "243.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden",
              }}
            >
              <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                <img src="./ja biztown small.png" className="z-20 badge-upper-logo-left-horizontal -rotate-90" />
                <img src="./Avanade Logo RGB small.png" className="z-20 badge-upper-logo-right-horizontal -rotate-90" />
                <div className="z-10">
                  <ReactNiceAvatar
                    className="w-40 h-40 -rotate-90 avatar-horizontal"
                    {...state.config}
                    hairColorRandom={true}
                    shape={state.shape}
                  />
                </div>
                <div className="text-black text-2xl text-center z-20 write-vertical rotate-180 name-horizontal">
                  {state.name}
                </div>
                <div className="text-black text-xl text-center z-20 write-vertical rotate-180 job-title-horizontal">
                  {state.jobTitle}
                </div>
              </div>
            </td>
          </tr>
          {/* Repeated rows */}
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              <tr
                style={{
                  overflow: "hidden",
                  pageBreakInside: "avoid",
                  height: "12.25pt",
                }}
              >
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="36"
                  valign="top"
                  style={{
                    width: "27.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
              </tr>
              <tr
                style={{
                  overflow: "hidden",
                  pageBreakInside: "avoid",
                  height: "167.75pt",
                }}
              >
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                    overflow: "hidden",
                  }}
                >
                  <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                    <img src="./ja biztown small.png" className="z-20 badge-upper-logo-left-horizontal -rotate-90" />
                    <img src="./Avanade Logo RGB small.png" className="z-20 badge-upper-logo-right-horizontal -rotate-90" />
                    <div className="z-10">
                      <ReactNiceAvatar
                        className="w-40 h-40 -rotate-90 avatar-horizontal"
                        {...state.config}
                        hairColorRandom={true}
                        shape={state.shape}
                      />
                    </div>
                    <div className="text-black text-2xl text-center z-20 write-vertical rotate-180 name-horizontal">
                      {state.name}
                    </div>
                    <div className="text-black text-xl text-center z-20 write-vertical rotate-180 job-title-horizontal">
                      {state.jobTitle}
                    </div>
                  </div>
                </td>
                <td
                  width="36"
                  valign="top"
                  style={{
                    width: "27.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                    overflow: "hidden",
                  }}
                >
                  <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                    <img src="./ja biztown small.png" className="z-20 badge-upper-logo-left-horizontal -rotate-90" />
                    <img src="./Avanade Logo RGB small.png" className="z-20 badge-upper-logo-right-horizontal -rotate-90" />
                    <div className="z-10">
                      <ReactNiceAvatar
                        className="w-40 h-40 -rotate-90 avatar-horizontal"
                        {...state.config}
                        hairColorRandom={true}
                        shape={state.shape}
                      />
                    </div>
                    <div className="text-black text-2xl text-center z-20 write-vertical rotate-180 name-horizontal">
                      {state.name}
                    </div>
                    <div className="text-black text-xl text-center z-20 write-vertical rotate-180 job-title-horizontal">
                      {state.jobTitle}
                    </div>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
          {/* Last set of rows */}
        </tbody>
      </table>
      <p
        className="MsoNormal"
        style={{
          marginTop: "0in",
          marginRight: "6.1pt",
          marginBottom: "8.0pt",
          marginLeft: "6.1pt",
        }}
      >
        <span style={{ display: "none" }}>&nbsp;</span>
      </p>
    </div>
  );
};
export default PageFour;

interface PageFourProps {
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
    jobTitle: string;
  };
  setPage: React.Dispatch<React.SetStateAction<number>>;
  print: () => void;
}
