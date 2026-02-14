/**
 * Central registry mapping URL slugs → service metadata.
 * Used by the dynamic [slug] route for SSG, SEO metadata, and JSON-LD.
 */

export interface ServiceMeta {
  /** Display name shown in metadata & breadcrumbs */
  name: string;
  /** Short description for meta tags */
  description: string;
  /** Component file name (without extension) inside app/services/ */
  fileName: string;
  /** SEO keywords (comma-separated) */
  keywords: string;
}

export const serviceRegistry: Record<string, ServiceMeta> = {
  /* ── Start Business ── */
  "private-limited-company": {
    name: "Private Limited Company",
    description: "Start your entrepreneurial journey with India's most preferred business structure. Get your Pvt Ltd company registered in just 7-10 working days.",
    fileName: "PrivateLimitedCompany",
    keywords: "private limited company, pvt ltd registration, company incorporation, startup registration",
  },
  "llp-registration": {
    name: "Limited Liability Partnership",
    description: "Combine the benefits of partnership with limited liability protection. Perfect for professionals, consultants, and small businesses.",
    fileName: "LLPRegistration",
    keywords: "LLP registration, limited liability partnership, LLP incorporation",
  },
  "one-person-company": {
    name: "One Person Company",
    description: "Start your business as a single entrepreneur with the benefits of a private limited company. Full control with limited liability.",
    fileName: "OnePersonCompany",
    keywords: "OPC registration, one person company, single director company",
  },
  "section-8-company": {
    name: "Section 8 Company",
    description: "Establish a non-profit organization with charitable or social objectives. Perfect for NGOs, foundations, and social enterprises.",
    fileName: "Section8Company",
    keywords: "section 8 company, NGO registration, non-profit company",
  },
  "nidhi-company": {
    name: "Nidhi Company",
    description: "Start your own savings and lending company. A mutual benefit society to cultivate thrift and savings among members.",
    fileName: "NidhiCompany",
    keywords: "nidhi company registration, mutual benefit society, savings company",
  },
  "producer-company": {
    name: "Producer Company",
    description: "Organize producers for collective benefit. Perfect for farmers, artisans, and cooperatives seeking corporate structure.",
    fileName: "ProducerCompany",
    keywords: "producer company, farmer company, cooperative registration",
  },
  "partnership-firm": {
    name: "Partnership Firm",
    description: "Start a business with partners sharing profits and responsibilities. Simple structure for collaborative ventures.",
    fileName: "PartnershipFirm",
    keywords: "partnership firm registration, partnership deed, business partnership",
  },
  "sole-proprietorship": {
    name: "Sole Proprietorship",
    description: "The simplest way to start your business. Complete ownership and control with minimal compliance requirements.",
    fileName: "SoleProprietorship",
    keywords: "sole proprietorship, proprietorship registration, individual business",
  },
  "indian-subsidiary": {
    name: "Indian Subsidiary",
    description: "Establish your foreign company's presence in India. The gateway to tap into India's massive market potential.",
    fileName: "IndianSubsidiary",
    keywords: "Indian subsidiary, foreign company India, WOS registration",
  },

  /* ── Tax Registrations ── */
  "gst-registration": {
    name: "GST Registration",
    description: "Get your business GST compliant with hassle-free registration. Essential for all businesses with turnover above threshold limits.",
    fileName: "GSTRegistration",
    keywords: "GST registration, GSTIN, goods and services tax, GST number",
  },
  "tan-registration": {
    name: "TAN Registration",
    description: "Tax Deduction and Collection Account Number for businesses required to deduct TDS. Essential for salary payments and vendor payments.",
    fileName: "TANRegistration",
    keywords: "TAN registration, tax deduction account number, TDS",
  },
  "professional-tax": {
    name: "Professional Tax",
    description: "State-level tax registration for employers and professionals. Mandatory for businesses with employees in most Indian states.",
    fileName: "ProfessionalTax",
    keywords: "professional tax, PT registration, state tax, employer tax",
  },

  /* ── Government Licenses ── */
  "msme-udyam": {
    name: "MSME/Udyam Registration",
    description: "Unlock government benefits for your small business. Free registration with lifetime validity and multiple advantages.",
    fileName: "MSMEUdyam",
    keywords: "MSME registration, Udyam registration, small business benefits",
  },
  "fssai-license": {
    name: "FSSAI License",
    description: "Essential license for food business operators. Ensure food safety compliance and build customer trust.",
    fileName: "FSSAILicense",
    keywords: "FSSAI license, food license, food safety, FSSAI registration",
  },
  "import-export-code": {
    name: "Import Export Code",
    description: "Gateway to international trade. Mandatory license for importing or exporting goods and services from India.",
    fileName: "ImportExportCode",
    keywords: "IEC code, import export code, DGFT, international trade license",
  },

  /* ── Intellectual Property ── */
  "trademark": {
    name: "Trademark Registration",
    description: "Protect your brand identity. Exclusive rights to your name, logo, and tagline for 10 years with unlimited renewals.",
    fileName: "Trademark",
    keywords: "trademark registration, brand protection, TM filing, logo registration",
  },
  "copyright": {
    name: "Copyright Registration",
    description: "Protect your creative works. Legal protection for literary, artistic, musical, and other original creations.",
    fileName: "Copyright",
    keywords: "copyright registration, creative works protection, intellectual property",
  },
  "patent": {
    name: "Patent Registration",
    description: "Protect your inventions and innovations. Exclusive rights for 20 years to manufacture, use, and sell your patented invention.",
    fileName: "Patent",
    keywords: "patent registration, invention protection, patent filing India",
  },

  /* ── NRI Services ── */
  "pan-for-nri": {
    name: "PAN for NRI",
    description: "Essential identification for financial transactions in India. Quick PAN card for NRIs and foreign citizens.",
    fileName: "PANForNRI",
    keywords: "NRI PAN card, PAN for foreigners, NRI tax ID",
  },
  "nri-company-incorporation": {
    name: "NRI Company Incorporation",
    description: "Start your business in India as an NRI. Full ownership allowed in most sectors with simplified incorporation process.",
    fileName: "NRICompanyIncorporation",
    keywords: "NRI company registration, NRI business India, foreign incorporation",
  },
  "fema-compliance": {
    name: "FEMA Compliance",
    description: "Navigate foreign exchange regulations with ease. Expert assistance for all FEMA compliances and RBI filings.",
    fileName: "FEMACompliance",
    keywords: "FEMA compliance, foreign exchange, RBI filings, FDI compliance",
  },
  "property-management": {
    name: "Property Management",
    description: "Hassle-free management of your Indian properties. Complete solutions from tenant management to legal documentation.",
    fileName: "PropertyManagement",
    keywords: "property management India, NRI property, tenant management",
  },

  /* ── Audits ── */
  "tax-audits": {
    name: "Tax Audits (Income Tax Act)",
    description: "Section 44AB compliance audits by qualified Chartered Accountants. Expert guidance and compliance support.",
    fileName: "TaxAudits",
    keywords: "tax audit, section 44AB, income tax audit, CA audit",
  },
  "statutory-audits": {
    name: "Statutory Audits (Companies Act)",
    description: "Company compliance audits under the Companies Act. Expert guidance and comprehensive audit support.",
    fileName: "StatutoryAudits",
    keywords: "statutory audit, companies act audit, company compliance audit",
  },
  "internal-audits": {
    name: "Internal and Concurrent Audits",
    description: "Process and risk audit services. Expert guidance for internal controls and concurrent audit compliance.",
    fileName: "InternalAudits",
    keywords: "internal audit, concurrent audit, risk audit, process audit",
  },
  "cost-audit": {
    name: "Cost Audit",
    description: "End-to-end cost audit compliance with structured cost records and seamless MCA filings.",
    fileName: "CostAudit",
    keywords: "cost audit, CRA compliance, cost records, MCA filings",
  },

  /* ── Income Tax ── */
  "income-tax-return": {
    name: "Income Tax Return",
    description: "Expert ITR filing for individuals and businesses. Maximize deductions, claim refunds, and stay compliant with tax laws.",
    fileName: "IncomeTaxReturn",
    keywords: "ITR filing, income tax return, tax filing, tax refund",
  },
  "transfer-pricing": {
    name: "Transfer Pricing Reports",
    description: "Cross-border transaction compliance and transfer pricing documentation. Expert guidance and support.",
    fileName: "TransferPricing",
    keywords: "transfer pricing, cross-border transactions, TP report, international tax",
  },
  "tds-returns": {
    name: "TDS Returns",
    description: "Quarterly TDS compliance made easy. Accurate filing, timely submission, and proper TDS certificate generation.",
    fileName: "TDSReturns",
    keywords: "TDS returns, TDS filing, quarterly TDS, TDS compliance",
  },
  "scrutiny-assessments": {
    name: "Scrutiny Assessments",
    description: "Expert representation in income tax scrutiny assessments. Professional guidance and compliance support.",
    fileName: "ScrutinyAssessments",
    keywords: "scrutiny assessment, tax scrutiny, income tax inquiry, tax notice",
  },
  "income-tax-appeals": {
    name: "Income Tax Appeals",
    description: "Expert representation in tax appeals and legal tax disputes. Professional guidance throughout the appellate process.",
    fileName: "IncomeTaxAppeals",
    keywords: "tax appeals, income tax appeal, CIT appeal, ITAT, tax dispute",
  },

  /* ── GST ── */
  "virtual-cfo": {
    name: "Virtual CFO Services",
    description: "Strategic financial leadership without the cost of a full-time CFO. Expert financial oversight and strategic direction for growing businesses.",
    fileName: "VirtualCFO",
    keywords: "virtual CFO, vCFO, outsourced CFO, financial strategy",
  },
  "gst-returns": {
    name: "GST Returns",
    description: "Timely and accurate GST return filing. Stay compliant and maximize your input tax credit with expert assistance.",
    fileName: "GSTReturns",
    keywords: "GST returns, GSTR filing, GST compliance, monthly GST",
  },
  "gst-audits": {
    name: "GST Audits",
    description: "Annual GST audit and reconciliation services. Expert guidance to ensure GST compliance.",
    fileName: "GSTAudits",
    keywords: "GST audit, GSTR-9C, annual GST audit, GST reconciliation",
  },
  "gst-refunds": {
    name: "GST Refunds",
    description: "Claim excess GST paid with expert refund filing assistance. Maximize your eligible refund amount.",
    fileName: "GSTRefunds",
    keywords: "GST refund, excess tax claim, GST refund filing",
  },
  "gst-consultation": {
    name: "GST Consultation",
    description: "Expert GST advisory services for complex tax scenarios. Strategic tax planning and compliance optimization.",
    fileName: "GSTConsultation",
    keywords: "GST consultation, GST advisory, tax advice, GST planning",
  },

  /* ── FDI ── */
  "fdi-filings": {
    name: "FDI Filings with RBI",
    description: "RBI reporting and compliance filings for foreign direct investment. Expert guidance for FDI regulations.",
    fileName: "FDIFilings",
    keywords: "FDI filings, RBI reporting, foreign investment, FC-GPR, FC-TRS",
  },
  "fdi-advisory": {
    name: "FDI Investment Advisory",
    description: "Expert advisory on foreign direct investment rules, sectoral caps, and compliance requirements.",
    fileName: "FDIAdvisory",
    keywords: "FDI advisory, foreign investment rules, sectoral caps, FDI policy",
  },
  "share-transfer-fdi": {
    name: "Share Transfer & RBI Filing",
    description: "Stock transfer compliance and RBI filings for cross-border share transactions.",
    fileName: "ShareTransferFDI",
    keywords: "share transfer, RBI filing, FDI share transfer, stock transfer",
  },

  /* ── Company Law ── */
  "secretarial-services": {
    name: "Secretarial Services",
    description: "Corporate governance and company secretarial services. Board meetings, statutory registers, and ROC filings.",
    fileName: "SecretarialServices",
    keywords: "secretarial services, company secretary, corporate governance, ROC filing",
  },
  "auditing-assurance": {
    name: "Auditing & Assurance",
    description: "Independent assurance that strengthens trust, controls, and decision-making. Comprehensive audit and assurance services.",
    fileName: "AnnualFiling",
    keywords: "auditing, assurance, independent audit, financial audit",
  },
  "mergers-acquisitions": {
    name: "Mergers and Acquisitions",
    description: "Corporate restructuring, M&A advisory and due diligence. Expert guidance for business combinations.",
    fileName: "MergersAcquisitions",
    keywords: "mergers, acquisitions, M&A, corporate restructuring, business combination",
  },
  "esop": {
    name: "Employee Stock Options (ESOP)",
    description: "Design and implement employee stock option plans. Attract and retain talent with equity compensation.",
    fileName: "ESOP",
    keywords: "ESOP, employee stock options, equity compensation, ESOP plan",
  },

  /* ── Reports ── */
  "analytics-bi": {
    name: "Analytics & Business Intelligence",
    description: "Turning financial data into actionable business insights. Data-driven decision making for your business.",
    fileName: "CMAReport",
    keywords: "analytics, business intelligence, financial analytics, MIS reports",
  },
  "project-report": {
    name: "Project Report",
    description: "Comprehensive project reports for bank loans, MSME schemes, and investor presentations. Professionally crafted reports that get approvals.",
    fileName: "ProjectReport",
    keywords: "project report, bank loan report, feasibility report, DPR",
  },
  "business-plan": {
    name: "Business Plan",
    description: "Strategic business plans and roadmaps. Professional business plan preparation for investors and lenders.",
    fileName: "BusinessPlan",
    keywords: "business plan, strategic roadmap, investor pitch, business strategy",
  },
  "business-valuation": {
    name: "Business Valuation",
    description: "Professional company valuation for M&A, fundraising, and compliance. IBBI-registered valuers providing defensible valuations.",
    fileName: "BusinessValuation",
    keywords: "business valuation, company valuation, fair market value, IBBI valuer",
  },
  "due-diligence": {
    name: "Due Diligence",
    description: "Comprehensive financial, legal, and tax due diligence for M&A transactions. Make informed investment decisions.",
    fileName: "DueDiligence",
    keywords: "due diligence, financial due diligence, M&A due diligence, investment analysis",
  },

  /* ── Agreements ── */
  "gift-deed": {
    name: "Gift Deed",
    description: "Legal property transfer through gift deed. Expert drafting and registration assistance.",
    fileName: "GiftDeed",
    keywords: "gift deed, property transfer, gift deed registration",
  },
  "shareholder-agreement": {
    name: "Shareholder Agreement",
    description: "Protect shareholder rights and obligations. Expert drafting of comprehensive shareholder agreements.",
    fileName: "ShareholderAgreement",
    keywords: "shareholder agreement, SHA, shareholder rights, equity agreement",
  },
  "joint-venture-agreement": {
    name: "Joint Venture Agreement",
    description: "Partnership contracts and JV agreements. Expert legal drafting for business collaborations.",
    fileName: "JointVentureAgreement",
    keywords: "joint venture, JV agreement, partnership contract, business collaboration",
  },

  /* ── Funding ── */
  "financial-institution-loans": {
    name: "Loans from Financial Institutions",
    description: "Corporate financing from banks and financial institutions. Expert guidance for loan applications and documentation.",
    fileName: "FinancialInstitutionLoans",
    keywords: "financial institution loans, corporate loans, institutional financing",
  },
  "bank-loans": {
    name: "Bank Loans",
    description: "Credit facilities and bank loan assistance. Expert support from application to disbursement.",
    fileName: "BankLoans",
    keywords: "bank loans, credit facility, business loans, bank financing",
  },
  "loan-syndication": {
    name: "Loan Syndication",
    description: "Large credit arrangements through multiple lenders. Expert syndication services for significant funding needs.",
    fileName: "LoanSyndication",
    keywords: "loan syndication, syndicated loan, multi-lender financing",
  },

  /* ── Extra services (not in main Navbar but have files) ── */
  "esi-filing": {
    name: "ESI Filing",
    description: "Complete Employee State Insurance compliance. Monthly contributions, returns, and claims management for your workforce.",
    fileName: "ESIFiling",
    keywords: "ESI filing, employee state insurance, ESI compliance, ESIC",
  },
  "pf-filing": {
    name: "PF Filing",
    description: "Complete EPF compliance for your business. Monthly returns, challan payment, and annual filings all managed.",
    fileName: "PFFiling",
    keywords: "PF filing, EPF compliance, provident fund, PF returns",
  },
  "payroll-processing": {
    name: "Payroll Processing",
    description: "End-to-end salary management for your business. From computation to compliance, we handle everything.",
    fileName: "PayrollProcessing",
    keywords: "payroll processing, salary management, payroll compliance",
  },
  "roc-compliance": {
    name: "ROC Compliance",
    description: "Stay compliant with Ministry of Corporate Affairs. Annual filings, event-based filings, and company secretarial services.",
    fileName: "ROCCompliance",
    keywords: "ROC compliance, MCA filing, annual filing, company compliance",
  },
  "director-kyc": {
    name: "Director KYC",
    description: "Annual KYC compliance for directors. Keep your DIN active with timely DIR-3 KYC filing.",
    fileName: "DirectorKYC",
    keywords: "director KYC, DIR-3 KYC, DIN compliance, director identification",
  },
  "tax-litigation": {
    name: "Tax Litigation",
    description: "End-to-end representation and advisory services in matters relating to GST and Income-tax litigation.",
    fileName: "TaxLitigation",
    keywords: "tax litigation, GST litigation, income tax dispute, tax representation",
  },
  "annual-filing": {
    name: "Annual Filing",
    description: "Annual ROC filing and MCA compliance. Timely submission of annual returns and financial statements.",
    fileName: "AnnualFiling",
    keywords: "annual filing, ROC annual return, MGT-7, AOC-4",
  },
  "cma-report": {
    name: "CMA Report",
    description: "Credit Monitoring Arrangement data preparation for bank loans and working capital requirements.",
    fileName: "CMAReport",
    keywords: "CMA report, CMA data, bank loan CMA, working capital",
  },
};

/** All available slugs for generateStaticParams */
export const allSlugs = Object.keys(serviceRegistry);
