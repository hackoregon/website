/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Logo } from "@hackoregon/ui-brand";
import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import ProgramAreaCard from "./ProgramAreaCard";

const programs = [
  {
    title: "CIVIC Collaboration Studio",
    image: "images/programArea_CivicCollaboration.png",
    summary:
      "Bring us your challenge!  CIVIC Collaboration Studio is our production branch that works with partners on scoping, piloting, and implementing special projects.  Whether you have an existing proposal or are just in the brainstorming phase, we can provide strategic guidance as well as context-aware engineering and design capacity to bring your idea to life. Example areas include • Data Visualization and Analysis • CIVIC Platform SaaS • Data Governance",
    projectUrl: "www.example.com",
    ctaText: "Work with us!"
  },
  {
    title: "Contextual Metadata Lab",
    image: "images/programArea_contextualMetadata.png",
    summary:
      "Think metadata is boring?  THINK AGAIN! Metadata is data that describes a dataset and its conditions.  Creating “contextual metadata” is a novel approach that sits at the intersection of social and technical systems to inform how data is constructed and used, with fascinating implications. We bring together multidisciplinary applied researchers and practitioners to develop emergent technology and processes which practically address common (and complex!) issues of information provenance, embedded bias, and citizen impact through structured methodologies and constituent-centered design. Request to join the Lab as a collaborator, or check out one of our workshops!",
    projectUrl: "www.example.com",
    ctaText: "Workshops"
  },
  {
    title: "Democracy Reform Tech",
    image: "images/programArea_democracyReform.png",
    summary:
      "Many cities, states, and counties across the United States have passed— or are considering passing— democracy related policy reforms that are aimed to level the campaign playing field and improve equitable constituent representation. But when those reforms are implemented, are your systems ready?  We specialize in adapting reliable and sustainable technology to fit  unique program mandates, and move at the speed of change. ",
    projectUrl: "www.example.com",
    ctaText: "Action Areas"
  },
  {
    title: "Intersectional Futures Network",
    image: "images/programArea_intersectionalFutures.png",
    summary:
      "Technology is a reflection of our values and our priorities as a culture, and a living expression of humanity’s greatest collective abilities. Who is centered in these systems?  Who has the power to create them? Who is left out? What is the legacy of digital infrastructure we will leave for the next generation? We are a community of practice rethinking categories and representation, and imagining how to bridge the gap between lived experience and the limitations of realities captured in data. IFN is an inclusive network for discussion and general collaboration, (events, publishing, peer support) although we do have limited capacity and require interviews.",
    projectUrl: "www.example.com",
    ctaText: "Join the Community!"
  },
  {
    title: "CivTech Global Scale-Up Programme",
    image: "/mages/programArea_civTech.png",
    summary:
      "How do you procure what doesn’t exist yet? This is the central question to the CivTech Alliance, a network of nations around the globe considering how to bring new innovations to the forefront of green technology. CIVIC is a strategic member of GSUP,  supporting values-based business models and providing guidance to companies with diverse founders to navigate the landscape of worldwide procurement to government clients at scale. Does your company have a climate solution that’s ready for the interational stage?  Applications are open now!",
    projectUrl: "www.example.com",
    ctaText: "Apply now!"
  },
  {
    title: "Data Materialism Department",
    image: "images/programArea_data_materialism.png",
    summary:
      "In its most powerful form, data is more than a tool— it has the ability to instantaneously and permanently alter our point of reference, spark emotional resonance, and shape how we see ourselves within systems. Inspired by the tradition of Bauhaus women weavers, Data Materialism frames data as a tangible “material” while investigating its inherent and assigned qualities in various forms and combinations.  Bridging research with experimental formats, we imagine what it means to elevate the medium (and its methods) from craft to art. Data Materialism Dept. facilitates collaborations between researchers and artists to produce conceptual speaking and art exhibition series’ around the world. See if there’s an event near you, or if you’re an artist or researcher with an idea, you can apply to join a working group.",
    projectUrl: "www.example.com",
    ctaText: "Upcoming Events"
  }
];

const ProgramAreas = () => {
  return (
    <Fragment>
      <GridSingle
        wideContent
        containerStyle={css`
          padding-top: 60px;
        `}
      >
        <a id="programs" />
        <div
          style={{
            display: "flex",
            marginBottom: "10px"
          }}
        >
          <Logo type="squareLogo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px"
            }}
          >
            <h2
              style={{
                margin: 0,
                color: colors.primary.hex
              }}
            >
              Program Areas
            </h2>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <span
              style={{
                margin: 0,
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Technology as an Artifact of Collaboration 🌱
            </span>
          </div>
        </div>
        <p>
          Our team cultivates creative environments to foster discovery and
          demonstrate the potential of innovation at the intersection of
          emergent ethics.
        </p>
        <p>
          We operate across a wide range of program areas, from full-scale
          production environments, to experimental research, applied trainings,
          and conceptual art exhibitions.
        </p>
        <p>
          {" "}
          Not sure where to start? Check out our guide on{" "}
          <a href="http://www.civicsoftwarefoundation.org">getting involved</a>.
        </p>
      </GridSingle>
      <GridSingle
        containerStyle={css`
          padding-bottom: 120px;
        `}
      >
        {programs.map(program => (
          <ProgramAreaCard
            title={program.title}
            image={program.image}
            summary={program.summary}
            projectUrl={program.projectUrl}
            ctaText={program.ctaText}
          />
        ))}
      </GridSingle>
    </Fragment>
  );
};

export default ProgramAreas;
