import { BiSolidCheckbox } from "react-icons/bi";
import {
  FaChalkboardTeacher,
  FaClock,
  FaHourglassHalf,
  FaUserTie,
} from "react-icons/fa";
import { colors } from "../Utils/Colors";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.lightGradientPink,
        color: colors.fontColor,
      }}
      className="p-10 border-t border-black"
    >
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
        <div>
          <FaChalkboardTeacher className="text-3xl mx-auto md:mx-0" />
          <h3 className="font-bold mt-2">Practical Exposure</h3>
          <p className="text-sm">
            RCOEM’s industry collaboration ensures <br />
            practical exposure for students.
          </p>
        </div>
        <div>
          <FaHourglassHalf className="text-3xl mx-auto md:mx-0" />
          <h3 className="font-bold mt-2">Culture of Continuous Learning</h3>
          <p className="text-sm">
            We focus on research and innovation to
            <br />
            create a culture of consistent learning.
          </p>
        </div>
        <div>
          <FaUserTie className="text-3xl mx-auto md:mx-0" />
          <h3 className="font-bold mt-2">Experienced Faculty</h3>
          <p className="text-sm">
            Our experienced faculties provide
            <br />
            personalized attention to students.
          </p>
        </div>
        <div>
          <FaClock className="text-3xl mx-auto md:mx-0" />
          <h3 className="font-bold mt-2">All-round Development</h3>
          <p className="text-sm">
            Our emphasis on co-curricular activities <br />
            nurtures all-round development of students.
          </p>
        </div>
      </div>

      {/* Link Sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        <div>
          <h3 className="font-bold text-lg mb-2">IMPORTANT LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="https://www.rknec.edu/wp-content/uploads/2023/11/RTIAct-Judgement.pdf"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Right to
                Information
              </a>
            </li>
            <li>
              <a
                href="https://www.rknec.edu/students/"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Students
              </a>
            </li>
            <li>
              <a
                href="https://www.rknec.edu/faculty/"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Faculty
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">OTHER LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> R&D Intranet
                Portal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> RCOEM Perspective
                Plan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> ARIIA 2021
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">QUICK LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Hostel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Jobs
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">MORE ABOUT US</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Principal's Desk
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} />
                Governance/Facilities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} />
                Ranking
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        <div>
          <h3 className="font-bold text-lg mb-2">Our Websites</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="http://ramdeobabamandirngp.com/"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Shri Ramdeobaba
                Temple Website
              </a>
            </li>
            <li>
              <a
                href="http://nri-admissions.org/"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> NRI-Admission
                Website
              </a>
            </li>
            <li>
              <a
                href="https://www.rknecalumni.org/"
                className="hover:underline"
                style={{ display: "flex", alignItems: "center" }}
              >
                <BiSolidCheckbox style={{ marginRight: 2 }} /> Alumni Website
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Address</h3>
          Shri Ramdeobaba College of Engineering <br />
          and Management, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur – 440
          013 (M.S.) (India)
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li style={{ display: "flex", alignItems: "center" }}>
              <BiSolidCheckbox style={{ marginRight: 5 }} />
              (91)-(712) – 2580011
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <BiSolidCheckbox style={{ marginRight: 5 }} />
              9607980531/2/3/4/5
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
