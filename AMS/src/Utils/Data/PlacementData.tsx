import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import { AiTwotoneSnippets } from "react-icons/ai";
import { GiTeacher, GiTrophyCup } from "react-icons/gi";
import { GrCertificate, GrOrganization } from "react-icons/gr";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import cdpcimg from "../Images/cdpcimg.png";
import companiesVisited from "../Images/CompaniesVisited.png";
import highestStipend from "../Images/HighestStipend.png";
import indytryInternship from "../Images/industryInternship.png";
import jobHigherStudy from "../Images/jobHigherStudy.png";
import highestSalary from "../Images/yearlyHighestSalary.png";

export const placementData = [
  {
    id: 1,
    label: `About CDPC`,
    icon: <GrOrganization style={{ fontSize: 20, marginRight: "0.2rem" }} />,
    heading: "CAREER DEVELOPMENT & PLACEMENT CELL",
    image: cdpcimg,
    description: `Welcome to the Career Development and Placement Cell (CDPC) at RBU.

Our job is to empower students with the skills, knowledge, and opportunities needed to excel in their professional careers. The CDPC serves as a vital link between the academic curriculum and the professional world, ensuring that students are well-prepared to meet the challenges of the job market. We aim to facilitate holistic career development for our students by providing comprehensive resources, support, and guidance.

We envision a future where every RBU graduate is equipped with the tools to achieve their career aspirations and contribute meaningfully to their chosen fields. The success of CDPC is evident in the impressive placement records of our graduates. Each year, our students secure positions in prestigious companies across various sectors, contributing to their professional growth and the university’s reputation.`,
    amenities: [
      {
        title: "Counselling",
        description:
          "Personalized sessions to help students identify their career goals and create actionable plans to achieve them.",
      },
      {
        title: "Certification and Skill Development Workshops",
        description:
          "Training in essential professional skills, including professional certifications in various domains, coding skills, resume writing, interview techniques, and communication.",
      },
      {
        title: "Industry Interaction",
        description:
          "Regular interactions with industry experts through guest lectures, seminars, and networking events.",
      },
      {
        title: "Internship and Placement Drives",
        description:
          "Facilitating internships and full-time job placements with leading companies.",
      },
    ],
  },
  {
    id: 2,
    label: "Placement Census",
    heading: "Placement Census",
    icon: <VscGraph style={{ fontSize: 20, marginRight: "0.2rem" }} />,
    description:
      "The Placement Census at RBU provides a quantitative snapshot of our placement activities and outcomes. This section is dedicated to presenting key statistics and data-driven insights that reflect the effectiveness of our placement strategies. It is an essential tool for understanding the overall performance of our placement initiatives. We have consistently achieved prolific placements through campus recruitment drives. Average placement for the last 10 years is more than 85%.",
    placementGraph: [
      {
        id: 1,
        label: "Yearly Highest Salary Offered (LPA)",
        graph: highestSalary,
      },
      {
        id: 2,
        label:
          "Yearly Over All Students Engagement ( Placement + Higher Studies ) – Till May 2024",
        graph: jobHigherStudy,
      },
      {
        id: 3,
        label: "Highest Stipend Offered(Rs) Per Month",
        graph: highestStipend,
      },
      {
        id: 4,
        label:
          "Yearly Number of Students Going for Industry Internship – Till March 2024",
        graph: indytryInternship,
      },
      {
        id: 5,
        label: "Total Number of Companies Visited in a Year – Till May 2024",
        graph: companiesVisited,
      },
    ],
  },
  {
    id: 3,
    label: "Placement Report",
    heading: "Placement Report",
    icon: <TbReportSearch style={{ fontSize: 20, marginRight: "0.2rem" }} />,
    description: `The Placement Report is a comprehensive document that provides statistical data and qualitative insights the about placements. The placement season at RBU consistently demonstrates the high caliber of our students and the strong industry connections fostered by our Career Development and Placement Cell (CDPC). Each year, our students receive numerous job offers from leading companies, with top domestic salaries reaching impressive figures, reflecting the exceptional skills and preparedness of our graduates. Notable international job and internship offers highlight the global recognition our students achievements, further emphasizing the university’s commitment to producing world-class talent.

A considerable number of students receive high-value job offers, with many securing positions that offer salaries well above industry averages. The wide range of companies visiting our campus each year ensures diverse and plentiful opportunities for students across all disciplines.

Overall, the consistent success in placements at RBU is a testament to our commitment to academic excellence, comprehensive career development, and the strong, ongoing support of our industry partners.`,
    batchWiseData: [
      {
        id: 1,
        year: "2024 Batch",
        report: [
          { id: 1, label: "Total Offers", value: 1105 },
          {
            id: 2,
            label: "Highest Salaries",
            value: [
              "50 LPA by Aramco (Saudi Arabia)",
              "37 LPA by LG AD Solution",
              "23 LPA by D.E. Shaw",
              "22 LPA by Nutanix",
              "19 LPA by Porter",
              "16.3 LPA by DarwinBox",
              "15 LPA by Cisco",
              "14 LPA by Philips",
              "14 LPA by NVIDIA",
            ],
          },
          {
            id: 3,
            label: "International Job Offers",
            value: ["Taurani Holdings Limited, UAE", "JTP Japan"],
          },
          {
            id: 4,
            label: "International Internship Offer",
            value: "Taiwan Cheng Kung University Taiwan",
          },
          {
            id: 5,
            label: "Mass Recruiters",
            value: [
              "149 offers in Accenture",
              "101 offers in IBM",
              "75 offers in TCS",
              "55 offers in Cloud4C",
            ],
          },
          {
            id: 6,
            label: "Highest Stipend",
            value: "Two Lakh Rs Per Month by ALPHONSO LABs",
          },
          { id: 7, label: "Average Salary Circuit Branches", value: "6.6 LPA" },
          { id: 8, label: "Average Salary Core Branches", value: "6.1 LPA" },
          { id: 9, label: "Total Average Salary", value: "6.9 LPA" },
          { id: 10, label: "Students with 20 LPA+ Offers", value: 22 },
          { id: 11, label: "Students with 10 LPA+ Offers", value: 84 },
          {
            id: 12,
            label: "Schneider Electrical Offers",
            value: "12 LPA to 15 students of Core Branches",
          },
          { id: 13, label: "Companies Visited", value: 98 },
        ],
      },
      {
        id: 2,
        year: "2023 Batch",
        report: [
          { id: 1, label: "Total Offers", value: 1620 },
          {
            id: 2,
            label: "Highest Package",
            value: [
              "48 LPA by Fivetran",
              "38 LPA by J.P. Morgan",
              "27 LPA by Juspay",
              "22 LPA by Nutanix",
              "22 LPA by VMware",
              "17.04 LPA by Josh Technology and so on",
            ],
          },
          {
            id: 3,
            label: "Selection",
            value: [
              "325 in Capgemini",
              "222 in Cognizant",
              "214 in Accenture",
              "190 in LTI",
              "154 in TCS",
              "50 in DXC",
            ],
          },
          {
            id: 4,
            label: "Highest Stipend",
            value: ["1.39 Lakh per Month by Tardis", "7 LPA Stipend by Google"],
          },
          {
            id: 5,
            label: "Average Salary in CSE & IT Branches",
            value: "9.8 LPA",
          },
          {
            id: 6,
            label: "Average Salary in Circuit Branches",
            value: "6.2 LPA",
          },
          { id: 7, label: "Average Salary in Core Branches", value: "5.7 LPA" },
          { id: 8, label: "Companies Visited", value: "113+" },
        ],
      },
      {
        id: 3,
        year: "2022 Batch",
        report: [
          { id: 1, label: "Total Offers", value: 1800 },
          {
            id: 2,
            label: "Highest Package",
            value: [
              "33.6 LPA by ServiceNow",
              "22 LPA by Nutanix",
              "30 & 20 LPA by Amazon",
              "19.6 LPA by Gojek",
              "19.5 LPA by VMware",
              "17.34 LPA by BNY Mellon",
            ],
          },
          {
            id: 3,
            label: "Selection",
            value: [
              "347 by Cognizant",
              "214 by Accenture",
              "165 by TCS",
              "196 by Wipro",
              "181 by Persistent",
              "159 by Capgemini",
              "67 by IBM",
              "65 by L&T",
              "58 by DXC",
              "48 by Ernst & Young",
              "30 by LTTS",
            ],
          },
          { id: 4, label: "Highest Stipend", value: "One Lakh Rs Per Month" },
          {
            id: 5,
            label: "Average Salary in CSE & IT Branches",
            value: "9.2 LPA",
          },
          {
            id: 6,
            label: "Average Salary in Circuit Branches",
            value: "6.3 LPA",
          },
          {
            id: 7,
            label: "Average Salary in Core Branches",
            value: "5.1 LPA",
          },
          { id: 8, label: "Companies Visited", value: "131+" },
        ],
      },
      {
        id: 4,
        year: "2021 Batch",
        report: [
          { id: 1, label: "Total Offers", value: 1504 },
          {
            id: 2,
            label: "Highest Package",
            value: [
              "23 LPA by Goldman Sachs",
              "21 LPA by Flipkart",
              "19.5 LPA by VMware",
            ],
          },
          {
            id: 3,
            label: "Selections",
            value: [
              "213 in Cognizant",
              "202 in Accenture",
              "156 in TCS",
              "149 in Capgemini",
              "108 in Birlasoft",
              "100 in L&T",
            ],
          },
          { id: 4, label: "Average Package (Overall)", value: "6.5 LPA" },
          { id: 5, label: "Companies Visited", value: "126+" },
        ],
      },
      {
        id: 5,
        year: "2020 Batch",
        report: [
          { id: 1, label: "Total Offers", value: 1429 },
          {
            id: 2,
            label: "Highest Package",
            value: [
              "20 LPA by Amazon",
              "15.5 LPA by VMware",
              "15 LPA by Compass",
            ],
          },
          {
            id: 3,
            label: "Selections",
            value: [
              "324 in Accenture",
              "149 in TCS",
              "142 in Capgemini",
              "121 in L&T",
            ],
          },
          { id: 4, label: "Average Package (Overall)", value: "5.9 LPA" },
          { id: 5, label: "Companies Visited", value: "122+" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Companies to Campus",
    heading: "Companies to Campus",
    icon: (
      <SiGooglecampaignmanager360
        style={{ fontSize: 20, marginRight: "0.2rem" }}
      />
    ),
  },
  {
    id: 5,
    label: "Our Recruiters",
    icon: <GrCertificate style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 6,
    label: "Training Initiatives",
    icon: <AiTwotoneSnippets style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 7,
    label: "Milestones of CD&PC",
    icon: <GiTrophyCup style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 8,
    label: "Events / Activities",
    icon: (
      <MdOutlineVolunteerActivism
        style={{ fontSize: 20, marginRight: "0.2rem" }}
      />
    ),
  },
  {
    id: 9,
    label: "Higher Education Cell",
    icon: <SchoolIcon style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 10,
    label: "Students for Higher Education",
    icon: <PiStudentFill style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 11,
    label: "Industry Initiatives",
    icon: <ConstructionIcon style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
  {
    id: 12,
    label: "Career Counselling",
    icon: <GiTeacher style={{ fontSize: 20, marginRight: "0.2rem" }} />,
  },
];
