
const profile = {
  name: "Jira Mae Viaña",
  title:
    "Senior SOC Analyst | Incident Responder | Wazuh Specialist | SOC Team Lead",
  email: "jiraviana@outlook.com",
  linkedin: "https://www.linkedin.com/in/jiramaeviana",
  github: "https://github.com/jiraviana",
  summary:
    "Cybersecurity professional with 3+ years of experience across MSSP and enterprise client environments, progressing from L1 SOC Analyst to Senior SOC Analyst, SOC Team Leader, and Incident Responder. Specialized in incident response, threat detection, SIEM operations, Wazuh engineering, and MITRE ATT&CK-aligned investigations.",
};

const experience = [
  {
    role: "Incident Responder",
    company: "Treantly",
    client: "Client: DeepSeas, United States",
    location: "Canada",
    period: "Dec 2025 – Jul 2026",
    points: [
      "Investigated and responded to 60+ escalated security incidents daily, including phishing, malware, credential compromise, and suspicious authentication.",
      "Owned incident validation, scoping, evidence analysis, containment, remediation, and post-incident review.",
      "Correlated SIEM, EDR, identity, email, and threat intelligence telemetry to reconstruct attack timelines.",
      "Performed root cause analysis, IOC investigation, stakeholder reporting, and remediation recommendations.",
    ],
  },
  {
    role: "Senior Security Transformation Analyst",
    company: "Accenture",
    client: "Client: SanDisk, United States",
    location: "Philippines",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Investigated high-priority security alerts using SIEM, EDR, authentication logs, and event correlation.",
      "Supported incident containment, remediation, impact assessments, and investigation documentation.",
      "Collaborated with L3 analysts, security engineers, and stakeholders on complex escalations.",
    ],
  },
  {
    role: "SOC Team Leader",
    company: "Socrates Cyber",
    location: "Israel",
    period: "Apr 2025 – Dec 2025",
    points: [
      "Led daily SOC operations, reviewed analyst investigations, and maintained incident handling quality and SLA adherence.",
      "Mentored analysts in triage, threat hunting, IOC analysis, incident response, and documentation.",
      "Coordinated containment and remediation and identified detection gaps and false-positive tuning opportunities.",
      "Improved SOC workflows through Jira Automation and process documentation.",
    ],
  },
  {
    role: "Senior SOC Analyst",
    company: "Socrates Cyber",
    location: "Israel",
    period: "Aug 2024 – Apr 2025",
    points: [
      "Performed advanced triage and threat hunting across SIEM, endpoint, email, and network telemetry.",
      "Investigated phishing, malware, suspicious authentication, PowerShell activity, and endpoint incidents.",
      "Conducted IOC enrichment, containment support, root cause analysis, and incident reporting.",
    ],
  },
  {
    role: "L1 SOC Analyst",
    company: "Socrates Cyber",
    location: "Israel",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Monitored 200+ daily security alerts and performed first-line triage, investigation, and escalation.",
      "Investigated SIEM and endpoint telemetry using Splunk, Microsoft Sentinel, Wazuh, CrowdStrike, and SentinelOne.",
      "Analyzed email, cloud, and network security alerts and enriched indicators using threat intelligence platforms.",
    ],
  },
  {
    role: "Cybersecurity Trainee",
    company: "Converge Training and IT Services",
    period: "Feb 2024 – Mar 2024",
    points: [
      "Completed practical training in SIEM monitoring, phishing and malware investigation, IOC enrichment, incident response, MITRE ATT&CK, Linux, and networking.",
    ],
  },
  {
    role: "Student IT Assistant",
    company:
      "Eulogio Amang Rodriguez Institute of Science and Technology",
    period: "Sep 2022 – Dec 2022",
    points: [
      "Supported workstation setup, hardware and software troubleshooting, network troubleshooting, documentation, asset management, and end-user assistance.",
    ],
  },
];

const skillGroups = [
  {
    title: "SIEM & Log Analytics",
    skills: [
      "Wazuh",
      "Microsoft Sentinel",
      "Splunk",
      "IBM QRadar",
      "Devo",
      "ELK Stack",
    ],
  },
  {
    title: "Detection Engineering",
    skills: [
      "Custom Wazuh Rules",
      "Windows Event Logs",
      "Sysmon",
      "FIM",
      "MITRE ATT&CK",
      "Detection Tuning",
    ],
  },
  {
    title: "Endpoint Security",
    skills: [
      "CrowdStrike Falcon",
      "SentinelOne",
      "Cortex XDR",
      "Microsoft Defender",
      "Carbon Black",
      "Sophos",
      "ESET",
      "Symantec",
    ],
  },
  {
    title: "SOAR & Case Management",
    skills: [
      "Swimlane",
      "Shuffle",
      "IRIS",
      "Spectra Analyze",
      "ServiceNow",
      "Jira",
      "ConnectWise",
      "UVdesk",
    ],
  },
  {
    title: "Email Security",
    skills: [
      "Proofpoint",
      "Mimecast",
      "Defender for Office 365",
      "FortiMail",
    ],
  },
  {
    title: "Cloud & Identity",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "GuardDuty",
      "CloudTrail",
      "CloudWatch",
      "IAM",
      "Conditional Access",
    ],
  },
  {
    title: "Network & Web Security",
    skills: [
      "Wireshark",
      "Burp Suite",
      "Zscaler",
      "Cloudflare",
      "AWS WAF",
      "FortiGate",
      "Palo Alto",
    ],
  },
  {
    title: "Threat Intelligence",
    skills: [
      "VirusTotal",
      "OpenCTI",
      "IBM X-Force",
      "AbuseIPDB",
      "Shodan",
      "ANY.RUN",
      "Hybrid Analysis",
      "CyberChef",
    ],
  },
  {
    title: "Operating Systems & Lab",
    skills: [
      "Windows 11",
      "Ubuntu Linux",
      "Kali Linux",
      "PowerShell",
      "VMware Workstation Pro",
      "SSH",
    ],
  },
  {
    title: "Frameworks & Methodologies",
    skills: [
      "MITRE ATT&CK",
      "NIST CSF",
      "Cyber Kill Chain",
      "Incident Response",
      "Threat Hunting",
      "Root Cause Analysis",
    ],
  },
];

const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  "ISC2 Certified in Cybersecurity (CC)",
  "Cisco Introduction to Cybersecurity",
  "Fortinet NSE 1 & NSE 2",
  "Palo Alto Networks Certified Cybersecurity Practitioner",
];

const technicalProjects = [
  {
    category: "Detection Engineering",
    title: "Custom Wazuh Detection Rules",
    description:
      "Developed and validated custom Wazuh rules detecting PowerShell abuse, Defender tampering, brute-force attempts, registry persistence, scheduled tasks, and system discovery.",
    tags: ["Wazuh XML", "Sysmon", "MITRE ATT&CK"],
  },
  {
    category: "Threat Simulation",
    title: "MITRE ATT&CK Detection Validation",
    description:
      "Executed controlled security simulations mapped to MITRE ATT&CK techniques, validating detection logic and documenting alert evidence through Wazuh.",
    tags: [
      "T1562.001",
      "T1110",
      "T1053.005",
      "T1547.001",
      "T1105",
      "T1082",
      "T1016",
      "T1057",
    ],
    link:
      "https://github.com/jiraviana/Enterprise-SOC-Homelab/tree/main/attack-simulations",
  },
  {
    category: "Network Security",
    title: "Suricata IDS Integration",
    description:
      "Configured Suricata IDS on Kali Linux, tested custom network detection rules, and validated security alerts through the Wazuh dashboard.",
    tags: ["Suricata", "Network IDS", "Wazuh"],
  },
  {
    category: "Endpoint Security",
    title: "Windows Endpoint Monitoring",
    description:
      "Configured Windows Event Log collection, Sysmon telemetry, Microsoft Defender integration, and File Integrity Monitoring to improve endpoint visibility.",
    tags: ["Windows Logs", "Sysmon", "Defender"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#334E68]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937]">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold text-[#334E68]"
          >
            JV.
          </a>

          <div className="flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-gray-600 sm:gap-x-5 sm:gap-y-3 sm:text-sm">
            <a href="#about" className="hover:text-[#334E68]">
              About
            </a>
            <a href="#experience" className="hover:text-[#334E68]">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#334E68]">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#334E68]">
              Projects
            </a>
            <a href="#certifications" className="hover:text-[#334E68]">
              Certifications
            </a>
            <a href="#contact" className="hover:text-[#334E68]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#334E68]">
          Cybersecurity Professional
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <h2 className="max-w-4xl text-lg font-medium leading-relaxed text-[#334E68] md:text-xl">
          {profile.title}
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-[#334E68] px-6 py-3 font-medium text-white transition hover:bg-[#243B53]"
          >
            Explore My Work →
          </a>

          <a
            href="/Jira-Mae-Viana-Resume.pdf"
            download="Jira-Mae-Viana-Resume.pdf"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-[#F5F6F8]"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="mt-14 grid max-w-3xl gap-5 border-t border-gray-200 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-[#334E68]">
              3+ Years
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Cybersecurity Experience
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#334E68]">
              60+
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Daily Escalated Incidents Investigated
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#334E68]">
              200+
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Daily Alerts Monitored in L1 Operations
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#F5F6F8] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Introduction"
            title="About Me"
          />

          <div className="max-w-4xl space-y-5 leading-8 text-gray-600">
            <p>
              I am a cybersecurity professional with experience
              across MSSP and enterprise client environments,
              progressing from L1 SOC Analyst to Senior SOC Analyst,
              SOC Team Leader, and Incident Responder.
            </p>

            <p>
              My work focuses on investigating security incidents,
              correlating telemetry, analyzing attack behavior,
              identifying root causes, coordinating containment
              and remediation, and improving SOC processes.
            </p>

            <p>
              Alongside my professional experience, I am building
              an Enterprise SOC Home Lab using Wazuh SIEM to
              strengthen my skills in SIEM administration,
              detection engineering, threat hunting, and
              security monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20"
      >
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          description="My experience across security operations, incident response, SOC leadership, and IT support."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {job.role}
                  </h3>

                  <p className="mt-1 font-medium text-[#334E68]">
                    {job.company}
                    {job.location && ` — ${job.location}`}
                  </p>

                  {job.client && (
                    <p className="mt-1 text-sm text-gray-500">
                      {job.client}
                    </p>
                  )}
                </div>

                <span className="rounded-md bg-[#DCE5ED] px-3 py-2 text-xs font-medium text-[#334E68]">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 bg-[#F5F6F8] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Skills & Security Platforms"
            description="Security tools, platforms, technologies, and methodologies from my professional experience and hands-on lab."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="mb-5 text-lg font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#F5F6F8] px-3 py-2 text-xs text-[#334E68]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20"
      >
        <SectionHeading
          eyebrow="Hands-On Cybersecurity"
          title="Featured Projects"
          description="Security engineering projects, detection development, and technical investigations documented through my Enterprise SOC Home Lab."
        />

        {/* Main SOC Lab Project */}
        <div className="mb-10 rounded-2xl border border-gray-200 bg-[#F5F6F8] p-7 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#334E68]">
            Flagship Project · 2026 – Present
          </p>

          <h3 className="text-2xl font-bold md:text-3xl">
            Enterprise SOC Home Lab
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-gray-600">
            Designed and deployed a multi-endpoint Security
            Operations Center environment using Wazuh SIEM 4.14.x,
            Ubuntu Server, Windows 11, Kali Linux, Sysmon,
            Suricata IDS, Microsoft Defender, and VirusTotal.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Wazuh SIEM",
              "VMware",
              "Ubuntu Server",
              "Windows 11",
              "Kali Linux",
              "Sysmon",
              "Suricata",
              "MITRE ATT&CK",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#DCE5ED] bg-white px-3 py-2 text-xs text-[#334E68]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/jiraviana/Enterprise-SOC-Homelab"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-[#334E68] px-6 py-3 font-medium text-white transition hover:bg-[#243B53]"
          >
            Explore Full Project ↗
          </a>

          
{/* Project Evidence Gallery */}
<div className="mt-10">
  <h4 className="mb-3 text-xl font-semibold text-[#1F2937]">
    Project Evidence Gallery
  </h4>

  <p className="mb-6 max-w-3xl text-sm leading-7 text-gray-600">
    Technical evidence from my Enterprise SOC Home Lab,
    including SIEM architecture, centralized monitoring,
    and Suricata IDS network detection validation.
    Click an image to view it in full size.
  </p>

  <div className="grid gap-5 md:grid-cols-2">
    {[
      {
        title: "SOC Lab Architecture",
        description: "Multi-endpoint Wazuh SIEM environment",
        image: "/projects/soc-lab-architecture.jpeg",
      },
      {
        title: "Wazuh SIEM Dashboard",
        description: "Centralized security monitoring",
        image: "/projects/wazuh-dashboard.jpeg",
      },
      {
        title: "Suricata IDS Detection",
        description: "Network alert validation and investigation",
        image: "/projects/suricata-detection.jpeg",
      },
{
  title: "Defender Tampering — T1562.001",
  description: "PowerShell-based Defender tampering detection | Wazuh Rule 100109",
  image: "/projects/defender-tampering.jpeg",
},

    ].map((item) => (
      <a
        key={item.title}
        href={item.image}
        target="_blank"
        rel="noopener noreferrer"
        className="group overflow-hidden rounded-xl border border-[#DCE5ED] bg-white transition hover:border-[#334E68] hover:shadow-md"
      >
        <div className="aspect-video overflow-hidden bg-[#F5F6F8]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="border-t border-[#DCE5ED] p-4">
          <h5 className="text-sm font-semibold text-[#1F2937]">
            {item.title}
          </h5>

          <p className="mt-1 text-xs text-gray-600">
            {item.description}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>

</div> {/* Closes the main SOC Lab project container */}

{/* Detection Engineering Summary */}
<div className="mb-10 rounded-xl border border-[#DCE5ED] bg-white p-6 md:p-8">
  <h4 className="mb-3 text-xl font-semibold text-[#1F2937]">
    Detection Engineering & MITRE ATT&CK
  </h4>

  <p className="mb-5 text-sm leading-7 text-gray-600">
    Developed and validated custom Wazuh detection rules
    through controlled attack simulations in my home SOC lab.
    Investigated generated alerts, reviewed endpoint telemetry,
    and mapped detection scenarios to MITRE ATT&CK techniques.
  </p>

  <div className="flex flex-wrap gap-2">
    {[
      "T1562.001",
      "T1110",
      "T1053.005",
      "T1547.001",
      "T1105",
      "T1082",
      "T1016",
      "T1057",
    ].map((technique) => (
      <span
        key={technique}
        className="rounded-full border border-[#DCE5ED] bg-[#F5F6F8] px-3 py-1.5 text-xs font-medium text-[#334E68]"
      >
        {technique}
      </span>
    ))}
  </div>

  <a
    href="https://github.com/jiraviana/Enterprise-SOC-Homelab/tree/main/attack-simulations"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex text-sm font-semibold text-[#334E68] hover:underline"
  >
    Explore Detection Case Studies ↗
  </a>
</div>

        {/* Technical Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {technicalProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-gray-200 bg-white p-7 transition hover:border-[#334E68] hover:shadow-md"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#334E68]">
                {project.category}
              </p>

              <h3 className="mb-4 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#F5F6F8] px-3 py-2 text-xs text-[#334E68]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-[#334E68] hover:underline"
                >
                  View Case Studies ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="scroll-mt-24 bg-[#F5F6F8] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Professional Development"
            title="Certifications"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-lg border border-gray-200 bg-white p-5 font-medium"
              >
                <span className="mr-3 text-[#334E68]">
                  ✓
                </span>
                {cert}
              </div>
            ))}

            <div className="rounded-lg border border-[#DCE5ED] bg-white p-5 font-medium">
              CompTIA Security+
              <span className="ml-2 text-sm text-gray-500">
                — In Progress
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20"
      >
        <SectionHeading
          eyebrow="Connect"
          title="Get In Touch"
          description="Open to cybersecurity opportunities, professional networking, and discussions about security operations and incident response."
        />

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-[#334E68] px-6 py-3 font-medium text-white hover:bg-[#243B53]"
          >
            Email Me
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            LinkedIn ↗
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
