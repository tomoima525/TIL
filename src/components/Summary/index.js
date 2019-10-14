import React from "react";

import FeaturedImage from "../FeaturedImage";
import H1 from "../H1";
import P from "../P";
import TableOfContents from "../TableOfContents";
import Wrapper from "./Wrapper";
import Link from "./Link";
import Date from "./Date";
import ContinueReading from "./ContinueReading";

function Summary({ date, excerpt, headings, image, slug, title }) {
  return (
    <Wrapper>
      {image && (
        <Link to={slug}>
          <FeaturedImage sizes={image.childImageSharp.sizes} />
        </Link>
      )}
      <H1>
        <Link to={slug}>{title}</Link>
      </H1>
      <Date>{date}</Date>
      {headings.length > 0 ? (
        headings.map(({ value }) => (
          <TableOfContents> + {value}</TableOfContents>
        ))
      ) : (
        <P>{excerpt}</P>
      )}
      <ContinueReading to={slug}>Continue Reading &rarr;</ContinueReading>
    </Wrapper>
  );
}

export default Summary;
