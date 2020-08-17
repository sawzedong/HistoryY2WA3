/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";
import FootnoteCitation from "../../components/Citation/FootnoteCitation";
import InTextCitation from "../../components/Citation/InTextCitation.js";

import EDBImg from "../../img/economic-changes/economic-development-board.png"
import JTCImg from "../../img/economic-changes/jurong-town-corporation.png"
import MASImg from "../../img/economic-changes/monetary-authority-of-singapore.png"
import NCBImg from "../../img/economic-changes/national-computer-board.png"
import SIJORIImg from "../../img/economic-changes/singapore-johor-riau.png"
import Figure3_1 from "../../img/economic-changes/Figure-3-1.png";
import Figure3_2 from "../../img/economic-changes/Figure-3-2.png";
import Figure3_3 from "../../img/economic-changes/Figure-3-3.png";

export default function Changes_Economic() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Economic Change</h1>
        <p className="text-paragraph">
          There was a change from focusing on{" "}
          <strong>developing manufacturing industries</strong> to{" "}
          <strong>developing skills and capital based industries</strong>.
        </p>

        <h2 className="py-3">Change in Focus of Policies</h2>

        <h3 className="py-2"><u>Phase 1: Manufacturing Industries</u></h3>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Economic Expansion Incentives Act</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              Bill No. 32/1967
              <br />
              "An Act to amend and consolidate the laws relating to incentives
              for the establishment of pioneer industries and for economic
              expansion generally, by way of providing relief from income tax
              and to repeal the Pioneer Industries (Relief from Income Tax)
              Ordinance, 1959 (No. 1 of 1959) and the Industrial Expansion
              (Relief from Income Tax) Ordinance, 1959 (No. 2 of 1959). "
                <InTextCitation ID={1} />
              </p>
              <footer className="blockquote-footer">
                Singapore Statutes Online
              </footer>
            </blockquote>
            <p className="text-paragraph">
              An Act to amend and consolidate the laws relating to incentives
              for the establishment of pioneer industries and for economic
              expansion generally, by way of providing relief from income tax
              and to repeal the Pioneer Industries (Relief from Income Tax)
              Ordinance, 1959 (No. 1 of 1959) and the Industrial Expansion
              (Relief from Income Tax) Ordinance, 1959 (No. 2 of 1959).
            </p>
          </div>
          <div className="col-lg-4 row">
          <i className="fas fa-gavel fa-7x py-4 mx-auto my-auto"></i>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Economic Development Board</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The aim for the board was to tackle the high unemployment rate. A
              comprehensive industrialization programme is provided for locals
              to train them for their jobs. In the late 1960s, the EDB
              reoriented the focus from labour-intensive industries to training
              the workforce for capital-intensive and higher-technology
              industries. The country’s focus shifted towards export
              manufacturing, internationalisation and attracting foreign
              investments."
                <InTextCitation ID={2} />
              </p>
              <footer className="blockquote-footer">
                NLB E-Resource
              </footer>
            </blockquote>
            <p className="text-paragraph">
              The Economic Development programmes helped equip the locals with
              basic skills to prepare them for the jobs in the manufacturing
              industry. By giving the Singaporeans the knowledge of working in
              the manufacturing industry, this will attract the foreign
              Multinational Corporations (MNCs). MNCs do not need to spend money
              training their new workers. This increases the profits MNCs gain
              annually. The EDB also helped to set up policies from 1960s to the
              1970s to oversee the development of the manufacturing industries
              and also to attract foreign investments. This helped to boost
              Singapore economy in the industrialization phase of the economy
            </p>
          </div>
          <div className="col-lg-4 row">
            <img src={EDBImg} className="sidebar-img mx-auto my-auto" alt="EDB logo"/>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>State Development Plan and Jurong Town Corporation</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The plan aimed to solve the pressing issues of economic
              stagnation and high unemployment rate through an expansion in
              manufacturing."
                <InTextCitation ID={3} />
              </p>
              <footer className="blockquote-footer">
                NLB E-Resource
              </footer>
            </blockquote>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The JTC is the principal developer and manager of industrial
              estates and their related facilities. It was set up in 1968 under
              the Jurong Town Corporation act. By the end of 1969, JTC had
              established a new industrial estate in Senoko and reclaimed some
              114 ac (0.5 sq km) of land for the expansion of the Kranji and
              Sungei Kadut industrial estates. This led to an increase in the
              number of operational factories in Jurong."
                <InTextCitation ID={4} />
              </p>
              <footer className="blockquote-footer">
                NLB E-Resource
              </footer>
            </blockquote>
            <p className="text-paragraph">
              From these 2 sources, the state development plan and the Jurong
              Town Corporation helps to develop Singapore’s industrial estates.
              By ensuring that Singapore has developed industrial infrastructure
              for example water pipes, roads, it is to make sure that Singapore
              would be able to support the needs of the manufacturing bases of
              foreign multinational corporations (MNCs). This would benefit MNCs
              as it allows them to set up the factories in Singapore with ease
              and with it, comes easy profits.
            </p>
          </div>
          <div className="col-lg-4 row">
          <img src={JTCImg} className="sidebar-img mx-auto my-auto" alt="JTC logo"/>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Economic Monitoring Organisations</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "It manages Singapore’s exchange rate, official foreign reserves,
              and liquidity in the banking sector. MAS also works with the
              financial industry to promote Singapore as a dynamic international
              financial centre. It facilitates the development of
              infrastructure, adoption of technology, and upgrading of skills in
              the financial industry."
                <InTextCitation ID={5} />
              </p>
              <footer className="blockquote-footer">
                Monetary Authority of Singapore
              </footer>
            </blockquote>
            <p className="text-paragraph">
              The establishment of the Monetary Authority of Singapore helped to
              regulate the value of Singapore’s currency. This gives confidence
              to foreign Multinational Corporations (MNCs) that Singapore’s
              economy is well managed, and that the economy of Singapore will
              not collapse suddenly, which would lead to massive losses of
              profits for the MNCs. This can allow MNCs in Singapore to gain
              profit steadily, which would benefit MNCs significantly. This will
              attract more MNCs to invest in Singapore, which would build up
              Singapore’s economy.
            </p>
          </div>
          <div className="col-lg-4 row">
          <img src={MASImg} className="sidebar-img mx-auto my-auto" alt="MAS logo"/>
          </div>
        </div>

        <h3 className="py-2 text-underline"><u>Phase 2: Skill- and Capital-Based Industries</u></h3>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Correction Wage Policy</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The corrective wage policy was recommended in 1979 as a part of
              the overall strategy to shift the economy to skill-intensive,
              middle technology and higher value-added industries and services.
              To ensure continuing success in economic restructuring, the NWC
              recommends that the corrective wage policy of the last 2 years be
              pursued for this year as was originally intended."
                <InTextCitation ID={6} />
              </p>
              <footer className="blockquote-footer">
                National Wage Council
              </footer>
            </blockquote>
            <p className="text-paragraph">
              By the 1980s, the industrialization phase of Singapore was slowing
              down which essentially slowed down economic growth. In order to
              make sure that Singapore continues to grow at a steady pace, the
              government no longer wants Singapore to be a cheap labour economy.
              The wage policy was introduced to increase labour cost which made
              manufacturing industries move out of Singapore to prevent the loss
              of profits due to the increased cost of labour. This policy helps
              Singapore to move away from its reliance on manufacturing
              industries and speed up the transformation of Singapore’s economy
              from a labour intensive one to a skill based economy.
            </p>
          </div>
          <div className="col-lg-4 row text-center">
            <i className="fas fa-money-check-alt fa-7x py-4 mx-auto my-auto"></i>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>National Computer Board</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The agency was the National Computer Board (NCB). It was set up
              in September 1981 to perform three main statutory functions:
              Computerised Singapore’s Civil Service, coordinate computer
              education and training, and develop the local computer services
              industry."
                <InTextCitation ID={7} />
              </p>
              <footer className="blockquote-footer">
                Straits Times News Article
              </footer>
            </blockquote>
            <p className="text-paragraph">
              Since the world is getting more technologically advanced from the
              start of the 1980s, Singapore needs the workforce to be more
              adapted to the new, and be more aware of the usage of technology.
              This will greatly benefit Singapore as more economic sectors are
              starting to be more reliant on technology. Equipping Singapore’s
              working population with technology skills allow them to adapt to
              the new, and provides Singapore to have opportunities to create
              new jobs that are related to technology.
            </p>
          </div>
          <div className="col-lg-4 row">
          <img src={NCBImg} className="sidebar-img mx-auto my-auto" alt="NCB logo"/>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Singapore-Johor-Riau (SIJORI)</h4>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "The Singapore-Johor-Riau (SIJORI) growth triangle was initiated
              in the early 1990s to relocate Singapore’s investments in
              manufacturing to nearby areas of Johor in Malaysia and the Bintan
              and Batam islands of the Riau province in Indonesia. Singapore
              acted as the main financial center of the triangle, while the
              Johor and Riau areas provided the labor force for the
              manufacturing processes"
                <InTextCitation ID={8} />
              </p>
              <footer className="blockquote-footer">
                Woo Jun Jie, LKY School of Public Policy
              </footer>
            </blockquote>
            <p className="text-paragraph">
              The Singapore-Johor-Riau (SIJORI) growth triangle helps companies
              shift their manufacturing operations from Singapore to
              neighbouring countries while still using Singapore as the
              financial hub This will boost Singapore economic growth as
              Singapore will be able to develop the financial sector of the
              economy while also moving away from its reliance on the
              manufacturing industries.{" "}
            </p>
          </div>
          <div className="col-lg-4 row">
          <img src={SIJORIImg} className="sidebar-img mx-auto my-auto border-black" alt="Map of SIJORI"/>
          </div>
        </div>

        <h2 className="py-3">Reasons of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph">
              In the 1960s to 1980s,in order to ensure the survival of Singapore
              after independence, the government had to solve the pressing
              economic concerns i.e. the deteriorating unemployment rates. As
              creating skill-based industries takes time, the most feasible
              solution was to set up infrastructure to attract foreign MSCs to
              base their manufacturing operations in Singapore. This was
              necessary for the rapid creation of jobs and it is also a fast way
              to equip workers with skills. This also helped to provide the
              capital needed for rapid industrialization which in turn can lead
              to economic growth in Singapore.
            </p>
            <p className="text-paragraph text-center">
              <img
                src={Figure3_1}
                alt="GDP per capita increase"
                className="img-fluid"
              />
              <br />
              Figure 3.1
              <InTextCitation ID={9} />
            </p>
            <p className="text-paragraph">
              In the 1980s, manufacturing companies that have contributed
              significantly to the growth of the Singapore economy in the early
              years can no longer make use of the low wage economy in Singapore
              due to the rising cost of labour in Singapore. This has encouraged
              manufacturing industries to move away from Singapore to the
              surrounding regions of Malaysia and Indonesia which were still
              mostly made up of low-skilled and low wage workers.
            </p>
            <blockquote className="blockquote">
              <p className="text-paragraph mb-0">
              "In 1985, Singapore experienced its first post-independence
              recession. Prior to the economic decline, Singapore had been
              enjoying a continuous GDP growth of 8.5 percent per year. Early
              warning signs of a slowing economy were already evident in 1984,
              but a booming construction industry bolstered the overall numbers.
              By the end of 1984, the construction market had become saturated
              and few projects were in the pipeline for completion. Singapore
              was headed towards a recession. By the second quarter of 1985,
              Singapore posted a growth rate of -1.4 percent, which dropped to
              -3.5 percent in the third quarter. The sharp and sudden downturn
              took many by surprise.Amid news of companies going bankrupt and
              the retrenchment of workers, Singapore’s unemployment figure rose
              to 4.1 percent in June 1985 from 2.9 percent in the previous four
              years."
                <InTextCitation ID={10} />
              </p>
              <footer className="blockquote-footer">
                NLB E-Resource
              </footer>
            </blockquote>
            <p className="text-paragraph">
              In 1984, there were also signs of a slowing economy. To make sure
              that Singapore’s economy continues to grow at a steady pace, the
              government has put in place policies such as the National Computer
              Board to transform the economy from a labour-intensive to one that
              focuses more on skill-based and capital industries. This will not
              only diversify the economy, but also help Singapore to adapt
              better to the changing global economy and better positioned itself
              in the growing capital and high-tech industries
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <h2 className="py-3">Impacts of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph text-center">
              <img
                src={Figure3_2}
                alt="GDP per capita increase"
                className="img-fluid"
              />
              <br />
              Figure 3.2
              <InTextCitation ID={11} />
            </p>
            <p className="text-paragraph">
              Through the different policies Singapore has implemented in the
              1960s, it attracts foreign multinational corporations (MNCs) to
              come and invest in Singapore, and create manufacturing hubs in
              Singapore. The sharp increase in Singapore’s GDP growth shows the
              efforts Singapore has taken to ensure that MNCs are interested in
              setting up factories in Singapore. In the 1970s, the refinement of
              the policies implemented in the 1960s and addition of the Monetary
              Authority of Singapore (MAS) helped to boost the confidence of
              MNCs being based in Singapore. This helped to boost Singapore’s
              economy, and the GDP growth rate of Singapore is increasing
              steadily.
            </p>
            <p className="text-paragraph text-center">
              <img
                src={Figure3_3}
                alt="GDP per capita increase"
                className="img-fluid"
              />
              <br />
              Figure 3.3
              <InTextCitation ID={11} />
            </p>
            <p className="text-paragraph">
              In the middle of the 1980s, the sharp decrease in the GDP growth
              of Singapore is due to a recession. In the middle of Singapore,
              the economic growth of Singapore was also slowing signs of slowing
              down. This slowed down the growth of the economy. As such,
              Singapore had to move on to a new phase of economic development
              and also adapt her economy to better position itself in the
              future. The technological policies help Singapore to plan her
              economy for the future, which greatly benefitted Singapore. Over
              the course of history, the policies Singapore implemented helped
              Singapore to adapt her economy, and increase the growth of
              Singapore GDP’s growth. The transformation of the economy also
              successfully resulted in not only the recovery of the economy but
              also helped Singapore’s economy to grow at a steady pace.
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <FootnoteCitation ID={1}>
          Economic Expansion Incentives (Relief from Income Tax) Bill, §
          Enacting formula (1967).
        </FootnoteCitation>
        <FootnoteCitation ID={2}>
          Pek, S. (2018, January 07). Economic Development Board. Retrieved
          August 16, 2020, from{" "}
          <a href="https://eresources.nlb.gov.sg/infopedia/articles/SIP_2018-01-08_135544.html?s=economy">
            https://eresources.nlb.gov.sg/infopedia/articles/SIP_2018-01-08_135544.html?s=economy
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={3}>
          Editor:Lim, F., &amp; Lim, P. (2017, October 10). State Development
          Plan, 1961–1964. Retrieved August 16, 2020, from{" "}
          <a href="https://eresources.nlb.gov.sg/infopedia/articles/SIP_2017-10-11_092937.html">
            https://eresources.nlb.gov.sg/infopedia/articles/SIP_2017-10-11_092937.html
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={4}>
          Jurong Town Corporation. (2014, September 09). Retrieved August 16,
          2020, from{" "}
          <a href="https://eresources.nlb.gov.sg/infopedia/articles/SIP_553_2004-12-31.html">
            https://eresources.nlb.gov.sg/infopedia/articles/SIP_553_2004-12-31.html
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={5}>
          What We Do. (n.d.). Retrieved August 16, 2020, from{" "}
          <a href="https://www.mas.gov.sg/who-we-are/What-We-Do">
            https://www.mas.gov.sg/who-we-are/What-We-Do
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={6}>
          Lim, C. Y. (1981, May 13). 1981 National Wages Council Recommendation
          [Letter to Mr Lee Kuan Yew]. Singapore.
        </FootnoteCitation>
        <FootnoteCitation ID={7}>
          Hwee, K., &amp; Yeo, S. (2015, October 05). Supercharging Singapore.
          Retrieved August 16, 2020, from{" "}
          <a href="http://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2015/10/35-years-of-ict/supercharging-singapore/the-1990s.html">
            http://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2015/10/35-years-of-ict/supercharging-singapore/the-1990s.html
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={8}>
          Singapore’s Transformation into a Global Financial Hub. (n.d.).
          Retrieved August 16, 2020, from{" "}
          <a href="https://lkyspp.nus.edu.sg/docs/default-source/case-studies/entry-1516-singapores_transformation_into_a_global_financial_hub.pdf?sfvrsn=a8c9960b_2">
            https://lkyspp.nus.edu.sg/docs/default-source/case-studies/entry-1516-singapores_transformation_into_a_global_financial_hub.pdf?sfvrsn=a8c9960b_2
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={9}>
          World Development Indicators-Singapore-GDP per capita. (n.d.).
          Retrieved August 15, 2020, from{" "}
          <a href="https://databank.worldbank.org/source/world-development-indicators">
            https://databank.worldbank.org/source/world-development-indicators
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={10}>
          Singapore experiences its first post-independence recession. (n.d.).
          Retrieved August 16, 2020, from{" "}
          <a href="https://eresources.nlb.gov.sg/history/events/9f9489cf-5432-4797-bf66-fd1b3bab7a2b">
            https://eresources.nlb.gov.sg/history/events/9f9489cf-5432-4797-bf66-fd1b3bab7a2b
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={10}>
          GDP growth (annual %) - Singapore. (n.d.). Retrieved August 16, 2020,
          from{" "}
          <a href="https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=SG">
            https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=SG
          </a>
        </FootnoteCitation>
      </div>
      <PageFooter
        prevLink="/changes/population"
        prevTitle="Population Changes "
        prevDisplay
        nextDisplay
        nextLink="/conclusion/"
        nextTitle="Conclusion Overview"
      />
    </PageTemplate>
  );
}
