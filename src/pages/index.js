/** @jsx jsx */
import { jsx } from "@emotion/core";
import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import Teaser from "./Home/Teaser";
import CallToActionBlocks from "./Home/CallToActionBlocks";
import WorldTour from "./Home/WorldTour";
import ContributorCTA from "./Collaboration/ContributorCTA";
import DividerLine from "../components/DividerLine";
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

      <Teaser />
      <DividerLine hexColor={colors.blue.hex} />

      <WorldTour />
      <DividerLine hexColor={colors.pink.hex} />

      <CallToActionBlocks noDivider />
      <DividerLine hexColor={colors.yellow.hex} />

      <ContributorCTA />
      <DividerLine hexColor={colors.green.hex} />
    </PageLayout>
  );
};

export default IndexPage;
