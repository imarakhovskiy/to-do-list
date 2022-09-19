// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    textColor: {
      error: string;
      warning: string;
      primary: string;
      secondary: string;
    };
    backgroundColor: {
      error: string;
      warning: string;
      main: string;
      primary: string;
      secondary: string;
    };
    borderColor: {
      primary: string;
    };
    shadowColor: {
      primary: string;
      error: string;
      warning: string;
    };
  }
}
