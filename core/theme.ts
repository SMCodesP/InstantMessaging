import { DefaultTheme } from "react-native-paper";
import color from "color";

export const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    background: "#191622",
    disabled: "#41414D",
    text: "#E1E1E6",
    primary: "#483C67",
    accent: "#78D1E1",
    backdrop: color("#41414D").alpha(1).rgb().string(),
    onSurface: "#E89E64",
    notification: "#FF79C6",
    placeholder: "#988BC7",
    error: "#E96379",
    surface: color("#44475a").alpha(0.1).rgb().string(),
  },
};
