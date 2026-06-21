import ProcessStepsGrid from "../ProcessStepsGrid";

export default function ServiceProcess({ page, theme = "dark" }) {
  return (
    <ProcessStepsGrid
      theme={theme}
      label="Our Workflow"
      title={page.process.title}
      description={page.process.subtitle}
      steps={page.process.steps}
      titleId="service-process-heading"
    />
  );
}
