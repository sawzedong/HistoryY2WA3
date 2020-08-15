/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import PageFooter from "../../components/Footer";
import FootnoteCitation from "../../components/Citation/FootnoteCitation";
import InTextCitation from "../../components/Citation/InTextCitation.js";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Figure1_1 from "../../img/Figure-1-1.png";
import CPFImg from "../../img/CPF.png";
import EIP from "../../img/ethnic-integration-policy.png"
import ROH from "../../img/roh.png"

export default function Changes_Housing() {
  return (
    <PageTemplate padding>
      <div className="p-2">
        <h1>Housing Change</h1>
        <p className="text-paragraph">
          There was a change in focus of the policies for housing over the
          years, and originally the first phase was to{" "}
          <strong>Provide More Housing</strong> and eventually changed to{" "}
          <strong>Providing Better Quality Housing</strong>.
        </p>

        <h2 className="py-3">Change in Focus of Policies</h2>

        <h3 className="py-2">Phase 1: Providing More Housing</h3>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>CPF</h4>
            <p className="text-paragraph">
              "to help more become homeowners, the government allowed the use of
              Central Provident Fund (CPF) savings for the downpayment and to
              service the monthly mortgage loan instalments...made home
              ownership highly affordable and attractive."
              <InTextCitation ID={1} /> <br />
              -Housing Development Board
            </p>
            <p className="text-paragraph">
              The Central Provident Fund (CPF) scheme helps to relieve financial
              burden as part of their income that is contributed to CPF, and can
              be used to pay off the mortgage of the housing, thus they will
              have more money to fulfill the basic needs of living. This makes
              public housing more appealing to lower income people.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={CPFImg} className="img-fluid" alt="CPF Logo" />
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Singles Purchasing Government Housing (Before)</h4>
            <p className="text-paragraph">
              "a housing policy is that if you are single, you cannot purchase
              any government housing. You have to go for private housing and
              sometimes private housing is expensive...You have to stay with
              your parents until you are married in order to get your own
              housing."
              <InTextCitation ID={2} /> <br />
              -Mr Cheong
            </p>
            <p className="text-paragraph">
              In the 1960s to 1980s, the government did not allow singles to buy
              a HDB flat. With a minimum family size in HDBs, it ensures
              sufficient supply of public housing to meet the demand of the
              growing population and alleviate the problem of housing shortage.
              The government was more focused on providing a form of housing for
              the mass majority of Singaporeans instead of a selected group of
              people in the society ie. singles.
            </p>
          </div>
          <div className="col-lg-4 text-center d-flex flex-lg-column flex-row">
            <i className="fas fa-user-slash fa-5x py-4"></i>
            <i className="fas fa-house-damage fa-5x py-4"></i>
          </div>
        </div>

        <h3 className="py-2">Phase 2: Providing Better Quality Housing</h3>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Singles Purchase Scheme (After)</h4>
            <p className="text-paragraph">
              "I learnt about singapore’s public housing policies with regarding
              Single’s purchase scheme, about how singles can purchase flats,
              whereas previously they couldn’t,.."
              <InTextCitation ID={3} /> <br />
              -Mr Emmanuel
            </p>
            <p className="text-paragraph">
              Our Homeland policy was implemented to better the lives of people
              living in older HDB estates. The policy included the creation of
              upgraded facilities and improvements to connectivity, improving
              the quality of living in older neighbourhoods as they encourage
              residents living in different areas to mingle and interact,
              helping to strengthen the sense of belonging in the people.
            </p>
          </div>
          <div className="col-lg-4 text-center d-flex flex-lg-column flex-row">
            <i className="fas fa-user fa-5x py-4"></i>
            <i className="fas fa-home fa-5x py-4"></i>
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Ethnic Integration Policy</h4>
            <p className="text-paragraph">
              "...to ensure a balanced mix of ethnic groups living in HDB
              estates, so as to promote racial harmony and strengthen social
              cohesion. It applies to the sale and purchase of all new and
              resale HDB flats, and is implemented for all ethnic groups."
              <InTextCitation ID={4} />
              <br />
              -Housing Development Board
            </p>
            <p className="text-paragraph">
              The implementation of the Ethinic Integration Policy in 1989 helps
              to solve the problem of social segregation where racial groups
              live in specific areas, promoting diversity and cultural awareness
              within communities which was crucial in shaping Singapore into a
              harmonious multi-racial country.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={EIP} className="img-fluid" alt="Children of 4 races standing together" />
          </div>
        </div>

        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <h4>Remaking our Homeland</h4>
            <p className="text-paragraph">
              "...Remaking Our Heartland (ROH) initiative was launched as a
              comprehensive rejuvenation blueprint to renew and further develop
              existing HDB towns and estates...exciting plans have been drawn up
              to renew HDB estates, with blueprints tailored to meet the
              changing needs of our community and capitalise on the distinct
              characteristics of each area."
              <InTextCitation ID={5} />
              <br />
              -Housing Development Board
            </p>
            <p className="text-paragraph">
              Our Homeland policy was implemented to better the lives of people
              living in older HDB estates. The policy included the creation of
              upgraded facilities and improvements to connectivity, improving
              the quality of living in older neighbourhoods as they encourage
              residents living in different areas to mingle and interact,
              helping to strengthen the sense of belonging in the people.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={ROH} className="img-fluid fit-full-img" alt="Remaking Our Homeland Logo" />
          </div>
        </div>

        <h2 className="py-3">Reasons of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph text-center">
              <img
                src={Figure1_1}
                className="img-fluid"
                alt="Singapore's GDP Graph"
              />
              Figure 1.1
              <InTextCitation ID={6} />
            </p>
            <p className="text-paragraph">
              As the GDP was relatively low, various forms of financial
              assistance were introduced to help locals of various financial
              status to afford a property in Singapore to satisfy the need of
              housing in Singapore. This has solved the problem of housing
              shortage and to provide affordable housing for the growing
              population. However, as Singapore’s GDP increased rapidly from
              1980s onwards, policies were implemented to improve the amenities
              and communal, environmental features to make public housing more
              comfortable. This is to ensure that public housing remains an
              attractive option for the locals amidst the rising standards of
              living due to rapid and consistent economic growth in the past
              decades.
            </p>
          </div>
        </div>

        <h2 className="py-3">Impacts of Change</h2>
        <div className="info-category py-3 row w-100">
          <div className="col-lg-8 col-md-10">
            <p className="text-paragraph">
              "By 1965...we had built 54,000 flats. Singapore's public housing
              has housed an entire nation – today, more than 1 million flats
              have been completed in 23 towns and 3 estates across the island.
              HDB flats are home to over 80% of Singapore's resident population,
              with about 90% of these resident households proudly owning their
              home."
              <InTextCitation ID={7} />
              <br />
              -Housing Development Board
            </p>
            <p className="text-paragraph">
              From the source, it is stated that 9 out of 10 Singaporeans own an
              HDB and the number of flats has increased from 54000 approximately
              1 million. Policies implemented from the 1965s to the present day
              to make public housing affordable and of high quality have
              successfully increased the popularity of public housing and
              maintained a constant demand for public housing. With universal
              ownership of public housing among Singaporeans, this has also
              created a sense of security of having a place to call ‘home’,
              giving them a sense of belonging to Singapore.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-house-user fa-7x py-4"></i>
          </div>
        </div>

        <FootnoteCitation ID={1}>
          Public Housing – A Singapore Icon. (n.d.). Housing Development Board.
          Retrieved July 17, 2020, from{" "}
          <a href="https://www.hdb.gov.sg/cs/infoweb/about-us/our-role/public-housing-a-singapore-icon">
            https://www.hdb.gov.sg/cs/infoweb/about-us/our-role/public-housing-a-singapore-icon
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={2}>
          Cheong, K. (2020, August 2). Singapore Government Policies (1970)
          [Personal interview].
        </FootnoteCitation>
        <FootnoteCitation ID={3}>
          Emmanuel, A. (2020, August 5). Singapore Government Policies (2000)
          [Personal interview].
        </FootnoteCitation>
        <FootnoteCitation ID={4}>
          Oral Answer By Ministry Of National Development On Ethnic Integration
          Policy. (October 2, 2018).Ministry of National Development, from{" "}
          <a href="https://www.mnd.gov.sg/newsroom/parliament-matters/q-as/view/oral-answer-by-ministry-of-national-development-on-ethnic-integration-policy">
            https://www.mnd.gov.sg/newsroom/parliament-matters/q-as/view/oral-answer-by-ministry-of-national-development-on-ethnic-integration-policy
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={5}>
          About the Remaking Our Heartland Programme. (n.d.). Housing
          Development Board. Retrieved August 14, 2020, from{" "}
          <a href="https://www20.hdb.gov.sg/fi10/fi10349p.nsf/hdbroh/index.html">
            https://www20.hdb.gov.sg/fi10/fi10349p.nsf/hdbroh/index.html
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={6}>
          World Development Indicators-Singapore-GDP per capita. (n.d.).
          Retrieved August 15, 2020, from{" "}
          <a href="https://databank.worldbank.org/source/world-development-indicators">
            https://databank.worldbank.org/source/world-development-indicators
          </a>
        </FootnoteCitation>
        <FootnoteCitation ID={7}>
          About us (n.d.). Housing Development Board. Retrieved July 30, 2020,
          from{" "}
          <a href="https://www.hdb.gov.sg/cs/infoweb/about-us">
            https://www.hdb.gov.sg/cs/infoweb/about-us
          </a>
        </FootnoteCitation>
      </div>
      <PageFooter
        prevLink="/changes/"
        prevTitle="Changes Overview"
        prevDisplay
        nextDisplay
        nextLink="/changes/population"
        nextTitle="Population Changes"
      />
    </PageTemplate>
  );
}
