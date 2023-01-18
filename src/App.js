import { useState } from 'react'
import './App.css';

//We import all different sections
import Header from './sections/Header';
import PossibleSection from './sections/PossibleSection';
import Welcome from './sections/Welcome';
import Popular from './sections/Popular';
import Topics from './sections/Topics';
import GovernmentActivity from './sections/GovernmentActivity';
import Featured from './sections/Featured';
import More from './sections/More';
import PageUseful from './sections/PageUseful';
import SummaryBottom from './sections/SummaryBottom';
import Footer from './sections/Footer';
import Cookies from './sections/Cookies';
import LinkToRealPage from './sections/LinkToRealPage';
import BlueLine from './BlueLine';

function App() {

  //First we add some instances of state in the whole project:
  //A boolean that dictates whether the cookies section is shown or not
  const [showCookies, setShowCookies] = useState(true);
  //A function to set the boolean to false
  function handleShowCookies() {
    setShowCookies(false);
  }
  //A boolean that dictates whether the menu section is shown or not
  const [menuIsOn, setMenuIsOn] = useState(false);
  //A boolean that dictates whether the search section is shown or not
  const [searchIsOn, setSearchIsOn] = useState(false);

  //Functions to handle both these booleans
  //Two functions to set the menu boolean to true and false
  //These will also turn the search boolean to false, so the search section does not show at the same time
  function handleSetMenuIsOnToFalse() {
    setMenuIsOn(false);
    setSearchIsOn(false);
  }
  function handleSetMenuIsOnToTrue() {
    setMenuIsOn(true);
    setSearchIsOn(false);
  }
  
  //Two functions to set the search boolean to true and false
  //These will also turn the menu boolean to false, so the menu section does not show at the same time
  function handleSetSearchIsOnToFalse() {
    setSearchIsOn(false);
    setMenuIsOn(false);
  }
  //A function to set the boolean to true
  function handleSetSearchIsOnToTrue() {
    setSearchIsOn(true);
    setMenuIsOn(false);
}

  //A boolean that dictates whether the 'Is page helpful?' section (around the bottom) is shown or not
  const [showPageHelpful, setShowPageHelpful] = useState(true);
  //A function to set the boolean to false
  function handleSetShowPageHelpful() {
    setShowPageHelpful(false);
  }

  //A boolean that dictates whether the 'Report Problem' section (inside 'Is page helpful?') is shown or not
  const [reportProblem, setReportProblem] = useState(false);
  //A function to set the boolean to true if the user clicks on such button
  function handleSetReportProblem() {
    setReportProblem(true)
  }
  //In that section the user might click cancel, so we set the boolean to false
  function handleSetReportProblemWithCancel() {
    setReportProblem(false)
  }
  //If the user sends feedback, we set the boolean to false and also show an alert
  function handleSetReportProblemWithSend() {
    alert("Thanks for your feedback, Rishi Sunak sends you his regards ❤")
    setReportProblem(false)
  }

  //Then there are a bunch of props, which will be info contained in the different sections

  //Props with the info about the 'Topics' section (an id, title, subtitle and link)
  //this same info will also be displayed around the bottom of the page, right on top of the footer
  const topicsData = [[1, "Benefits","Includes eligibility, appeals, tax credits and Universal Credit", "https://www.gov.uk/browse/benefits"], 
                      [2, "Births, deaths, marriages and care", "Parenting, civil partnerships, divorce and Lasting Power of Attorney", "https://www.gov.uk/browse/births-deaths-marriages"], 
                      [3, "Business and self-employed", "Tools and guidance for businesses", "https://www.gov.uk/browse/business"], 
                      [4, "Childcare and parenting", "Includes giving birth, fostering, adopting, benefits for children, childcare and schools", "https://www.gov.uk/browse/childcare-parenting"],
                      [5, "Citizenship and living in the UK", "Voting, community participation, life in the UK, international projects", "https://www.gov.uk/browse/citizenship"], 
                      [6, "Cost of living support","Includes income and disability benefits, bills and allowances, childcare, housing and travel.", "https://www.gov.uk/cost-of-living"],
                      [7, "Crime, justice and the law", "Legal processes, courts and the police", "https://www.gov.uk/browse/justice"], 
                      [8, "Disabled people", "Includes carers, your rights, benefits and the Equality Act", "https://www.gov.uk/browse/disabilities"], 
                      [9, "Driving and transport", "Includes vehicle tax, MOT and driving licences", "https://www.gov.uk/browse/driving"], 
                      [10, "Education and learning", "Includes student loans, admissions and apprenticeships", "https://www.gov.uk/browse/education"],
                      [11, "Employing people", "Includes pay, contracts, hiring and redundancies", "https://www.gov.uk/browse/employing-people"], 
                      [12, "Environment and countryside", "Includes flooding, recycling and wildlife", "https://www.gov.uk/browse/environment-countryside"], 
                      [13, "Housing and local services", "Owning or renting and council services", "https://www.gov.uk/browse/housing-local-services"], 
                      [14, "Money and tax", "Includes debt and Self Assessment", "https://www.gov.uk/browse/tax"], 
                      [15, "Passports, travel and living abroad", "Includes renewing passports and travel advice by country", "https://www.gov.uk/browse/abroad"], 
                      [16, "Visas and immigration","Apply to visit, work, study, settle or seek asylum in the UK", "https://www.gov.uk/browse/visas-immigration"], 
                      [17, "Working, jobs and pensions","Includes holidays, finding a job and redundancy", "https://www.gov.uk/browse/working"]]

  //Props for the 'Popular on GOV.UK' section, under the blie header (an id, title and link)
  const popularData = [[1, "Check benefits and financial support you can get", "https://www.gov.uk/check-benefits-financial-support"],
                       [2, "Find out about the Energy Bills Support Scheme", "https://www.gov.uk/guidance/getting-the-energy-bills-support-scheme-discount"],
                       [3, "Find a job", "https://www.gov.uk/find-a-job"],
                       [4, "Coronavirus (COVID-19)", "https://www.gov.uk/coronavirus"],
                       [5, "Universal Credit account: sign in", "https://www.gov.uk/sign-in-universal-credit"]]

  //Props with the info about the 'Government Activity' section (an id, title, subtitle and link)
  const govActData = [[1, "Departments", "Departments, agencies and public bodies", "https://www.gov.uk/government/organisations"],
                      [2, "Research and statistics", "Reports, analysis and official statistics", "https://www.gov.uk/search/research-and-statistics"],
                      [3, "News", "News stories, speeches, letters and notices", "https://www.gov.uk/search/news-and-communications"],
                      [4, "Policy papers and consultations", "Consultations and strategy", "https://www.gov.uk/search/policy-papers-and-consultations"],
                      [5, "Guidance and regulation", "Detailed guidance, regulations and rules", "https://www.gov.uk/search/transparency-and-freedom-of-information-releases"],
                      [6, "Transparency documents", "Data, Freedom of Information releases and corporate reports", "https://www.gov.uk/search/guidance-and-regulation"]]
  
  //Props with the info about the 'More on GOV.UK'' section (an id, title and link)
  const moreData = [[1, "HMRC services: sign in", "https://www.gov.uk/log-in-register-hmrc-online-services"],
                    [2, "Check your State Pension age", "https://www.gov.uk/state-pension-age"],
                    [3, "Check MOT history of a vehicle", "https://www.gov.uk/check-mot-history"],
                    [4, "Childcare account: sign in", "https://www.gov.uk/sign-in-childcare-account"],
                    [5, "Tax your vehicle", "https://www.gov.uk/vehicle-tax"],
                    [6, "Student finance: sign in", "https://www.gov.uk/student-finance-register-login"],
                    [7, "Universal Credit", "https://www.gov.uk/universal-credit"],
                    [8, "Self Assessment tax returns", "https://www.gov.uk/self-assessment-tax-returns"],
                    [9, "Foreign travel advice", "https://www.gov.uk/foreign-travel-advice"],
                    [10, "Apply for a passport", "https://www.gov.uk/apply-renew-passport"]]

    //These props are for the links at the very bottom of the page, and id, title and a link for each
    const footerData = [[1, "Help", "https://www.gov.uk/help"],
                        [2, "Privacy", "https://www.gov.uk/help/privacy-notice"],
                        [3, "Cookies", "https://www.gov.uk/help/cookies"],
                        [4, "Accessibility statement", "https://www.gov.uk/help/accessibility-statement"],
                        [5, "Contact", "https://www.gov.uk/contact"],
                        [6, "Terms and conditions", "https://www.gov.uk/help/terms-conditions"],
                        [7, "Rhestr o Wasanaethau Cymraeg", "https://www.gov.uk/cymraeg"],
                        [8, "Government Digital Service", "https://www.gov.uk/government/organisations/government-digital-service"],]

  //and finally we return all sections
  //some of them might appear under certain conditions, depending on the booleans
  return (
    <div className="App">
      <Cookies showCookies={showCookies}
               handleShowCookies={handleShowCookies}/>
      <Header topicsData={topicsData} 
              govActData={govActData} 
              menuIsOn={menuIsOn}
              searchIsOn={searchIsOn}
              handleSetMenuIsOnToTrue={handleSetMenuIsOnToTrue}
              handleSetMenuIsOnToFalse={handleSetMenuIsOnToFalse}
              handleSetSearchIsOnToFalse={handleSetSearchIsOnToFalse}
              handleSetSearchIsOnToTrue={handleSetSearchIsOnToTrue} />
      <PossibleSection 
                       menuIsOn={menuIsOn} 
                       searchIsOn={searchIsOn}
                       topicsData={topicsData}
                       popularData={popularData}
                       govActData={govActData}/>
      <Welcome />
      <Popular popularData={popularData}/>
      <Topics topicsData={topicsData}/>
      <GovernmentActivity govActData={govActData}/>
      <Featured />
      <More moreData={moreData}/>
      <PageUseful showPageHelpful={showPageHelpful} 
                  handleSetShowPageHelpful={handleSetShowPageHelpful}
                  reportProblem={reportProblem}
                  handleSetReportProblem={handleSetReportProblem}
                  handleSetReportProblemWithCancel={handleSetReportProblemWithCancel} 
                  handleSetReportProblemWithSend={handleSetReportProblemWithSend}/>
      <BlueLine />
      <SummaryBottom topicsData={topicsData} govActData={govActData} />
      <Footer footerData={footerData} />
      <LinkToRealPage />
    </div>
  );
}

export default App;
