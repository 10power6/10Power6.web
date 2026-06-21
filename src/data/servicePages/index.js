import webApplications from "./webApplications";
import aiIntegration from "./aiIntegration";
import digitalMarketing from "./digitalMarketing";
import mobileApplications from "./mobileApplications";
import websites from "./websites";
import itConsultancy from "./itConsultancy";
import strategySupport from "./strategySupport";

export const servicePages = {
  [webApplications.slug]: webApplications,
  [aiIntegration.slug]: aiIntegration,
  [digitalMarketing.slug]: digitalMarketing,
  [mobileApplications.slug]: mobileApplications,
  [websites.slug]: websites,
  [itConsultancy.slug]: itConsultancy,
  [strategySupport.slug]: strategySupport,
};

export const servicePageSlugs = Object.keys(servicePages);
