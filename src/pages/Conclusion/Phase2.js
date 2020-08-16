import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

import DevelopedSG from "../../img/developed-SG.jpeg"
import DevelopedSG2 from "../../img/developed-SG-2.jpeg"

export default function Phase2() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Conclusion: Phase 2 - Outstanding Nation</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph">
              The second phase is focused on building a vibrant, prosperous and
              1st world nation. It focuses more on adapting Singapore for the
              future while boosting Singapore status from a developing country
              to a 1st world country.
            </p>
            <p className="text-paragraph">
              To make sure that Singapore becomes ‘a little red dot’ on the
              world stage, the government has implemented policies to raise
              Singapore’s status from a developing to developed nation. To
              ensure that the Singapore economy continues to grow rapidly, the
              economy of Singapore was restructured in order to turn away from
              labour-intensive jobs and move towards an economy with more
              skill-based jobs. This is to transform Singapore from a
              cheap-labour economy, typically found in developing or undeveloped
              countries, to a financial and commercial hub of the future. To do
              so, the Singapore government has actively initiated programmes to
              equip locals with technology skills to help them integrate into
              the new economy structure. This has not only allowed SIngapore to
              transform from a third world economy to a first world economy, but
              also enabled Singapore to have a well-diversified economy which
              reduces the risk of a severe recession. This has made Singapore
              currency one of the strongest currencies in the world as the
              economy of Singapore is prosperous and stable. However, as the
              Singapore economy is doing well, the overly-successful measures
              and policies to curb birth rates pose a significant problem to
              Singapore’s projected GDP growth. As the local population in
              Singapore has been kept at a relatively constant size, the
              workforce may become insufficient to sustain the constant economic
              growth in Singapore. As a result, the Singapore government has
              implemented immigration policy to bring in foreigners from other
              countries to Singapore and policies which incentify Sinagporeans
              to have more children in order to keep up with the rising demand
              for manpower. By ensuring that there is a big enough population
              for the economy, it helps to keep Singapore’s markets competitive
              and further encourages the growth of the country's economy.
            </p>
            <p className="text-paragraph">
              In addition, the government has improved the quality of living in
              Singapore and also promoted diversity and inclusiveness in the
              society. Diversity is achieved through ensuring that different
              people from all walks of life have the opportunity to interact
              with each other, this has improved racial toleration and promoted
              racial harmony in Singapore. With rising standards of living
              attributed to the growth in the GDP per capita, the Singapore
              government has improved and renewed the facilities in existing or
              BTO (Build to order) flats to enable public housing to be an
              affordable and attractive option to younger generations. With
              high-quality public housing, it has solved the problem of
              homelessness and also instilled a sense of pride in Singaporeans
              and also helped to strengthen the sense of belonging to the
              country. As a result, the housing strategies deployed by the
              Singapore government have now been widely known to be one of the
              most effective and successful public housing plans in the world.
              This housing policy has also made Singapore one of the few
              countries in the world where a polyglot population lives
              harmoniously together. This has made Singapore an outstanding
              nation on the world stage as the country was able to solve one of
              the most difficult problems in just 50 short years.
            </p>
          </div>
          <div className="col-lg-4 row">
              <img src={DevelopedSG} alt="Singapore Landscape" className="img-fluid col-12 my-auto"/>
              <img src={DevelopedSG2} alt="Singapore Landscape" className="img-fluid col-12 my-auto"/>
          </div>
        </div>
      </div>
      <PageFooter
        prevLink="/conclusion/phase1"
        prevTitle="Conclusion Phase 1"
        prevDisplay
        nextLink="/"
        nextTitle="Home Page"
      />
    </PageTemplate>
  );
}
