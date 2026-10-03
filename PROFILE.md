# Abdus Saboor — Profile and Content Record

Last reviewed: 2 October 2026. This is the factual reference for the portfolio redesign, aimed primarily at ML employers. It preserves historical content without treating every old claim as current.

## Evidence and Maintenance

- **Owner-confirmed:** information supplied in the portfolio planning conversation on 2 October 2026. Explicit corrections override older sources.
- **LinkedIn screenshots:** [experience](<references/linkedin/Screenshot 2026-10-02 194312.png>) and [education](<references/linkedin/Screenshot 2026-10-02 194351.png>); these are snapshots, not a live LinkedIn verification.
- **Existing website:** [index.html](index.html), captured before redesign. Historical statements below are transcribed or paraphrased, with spelling normalized.
- **Project evidence:** local PDFs linked below. Summaries describe the supplied documents, not independently reproduced results or verified public releases.
- `references/` is locally ignored by the existing `.gitignore`; these source links require the local reference collection and may not resolve in another checkout. Keep PDFs local. Future website content should use summaries and approved links, not automatic PDF downloads.
- Preserve source attribution and uncertainty when updating this record. Do not infer personal ownership of every part of a group project from author order.

## Current Profile

**Preferred public name:** Abdus Saboor. The existing website and several manuscripts use the fuller name Abdus Saboor Gaffari Mohammed.

Abdus Saboor is pursuing a Master of Science in Machine Learning at the American University of Sharjah, having started in Fall 2024. Expected graduation is **Fall 2026**. Previously, he worked as a full-stack developer at Cognizant, leaving in July 2024 as a Senior Software Engineer. His master's work includes machine learning projects and TACIT, an accepted paper awaiting publication.

The portfolio should foreground applied ML work and research, supported by prior full-stack industry experience. Public project presentation should start with summaries and approved links.

## Experience

Dates and locations below come from the LinkedIn experience screenshot; the full-stack role and departure in 2024 are also owner-confirmed.

| Organization | Role | Dates | Location / details shown |
| --- | --- | --- | --- |
| Cognizant | Senior Software Engineer | April–July 2024 | Hyderabad, Telangana, India; full-time, hybrid; Java and Spring Boot visible |
| Cognizant | Software Engineer | January 2022–March 2024 | Hyderabad, Telangana, India; full-time |
| Cognizant | Jr Software Engineer | December 2020–January 2022 | Chennai, Tamil Nadu, India; full-time |
| Cognizant | Programmer Analyst Trainee | December 2019–December 2020 | Greater Chennai Area |
| idealabs | Intern | August 2018–May 2019 | Greater Hyderabad Area |

Cognizant tenure: December 2019–July 2024. Month-level overlaps are retained as shown in LinkedIn. Exact historical appointment dates appear below; detailed responsibilities and measurable achievements remain to confirm.

## Education

- **Master of Science in Machine Learning — American University of Sharjah:** Fall 2024–present, expected graduation Fall 2026, confirmed by the owner. The screenshot shows August 2024–July 2026; the owner's Fall 2026 confirmation supersedes that end date. Do not describe the degree as completed.
- **Bachelor of Engineering in Information Technology — Deccan College of Engineering & Technology:** 2015–2019, per LinkedIn. The historical website separately names Osmania University and reports 85.89%; retain that provenance rather than assuming how the institution names should be combined.

## Master's Projects and Paper Inventory

All seven documents name Abdus Saboor as an author. Collaborators are listed as written in each document, excluding Abdus Saboor. Except for his confirmed main-author role on TACIT, individual contributions remain unconfirmed. The six documents in `not_published/` are recorded as unpublished project materials based on their supplied classification; no acceptance or peer-review status is inferred. Only TACIT supplies an identified project repository link; external citations and third-party repositories in other reports are not presented as his code.

### 1. TACIT: TCN and Conformer Integrated Two-Stream Model for Background Music Removal

- **Status:** accepted at ICCAI 2026, awaiting publication, owner-confirmed. Abdus Saboor identifies himself as one of the main authors; specific implementation, experiment, and writing responsibilities remain to confirm.
- **Summary:** a two-stream audio separation model combining a TCN and Conformer with learnable gating to suppress background music while retaining speech and environmental sounds. The manuscript describes a custom mixture dataset and comparative evaluation; these are team-reported findings.
- **Collaborators:** Solomon Iyassu Ghebretatios, Latifa Alhosani, Imran Zualkernan.
- **Manuscript metadata:** ICCAI 2026, April 24–27, 2026, Okinawa, Japan; DOI `10.1145/3821244.3821336`. The owner reports that the DOI currently returns 404. Neither the printed DOI nor conference date establishes publication; no live DOI verification was performed for this record.
- **Code link printed in manuscript:** [tacit_bg_music_removal](https://github.com/abdussaboor98/tacit_bg_music_removal), not independently checked for availability.
- **Source:** [TACIT manuscript](references/masters_works/accepted_to_be_published/TACIT_TCN_and_Conformer_Integrated_Background_Music_Generation.pdf). The filename says “Generation”; the internal title and task say “Removal.” Use the internal title.

### 2. Target-Speaker Keyword Spotting Under Overlapping Speech for TinyML Devices: Milestone #4 Report

- **Status:** unpublished final project report.
- **Summary:** speaker-conditioned keyword detection under overlapping speech, distinguishing whether the enrolled speaker said “yes.” The report describes local microphone processing and inference on an Arduino Nano 33 BLE Sense under memory and latency constraints.
- **Collaborators:** Affan Murtaza, Solomon Ghebretatios.
- **Project/code link:** not identified in the supplied report.
- **Source:** [TinyML keyword spotting report](references/masters_works/not_published/TinyML-KWS.pdf).

### 3. Analog Circuit Sizing using Decision Transformer

- **Status:** unpublished project manuscript.
- **Summary:** explores analog circuit sizing as offline trajectory modeling using a Decision Transformer, with DDPG-generated demonstrations in AnalogGym. It investigates transformer-based design automation; do not turn the exploratory framing into an unsupported superiority claim.
- **Collaborators:** Latifa Alhosani, Solomon Ghebretatios.
- **Project/code link:** not identified in the supplied manuscript.
- **Source:** [analog circuit sizing report](<references/masters_works/not_published/Analog_Circuit_Sizing_using_DT Report.pdf>).

### 4. Collaborative Fault Tolerance in Fog Computing Using Reverse Auction and Gossip Mechanism

- **Status:** unpublished COE505 Cloud Computing Infrastructure presentation, Group 7.
- **Summary:** proposes collaborative container migration across independently managed fog nodes using gossip, reverse auctions, and trust scoring. The presentation reports simulation comparisons in a customized iFogSim2 environment, with a perfect fault-prediction module assumed; this is not evidence of a production deployment.
- **Collaborators:** Solomon Ghebretatios, Affan Murtaza. The cover names Dr. Ra'afat Abu-Rukba as the course instructor, not a project coauthor.
- **Project/code link:** not identified in the supplied presentation.
- **Source:** [fog computing presentation](<references/masters_works/not_published/Collaborative Fault Tolerance in Fog Computing using reverse auction and gossip mechanism.pdf>).

### 5. Novel Approach to deal with Data Imbalance in Automobile Insurance Fraud Data

- **Status:** unpublished project manuscript.
- **Summary:** examines TVAE-generated synthetic samples for balancing and augmenting automobile insurance fraud data, evaluating XGBoost and Random Forest against conventional resampling approaches including SMOTE and ADASYN.
- **Collaborators:** Alizar Farhan, Khalifa Alshamsi.
- **Project/code link:** no team repository identified; the manuscript's third-party dataset and repository citations are supporting references.
- **Source:** [insurance fraud manuscript](<references/masters_works/not_published/Novel Approach to deal with Data Imbalance in Automobile Insurance Fraud Data.pdf>).

### 6. Joint-based Isolated Sign Language Recognition using a TCN for ArSL with Mobile Deployment

- **Status:** unpublished project manuscript.
- **Summary:** describes JISR-TCN for isolated Arabic Sign Language recognition, using MediaPipe skeletal landmarks, spatial and temporal augmentation, and quantization for mobile deployment. Evaluation described in the manuscript includes a custom dataset and leave-one-signer-out testing.
- **Collaborators:** Solomon Ghebretatios, Affan Murtaza.
- **Project/code link:** no team repository identified; framework documentation links are supporting references.
- **Source:** [JISR manuscript](<references/masters_works/not_published/JISR - Joint-based Isolated Sign Language Recognition using a.pdf>).

### 7. Optimizing Flight Departure Delay Predictions at Dubai Airport Using Machine Learning Techniques

- **Status:** unpublished project manuscript.
- **Summary:** investigates supervised classification of Dubai Airport departures as on time or delayed, incorporating weather and airport activity data, preprocessing, class balancing, tuning, and model comparison. Aspirations in the abstract to establish a new benchmark must not be presented as established results.
- **Collaborators:** Khalifa Alshamsi, Latifa Alhosani.
- **Project/code link:** no team repository identified; Dubai Pulse and weather-data links are source-data references.
- **Source:** [flight delay manuscript](<references/masters_works/not_published/Optimizing Flight Departure Delay Predictions at Dubai Airport Using Machine Learning Techniques.pdf>).

## Historical Website Inventory — Before Redesign

Source: [index.html](index.html), as inspected on 2 October 2026. These are existing website claims, not newly verified current qualifications or publication-ready copy. Preserve them here even if omitted from the redesigned site.

### Identity and Biography

- Display name: “Abdus Saboor” followed by “Gaffari Mohammed.”
- Rotating descriptions: “Full Stack Developer,” “Foodie,” and “Tech Enthusiast.”
- Biography: full-stack developer with knowledge of Java, Spring Framework, microservices, RESTful APIs, JUnit, Mockito, Angular, React, Bootstrap 4, Git, and Maven.

### Career Claims

- One of only three students selected from his college into Cognizant.
- Completed engineering with 85.89%.
- Joined Cognizant on 28 December 2019 as Programmer Analyst Trainee and trained as a full-stack developer.
- Promoted to Junior Software Engineer on 28 December 2020 and Software Engineer on 12 January 2022.
- The old timeline contains no senior promotion, departure, or master's entry; use the current sections for those updates.

### Four Existing Projects

| Project | Context and technologies | Existing description |
| --- | --- | --- |
| TweetApp (Twitter Clone) | Full Stack Engineering Training; Java, Spring Boot, React, Redux, Kafka, MySQL, AWS | Users share and view posts; live tweet feed through Kafka and WebSockets; React UI with Redux state management. |
| Healthcare Records | Training; Java, Spring Boot, Angular 8, MySQL | Admin uploads patient and physician details; others retrieve records by patient ID. |
| Stock Market Charts | Training; Java, Spring Boot, Angular 8, MySQL | Admin uploads daily prices from an Excel sheet; users compare companies or time periods. |
| Criminal Identification Using Blockchain | University final project; Ethereum, Solidity, Python, HTML, CSS, JavaScript | Described as an automated immigration Ethereum DApp intended to prevent criminals leaving the country, with a web UI and Python gate-control UI. No operational deployment is established. |

### Skills Listed

| Category | Historical listing |
| --- | --- |
| Programming | Java |
| Java frameworks/testing | Spring Boot, Spring Batch, JUnit, Mockito |
| Frontend technologies | HTML, CSS, SCSS, JavaScript |
| Databases | Oracle; basic MongoDB and MySQL |
| Frontend frameworks/libraries | React, Angular 8, Bootstrap 4 |
| Cloud and event streams | Basic AWS and Kafka |
| Tools and IDEs | Git, Maven, VSCode, Eclipse IDE |

### Highlights Listed

- Experience with Git and Maven.
- Developing attractive, interactive websites with Angular, React, Bootstrap, and SCSS.
- Practice REST API projects using Java and Spring Boot.
- Work on a project requiring Spring Boot and Spring Batch.
- Oracle SQL knowledge and basic MongoDB/MySQL knowledge.
- Familiarity with JUnit and Mockito for unit tests.
- Understanding requirements and prioritizing tasks.
- Interest in learning technologies and unconventional approaches.

### Education Listed

- B.E. Information Technology, Osmania University, Hyderabad, India — 85.89%.
- Intermediate (10 + 2), Telangana Board of Intermediate Education, Hyderabad, India — 94.3%.
- 10th, CBSE, Hyderabad, India — 10 GPA.

### Contact Details and Links Listed

Current validity and preference for future public display remain to confirm.

- Phone: +91 8919372849.
- Email: abdussaboor@gaffari.com; gaffari98@gmail.com.
- [GitHub](https://github.com/abdussaboor98).
- [LinkedIn](https://www.linkedin.com/in/abdussaboorgaffari/).
- [Instagram](https://www.instagram.com/abdussaboor98/).
- [Twitter](https://twitter.com/abdussaboor98).

### Existing Presentation and Credits

Navigation: About, Journey, Projects, Skills, Key Highlights, Academics, Contact. The site uses a portrait, logo, animated background, typewriter text, and fullPage.js navigation. Its technology footer names HTML5, CSS3, Sass, JavaScript, Bootstrap, Font Awesome, and fullPage.js. Existing icon credits name prettycons, Kiranshastry, Eucalyp/Flaticon, and titusurya/Freepik; retain applicable attribution if those assets are reused.

## Details Still to Confirm

- Cognizant and idealabs responsibilities, publicly shareable achievements, and any supporting metrics.
- Thesis title, research focus, supervisor, and any work beyond the seven supplied documents.
- Individual contributions, dates, approved project links, and appropriate public descriptions for each master's project; TACIT main authorship is confirmed, detailed role allocation is not.
- Current ML skills and proficiency; project methods alone do not establish an endorsed skills list.
- Preferred current contact channels and which historical phone, email, and social links should remain public.
- How to display undergraduate college/university affiliation, and whether historical grades and school-level education belong on the redesigned site.
- Future publication updates: change TACIT's status only with new evidence or explicit owner confirmation.

## Redesign Interview — Confirmed Updates, 2 October 2026

This section supersedes conflicting older or unresolved entries above; the historical inventory is retained for provenance.

- **Positioning:** ML/AI engineer, connecting research to working systems. Primary action: contact. Full-time opportunities after expected Fall 2026 graduation, in the UAE or remotely.
- **Contributions:** owner identifies as a main coauthor with involvement across the lifecycle of the master's projects, except circuit sizing, where involvement was limited. Do not describe shared project results as sole-author accomplishments.
- **Selected work order:** TACIT → TinyML keyword spotting → sign-language recognition. Short overviews, not long technical case studies. Other master's projects and undergraduate blockchain work remain compact; old training projects are omitted publicly.
- **Cognizant evidence:** [February CV](<references/cv/CV Feb 26.pdf>) describes US retail merchandising-system modernization, Spring Boot/Batch and Kafka services processing millions of records under SLAs, reusable libraries and utilities, and work across the SDLC. Its broad “Senior Software Engineer” tenure heading must not override the screenshot-supported promotion dates. Omit uncontextualized percentage improvements from public summaries.
- **GTA:** American University of Sharjah, Spring 2025, Fall 2025, and Spring 2026. Completed; not a current role. Labs and grading for Programming in C Lab and Digital Systems Lab. Owner confirmed duties and dates.
- **Education affiliation:** CV identifies Deccan College of Engineering & Technology, Osmania University. The undergraduate affiliation question above is resolved.
- **Thesis:** only remaining master's requirement, owner-confirmed. Public description: ongoing research securing federated learning using ML and blockchain. Do not publish the thesis title or architecture. [Local proposal](references/thesis/Abdus_Saboor_Thesis_Proposal.pdf) is supporting evidence, not a completed-thesis claim.
- **Public contacts:** abdussaboor@gaffari.com (primary forwarding email), +971 529178807, [LinkedIn](https://www.linkedin.com/in/gaffari98/), existing GitHub, and [X](https://x.com/abdussaboor98). Remove Instagram and personal Gmail. University email deferred. New contacts supersede the historical website inventory.
- **Assets:** reuse the existing portrait at a small size until replaced. Owner supplied [Jisr screenshots](references/arsl_app/home_screen.png); approved optimized public copies are separate from private source files.
- **Design:** Engineering Editorial, professional/confident/precise/innovative; work leads, some motion, prominent professional experience. Homepage and three overview pages; browser-first implementation and Markdown updates.
- **Deferred:** TACIT audio recordings (TODO); updated résumé before enabling download; university email; editor and deployment hook. No visible dummy downloads or audio players.

### Current Evidence Boundaries

The CV is an owner-supplied source, not independent metric verification. Its project percentages are not promoted to website claims without reconciliation with the reports' evaluation context. Source PDFs and screenshots remain local; only approved optimized image derivatives enter `public/`. The CV's GTA/current-student context and prior contact information are superseded by the interview above.

## Redesign — Confirmed Updates, 3 October 2026

The owner explicitly approved the React implementation plan in this conversation. These presentation decisions supersede the 2 October design and selection decisions; biographical and project evidence boundaries remain unchanged.

- **Structure:** one personal homepage with About, Experience, Research Projects, Software Projects, Education, and Contact. No project-detail pages or separate skills inventory.
- **Selection:** show all seven master's projects and the undergraduate blockchain project; restore TweetApp, Healthcare Records, and Stock Market Charts with their historical training context.
- **Project presentation:** descriptive title, 25–45-word introduction, four to six evidence-supported technology/skill tags, context/status, and approved links where available. Tags indicate project context, not a new proficiency endorsement; circuit sizing retains its limited-contribution qualification.
- **Identity:** light green-influenced palette with forest green, pale sage, soft white, and Manrope. Personal career story and the existing portrait; no new personal-interest claims.
- **Implementation:** React/Vite under app/, data in app/portfolio.js, generated output in build/, legacy root index.html and dist/ retained. Former project URLs redirect to homepage entries. No deployment authorized in this milestone.
