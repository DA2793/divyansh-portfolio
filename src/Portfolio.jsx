
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="p-6 md:p-10 space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Divyansh Ahuja</h1>
        <p className="text-lg text-gray-600">Supply Chain Operations Manager | Hyderabad</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:da.2793@yahoo.com"><Mail className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/divyanshahuja/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Me */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            Results-driven Supply Chain Operations Manager with 9+ years of experience in supply chain
            management, logistics, and customer service. Proven track record in driving operational excellence,
            automating processes, and fostering cross-functional collaboration across geographies.
          </p>
        </CardContent>
      </Card>

      {/* Work History */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Career Timeline</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Amazon (Sep 2021 - Present):</strong> Led automation, AI-driven scheduling, and cross-functional projects across Europe & NA. Managed teams of 20+ and 150+ members.</li>
            <li><strong>IEnergizer (Sep 2015 - Sep 2021):</strong> Delivered project launches with 99% quality, developed SOPs and training, and handled escalations.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Key Projects */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Amazon ROC HawkEye Automation – Reduced manual case management by 90%</li>
            <li>QuickSight Dashboards – Cut reporting effort by 95%</li>
            <li>Commercial Carrier Automation – Automated 95% of carrier cancellations</li>
            <li>EMS System – Standardized employee evaluation with real-time dashboards</li>
            <li>Cost-Aware Scheduling – Saved €1.8M through AI-driven disruption reduction</li>
          </ul>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span>Supply Chain Ops</span>
            <span>Project Management</span>
            <span>Process Improvement</span>
            <span>AI/Automation</span>
            <span>SQL & Quicksight</span>
            <span>Stakeholder Mgmt</span>
            <span>Capacity Planning</span>
            <span>RCA & Problem Solving</span>
          </div>
        </CardContent>
      </Card>

      {/* Awards */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manager of the Quarter – Amazon (Q1 2025, Q1 2024)</li>
            <li>Manager of the Month – Amazon (Jan '25, Dec '24, Sep '24, Mar '24, Jan '23)</li>
            <li>Global Supervisor of the Year – IEnergizer (2020)</li>
            <li>Quality Champion of the Year – IEnergizer (2016)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p>Bachelor of Engineering, Mechanical Engineering – RTM Nagpur University, 2017</p>
        </CardContent>
      </Card>

      {/* Resume */}
      <div className="text-center">
        <Button asChild>
          <a href="/resume.pdf" download>
            Download My Resume
          </a>
        </Button>
      </div>
    </main>
  );
}
