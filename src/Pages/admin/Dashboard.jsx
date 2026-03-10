import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProjects } from "../../apis/ProjectService";

import { getCertificates } from "../../apis/CertificateService";

import ProjectCard from "../../Components/cards/ProjectCard";

import CertificateCard from "../../Components/cards/CertificateCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, certificateData] =
          await Promise.all([
            getProjects(),

            getCertificates(),
          ]);

        setProjects(projectData || []);
        setCertificates(certificateData || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium">
        Loading Dashboard...
      </div>
    );

  const sections = [
    {
      title: "Projects",
      data: projects,
      navigateTo: "/admin/project-form",
      CardComponent: ProjectCard,
    },
    {
      title: "Certificates",
      data: certificates,
      navigateTo: "/admin/certificate-form",
      CardComponent: CertificateCard,
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-(--page-bg)
        text-(--page-text)
        px-4 sm:px-6 lg:px-12
        py-6 sm:py-8
        xl:py-15
      "
    >
      {sections.map((section, index) => {
        const Card = section.CardComponent;

        return (
          <section
            key={index}
            className="max-w-7xl mx-auto mb-14"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {section.title}
              </h2>

              <button
                onClick={() => navigate(section.navigateTo)}
                className="
                  w-full sm:w-auto
                  px-5 py-2
                  rounded-lg
                  font-medium
                  text-white
                  bg-(--page-primary)
                  hover:bg-(--page-highlight)
                  active:scale-95
                  transition duration-300
                "
              >
                + Add {section.title.slice(0, -1)}
              </button>
            </div>

            {/* Cards */}
            {section.data.length === 0 ? (
              <p className="text-gray-400 text-sm">
                No {section.title.toLowerCase()} added yet.
              </p>
            ) : (
              <div
                className="
                  grid
                  sm:grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-8
                  lg:gap-8
                "
              >
                {section.data.map((item) => (
                  <div key={item._id} className="w-full">
                    <Card
                      item={item}
                      isLoggedIn={isLoggedIn}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Dashboard;