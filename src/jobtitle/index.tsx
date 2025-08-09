import {defaultOptions} from "../utils"; 

export default function jobtitle (props: { style: string }): string {
  const { style } = props;
  switch (style) {
    case defaultOptions.jobTitle[1]:
        return defaultOptions.jobTitleAbv[1];
    case defaultOptions.jobTitle[2]: 
        return defaultOptions.jobTitleAbv[2];
    case defaultOptions.jobTitle[3]:
        return defaultOptions.jobTitleAbv[3];
    case defaultOptions.jobTitle[4]:
        return defaultOptions.jobTitleAbv[4];
    case defaultOptions.jobTitle[5]:
        return defaultOptions.jobTitleAbv[5];
    case defaultOptions.jobTitle[6]:
        return defaultOptions.jobTitleAbv[6];
    default:
        return defaultOptions.jobTitleAbv[0];
  }
}