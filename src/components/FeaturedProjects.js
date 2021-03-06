import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GridList from "./GridList";
import ProjectDetail from "./ProjectDetail";
import { colors } from "../_Theme/UpdatedBrandTheme";

const FeaturedProjects = () => {
  const { contentfulProjectCollection } = useStaticQuery(
    graphql`
      query {
        contentfulProjectCollection(
          contentful_id: { eq: "2nTNJtpwRA4SKi1kOdHDr1" }
        ) {
          title
          projects {
            title
            year
            yearEnd
            current
            projectUrl
            summary {
              summary
            }
            program {
              name
            }
            organizations {
              name
            }
            topics {
              name
            }
            projectTypes {
              name
            }
          }
        }
      }
    `
  );

  return (
    <GridList
      wideContent
      showDividerLine
      dividerLineColor={colors.yellow.hex}
      shrinkToColumn
    >
      {contentfulProjectCollection.projects.map(project => (
        <ProjectDetail
          year={project.year}
          yearEnd={project.yearEnd}
          current={project.current}
          title={project.title}
          summary={project.summary && project.summary.summary}
          partners={project.partners}
          description={project.description && project.description.json}
          program={project.program && project.program.name}
          organizations={project.organizations}
          topics={project.topics}
          projectTypes={project.projectTypes}
          projectUrl={project.projectUrl}
        />
      ))}
    </GridList>
  );
};

export default FeaturedProjects;
