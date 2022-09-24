// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    textColor: {
      success: string;
      warning: string;
      error: string;
      primary: string;
      secondary: string;
    };
    backgroundColor: {
      main: string;
      success: string;
      warning: string;
      error: string;
      primary: string;
      secondary: string;
    };
    borderColor: {
      success: string;
      warning: string;
      error: string;
      primary: string;
      secondary: string;
    };
    shadowColor: {
      success: string;
      warning: string;
      error: string;
      primary: string;
      secondary: string;
    };
  }
}
