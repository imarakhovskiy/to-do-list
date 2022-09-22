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
      success: string;
      warning: string;
      error: string;
      main: string;
      primary: string;
      secondary: string;
    };
    borderColor: {
      primary: string;
    };
    shadowColor: {
      primary: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}
