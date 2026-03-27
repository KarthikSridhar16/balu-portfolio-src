// ─────────────────────────────────────────────────────────────────────────────
// CLIENT DATA — edit everything here, no need to touch any component files.
// ─────────────────────────────────────────────────────────────────────────────

export const clientData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name:         'Balu R',
  title:        'Data Engineer',
  subtitle:     'Python & SQL',
  tagline:      'Building resilient ETL pipelines, optimising SQL at scale, and turning raw data into reliable production systems.',
  availability: 'Open to Opportunities',

  // ── Contact ───────────────────────────────────────────────────────────────
  email:    'balu.ravipk@gmail.com',
  phone:    '9585998379',
  location: 'Alandur, Chennai',
  linkedin: 'https://linkedin.com/in/balu-r-931ba223a/',
  github:   '#',

  // ── About paragraph ───────────────────────────────────────────────────────
  about:
    'Python & SQL engineer with 1.5+ years of hands-on experience across ETL pipelines, ' +
    'production support, and backend data systems. Cut SQL execution times by 30%, maintained ' +
    '99% uptime on production applications, and automated workflows that save hours every week. ' +
    'Oracle Cloud certified with an MSc in Data Science — I bring both analytical depth and ' +
    'engineering discipline to every data challenge.',

  // ── Key stats (shown in About bento cards) ────────────────────────────────
  stats: [
    { value: '1.5+', label: 'Years Exp'      },
    { value: '30%',  label: 'SQL Speedup'    },
    { value: '99%',  label: 'Uptime SLA'     },
    { value: '4+',   label: 'Certifications' },
  ],

  // ── Skills (4 categories) ─────────────────────────────────────────────────
  // accent: card icon/glow colour  |  iconName: key in src/components/ui/Ico.jsx
  skills: [
    {
      category: 'Python',
      iconName:  'python',
      accent:    '#7c3aed',
      items: ['Pandas', 'NumPy', 'Data Cleaning', 'Data Transformation', 'CSV / Excel / JSON'],
    },
    {
      category: 'SQL & Databases',
      iconName:  'sql',
      accent:    '#22d3ee',
      items: ['Joins & Subqueries', 'Window Functions', 'Indexing', 'Stored Procedures', 'Snowflake'],
    },
    {
      category: 'ETL & Data Eng',
      iconName:  'data',
      accent:    '#e879f9',
      items: ['Data Extraction', 'Transformation', 'Loading', 'Data Validation', 'Data Pipelines'],
    },
    {
      category: 'Tools & Platforms',
      iconName:  'tools',
      accent:    '#a855f7',
      items: ['Power BI', 'Tableau', 'Matplotlib', 'Linux / Cron', 'Excel Advanced', 'REST APIs'],
    },
  ],

  // ── Marquee pill items ────────────────────────────────────────────────────
  marqueeItems: [
    'Python', 'Pandas', 'NumPy', 'SQL', 'Snowflake', 'ETL', 'Power BI',
    'Tableau', 'Matplotlib', 'Oracle Cloud', 'Linux', 'REST APIs',
    'Scikit-learn', 'Streamlit', 'MySQL', 'Data Pipelines', 'Data Validation',
    'SMTP', 'Tkinter',
  ],

  // ── Work experience ───────────────────────────────────────────────────────
  experience: [
    {
      company:     'Terafence Private Limited',
      role:        'Production Support Analyst — Python & SQL',
      period:      'Nov 2024 – Present',
      location:    'Chennai',
      description: [
        'Supported and maintained large-scale database-driven backend applications in production.',
        'Optimised complex SQL queries reducing execution time by up to 30%, improving system throughput.',
        'Analysed and resolved critical production incidents, maintaining 99% application uptime.',
        'Developed Python automation scripts for data validation, reconciliation, and automated reporting.',
        'Worked on REST API issue analysis and backend debugging across microservices.',
        'Collaborated with Dev, QA, and DevOps teams for release deployments and hotfix rollouts.',
      ],
    },
    {
      company:     'Ukthait Gateway',
      role:        'Data Analyst',
      period:      'May 2024 – Oct 2024',
      location:    'Chennai',
      description: [
        'Performed end-to-end ETL processes — data extraction from multiple heterogeneous sources.',
        'Cleaned, validated, and transformed raw datasets using Pandas and SQL for data quality.',
        'Designed and optimised SQL queries for business reporting and analytical dashboards.',
        'Built interactive visualisations using Tableau and Matplotlib to communicate insights.',
        'Automated repetitive reporting tasks, reducing manual effort by 20%.',
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  // iconName: key in src/components/ui/Ico.jsx
  projects: [
    {
      name:        'E-Prescription System',
      tagline:     'Desktop Healthcare App',
      description:
        'Full-featured desktop app using Python + Tkinter GUI with MySQL backend. Implemented RBAC login, ' +
        'patient record management, digital prescriptions, and SMTP-based automated notifications.',
      tech:      ['Python', 'Tkinter', 'MySQL', 'SMTP', 'RBAC'],
      accent:    '#7c3aed',
      iconName:  'analytics',
      liveUrl:   '#',
      codeUrl:   '#',
    },
    {
      name:        'Migraine Headache Prediction',
      tagline:     'ML Model + Streamlit App',
      description:
        'Classification models using Scikit-learn to predict migraine likelihood from patient data. ' +
        'Deployed as an interactive Streamlit web app for real-time inference.',
      tech:      ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      accent:    '#22d3ee',
      iconName:  'ml',
      liveUrl:   '#',
      codeUrl:   '#',
    },
    {
      name:        'Heart Disease Prediction',
      tagline:     'Clinical Risk Modelling',
      description:
        'ML pipelines to predict heart disease risk with improved accuracy through feature engineering, ' +
        'preprocessing, and ensemble methods. Comprehensive feature importance visualisation.',
      tech:      ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      accent:    '#e879f9',
      iconName:  'chart',
      liveUrl:   '#',
      codeUrl:   '#',
    },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      institution: 'SRM Institute of Science and Technology',
      degree:      'MSc — Data Science',
      period:      '2021 – 2023',
      grade:       '8.31',
    },
    {
      institution: 'KMG College of Arts and Science',
      degree:      'BCA — Computer Applications',
      period:      '2018 – 2021',
      grade:       '8.0',
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    { name: 'IBM Python Certification',                      issuer: 'IBM'    },
    { name: 'Oracle Cloud Infrastructure for Data Science',  issuer: 'Oracle' },
    { name: 'Oracle Cloud Database Services',                issuer: 'Oracle', year: '2025' },
    { name: 'Mastering Oracle Database & SQL Server',        issuer: 'Udemy'  },
  ],
}
