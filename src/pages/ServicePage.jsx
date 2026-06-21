import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicePages } from "../serviceData";
import { usePageSEO } from "../hooks/usePageSEO";
import { useNavigateToContact } from "../hooks/useNavigateToContact";
import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceTechnologies from "../components/services/ServiceTechnologies";
import ServiceIndustries from "../components/services/ServiceIndustries";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceCTA from "../components/services/ServiceCTA";

export default function ServicePage() {
  const { slug } = useParams();
  const page = servicePages[slug];
  const navigateToContact = useNavigateToContact();

  usePageSEO(
    page
      ? { title: page.seoTitle, description: page.seoDescription }
      : { title: "Service not found | 10Power6", description: "The requested service page could not be found." }
  );

  if (!page) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Page Not Found</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">Service page unavailable.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            The service you are looking for doesn&apos;t exist or has been moved. Return to the services overview to explore our premium offerings.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Return to Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <ServiceHero page={page} onStartProject={navigateToContact} />
      <ServiceOverview page={page} theme="light" />
      <ServiceBenefits page={page} theme="dark" />
      <ServiceFeatures page={page} theme="light" />
      <ServiceTechnologies page={page} theme="dark" />
      <ServiceIndustries page={page} theme="light" />
      <ServiceProcess page={page} theme="dark" />
      <ServiceFAQ page={page} theme="light" />
      <ServiceCTA page={page} onStartProject={navigateToContact} theme="dark" />
    </main>
  );
}
