/** @jsx jsx */
import { jsx } from "@emotion/core";
import PageLayout from "../components/PageLayout";
import AboutSection from "./Home/AboutSection";
import { colors } from "../_Theme/UpdatedBrandTheme";
import JoinTheCommunity from "../components/JoinTheCommunity";
import Landing from "./Home/Landing";
import ProgramSection from "./Home/ProgramSection";
import ProgramBreakdown from "./Home/ProgramBreakdown";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.yellow.hex}
      hideCommonCTA
      isRebrand
    >
      <Landing />
      <ProgramSection />
      <ProgramBreakdown />
      <AboutSection />
      <JoinTheCommunity />
    </PageLayout>
  );
};

export default IndexPage;
