/** @jsx jsx */
// eslint-disable-next-line
import React from "react";

import { jsx, css } from "@emotion/core";
// import { useStaticQuery, graphql } from "gatsby";
import SectionHeader from "../../components/SectionHeader";
import GridSingle from "../../components/GridSingle";
import ContentContainer from "../../components/ContentContainer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";

const TOUR_DATES = [
  {
    date: "Nov 24",
    city: "Edinburgh",
    venue: "Kickoff // Fiddle Party"
  },
  {
    date: "Nov 25",
    city: "",
    venue: "Intersectional Feminist-Thinking for Data and Justice Movements"
  },
  {
    date: "Nov 30",
    city: "London",
    venue: "All Data are Created: Technology as an Artifact of Collaboration"
  },
  {
    date: "Dec 1",
    city: "",
    venue:
      "Hollywood vs Silicon Valley Models for Labor, Talent, and Attribution"
  },
  {
    date: "Dec 6",
    city: "Zurich",
    venue:
      "Growing Living Information Systems: Bauhaus Weaving Women and Material Ecology"
  },
  {
    date: "Dec 9",
    city: "Helsinki",
    venue: "Mythology as Data: Indigenous Frameworks and Folklore"
  },
  {
    date: "Dec 15",
    city: "Berlin",
    venue: "Data Contrapasso, Context Chiaroscuro"
  },
  {
    date: "Dec 19",
    city: "Paris",
    venue: "Data Couture // Private Dinner Party"
  },
  {
    date: "Dec 29",
    city: "Barcelona",
    venue:
      "Cybernetics and Democratic Socialist Models for a New Era in Civic Innovation"
  }
];

const EventLineItem = event => {
  return (
    <>
      <span
        css={css`
          margin: 10px;
        `}
      >
        {event.event.city}
      </span>
      <span
        css={css`
          margin: 10px 20px 30px 20px;
        `}
      >
        {/* eslint-disable-next-line */}
        <span>{event.event.date} // </span>
        <span
          css={css`
            font-weight: normal;
          `}
        >
          {event.event.venue}
        </span>
      </span>
    </>
  );
};

const WorldTour = () => {
  // const { allContentfulHeading } = useStaticQuery(
  //   graphql`
  //     query {
  //       allContentfulHeading(
  //         filter: { contentful_id: { eq: "28MWeFDH6UJot2shXrZ886" } }
  //       ) {
  //         edges {
  //           node {
  //             title
  //             subtitle
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <ContentContainer margin="sm">
      {/* eslint-disable-next-line */}
      <a id="events" />
      <SectionHeader
        title="Data is Dust (Europe Tour)"
        subtitle="Data as Material for Art"
      />
      <GridSingle wideContent>
        <p
          css={css`
            ${smBreak}, ${xsBreak} {
              margin: 0 20px;
            }
          `}
        >
          A pop-up series of conceptual speaking and performance events at the
          intersection of data, design, politics & culture. Featuring Executive
          Director Cat Nikolovski and surprise guests.
        </p>
        <div
          className="WorldTourList"
          css={css`
            display: grid;
            margin-top 40px;
            padding: 0 40px;
            grid-template-columns: 15% auto;
            font-size: 24px;
            font-weight: bold;
            ${smBreak}, ${xsBreak} {
              grid-template-columns: auto;
            }
          `}
        >
          {TOUR_DATES.map(event => (
            <EventLineItem event={event} />
          ))}
        </div>
      </GridSingle>
    </ContentContainer>
  );
};

export default WorldTour;
