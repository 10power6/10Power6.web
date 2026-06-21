import webApplications from "./webApplications";
import aiIntegration from "./aiIntegration";
import digitalMarketing from "./digitalMarketing";
import mobileApplications from "./mobileApplications";
import websites from "./websites";
import seo from "./seo";
import strategySupport from "./strategySupport";

export const servicePages = {
  [webApplications.slug]: webApplications,
  [aiIntegration.slug]: aiIntegration,
  [digitalMarketing.slug]: digitalMarketing,
  [mobileApplications.slug]: mobileApplications,
  [websites.slug]: websites,
  [seo.slug]: seo,
  [strategySupport.slug]: strategySupport,
};

export const servicePageSlugs = Object.keys(servicePages);
