import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import ProfileModal from "../../components/ProfileModal";

const ProfileDashboard = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewState, setViewState] = useState(true); // Grid view by default
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Prem Shahi",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4,
      email: "prem.shahi@example.com",
      phone: "(555) 123-4567",
      address: "123 Tech Street, Web City, WD 12345",
      bio: "Experienced web developer with a passion for creating responsive and user-friendly websites.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Deepa Chand",
      role: "App Developer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 3,
      email: "deepa.chand@example.com",
      phone: "(555) 234-5678",
      address: "456 Mobile Ave, App Town, AD 67890",
      bio: "Mobile app developer specializing in creating innovative and efficient applications.",
      skills: ["Swift", "Kotlin", "Flutter", "React Native"],
    },
    {
      id: 3,
      name: "Praka Shahi",
      role: "Photographer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4,
      email: "praka.shahi@example.com",
      phone: "(555) 345-6789",
      address: "789 Camera Road, Photo City, PC 34567",
      bio: "Professional photographer with an eye for capturing perfect moments.",
      skills: ["Portrait", "Landscape", "Event", "Commercial"],
    },
    {
      id: 4,
      name: "Sarah Lee",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      email: "sarah.lee@example.com",
      phone: "(555) 456-7890",
      address: "101 UX Road, Design City, UX 45678",
      bio: "UX designer with a passion for creating user-centric interfaces.",
      skills: ["Figma", "Sketch", "Adobe XD", "Wireframing"],
    },
    {
      id: 5,
      name: "James Smith",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 4,
      email: "james.smith@example.com",
      phone: "(555) 567-8901",
      address: "202 Backend St, Code City, BC 56789",
      bio: "Backend developer specializing in scalable server-side solutions.",
      skills: ["Node.js", "Express", "MongoDB", "MySQL"],
    },
    {
      id: 6,
      name: "Emily Adams",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      email: "emily.adams@example.com",
      phone: "(555) 678-9012",
      address: "303 Data Drive, Data City, DC 67890",
      bio: "Data scientist with a focus on machine learning and data analysis.",
      skills: ["Python", "R", "TensorFlow", "SQL"],
    },
    {
      id: 7,
      name: "Michael Johnson",
      role: "Cloud Engineer",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      email: "michael.johnson@example.com",
      phone: "(555) 789-0123",
      address: "404 Cloud St, Cloud City, CC 78901",
      bio: "Cloud engineer with expertise in AWS, Azure, and GCP.",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      id: 8,
      name: "Sophie Brown",
      role: "Digital Marketer",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 4,
      email: "sophie.brown@example.com",
      phone: "(555) 890-1234",
      address: "505 Marketing Blvd, Ad City, MC 89012",
      bio: "Digital marketer with experience in SEO, SEM, and content strategy.",
      skills: ["SEO", "Google Ads", "Content Marketing", "Email Campaigns"],
    },
    {
      id: 9,
      name: "Daniel Harris",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      email: "daniel.harris@example.com",
      phone: "(555) 901-2345",
      address: "606 Product St, Product City, PC 90123",
      bio: "Experienced product manager focused on driving innovation.",
      skills: ["Product Strategy", "Agile", "Market Research", "Roadmapping"],
    },
    {
      id: 10,
      name: "Olivia Martin",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      rating: 4,
      email: "olivia.martin@example.com",
      phone: "(555) 012-3456",
      address: "707 Stack Ave, Code City, SC 01234",
      bio: "Full stack developer with a focus on both frontend and backend technologies.",
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    },
  ]);

  const handleView = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleDelete = (profileId) => {
    setProfiles(profiles.filter((profile) => profile.id !== profileId));
  };

  const handleFlag = (profileId) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === profileId
          ? { ...profile, flagged: !profile.flagged }
          : profile
      )
    );
  };

  return (
    <div className="min-h-screen md:p-8 p-4">
      <div class="flex flex-row align-items-center md:justify-between py-6 flex-wrap gap-3 justify-end">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
            />
          </svg>
        </div>

        <div>
          <button
            onClick={() => setViewState(true)}
            className={`p-3 rounded-l-md transition duration-300 ease-in-out transform ${
              viewState
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-300 scale-100"
            }`}
          >
            <img src="./assets/images/grid-icon.svg" alt="grid" />
          </button>
          <button
            onClick={() => setViewState(false)}
            className={`p-3 transition rounded-r-md duration-300 ease-in-out transform ${
              !viewState
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-300 scale-100"
            }`}
          >
            <img src="./assets/images/list-icon.svg" alt="list" />
          </button>
        </div>
      </div>
      <div
        className={`${
          viewState
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out"
            : "w-full space-y-4 border-b-2 transition-opacity duration-500 ease-in-out"
        }`}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            isGrid={viewState}
            profile={profile}
            onView={handleView}
            onDelete={() => handleDelete(profile.id)}
            onFlag={() => handleFlag(profile.id)}
          />
        ))}
      </div>

      <ProfileModal
        profile={selectedProfile}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProfile(null);
        }}
      />
    </div>
  );
};

export default ProfileDashboard;
