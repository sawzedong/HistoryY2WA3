import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";

export default function Phase1() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Conclusion: Phase 1 - Stable Society</h1>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph">
              For the first phrase, Singapore was focused on creating a stable
              society and solving the underlying social and economical problems
              after independence.
            </p>
            <p className="text-paragraph">
              To enable Singaporeans to have a safe and conducive form of
              housing, the government pushed out many policies to help the
              locals to afford public housing. As the locals at that point in
              time were mostly living in kampongs and rural areas, the Singapore
              government had to encourage Singaporeans to move to HDBs which
              were safer and had a bigger capacity. This ensured that all
              Singaporeans can have a decent place to live in which will
              effectively solve the problem of housing shortage in Singapore.{" "}
            </p>
            <p className="text-paragraph">
              In addition, the government was quick to recognise the post-war
              baby boom and implemented policies to curb the growth in total
              population. As the Singapore economy was struggling at that time
              due to various internal and external factors i.e. globalisation,
              the Singapore government wanted to ensure that the resources i.e.
              housing, finances in Singapore would not be overstretched due to
              an overwhelming demand as this can cause severe repercussions.
              This ensured that the problem of unemployment would not be
              worsened due to the increasing population and the government could
              focus more on solving the underlying problem of unemployment by
              rapidly developing infrastructure to attract foreign multinational
              companies to base their manufacturing operations in Singapore.
              This has helped the locals to have a stable job to earn sufficient
              money to satisfy their daily needs.{" "}
            </p>
            <p className="text-paragraph">
              This helps to solve Singapore’s pressing problems quickly and
              ensure that the basic needs of the people are satisfied which will
              lead to a more stable society.Ï
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <PageFooter
        prevLink="/conclusion/"
        prevTitle="Conclusion Overview"
        prevDisplay
        nextDisplay
        nextLink="/conclusion/phase2"
        nextTitle="Conclusion Phase 2"
      />
    </PageTemplate>
  );
}
