import { muestra, archivo, ai, logocamisa, stylecamisa } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: muestra,
  },
  {
    name: "filepicker",
    icon: archivo,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logocamisa,
  },
  {
    name: "stylishShirt",
    icon: stylecamisa,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logocamisa",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylecamisa",
  },
};
