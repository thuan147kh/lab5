import MyComponent from "./components/myComponent";
import { ThemeProvider } from "./ThemeContext";

const Exercise0_2 = () => {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
};

export default Exercise0_2;
