import {
  FaChalkboardTeacher,
  FaClock,
  FaHourglassHalf,
  FaUserTie,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
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
              <a href="#" className="hover:underline">
                Right to Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Students
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Faculty
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Photo Gallery
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">OTHER LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                R&D Intranet Portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                RCOEM Perspective Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ARIIA 2021
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">QUICK LINKS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hostel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">MORE ABOUT US</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Principal's Desk
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Governance/Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ranking
              </a>
            </li>
            {/* Add other links similarly */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
