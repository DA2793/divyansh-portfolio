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
        "Managed end-to-end linehaul operations across North America and European Middle Mile transportation network, ensuring reliable movement of freight between fulfillment centers, sort centers, and delivery stations.",
        "Led cross-functional operational programs delivering €15M+ in cost savings through transportation network optimization, automation, and operations excellence initiatives.",
        "Implemented automation solutions across reporting and planning workflows, reducing manual effort by 90% and improving real-time network visibility and decision speed.",
        "Leveraged Generative AI to accelerate operational analysis, surface network insights, and inform workflow design across large-scale logistics operations.",
        "Led multi-layered operations teams (20+ direct / 150+ extended) responsible for network monitoring, escalation management, and transportation performance governance.",
        "Delivered data-driven insights via SQL, Excel, and analytics dashboards to support transportation planning, cost optimization, and distribution operations decisions."
      ]
    },
    {
      title: "Assistant Manager - Operations",
      company: "IEnergizer",
      period: "Sep 2015 - Sep 2021",
      achievements: [
        "Managed end-to-end service delivery for customer support, fraud risk, and credit protection programs, ensuring SLA adherence and operations excellence.",
        "Led high-risk fraud investigations and escalation workflows, ensuring compliance with internal policies and risk controls.",
        "Launched and scaled fraud and credit protection operations, achieving 99%+ quality and 95% CSAT.",
        "Led workforce planning (300+ to 1,500+ employees), training, and performance management to improve productivity and team capability."
      ]
    }
  ],
  skills: {
    "Product & Operations": [
      "Supply Chain Management",
      "Network Optimization",
      "Transportation Planning",
      "Operations Excellence",
      "Program Management"
    ],
    "Technical": [
      "SQL, Python, Advanced Excel",
      "Generative AI & AI-Driven Optimization",
      "Amazon QuickSight & Data Analytics",
      "Workflow Automation Tools",
      "Browser-Based Validation Systems"
    ],
    "Management": [
      "Performance Governance",
      "Stakeholder Management",
      "Capacity Planning",
      "Cross-Functional Collaboration",
      "Process Improvement"
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
