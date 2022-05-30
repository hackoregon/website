/** @jsx jsx */
import { jsx } from "@emotion/core";
import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import AboutBlock from "./Home/AboutBlock";
import ProgramAreas from "./Home/ProgramAreas";
import { colors } from "../_Theme/UpdatedBrandTheme";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.yellow.hex}
      hideCommonCTA
    >
      <Splash />
      <AboutBlock />
      <ProgramAreas />
    </PageLayout>
  );
};

export default IndexPage;
