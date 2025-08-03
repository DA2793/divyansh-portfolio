import * as pdfjsLib from 'pdfjs-dist';
import getPdfText from 'pdf-parse';

// Temporary mock data to get the site working
const mockData = {
  personalInfo: {
    name: "Divyansh Ahuja",
    title: "Supply Chain Operations Manager",
    email: "da.2793@yahoo.com",
    phone: "**************",
    location: "New Delhi, DL"
  },
  experience: [
    {
      title: "Supply Chain Operations Manager",
      company: "Amazon",
      period: "Sep 2021 - Current",
      achievements: [
        "Developed and implemented Java-based Amazon ROC HawkEye Tampermonkey script to automate case management across platforms, reducing manual efforts by 90% and achieving significant time savings.",
        "Created a Macros-based Excel report for utilization monitoring, reducing report generation time by 80%.",
        "Spearheaded AI-driven scheduling optimization projects, reducing transit time and ensuring SLA adherence.",
        "Managed a primary team of 20+ and a secondary team of 150+, driving operational efficiency through innovative solutions.",
        "Collaborated with cross-functional teams across Europe and North America to implement cost-reduction initiatives, leading to measurable savings.",
        "Delivered strategic reports using SQL and data visualization tools, providing actionable insights for stakeholders."
      ]
    },
    {
      title: "Assistant Manager - Operations",
      company: "IEnergizer",
      period: "Sep 2015 - Sep 2021",
      achievements: [
        "Led the successful launch of multiple projects including High-Risk Fraud and Credit Protection, achieving 99% quality and 100% customer satisfaction.",
        "Managed high-severity escalation cases and collaborated with stakeholders for effective resolution.",
        "Developed training programs for new hires and established SOPs to ensure consistent performance.",
        "Coordinated with BI and MIS teams to produce detailed reports for management and stakeholders."
      ]
    }
  ],
  skills: {
    "Product & Operations": [
      "Product Management",
      "Project Management",
      "Operations Management",
      "Process Improvement"
    ],
    "Technical": [
      "AI-Driven Process Optimization",
      "Automation (Tampermonkey, Macros)",
      "Data Analysis & Reporting",
      "QuickSight, Excel, SQL"
    ],
    "Management": [
      "Supply Chain Operations",
      "Stakeholder Management",
      "Change Management",
      "Cross-Functional Collaboration"
    ]
  },
  education: [
    {
      degree: "Bachelor of Engineering: Mechanical Engineering",
      institution: "RTM Nagpur University",
      location: "Nagpur, India",
      year: "2017"
    }
  ],
  certifications: [
    {
      name: "AutoCAD",
      institution: "CETPA Infotech Private Limited",
      location: "Noida, India",
      date: "Dec '13"
    },
    {
      name: "Production and Bottling",
      institution: "Radico Khaitan Limited",
      location: "Rampur, India",
      date: "June '14"
    },
    {
      name: "Assembly Line",
      institution: "International Tractors Limited",
      location: "Hoshiarpur, India",
      date: "June '15"
    }
  ]
};

export async function parsePDF(pdfPath) {
  try {
    // For now, return mock data while we implement PDF parsing
    return mockData;

    // PDF parsing code (commented out for now)
    /*
    const pdfData = await fetch(pdfPath).then(res => res.arrayBuffer());
    const data = await getPdfText(pdfData);
    const content = data.text;
    
    const sections = {
      experience: extractExperience(content),
      skills: extractSkills(content),
      education: extractEducation(content),
      projects: extractProjects(content),
      achievements: extractAchievements(content),
      certifications: extractCertifications(content)
    };

    return rn sections;
    */
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return mockData; // Return mock data if there's an error
  }
}

// We'll implement these functions later
function extractExperience(content) {
  return mockData.experience;
}

function extractSkills(content) {
  return mockData.skills;
}

function extractEducation(content) {
  return mockData.education;
}

function extractProjects(content) {
  return mockData.projects;
}

function extractAchievements(content) {
  return mockData.achievements;
}

function extractCertifications(content) {
  return mockData.certifications;
}
