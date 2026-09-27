import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Database,
  BarChart3,
  Code2,
  Layers3,
  FileSpreadsheet,
  BrainCircuit,
  ExternalLink,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Terminal,
  TrendingUp,
} from "lucide-react";

const roles = ["Data Analyst", "Analytics Enthusiast", "AI & Data Explorer"];

const projects = [
  {
    number: "01",
    featured: true,
    title: "HR Employee Attrition Analysis",
    category: "Python · SQL · Power BI",
    description:
      "Analyzed employee attrition patterns to understand workforce trends, employee characteristics and factors associated with employee turnover.",
    bullets: [
      "Analyzed 1,470 employee records to identify attrition patterns across departments, job roles, overtime, salary, and other workforce factors.",
      "Used SQL and EDA to quantify attrition, identifying a 16.12% overall attrition rate and 20% attrition in Sales.",
      "Found that employees working overtime were 3x more likely to leave, while employees who left earned approximately ₹2,000 less on average.",
      "Built a 6-visual Power BI dashboard to track attrition KPIs and highlight overtime and compensation as key retention factors.",
    ],
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    link: "[https://github.com/poojitha0101/hr-attrition-analysis](https://github.com/poojitha0101/hr-attrition-analysis)",
  },
  {
    number: "02",
    featured: true,
    title: "Telco Customer Churn Analysis",
    category: "Python · Pandas · Power BI",
    description:
      "Analyzed customer churn data to identify customer segments, behavioral patterns and factors associated with customer retention and churn.",
    bullets: [
      "Analyzed 7,043 customer records to identify churn patterns across contract type, pricing, and customer segments.",
      "Identified a 26% overall churn rate, with month-to-month customers accounting for 1,655 churn cases.",
      "Compared customer billing patterns and found average monthly charges of ₹74 for churned customers versus ₹61 for retained customers.",
      "Built a 2-page interactive Power BI drill-through dashboard and developed a tiered pricing and retention recommendation for higher-risk customer segments.",
    ],
    tags: ["Python", "Pandas", "Power BI", "Analytics"],
    link: "[https://github.com/poojitha0101/telco-churn-analysis](https://github.com/poojitha0101/telco-churn-analysis)",
  },
  {
    number: "03",
    featured: true,
    title: "E-Commerce SQL Business Analysis",
    category: "SQL · Excel · Business Analysis",
    description:
      "Used SQL to analyze e-commerce data and answer business-focused questions around sales, customers, products and performance trends.",
    bullets: [
      "Designed a 3-table relational database and wrote 30+ SQL queries to analyze sales, customers, orders, and business performance.",
      "Applied JOINs, CTEs, Window Functions, GROUP BY, HAVING, and Subqueries to answer customer and sales-related business questions.",
      "Identified top-revenue customers, repeat buyers, and city-wise sales patterns to derive customer and sales insights.",
      "Prepared Excel MIS reports using Pivot Tables to analyze sales performance and identify high-value customer segments.",
    ],
    tags: ["SQL", "Excel", "Business Analysis"],
    link: "[https://github.com/poojitha0101/ecommerce-sql-analysis](https://github.com/poojitha0101/ecommerce-sql-analysis)",
  },
  {
    number: "04",
    featured: false,
    title: "PySpark Big Data Analytics Lab",
    category: "PySpark · Databricks · SQL",
    description:
      "A hands-on analytics lab focused on learning distributed data processing with PySpark and Databricks.",
    bullets: [
      "Explored PySpark DataFrame operations and distributed data processing concepts.",
      "Practiced transforming and analyzing larger datasets using Spark-based workflows.",
      "Worked with Databricks notebooks for hands-on PySpark and SQL practice.",
      "Explored scalable data workflow concepts including structured data processing and pipeline stages.",
    ],
    tags: ["PySpark", "Databricks", "SQL"],
    link: "[https://github.com/poojitha0101/pyspark-bigdata-analytics-lab](https://github.com/poojitha0101/pyspark-bigdata-analytics-lab)",
  },
  {
    number: "05",
    featured: false,
    title: "Automated Job Tracking Workflow",
    category: "Python · Automation · Selenium",
    description:
      "Explored a workflow automation approach for repetitive job-search tracking activities using Python and browser automation concepts.",
    bullets: [
      "Explored browser automation concepts for repetitive job-search activities.",
      "Worked with Python-based automation and Selenium workflow concepts.",
      "Focused on reducing repetitive manual tracking activities through automation.",
    ],
    tags: ["Python", "Automation", "Selenium"],
    link: "[https://github.com/poojitha0101/automated-job-tracking-workflow](https://github.com/poojitha0101/automated-job-tracking-workflow)",
  },
];

const skills = [
  {
    icon: Database,
    title: "Data Analysis",
    items: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Data Validation",
      "Trend Analysis",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Dashboard Development",
      "Data Visualization",
      "KPI Reporting",
      "MIS Reporting",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & Reporting",
    items: [
      "Advanced Excel",
      "Pivot Tables",
      "XLOOKUP",
      "Data Reporting",
      "MIS Reporting",
    ],
  },
  {
    icon: Layers3,
    title: "Data Engineering",
    developing: true,
    items: ["Azure", "PySpark", "Databricks", "ETL", "Data Pipelines"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    items: [
      "AI Fundamentals",
      "Generative AI",
      "Prompt Engineering",
      "AI-assisted Productivity",
    ],
  },
  {
    icon: Code2,
    title: "Tools & Automation",
    items: [
      "Python Automation",
      "Git",
      "GitHub",
      "VS Code",
      "Microsoft 365",
    ],
  },
];

const certifications = [
  ["IBM SkillsBuild", "Artificial Intelligence Fundamentals"],
  ["IBM SkillsBuild", "Getting Started with Generative AI"],
  ["IBM SkillsBuild", "Craft Precise Prompts for AI Models"],
  ["Amazon Web Services", "AWS Data Analytics Fundamentals"],
  ["Forage", "GenAI Powered Data Analytics Job Simulation"],
  ["Forage", "Data Science Job Simulation"],
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand">
          Poojitha<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Get in touch <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="availability">
              <span className="pulse-dot" />
              Open to opportunities
            </div>

            <p className="eyebrow">Hello there, welcome to my portfolio.</p>

            <h1>
              I’m Poojitha <span>Nallamaru.</span>
            </h1>

            <div className="role-line">
              <div className="role-rotator">
                <span key={roleIndex} className="role-fade">
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            <p className="hero-description">
              Turning raw data into meaningful insights, dashboards and
              practical data solutions — while building toward scalable data
              engineering and AI workflows.
            </p>

            <div className="hero-tags">
              <span>SQL</span>
              <span>Python</span>
              <span>Power BI</span>
              <span>Excel</span>
              <span>PySpark</span>
              <span>Databricks</span>
              <span>Azure</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View projects <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="button button-secondary">
                Contact me
              </a>
            </div>

            <div className="social-links">
              <a
                href="[https://github.com/poojitha0101](https://github.com/poojitha0101)"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="[https://www.linkedin.com/in/poojitha-n-541a58353](https://www.linkedin.com/in/poojitha-n-541a58353)"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a href="mailto:poojithanallamaru@gmail.com">Email</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <span>About Me</span>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="section-kicker">
                A practical approach to data, technology and business
                problems.
              </p>

              <h2>
                Turning data into something
                <span> people can actually use.</span>
              </h2>

              <p>
                I’m Poojitha Nallamaru, a data-focused professional building
                practical skills across data analytics, business intelligence,
                reporting and modern data technologies.
              </p>

              <p>
                My core work is centered around SQL, Python, Pandas, Power BI
                and Excel. I use these tools to clean and prepare data,
                perform exploratory analysis, identify trends, create
                dashboards and communicate insights clearly.
              </p>

              <p>
                During my 6-month internship at MS Soft Technologies, I gained
                hands-on exposure to SQL, Python, Excel and Power BI through
                data preparation, analysis, reporting and dashboard
                development.
              </p>

              <p>
                Alongside analytics, I’m actively developing my data
                engineering skills with PySpark, Databricks, Azure, ETL and
                data pipelines. My goal is to understand not only how data is
                analyzed, but also how it is collected, transformed,
                processed and prepared for analytics at scale.
              </p>

              <p>
                I’m also building knowledge around AI and Generative AI,
                exploring how modern AI tools can support analytics,
                automation and practical business workflows.
              </p>

              <div className="about-statement">
                <h3>Beyond the Resume</h3>
                <p>
                  Educational background is only one part of a person’s
                  journey. Skills, curiosity, dedication and the willingness
                  to learn often tell a much bigger story. Many capable
                  people are ready to contribute, work hard and grow when
                  given the right opportunity. I believe in proving my
                  capabilities through the work I do, the skills I build and
                  the value I bring.
                </p>
              </div>
            </div>

            <div className="focus-panel">
              <div className="panel-label">CORE FOCUS</div>

              <div className="focus-item">
                <span>01</span>
                <div>
                  <strong>Data Analytics</strong>
                  <small>SQL · Python · Pandas · EDA</small>
                </div>
              </div>

              <div className="focus-item">
                <span>02</span>
                <div>
                  <strong>Business Intelligence</strong>
                  <small>Power BI · DAX · Excel</small>
                </div>
              </div>

              <div className="focus-item">
                <span>03</span>
                <div>
                  <strong>Data Engineering</strong>
                  <small>PySpark · Databricks · Azure · ETL</small>
                </div>
              </div>

              <div className="focus-item">
                <span>04</span>
                <div>
                  <strong>Data & AI</strong>
                  <small>Generative AI · Automation · AI workflows</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I WORK WITH */}
        <section className="section capability-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <span>What I Work With</span>
          </div>

          <div className="section-intro">
            <h2>
              From analysis to
              <span> scalable data workflows.</span>
            </h2>
            <p>
              A growing technical toolkit covering analytics, visualization,
              data preparation and modern data platforms.
            </p>
          </div>

          <div className="capability-grid">
            <div className="capability-card blue-card">
              <Database size={25} />
              <h3>Analyze</h3>
              <p>
                Extract, clean and analyze data to identify patterns, trends
                and useful business insights.
              </p>
              <span>SQL · Python · Pandas · NumPy</span>
            </div>

            <div className="capability-card purple-card">
              <BarChart3 size={25} />
              <h3>Visualize</h3>
              <p>
                Turn analytical findings into clear dashboards, reports and
                visual stories.
              </p>
              <span>Power BI · DAX · Power Query · Excel</span>
            </div>

            <div className="capability-card cyan-card">
              <Layers3 size={25} />
              <h3>Prepare</h3>
              <p>
                Clean, validate and transform raw datasets into reliable
                analytical data.
              </p>
              <span>Cleaning · Validation · Transformation · ETL</span>
            </div>

            <div className="capability-card coral-card">
              <Terminal size={25} />
              <h3>Scale</h3>
              <p>
                Build hands-on understanding of scalable data processing and
                modern cloud data platforms.
              </p>
              <span>PySpark · Databricks · Azure · Pipelines</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <span>Skills</span>
          </div>

          <div className="section-intro">
            <h2>
              A focused
              <span> technical toolkit.</span>
            </h2>
            <p>
              Tools and technologies I use across analysis, reporting,
              visualization and data workflows.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                  <div className="skill-title-row">
                    <h3>{skill.title}</h3>
                    {skill.developing && (
                      <span className="developing">Developing</span>
                    )}
                  </div>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <span>Experience</span>
          </div>

          <div className="experience-header">
            <div>
              <p className="section-kicker">INTERNSHIP</p>
              <h2>Hands-on analytics experience.</h2>
              <p>
                Practical exposure to data analysis, reporting and dashboard
                development.
              </p>
            </div>

            <div className="experience-date">
              <CalendarDays size={17} />
              Jan 2026 — Jun 2026
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-company">
              <div className="company-mark">MS</div>

              <div>
                <h3>Data Analytics Intern</h3>
                <p>MS Soft Technologies · Hyderabad</p>
              </div>
            </div>

            <div className="experience-points">
              <div>
                <CheckCircle2 size={18} />
                <p>
                  Analyzed and prepared 7,000+ records using SQL, Python, and
                  Excel, performing data cleaning, validation, transformation,
                  and EDA to improve data quality and consistency.
                </p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>
                  Developed interactive Power BI dashboards using DAX and Power
                  Query and prepared Excel MIS reports to track KPIs, business
                  trends, and key metrics.
                </p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>
                  Performed trend analysis, segmentation, and root cause
                  analysis using SQL, Python, and Excel to identify patterns,
                  anomalies, and key factors.
                </p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>
                  Worked on 3 end-to-end analytics projects covering HR
                  Attrition, Telco Customer Churn, and E-Commerce Sales,
                  presenting findings and recommendations to support
                  data-driven decisions.
                </p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>
                  Prepared Excel-based reports and supported data-driven
                  reporting workflows.
                </p>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <p>
                  Worked with datasets to identify patterns and communicate
                  findings through visualizations and reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <span>Projects</span>
          </div>

          <div className="section-intro projects-intro">
            <div>
              <h2>
                Things I’ve
                <span> built & analyzed.</span>
              </h2>
              <p>
                A selection of analytics, business intelligence and modern
                data projects demonstrating practical application of my
                technical skills.
              </p>
            </div>
          </div>

          <div className="featured-projects">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <article className="project-card featured" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">FEATURED PROJECT</span>
                  </div>

                  <div className="project-content">
                    <p className="project-category">{project.category}</p>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-bullets">
                      {project.bullets.map((bullet) => (
                        <div key={bullet}>
                          <span />
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="project-bottom">
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        View on GitHub <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="more-work-heading">
            <span>MORE WORK</span>
            <div />
          </div>

          <div className="supporting-projects">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <article className="support-project" key={project.number}>
                  <div className="support-number">{project.number}</div>

                  <div className="support-content">
                    <p className="project-category">{project.category}</p>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="support-link"
                  >
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="section workflow-section">
          <div className="section-heading">
            <span className="section-number">06</span>
            <span>Workflow</span>
          </div>

          <div className="section-intro">
            <h2>
              From raw data to
              <span> actionable insight.</span>
            </h2>
            <p>
              A simple approach I use when working through analytical
              problems.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-step">
              <span>01</span>
              <h3>Understand</h3>
              <p>Define the question, context and data requirements.</p>
            </div>

            <div className="workflow-step">
              <span>02</span>
              <h3>Prepare</h3>
              <p>Clean, validate and transform the available data.</p>
            </div>

            <div className="workflow-step">
              <span>03</span>
              <h3>Analyze</h3>
              <p>Use SQL and Python to explore patterns and trends.</p>
            </div>

            <div className="workflow-step">
              <span>04</span>
              <h3>Communicate</h3>
              <p>Present findings through dashboards and clear reporting.</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-heading">
            <span className="section-number">07</span>
            <span>Education</span>
          </div>

          <div className="section-intro">
            <h2>
              Academic
              <span> foundation.</span>
            </h2>
            <p>
              A commerce and computer applications foundation combined with
              practical analytics training.
            </p>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <Database size={22} />
              </div>

              <div className="education-info">
                <span className="education-label">BACHELOR’S DEGREE</span>
                <h3>B.Com (Computer Applications)</h3>
                <p>Yogi Vemana University</p>

                <div className="education-meta">
                  <span>
                    <CalendarDays size={15} />
                    2022 – 2025
                  </span>

                  <strong>CGPA: 7.83</strong>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-icon purple-icon">
                <FileSpreadsheet size={22} />
              </div>

              <div className="education-info">
                <span className="education-label">INTERMEDIATE</span>
                <h3>Intermediate</h3>
                <p>Medha Junior College</p>

                <div className="education-meta">
                  <span>2020 – 2022</span>
                  <strong>CGPA: 8.10</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section">
          <div className="section-heading">
            <span className="section-number">08</span>
            <span>Certifications</span>
          </div>

          <div className="section-intro">
            <h2>
              Continuous
              <span> learning.</span>
            </h2>
            <p>Credentials covering AI, analytics and data.</p>
          </div>

          <div className="certifications-grid">
            {certifications.map(([issuer, title], index) => (
              <div className="cert-card" key={title}>
                <div className="cert-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="cert-content">
                  <span>{issuer}</span>
                  <h3>{title}</h3>
                </div>

                <CheckCircle2 className="cert-check" size={19} />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-content">
              <div className="section-heading">
                <span className="section-number">09</span>
                <span>Contact</span>
              </div>

              <h2>
                Let’s connect<span>.</span>
              </h2>

              <p>
                I’m currently looking for opportunities where I can contribute
                across Data Analytics, BI, Reporting, SQL, Data Engineering
                and Data & AI roles while continuing to grow technically.
              </p>

              <div className="contact-links">
                <a href="mailto:poojithanallamaru@gmail.com">
                  <div className="contact-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>poojithanallamaru@gmail.com</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="[https://www.linkedin.com/in/poojitha-n-541a58353](https://www.linkedin.com/in/poojitha-n-541a58353)"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon purple-contact">
                    <ArrowUpRight size={19} />
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>Poojitha Nallamaru</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="[https://github.com/poojitha0101](https://github.com/poojitha0101)"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon cyan-contact">
                    <Code2 size={19} />
                  </div>

                  <div>
                    <span>GitHub</span>
                    <strong>poojitha0101</strong>
                  </div>

                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="contact-side">
              <div className="contact-orb">
                <TrendingUp size={38} />
              </div>

              <p>DATA</p>
              <strong>INSIGHT</strong>

              <span>
                Analysis
                <br />
                → Decisions
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Poojitha Nallamaru</strong>
          <span>Data Analytics · Data Engineering · Data & AI</span>
        </div>

        <span>© 2026 Poojitha Nallamaru</span>
      </footer>
    </div>
  );
}

export default App;