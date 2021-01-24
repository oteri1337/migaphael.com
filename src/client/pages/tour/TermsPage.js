import React from "react";
import ContainerComponent from "components/container/TourContainerComponent";

function ServicesPage() {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Terms of Service",
    },
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="container app-py-3">
        <div className="card-panel">
          <div className="container">
            <p>
              By using this site, and further by registering to use our Service,
              you ("You, Your or Yourself") are agreeing to accept and comply
              with the terms and conditions of use stated below ("Terms of
              Use"). You should read the entire Terms of Use carefully before
              you use this web site or any of the services of this site
            </p>
            <p>
              The Service operated by TFX also allows all registered users to: •
              Transfer Bitcoins to you or other Members or other users of
              Bitcoin outside the platform site. • Use Bitcoins for purchasing
              goods.
            </p>
            <p>
              IF YOU DO NOT ACCEPT THE TERMS OF USE AND CONDITIONS OUTLINED IN
              THIS AGREEMENT, DO NOT ACCESS THIS SITE AND DO NOT USE THIS
              SERVICE.
            </p>
            <p>
              By opening an account to use the Service ("Account"), You
              expressly represent and warrant:
            </p>
            <p>
              1. You have accepted these Terms; and <br />
              2. You are at least 18 years of age and have the full capacity to
              accept these Terms and enter into a transaction involving
              Bitcoins. <br />
              3. Also to corporate with any nature of failure in services to
              create solutions due to abnormal circumstance.
            </p>
            <p>
              You also agree that TFX may, by giving notice, in its sole
              discretion terminate your access to the site and to your account,
              including without limitation, our right to: limit, suspend or
              terminate the service and members' accounts, prohibit access to
              the site and its content, services and tools, delay or remove
              hosted content, and take technical and legal steps to keep members
              off the site if we think that they are creating problems or
              possible legal liabilities, infringing the intellectual property
              rights of third parties, or acting inconsistently with the letter
              or spirit of these Terms . Additionally, we may, in appropriate
              circumstances and at our discretion, suspend or terminate accounts
              of members for any reason, including without limitation:
            </p>
            <p>
              • Attempts to gain unauthorized access to the site or another
              member's account or providing assistance to others' attempting to
              do so.
            </p>
            <p>
              • Overcoming software security features limiting use of or
              protecting any content.
            </p>
            <p>
              • Usage of the Service to perform illegal activities such as money
              laundering, illegal gambling operations, financing terrorism, or
              other criminal activities.
            </p>
            <p> • Violations of these Terms of Use.</p>
            <p> • Failure to pay or fraudulent payment for Transactions.</p>
            <p> • Unexpected operational difficulties.</p>
            <p>
              • Upon the request of laws enforcement or other government
              agencies, if deemed to be legitimate and compelling by TFX, acting
              in its sole discretion.
            </p>
            <p>
              • Use any tools or software to conceal identities or having
              abnormal or unclear activities.
            </p>
            <br />
            <b>INDEMNITY</b>
            <p>
              To the full extent permitted by applicable law, You hereby agree
              to indemnify TFX, and its partners against any action, liability,
              cost, claim, loss, damage, proceeding or expense suffered or
              incurred if direct or not directly arising from your use of our
              service or from your violation of these Terms of Use.
            </p>
            <p>
              TFX, Inc. Bug Bounty Policy and Retail Affiliate Certification TFX
              takes steps to improve our product and provide secure solutions
              for our customers. In this Bug Bounty Policy (“Policy”), we
              describe applicable cases for our Bug Bounty Program and how it
              should be used in connection with your use of our website at
              including, but not limited to, the web wallet, online bitcoin
              trading platform, mobile application, social media pages, or other
              online properties (collectively, the “Website”), or when you use
              any of the products, services, content, features, technologies, or
              functions we offer (collectively, the “Services”).
            </p>
            <p>
              {" "}
              This Policy is designed to help you obtain information about how
              you can participate in our Bug Bounty Program, which secure
              research results are applicable, and which benefits you can
              receive. Please note that our Service offerings may vary by
              region. For all purposes, the English language version of this bug
              bounty policy shall be the original, governing instrument. In the
              event of any conflict between the English language version of this
              bug bounty policy and any subsequent translation into any other
              language, the English language version shall govern and control.
            </p>
            <p>
              Also the Retail Affiliate Certification Policy is an avenue to
              generate income while making use and as well create job
              opportunities for individual retail exchangers who desire a much
              better price due to an excessive amount if weekly bulk
              transactions. Being a Retail Affiliate entitles he/she to a
              certification of claim of a user as a freelanced business
              personnel exchanging foreign currencies under our platform alone
              but does not vouge that he/she is a honest or trustworthy
              exchanger but certifies him the right to benefit in acquiring the
              services much cheaper.
            </p>
            <br />
            <b>What we require from Retail Affiliates?</b>
            <p>
              We collect data of: A user verification of either a National ID
              card, a Passport or Driving License A weekly record of high volume
              transactions on our exchange or any other exchanges as a retailer.
              Note: The above verifications should be sent to the active support
              representative across all reachable medium of TFX.
            </p>
            <br />
            <b>What is the Bug Bounty Program?</b>
            <p>
              In order to improve TFX and the Services, the Bug Bounty Program
              provides our users opportunity to earn a reward for identifying
              technical issues. How can you communicate your Bug Bounty or
              Retail Affiliate Certification Program findings to us? All such
              communications should be can be directed to info@traderfxm.com How
              do we evaluate issues identified under the Bug Bounty Program? All
              findings are evaluated using a risk-based approach.
            </p>
            <br />
            <b>Non-Disclosure Agreement</b>
            <p>
              Before we begin discussing any details related to confirmed issues
              that you have identified under the Bug Bounty Program, including
              compensation, etc., you will be required to enter into a
              Non-Disclosure Agreement with us.
            </p>
            <b>How do we pay Bug Bounty Program rewards?</b>
            <p>
              Due to the varying and complex nature of technical issues, we have
              not established particular timelines for analysing findings under
              the Bug Bounty Program. Our analysis is finished only when we have
              confirmed the existence or absence of a vulnerability.
            </p>
            <b>What cases are excluded from the Bug Bounty Program?</b>
            <p>• Spam;</p>
            <p>• Social engineering;</p>
            <p>• DDOS attacks;</p>
            <p>
              • Security vulnerabilities in third-party applications and on
              third-party websites integrated with TFXl;
            </p>
            <p>• "Scanner output" or scanner-generated reports;</p>
            <p>• Issues found through automated testing;</p>
            <p>• Publicly-released bugs in Internet software.</p>
            <p>
              TFX is incorporated under the laws enabling a marketplace for the
              purchase and sale of digital currency. The Company is registered
              as a Money Services Business with the United States Treasury
              Department’s Financial Crimes Enforcement Network (“FinCEN”).
              TFX's Anti-Money Laundering (“AML”) policies and procedures are
              designed to deter illicit activities on the platform, protect the
              users, the business, and the digital currencies and financial
              services communities from exploitation by criminals. The Company
              is compliant with the requirements of the Bank Secrecy Act and
              related FinCEN regulations and guidance.
            </p>
            <p>
              As part of TFX’s Compliance policies, Know Your Customer (“KYC”)
              policies and procedures for individual and institutional customers
              have been designed to enable the Company to form a reasonable
              belief that it knows the true identity of those of its customers
              for which such review has been performed. The policy applies to
              all users on the platform and is followed by all of the Company’s
              employees, consultants, officers, owners and directors. Using a
              risk based approach as part of KYC & AML Compliance, TFX has taken
              the following measures:
            </p>
            <p>
              • Appointment of a Chief Compliance Officer who has the sufficient
              level of expertise and independence, has responsibility for the
              oversight of compliance with the relevant legislation,
              regulations, rules and industry guidance;
            </p>
            <p>
              • Establishing and maintaining risk-based KYC, Customer Due
              Diligence (CDD), and Enhanced Due Diligence (EDD) Policy;
            </p>
            <p>
              • Establishing risk-based tiers for verification of the Company's
              users;
            </p>
            <p>
              • Cooperation with law enforcement requests and local regulatory
              requirements;
            </p>
            <p>• Filing of Suspicious Activity Reports (“SARs”);</p>
            <p>• Company-wide BSA/AML/OFAC training;</p>
            <p>• Use of various anti-fraud systems;</p>
            <p>• Ongoing rule based transaction monitoring;</p>
            <p>• Investigations using blockchain analytics;</p>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default ServicesPage;
