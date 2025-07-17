import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import theme from '../utils/theme';

const TermsAndConditions = () => {
  const termsData = {
    title: 'Terms and Conditions',
    introduction: {
      contentHead:
        'The following are terms of a legal agreement between you and Alice Blue.',
      contentPara:
        'This page contains important information regarding the terms and conditions which apply to your account with Alice Blue Financial Services Pvt Ltd being a Trading Member of NSE, BSE and MCX registered with Securities & Exchange Board of India ("SEBI") and having Registration No. IN2000156038 for Cash/Derivatives/Currency Derivatives segments of NSE (Registration No.90112) & BSE (Registration No. 6670) and Commodity segment of MCX (Registration No.56710). The Depository services for your account will be enabled through Alice Blue Financial Services Pvt Ltd, a Depository Participant using CDSL as the Depository having SEBI Registration no.: IN-DP-364-2018. Access to your account and the usage of your account is subject to your compliance with all the terms and conditions set forth herein, read along with all documents, including but not limited to; applications forms and undertakings. signed by you during account opening. Please read this page carefully and retain it for future reference.',
      companyInfo:
        'The website/ Platform is owned, operated and maintained by Alice Blue Financial Services Pvt ltd. (hereinafter referred to as "ALICE BLUE"), a Company incorporated under the Companies Act. 2013 having CIN: U65929T22017PTC028583. and having its Corporate Office at 153/2. 3rd Floor MRB Arcade, Bagalur Main Road, Yelahanka, Bengaluru- 560063.',
      modifications:
        'The information, terms, and conditions outlined herein may be modified, updated, or amended at any time at the sole discretion of ALICE BLUE, without prior notice. All such changes will be made available on the official ALICE BLUE website/ platform. You are advised to read and review this document carefully and retain a copy for your records. You agree to any, and all modifications, updates, or amendments to these Terms, regardless of whether you have received specific notice of such changes and to regularly check the website/platform for the most current version of the Terms, by Your continuing usage of the Platform and/or continuing to hold an account with ALICE BLUE.',
    },
    sections: [
      {
        title: 'General Terms and Conditions',
        content:
          'Before availing of online trading services, the Client shall complete the registration process as may be prescribed from time to time. The Client shall follow the instruction given in the website for registering himself as a client.',
        points: [
          "The Client agrees that all investment and disinvestment are based on the Client's own evaluation of financial circumstances and investment objectives. This extends to any decisions made by the Client based on any information that may be made available on the website of ALICE BLUE.",
          'The Client will not hold nor seek to hold ALICE BLUE or any of its officers, directors, partners, employees, agents, subsidiaries, affiliates or business associates liable for any trading losses, cost of damage incurred by the Client consequent upon relying on investment information, research opinions or advice or any other material/information whatsoever on the website, literature, brochure issued by ALICEBLUE or any other agency appointed/authorised by ALICE BLUE.',
          'The Client should seek independent professional advice regarding the suitability of any investment decisions. The Client also acknowledges that employees of ALICE BLUE are not authorized to give any such advice and that the Client will not solicit or rely upon any such advice from ALICE BLUE or any of its employees.',
        ],
      },
      {
        title: 'Security Precaution and Password',
        content: '',
        points: [
          'ALICE BLUE will provide the client with a unique ID and a trading password which will enable him to avail of the facilities of Online Trading through the ALICE BLUE platform, over the telephone or in any such other manner as may be permitted by ALICE BLUE for availing of the services. ALICE BLUE may also provide the client with the username and password for accessing its back-office for various reports etc with 2 Factor Authentication. All terms regarding the use, reset and modification of such password shall be governed by information on the website/ platform.',
          "The Client is aware that ALICE BLUE' Online Trading System itself generates the initial password and that ALICE BLUE is aware of. The Client agrees and undertakes to immediately change his initial password upon receipt thereof with 2FA mechanism. The Client is aware that subsequent passwords are not known or available to ALICE BLUE.",
          "The Client shall be responsible for keeping the Username and Password confidential and secure and shall be solely responsible for all orders entered and transactions done by any person whosoever through ALICE BLUE ‘Online Trading System using the Client's Username and/or Password regardless of whether such person was authorised to do so.",
          'The Client shall immediately notify ALICE BLUE of any unauthorized use of their Username or Password, providing complete details of the incident, including the date, method of unauthorized access, and the transactions effected pursuant to such unauthorised use, etc.',
          "The Client acknowledges that he is fully aware of and understands the risks associated with availing of online trading services through internet including the risk of misuse and unauthorised use of his Username and/or Password by a third party and the risk of a person hacking into the Client's account on ALICE BLUE' Online Trading System and unauthorisedly routing orders on behalf of the Client through the System. The Client agrees that he shall be fully liable and responsible for any, and all unauthorised use and misuse of his Password and/or Username, also for any, and all acts done by any person through ALICE BLUE' Online Trading System on the Client's Username in any manner whatsoever.",
          "Without prejudice to the provisions mentioned herein above, the Client shall immediately notify ALICE BLUE in writing with full details if: he discovers or suspects unauthorised access through his Username, Password or Account, he notices discrepancies that might be attributable to unauthorised access, he forgets his password or he discovers a security flaw in ALICE BLUE' Online Trading System.",
        ],
      },
      {
        title: 'Orders',
        content: '',
        points: [
          "All orders for purchase, sale or other dealings in securities and other instructions routed through the ALICE BLUE Online Trading System via the Client's Username shall be deemed to have been given by the Client.",
          "In the event if a client opts to place orders through the Call & Trade facility, the client agrees to provide all necessary information, including but not limited to the unique client identification number, PAN and any other details as may be requested by the Call & Trade team, for the purpose of verifying the client's identity prior to executing any order over the telephone.",
          'The orders and instructions and all contracts and transactions entered pursuant thereto and the settlement thereof will be in accordance with the Exchange Provisions.',
          'ALICE BLUE may from time to time impose and vary limits on the orders which the Client can place through ALICE BLUE Online Trading System (including exposure limits, turnover limits, limits as to the number, value and/or kind of securities in respect of which orders can be placed, the companies in respect of whose securities orders can be placed etc.).',
          "Though orders will generally be routed to the Exchange's computer systems within a few seconds from the time the order is placed by the Client on ALICE BLUE Online Trading System, ALICE BLUE shall not be liable for any delay in the execution of any order or for any resultant loss on account of the delay.",
          "The client agrees ALICE BLUE may impose scrip wise surveillance or such other conditions as to scrip wise limits, etc. The client also understands that ALICE BLUE may impose various surveillances which may differ from client to client based on ALICE BLUE's risk perception and other factors considered relevant by ALICE BLUE.",
          "In case of a market order, the Client agrees that he will receive the price at which his order is executed by the exchange's computer system; and such price may be different from the price at which the security is trading when his order is entered into ALICE BLUE Online Trading System.",
        ],
      },
      {
        title: 'Trading, Settlement and Accounts',
        content: '',
        points: [
          'The client agrees that all orders placed through the website shall be forwarded by the system to the Exchange. All orders placed otherwise than through the website shall be forwarded by the system to Exchange terminals.',
          'If the order is placed during the trading hours, it shall be routed to and executed on the market system.',
          'It shall be the responsibility of the client to follow up with ALICE BLUE for all such confirmations that are not received by him within a stipulated time.',
          "The client shall bring any errors in any report, confirmation or contract note of executed trades (including execution prices, scripts or quantities) to ALICE BLUE's notice in writing by an electronic mail or fax within 24 hours of receipt of the concerned report confirmation or contract note. Any other discrepancy in the confirmation or account shall be notified by the client to ALICE BLUE in writing via electronic mail or fax within 24 hours from the time of receipt of the first notice. In all cases, ALICE BLUE shall have a right to accept or reject the client's objection.",
          'There may be a delay in ALICE BLUE receiving the reports of transaction status from the respective exchanges or other persons in respect of or in connection with which ALICE BLUE has entered contracts or transactions on behalf of the clients. Accordingly, ALICE BLUE may forward to the client late reports in respect of such transactions that were previously unreported to him as being expired, cancelled or executed. The client shall not hold ALICE BLUE responsible for any losses suffered by the client on account of any late reports, statements or any errors in the reports/statements computed by or received from any exchange.',
          'The client agrees that if for any circumstance or for any reason, the markets close before the acceptance of the Order by the Exchange, the order may be rejected. The client agrees further that ALICE BLUE may reject Orders if the same are rejected by the Exchange for any reason. In case of rejection of an order due to rejection by the Exchange, the client agrees that the order shall remain declined and shall not be re-processed, in any event.',
          'ALICE BLUE may at its sole discretion reject any order placed by the client through its online trading platform or by any other permitted means, without prior notice and without assigning any specific reason. Such rejection may occur under various circumstances, including but not limited to: any surveillance measures, insufficient funds in the client’s trading account, non-availability or shortfall of securities in the client’s Demat account maintained with a designated depository participant, insufficiency of margin in cases where the client has opted for margin trading, suspension or restriction of trading in the relevant security (scrip) by the stock exchange, or the imposition of circuit breakers or other regulatory controls on the security in question.',
          'The client agrees that if the order is not accepted on the website for any reason, ALICE BLUE shall have the right to treat the order as having lapsed. The client is aware that the electronic trading systems either at the Exchange or in the office of ALICE BLUE are vulnerable to temporary disruptions, breakdowns or failures. In the event of non-execution of trade orders or trade cancellation due to the happening of such events or vulnerabilities due to failure, disruption, or breakdown of system or link, ALICE BLUE shall be entitled to cancel related requests with the client and shall not be liable to execute the desired transactions of the clients. In such event, ALICE BLUE does not accept responsibility for any losses incurred or that may be incurred by the client due to such eventualities which are beyond the control of ALICE BLUE.',
          'ALICE BLUE may at its sole discretion permit execution of orders in respect of securities, irrespective of the amount in the balance of the account of the client. The client agrees to abide with and be bound by all the rules, regulations and bye-laws of the Exchange as are in force pertaining to the transactions on his behalf carried out by ALICE BLUE and the orders placed by him on the website or in any other manner.',
          'ALICE BLUE shall not be responsible for any order that is made by the client by mistake and every order that is entered by the client using the allotted user name and the security code(s) shall be deemed to be a valid order for which the client shall be fully responsible.',
          "Cancellation or modification of an order pursuant to the client's request in that behalf is not guaranteed. The order will be cancelled or modified only if the client's request for cancellation and modification is received and the order is successfully cancelled or modified before it is executed. Market orders are subject to immediate execution wherever possible.",
          'The client shall not be entitled to presume an order having been executed, cancelled or modified until a confirmation from ALICE BLUE is received by the client. However, due to technical or other factors the confirmation may not be immediately transmitted to or received by the client and such a delay shall not entitle the client to presume that the order has not been executed, cancelled or modified unless and until ALICE BLUE has so confirmed in writing.',
          'The pending orders shall be governed as per the exchange systems after the market is closed for the day.',
          'ALICE BLUE shall issue contract notes in terms of the SEBI (Brokers and Sub-Brokers) Rules and Regulations, 1992, within 24 hours of the execution of the trade. Such contract notes, if issued in physical form, shall be dispatched by ALICE BLUE by courier at the address mentioned in this agreement or at any other address expressly informed to ALICE BLUE by the client. The client agrees that ALICE BLUE may issue the contract note in digital form which shall be sent by way of electronic mail to the registered address provided by the client. ALICE BLUE shall not be responsible for the non-receipt of the trade confirmation due to any change in the correspondence address of the client not intimated to ALICE BLUE in writing. The client is aware that it is his responsibility to review the trade confirmations, the contract notes, the bills or statements of account immediately upon their receipt. All such confirmations and statements shall be deemed to have been accepted as correct if the client does not object in writing to any of the contents of such trade confirmation or intimation within 24 hours to ALICE BLUE. ALICE BLUE may allow or disallow the client from trading in any security or class of securities or derivatives contracts and impose such conditions including scrip-wise conditional trading for trading as it may deem fit from time to time.',
        ],
      },
      {
        title: 'Margin',
        content: '',
        points: [
          'The Client agrees and undertakes to immediately deposit with ALICE BLUE such cash, securities pledge or other acceptable security, which ALICE BLUE may require as margin. The Client agrees that ALICE BLUE shall be entitled to require the Client to deposit with ALICE BLUE a higher margin than that prescribed by the Exchange. ALICE BLUE shall also be entitled to require the Client to keep permanently with ALICE BLUE a margin of a value specified by ALICE BLUE so long as the Client desires to avail of the Online Trading Service of ALICE BLUE.',
          'The client agrees that in accordance with the guidelines issued by the Exchange, all client margins are required to be segregated and allocated with the Clearing Corporation. Accordingly, any funds transferred by the client will be allocated to the Clearing Corporation, and trading exposure will be provided strictly based on such allocated margins.',
          'The Margin will not be interest bearing. ALICE BLUE shall have, at its sole discretion, the irrevocable right to set off a part or whole of the Margin, i.e., by appropriating the relevant amount of cash or by sale or transfer of all or some of the securities which form part of the Margin, against any dues of the Client or of a member of the group of the Client (for the purposes of these Terms, “Group" shall mean all the individuals, group companies, firms, entities and persons as specified in the schedule to the Member Client Agreement) in the event of the failure of the Client or a member of the Group of the Client to meet any of their respective obligations under these Terms.',
          'The client agrees and authorises ALICE BLUE to determine the market value of securities placed as margin after applying a haircut that ALICE BLUE may deem appropriate. The client undertakes to monitor the market value of such securities on a continuous basis. The client further undertakes to replenish any shortfall in the value of the margin consequent to a fall in the market value of such securities placed as margin immediately, whether or not ALICE BLUE intimates such shortfall.',
          "ALICE BLUE may at its sole discretion prescribe the payment of margin in the form of cash instead of or in addition to margin in the form of securities. The Client accepts to comply with the requirement of ALICE BLUE with regards to payment of margin in the form of cash immediately. Without prejudice to the stock broker's other rights (including the right to refer a matter to arbitration), the stock broker shall be entitled to liquidate or close out all or any of the client's positions for non-payment of margins or other amounts, outstanding debts, etc., and adjust the proceeds of such liquidation or close out, if any, against the client's liabilities or obligations. Any and all losses and financial charges on account of such liquidation or closing-out shall be charged to and borne by the client.",
          'The client agrees to abide by the exposure limits, if any, set by the stock broker or by the Exchange or Clearing Corporation or SEBI from time to time.',
          "The client is also aware that ALICE BLUE is required to deposit sufficient margin with the Exchange to enable all its eligible clients to trade subject to such limits as may be imposed by ALICE BLUE based on ALICE BLUE's risk perception and other factors considered relevant by ALICE BLUE. However, there may be circumstances when the deposits made by ALICE BLUE with the Exchange may not be sufficient in times of extreme volatility and trading terminals of ALICE BLUE may get temporarily suspended because of the cumulative effect of non-meeting of obligation by various clients as per this agreement. In these circumstances, no client shall have the right to claim any damages from ALICE BLUE for any loss that they might incur on account of such suspension of trading.",
          'The Client agrees that any securities or cash placed by him/her/it as margin may in turn be placed as margin by ALICE BLUE with the Exchanges or banks or such other institutions as ALICE BLUE may deem fit. The Client authorises ALICE BLUE to do all such acts, deeds and things as may be necessary and expedient for placing such securities or cash with the Exchanges, banks or institutions as margin.',
          "Any reference in these terms to sales or transfer of securities by ALICE BLUE shall be deemed to include sale of the securities which form part of the margin maintained by the Client with ALICE BLUE. In exercise of ALICE BLUE's right to sell securities under the Agreement, the Client agrees that the choice of specific securities to be sold shall be solely at the discretion of ALICE BLUE.",
        ],
      },
      {
        title: 'Maintenance of Trading Account',
        content: '',
        points: [
          'Money pay-in to ALICE BLUE — The Client agrees that all payments due to ALICE BLUE will be made within the specified time and in the event of any delay, ALICE BLUE may refuse, at their discretion, to carry out transactions or close out the position and the costs or losses, if any, thereof shall be borne solely and completely by the client. All payments made to ALICE BLUE shall be from the Client’s account(s) registered with ALICE BLUE. No payments shall be made to ALICE BLUE from any Client bank accounts not registered with ALICE BLUE or any bank accounts belonging to any third parties.',
          'Money payout to ALICE BLUE — Notwithstanding anything contained in any other agreement or arrangement, if any, between the parties hereto, the client hereby authorizes ALICE BLUE to release all payments due to him from the trading account maintained with ALICE BLUE, against specific request made by the Client to this effect.',
          'Securities pay-in to ALICE BLUE — All delivery to be effected to ALICE BLUE for a trade must be made within 24 hours from the execution of the sale order or one day before the pay-in date, whichever is earlier. Losses, if any, that may accrue in the event of a default in completing the delivery on the exchange by ALICE BLUE because of any delay in the delivery by the client shall be borne solely and completely by the client. Losses for the purposes of this clause shall include auction debits or penalty charges, if any, incurred because of non-delivery of securities on the settlement date on the exchange. No third-party shares will be sold through ALICE BLUE or third-party payment should be made to ALICE BLUE and the client will be solely responsible for any violation. If the client has sold any securities from the exchange against purchase in previous settlements, such sale shall be at the sole risk as to costs and consequences thereof of the client.',
          'Securities pay-out by ALICE BLUE — ALICE BLUE may directly credit the demat account of the client with the depository participant or maintain the securities account with ALICE BLUE on a running account basis.',
          'Provided that if the order placed by the client through the website or otherwise is for securities which are in the no-delivery period, such securities shall be credited to the trading account of the client only at the time of settlement of trades, as per the schedule of the Exchange. However, if any sum is due from the client, ALICE BLUE may withhold the credit of securities to the demat account of the client. The client authorizes ALICE BLUE to withhold the securities to meet liabilities of the client to ALICE BLUE under this agreement.',
          'ALICE BLUE is entitled to consider any sum or money or security lying to the credit of the client as margin received.',
        ],
      },
      {
        title: 'Representations and Warranties',
        content: '',
        points: [
          'The Client hereby warrants that they are capable of executing the present agreement and that the terms hereof are not in contravention of any rights of any party with whom such client has any agreements at any time prior to the execution of this agreement.',
          'The client agrees to provide and continue to provide all details about themselves as may be required by ALICE BLUE, including but not restricted to PAN Number or Unique Identification Number (issued by SEBI), and states all details and facts represented to ALICE BLUE are true.',
          'The Client hereby warrants and confirms that they are fully aware of all applicable terms and functionalities available in the order entry window. This includes, but is not limited to, Immediate or Cancel (IOC) validity, product types including MIS, CNC, MTF, BO, CO and NRML, trade quantities, and any other relevant parameters associated with order placement. The Client agrees to place orders only after understanding and verifying these details.',
          "The Client is aware and acknowledges that trading over the internet involves many uncertain factors and complex hardware, software systems, communication lines, peripherals, etc., which are susceptible to interruptions and dislocations and the Online Trading Service of ALICE BLUE may at any time be unavailable without further notice. ALICE BLUE and the Exchange do not make any representation or warranty that the Online Trading Service of ALICE BLUE will always be available to the Client without any interruption. The Client agrees that they shall not have any claim against the Exchange or ALICE BLUE on account of any suspension, interruption, non-availability or malfunctioning of the Online Trading System or Service of ALICE BLUE or the Exchange's service or systems for any reason whatsoever. The Client also authorizes ALICE BLUE to take necessary steps on their behalf to complete or settle trades in such situations or as needed. However, no clause herein shall create an obligation upon ALICE BLUE to take any such steps.",
          'ALICE BLUE states that it has complied with and will continuously comply and, if not, proposes to comply with all statutory and regulatory directions to offer Internet Trading services through the website/platform (www.aliceblueonline.com) and for dealing in the cash and derivatives segment of the Exchange.',
          'The Client warrants that all or any of the securities deposited by them with ALICE BLUE in respect of margin requirements or otherwise, are owned by them and the title thereof is clear and free of encumbrances.',
          "The Client hereby confirms and warrants that the Client authorises ALICE BLUE to take all such steps on the Client's behalf as may be required to complete or settle any transactions entered through or with ALICE BLUE or executed by ALICE BLUE on behalf of the Client. However, nothing herein shall oblige ALICE BLUE to take such steps.",
        ],
      },
      {
        title: 'Fees and Brokerage',
        content: '',
        points: [
          'The client agrees to pay to ALICE BLUE brokerage, commission, fees, service tax and other taxes and transaction expenses by whatever name so called, as they exist from time to time and as they apply to the client’s account and transactions, and the services that they receive from ALICE BLUE. ALICE BLUE shall be entitled to deduct such fees or levies from the Client’s account or trading ledger, in lieu of the services received by the Client from ALICE BLUE.',
          'A schedule of brokerage, fees and commissions, applicable service and other taxes and other transaction expenses shall be provided by ALICE BLUE to the client from time to time upon request by the Client.',
        ],
      },
      {
        title: 'Client Account Termination and Suspension',
        content: '',
        points: [
          "ALICE BLUE may suspend or terminate a client's access to its platform if there is a breach of the Terms or any applicable laws. This may restrict access to some or all services or features.",
          'Once suspended or terminated, the client’s right to use ALICE BLUE’s services ends immediately. ALICE BLUE is not responsible for any losses, claims, or damages resulting from such action.',
          'The right of ALICE BLUE to terminate or suspend the Client’s account is in addition to any remedy or obligation prescribed by applicable law. If the Client is aggrieved by any act of ALICE BLUE in this regard, the Client may write to ALICE BLUE as per the grievance redressal policy laid down in these Terms, with supporting documentation or evidence. ALICE BLUE will review the case as per applicable laws, and its decision regarding reinstatement will be final.',
        ],
      },
      {
        title: 'Intellectual Property',
        content: '',
        points: [
          'All intellectual property on the ALICE BLUE platform — including software, content, trademarks, and designs — belongs solely to ALICE BLUE or is licensed to it. No rights or licenses are granted to users by using the platform.',
          'You shall not copy, reverse engineer, reproduce, or misuse any part of the platform, including its code, content, branding, or design. Unauthorized access methods like bots or crawlers are also prohibited.',
          'Any unauthorized use of ALICE BLUE’s intellectual property rights in connection with any other good, service, or offering will constitute an infringement of the intellectual property rights of ALICE BLUE and may be actionable under applicable laws.',
        ],
      },
      {
        title: 'Investment or Any Other Advice',
        content: '',
        points: [
          'The Client agrees that none of the services available on the website shall amount to investment advice on the part of ALICE BLUE.',
          'If the Client receives any information, recommendations or advice from any employee or representative of ALICE BLUE, then such information, recommendations or advice shall strictly be in the personal capacity of such employee or representative, and the Client may act upon it at their sole risk and cost. ALICE BLUE shall in no way be liable or responsible for any transactions executed by the Client in pursuance of such information, recommendations or advice. ALICE BLUE and its officers, directors, partners, employees, agents and affiliates will have no liability with respect to any investment decisions or transactions of the Client.',
        ],
      },
      {
        title: 'Miscellaneous',
        content: '',
        points: [
          'ALICE BLUE does not warrant that the service will be uninterrupted or error-free. The service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including without limitation, those of merchantability and fitness for a particular purpose.',
          'The client agrees that ALICE BLUE shall not be held responsible for delays in transmission of orders due to breakdown of the system or failure of communication facilities either due to the fault of the systems of ALICE BLUE or of the Exchanges or otherwise or for any other delay beyond the reasonable control of ALICE BLUE due to a breakdown or failure of communication facilities or for any other delay beyond the reasonable control of ALICE BLUE. The Client hereby confirms and authorises ALICE BLUE to send promotional content through email, voice calls, SMS, or any social media channels not limited to WhatsApp, Facebook, Twitter, Telegram, etc.',
          'The Client agrees and acknowledges that the contract note shall be considered the final and conclusive confirmation of all trade transactions executed on a particular trading day. The contract note shall take precedence over any other reports, including but not limited to ledger statements, margin reports, or any other summaries provided through the platform.',
        ],
      },
      {
        title: 'Indemnity',
        content: '',
        points: [
          'In the event of death or insolvency of the client, winding up or liquidation or their otherwise becoming incapable of receiving and paying for or delivering or transferring securities which the client has ordered to be bought or sold, ALICE BLUE may close out the transaction of the client and the client or their legal representative shall be liable for any losses, costs and be entitled to any surplus which may result therefrom.',
          'The client is aware that authentication technologies and strict security measures are required for internet trading through an order routed system and undertakes to ensure that the password of the client and/or their authorized representatives is not revealed to any third party. The client also agrees to indemnify ALICE BLUE from any loss, injury, claim or any action instituted against ALICE BLUE arising from the misuse of the password by any party.',
          'The Client agrees to indemnify and hold ALICE BLUE harmless from any loss, damage, or liability arising from the use of fraudulent or third-party websites or platforms that impersonate or resemble ALICE BLUE, its employees, or any of its associates, or falsely claim to offer assured returns or profits on its behalf. Clients are advised to exercise caution, verify the authenticity of any such platforms and schemes, and immediately report any suspicious websites or activities to askus@aliceblueindia.com.',
        ],
      },
    ],
    additionalSections: [
      {
        title: 'Force Majeure',
        content:
          'ALICE BLUE shall not be responsible for delay or default in the performance of their obligations due to contingencies beyond their control, such as (including but not limited to) losses caused directly or indirectly by exchange or market rulings, suspension of trading, fire, flood, civil commotion, earthquake, war, strikes, failure of the systems, failure of the internet links or government / regulatory action.',
      },
      {
        title: 'Severance',
        content:
          'In the event of any one or more of the provisions contained in this Agreement illegal or unenforceable in any respect under any law for the time being in legality and enforceability of the remaining provisions contained herein shall prejudiced or affected thereto',
      },
      {
        title: 'Notice',
        content:
          'All notices, correspondences or communications issued under this agreement any one or more of the following modes of communications and such notice shall be served at the ordinary place of residence and/or last known web address and / or at the ordinary business address of the party to this agreement such as-',
        modes: [
          'By hand',
          'Delivery by post',
          'By registered post',
          'Under certificate of posting',
          'By email or fax',
          'By affixing it on the door at the last known business or residential address',
          'By oral communication to the party or on the last known telephone number or on the recording machine of such number.',
          'By advertising in at least one prominent daily newspaper having circulation in the area where the last known business or residential address of the party is situated.',
          'By notice posted on the notice board of the Exchange if no address is known. Any communication sent by ALICE BLUE to the client shall be deemed to have been properly delivered or served, if such communication is returned on ALICE BLUE as unclaimed/ refused/ undelivered, if the same was sent in any one more of the above modes of communication to the ordinary place of residence and / or last known web address /residing address and / or at the ordinary business address of the party to this agreement.',
        ],
      },
      {
        title: 'Governing Law, Jurisdiction and Dispute Resolution',
        content: '',
        points: [
          'The Terms and the use of the website are governed by and construed in accordance with the laws of India.',
          'In the event any dispute or difference arises between the User and ALICE BLUE in connection with the validity, interpretation, termination and implementation or alleged breach of any provision of the Terms (“Dispute”), both Parties hereto shall endeavour to settle such Dispute within a period of 30 days, amicably with each other and in good faith.',
          'Upon failure to amicably settle any Dispute, the User must give written notice to ALICE BLUE and refer the Dispute to be resolved by arbitration. The arbitration proceedings shall be conducted in accordance with the rules of the Arbitration and Conciliation Act 1996. The venue and seat of arbitration shall be Bangalore, India. The arbitration proceedings shall be conducted in English. The arbitral award shall be substantiated in writing.',
          'The courts in Bangalore, India shall have exclusive jurisdiction over all matters connected with these Terms and your use of the website.',
        ],
      },
    ],
    contact: {
      title: 'Contact Us',
      content:
        'Please reach out to compliance@aliceblueindia.com if you have any questions or concerns regarding the Terms.',
    },
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          px: {
            xs: theme.spacing(4),
            md: theme.spacing(5),
            lg: theme.spacing(10),
          },
          pt: {
            xs: theme.spacing(2),
            md: theme.spacing(4),
          },
          pb: {
            xs: theme.spacing(4),
            md: theme.spacing(6),
          },
          width: { xs: '100%', xl: '1440px' },
          mx: 'auto',
        }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <Typography
              variant="h3"
              gutterBottom
              component="h1"
              fontWeight="500"
            >
              {termsData.title}
            </Typography>
            <Typography fontWeight={600}>
              {termsData.introduction.contentHead}
            </Typography>
          </Box>

          {/* Introduction */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {termsData.introduction.contentPara}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 2 }}
            >
              {termsData.introduction.companyInfo}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                lineHeight: 1.6,
              }}
            >
              {termsData.introduction.modifications}
            </Typography>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Main Sections */}
          {termsData.sections.map((section) => (
            <Box sx={{ mb: 5 }}>
              <Typography variant="h6" component="h2" mb={1} fontWeight="600">
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: 'justify', lineHeight: 1.6 }}
              >
                {section.content}
              </Typography>
              {section.points && (
                <Box component="ol" sx={{ pl: 3 }}>
                  {section.points.map((point, pointIndex) => (
                    <Typography
                      key={pointIndex}
                      component="li"
                      //   variant="body2"
                      sx={{
                        textAlign: 'justify',
                        lineHeight: 1.5,
                        mb: 1,
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          ))}

          {/* Additional Sections */}
          {termsData.additionalSections.map((section, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                fontWeight="600"
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: 'justify', lineHeight: 1.6 }}
              >
                {section.content}
              </Typography>
              {section.modes && (
                <List dense>
                  {section.modes.map((mode, modeIndex) => (
                    <ListItem key={modeIndex} sx={{ py: 0.25 }}>
                      <ListItemText
                        primary={`${modeIndex + 1}. ${mode}`}
                        primaryTypographyProps={{
                            variant: 'body1',
                          sx: { lineHeight: 1.5 },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              {section.points && (
                <List dense>
                  {section.points.map((point, pointIndex) => (
                    <ListItem key={pointIndex} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={`${pointIndex + 1}. ${point}`}
                        primaryTypographyProps={{
                          variant: 'body1',
                          sx: { textAlign: 'justify', lineHeight: 1.5 },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}

          <Divider sx={{ my: 1 }} />

          {/* Contact Section */}
          <Box
            sx={{
              py: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              fontWeight="600"
            >
              {termsData.contact.title}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {termsData.contact.content}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
};

export default TermsAndConditions;
