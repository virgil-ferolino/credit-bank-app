declare module "styled-components/native" {
  import * as styledComponents from "styled-components";

  export interface DefaultTheme extends styledComponents.DefaultTheme {}

  const styled: styledComponents.ThemedStyledInterface<any>;
  export default styled;
}
