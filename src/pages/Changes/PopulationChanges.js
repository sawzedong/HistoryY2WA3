/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";
import FootnoteCitation from "../../components/Citation/FootnoteCitation";
import InTextCitation from "../../components/Citation/InTextCitation.js";

import Figure2_1 from "../../img/population-changes/Figure-2-1.jpg";
import Figure2_2 from "../../img/population-changes/Figure-2-2.jpg";
import Figure2_3 from "../../img/population-changes/Figure-2-3.png";
import Figure2_4 from "../../img/population-changes/Figure-2-4.png";
import Figure2_5 from "../../img/population-changes/Figure-2-5.png";

export default function Changes_Population() {
  return (
    <PageTemplate padding>
      <div id="topheader" />
      <div className="p-2">
        <h1>Population Change</h1>
        <p className="text-paragraph">
          How Singapore changed from introducing policies that aimed to{" "}
          <strong>decrease population</strong> in Singapore to trying to{" "}
          <strong>increase the population</strong> of Singapore.
        </p>

        <h2 className="py-3">Change in Focus of Policies</h2>

        <h3 className="py-2">
          <u>Phase 1: Decreasing Population Growth</u>
        </h3>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Cutting Down Birth Rates</h4>
            <p className="text-paragraph text-center">
              <img
                src={Figure2_1}
                className="responsive-poster"
                alt="Poster Reading One, two - and that's ideal : Sterilisation - the best method for family limitation."
              />
              <br />
              <span>
                Figure 2.1
                <InTextCitation ID={1} />
              </span>
            </p>

            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
                "...in the stage of developing and the poverty is very high,
                there are lot of members in the family and the country is not
                doing very well and the population needs to be controlled...do
                not have a lot of burden to the government"
                <InTextCitation ID={2} />
              </p>
              <footer className="blockquote-footer">Mr Cheong</footer>
            </blockquote>

            <p className="text-paragraph">
              The population policies initially discouraged couples to give
              birth to more children and to stop at having 2 children, in order
              to lower birth rates. In the past, the purpose of the population
              policy was to decrease and manage birth rates as it could
              potentially affect employment and replacement rates. Singapore was
              hit severely by unemployment and lack of housing—and an increasing
              population back then would have only worsened the situation. The
              government eventually did manage to decrease the birth rates in
              Singapore through policies such as "Stop At Two" as well as "One,
              two - and that's ideal : sterilisation - the best method for
              family limitation."
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <h3 className="py-2">
          <u>Phase 2: Increasing Population</u>
        </h3>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Increasing Birth Rates</h4>
            <p className="text-paragraph text-center">
              <img
                src={Figure2_2}
                className="responsive-poster"
                alt="Poster Reading Children. Life would be empty without them."
              />
              <br />
              <span>
                Figure 2.2
                <InTextCitation ID={3} />
              </span>
            </p>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
                "Children bring joy to the family. To support couples in their
                decision to have more children, the Child Development Co-Savings
                (Baby Bonus) Scheme helps to lighten the financial costs of
                raising children...includes a cash gift and contributions to the
                Child Development Account (CDA)."
                <InTextCitation ID={4} />
              </p>
              <footer className="blockquote-footer">
                Ministry of Social and Family Development
              </footer>
            </blockquote>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
                "The government is swinging to really try and encourage more
                families to have more children. So it's not just for families to
                have children, but families to have more and more."
                <InTextCitation ID={5} />
              </p>
              <footer className="blockquote-footer">Mr Emmanuel</footer>
            </blockquote>
            <p className="text-paragraph">
              "Children. Life Would Be Empty Without Them" policy as well as
              giving Incentives for having babies in Singapore—Baby Bonus
              Scheme. The government has introduced these measures to show
              Singaporean’s the importance of having children and is encouraging
              Singaporeans to have not only children but to have more and more.
              Furthermore, the government has also introduced the Child
              Development Co-Savings (Baby Bonus) Scheme to aid couples in the
              financial aspect of raising children.{" "}
            </p>
          </div>
          <div className="col-lg-4">
            {/* <img src={CPFImg} className="img-fluid" alt="CPF Logo" /> */}
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Attracting Migrants</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
                "The new Contact Singapore is a strategic alliance…to attract
                global talent to work, invest and live in Singapore. ...because
                we have kept our labour market flexible and companies could get
                the manpower and talent they needed to grow. Talent is therefore
                a key imperative for continued growth."
                <InTextCitation ID={6} />
              </p>
              <footer className="blockquote-footer">
                Ministry of Manpower
              </footer>
            </blockquote>
            <p className="text-paragraph">
              Singapore has launched out Contact Singapore in hopes of
              attracting more people to migrate to aid Singapore in her
              increasing economic and employment growth. Contact Singapore
              attracts global talent, including overseas Singaporeans to the
              abundant career opportunities in Singapore. By allowing global
              talent - overseas entrepreneurs or high net worth individuals, to
              invest and initiate new business activities here in Singapore, it
              would complement our local talent pool in developing and growing
              world class industries in Singapore.{" "}
            </p>
          </div>
          <div className="col-lg-4">
          </div>
        </div>

        <h2 className="py-3">Reasons of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
          <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "...the Singaporean population is beginning to age and decline.
              Without a growing, reliable workforce, Singapore will not be able
              to achieve economic growth, which is crucial for creating more
              jobs and growing wages."
                <InTextCitation ID={7} />
              </p>
              <footer className="blockquote-footer">
                Kirsten Han <cite title="Source Title">in a blog</cite>
              </footer>
            </blockquote>
            
            <p className="text-paragraph">
              The government has recognised that a decline in birth rates would
              lead to future economic problems and affect replacement rates as
              there is a lack in a growing and reliable workforce. When there is
              a lacking workforce, Singapore’s economic growth would be affected
              which is crucial in creating more jobs and growing wages. As such,
              the government has taken measures to encourage couples to have
              children like the Baby Bonus Scheme by lightening the financial
              costs of raising children.{" "}
            </p>
          </div>
        </div>

        <h2 className="py-3">Impacts of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph text-center">
              <img
                src={Figure2_3}
                class="img-fluid"
                alt="Graph of Singapore Natural Population Growth, 1966 to 1984 highlighted"
              />
              <br />
              Figure 2.3
              <InTextCitation ID={8} />
            </p>
            <p className="text-paragraph">
              As shown in Figure 2.3, the Government has been successful, if not
              overly-successful in decreasing the birth rates, causing a sharp
              drop in the population natural increase. Hence, this has led to a
              greatly decreased rate of population growth over the years of the
              implementation of the policies to decrease the population (i.e.
              1966 to 1988).
            </p>
            <p className="text-paragraph text-center">
              <img
                src={Figure2_4}
                class="img-fluid"
                alt="Graph of Singapore Natural Population Growth, 1988 to 2000 highlighted"
              />
              <br />
              Figure 2.4
              <InTextCitation ID={8} />
            </p>
            <p className="text-paragraph">
              Subsequently, after the government started the change to increase
              the population of Singapore and the government actively encourages
              couples to have more children, birth rates in Singapore would
              generally increase. While there has been generally an increase for
              a few years, the values did not return to the population natural
              increase at independence, and the value continues declining
              despite the numerous efforts to cause a population growth.
            </p>
            <p className="text-paragraph text-center">
              <img
                src={Figure2_5}
                class="img-fluid"
                alt="Graph of Singapore Population Growth, 1975 to 1987 highlighted"
              />
              <br />
              Figure 2.5
              <InTextCitation ID={8} />
            </p>
            <p className="text-paragraph">
              Figure 2.5 shows the total population of Singapore following a
              general increasing trend. However, at the Point P2.5A, there is an
              increase in the population growth rate, contrasting the slow
              natural population growth rate, and this can be attributed to an
              increase in the number of migrants moving to Singapore.
            </p>
            <p className="text-paragraph">
              This shows that while the government was very effective in
              decreasing birth rates, their change to focusing on increasing
              birth rates was not as successful and effective, hence having only
              a subtle and little impact on the population. Despite this, they
              have effectively and quickly attracted migrants to come to
              Singapore, showing that they have used strong communication and
              good pull factors to increase the number of migrants coming to
              Singapore.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            {/* <i className="fas fa-house-user fa-7x py-4"></i> */}
          </div>
        </div>

        <FootnoteCitation ID={1}>
          One, two - and that's ideal : Sterilisation - the best method for
          family limitation. [Advertisement]. (1966). Retrieved August 15, 2020,
          from{" "}
          <a href="https://www.nas.gov.sg/archivesonline/posters/record-details/308132f6-115c-11e3-83d5-0050568939ad">
            https://www.nas.gov.sg/archivesonline/posters/record-details/308132f6-115c-11e3-83d5-0050568939ad
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={2}>
          Cheong, K. (2020, August 2). Singapore Government Policies (1970)
          [Personal interview].
        </FootnoteCitation>
        <FootnoteCitation ID={3}>
          Children. Life Would Be Empty Without Them [Advertisement]. (1990).
          Retrieved August 15, 2020, from{" "}
          <a href="https://www.nas.gov.sg/archivesonline/posters/record-details/31c1fa40-115c-11e3-83d5-0050568939ad">
            https://www.nas.gov.sg/archivesonline/posters/record-details/31c1fa40-115c-11e3-83d5-0050568939ad
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={4}>
          Ministry of Social and Family Development. (2020). Baby Bonus Scheme.
          Retrieved August 15, 2020, from{" "}
          <a href="https://www.msf.gov.sg/policies/Strong-and-Stable-Families/Supporting-Families/Pages/Baby-Bonus-Scheme.aspx">
            https://www.msf.gov.sg/policies/Strong-and-Stable-Families/Supporting-Families/Pages/Baby-Bonus-Scheme.aspx
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={5}>
          Emmanuel, A. (2020, August 5). Singapore Government Policies (2000)
          [Personal interview].
        </FootnoteCitation>
        <FootnoteCitation ID={6}>
          New Contact Singapore Launched to Attract Global Talent to Work Invest
          and Live in Singapore. (2015, April 15). Retrieved August 16, 2020,
          from{" "}
          <a href="https://www.mom.gov.sg/newsroom/press-releases/2008/new-contact-singapore-launched-to-attract-global-talent-to-work-invest-and-live-in-singapore">
            https://www.mom.gov.sg/newsroom/press-releases/2008/new-contact-singapore-launched-to-attract-global-talent-to-work-invest-and-live-in-singapore
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={7}>
          Han, K. (2013). Singapore is trying to fix a population problem it
          doesn’t have. Retrieved 2020, from{" "}
          <a href="https://qz.com/50658/singapores-government-wants-the-population-to-increase-by-almost-1-5-million-people-to-sustain-economic-growth/">
            https://qz.com/50658/singapores-government-wants-the-population-to-increase-by-almost-1-5-million-people-to-sustain-economic-growth/
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={8}>
          Singapore Department of Statistics. (2020, May 21). M810001 -
          Indicators On Population, Annual [Chart]. Retrieved August 16, 2020,
          from{" "}
          <a href="https://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=14912">
            https://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=14912
          </a>
        </FootnoteCitation>
      </div>
      <PageFooter
        prevLink="/changes/housing"
        prevTitle="Housing Changes "
        prevDisplay
        nextDisplay
        nextLink="/changes/economic"
        nextTitle="Economic Changes"
      />
    </PageTemplate>
  );
}
