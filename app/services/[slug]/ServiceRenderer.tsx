"use client";

import dynamic from "next/dynamic";

/* ───────────────────────────────────────────────────────────────
 * Dynamic import map – each service is code-split into its own chunk.
 * The key is the URL slug, the value lazy-loads the TSX component.
 * ─────────────────────────────────────────────────────────────── */

const componentMap: Record<string, ReturnType<typeof dynamic>> = {
  /* Start Business */
  "private-limited-company": dynamic(() => import("../PrivateLimitedCompany")),
  "llp-registration": dynamic(() => import("../LLPRegistration")),
  "one-person-company": dynamic(() => import("../OnePersonCompany")),
  "section-8-company": dynamic(() => import("../Section8Company")),
  "nidhi-company": dynamic(() => import("../NidhiCompany")),
  "producer-company": dynamic(() => import("../ProducerCompany")),
  "partnership-firm": dynamic(() => import("../PartnershipFirm")),
  "sole-proprietorship": dynamic(() => import("../SoleProprietorship")),
  "indian-subsidiary": dynamic(() => import("../IndianSubsidiary")),

  /* Tax Registrations */
  "gst-registration": dynamic(() => import("../GSTRegistration")),
  "tan-registration": dynamic(() => import("../TANRegistration")),
  "professional-tax": dynamic(() => import("../ProfessionalTax")),

  /* Government Licenses */
  "msme-udyam": dynamic(() => import("../MSMEUdyam")),
  "fssai-license": dynamic(() => import("../FSSAILicense")),
  "import-export-code": dynamic(() => import("../ImportExportCode")),

  /* Intellectual Property */
  "trademark": dynamic(() => import("../Trademark")),
  "copyright": dynamic(() => import("../Copyright")),
  "patent": dynamic(() => import("../Patent")),

  /* NRI Services */
  "pan-for-nri": dynamic(() => import("../PANForNRI")),
  "nri-company-incorporation": dynamic(() => import("../NRICompanyIncorporation")),
  "fema-compliance": dynamic(() => import("../FEMACompliance")),
  "property-management": dynamic(() => import("../PropertyManagement")),

  /* Audits */
  "tax-audits": dynamic(() => import("../TaxAudits")),
  "statutory-audits": dynamic(() => import("../StatutoryAudits")),
  "internal-audits": dynamic(() => import("../InternalAudits")),
  "cost-audit": dynamic(() => import("../CostAudit")),

  /* Income Tax */
  "income-tax-return": dynamic(() => import("../IncomeTaxReturn")),
  "transfer-pricing": dynamic(() => import("../TransferPricing")),
  "tds-returns": dynamic(() => import("../TDSReturns")),
  "scrutiny-assessments": dynamic(() => import("../ScrutinyAssessments")),
  "income-tax-appeals": dynamic(() => import("../IncomeTaxAppeals")),

  /* GST & CFO */
  "virtual-cfo": dynamic(() => import("../VirtualCFO")),
  "gst-returns": dynamic(() => import("../GSTReturns")),
  "gst-audits": dynamic(() => import("../GSTAudits")),
  "gst-refunds": dynamic(() => import("../GSTRefunds")),
  "gst-consultation": dynamic(() => import("../GSTConsultation")),

  /* FDI */
  "fdi-filings": dynamic(() => import("../FDIFilings")),
  "fdi-advisory": dynamic(() => import("../FDIAdvisory")),
  "share-transfer-fdi": dynamic(() => import("../ShareTransferFDI")),

  /* Company Law */
  "secretarial-services": dynamic(() => import("../SecretarialServices")),
  "auditing-assurance": dynamic(() => import("../AnnualFiling")),
  "mergers-acquisitions": dynamic(() => import("../MergersAcquisitions")),
  "esop": dynamic(() => import("../ESOP")),

  /* Reports */
  "analytics-bi": dynamic(() => import("../CMAReport")),
  "project-report": dynamic(() => import("../ProjectReport")),
  "business-plan": dynamic(() => import("../BusinessPlan")),
  "business-valuation": dynamic(() => import("../BusinessValuation")),
  "due-diligence": dynamic(() => import("../DueDiligence")),

  /* Agreements */
  "gift-deed": dynamic(() => import("../GiftDeed")),
  "shareholder-agreement": dynamic(() => import("../ShareholderAgreement")),
  "joint-venture-agreement": dynamic(() => import("../JointVentureAgreement")),

  /* Funding */
  "financial-institution-loans": dynamic(() => import("../FinancialInstitutionLoans")),
  "bank-loans": dynamic(() => import("../BankLoans")),
  "loan-syndication": dynamic(() => import("../LoanSyndication")),

  /* Extra services */
  "esi-filing": dynamic(() => import("../ESIFiling")),
  "pf-filing": dynamic(() => import("../PFFiling")),
  "payroll-processing": dynamic(() => import("../PayrollProcessing")),
  "roc-compliance": dynamic(() => import("../ROCCompliance")),
  "director-kyc": dynamic(() => import("../DirectorKYC")),
  "tax-litigation": dynamic(() => import("../TaxLitigation")),
  "annual-filing": dynamic(() => import("../AnnualFiling")),
  "cma-report": dynamic(() => import("../CMAReport")),
};

export default function ServiceRenderer({ slug }: { slug: string }) {
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <h2 className="font-outfit font-bold text-[28px] text-brand-primary">
          Service Not Found
        </h2>
        <p className="font-inter text-text-secondary">
          The requested service page could not be loaded.
        </p>
      </div>
    );
  }

  return <Component />;
}
