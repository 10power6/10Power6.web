import { getServiceShowcase } from "../../data/serviceShowcase";
import ServiceParallaxBand from "./ServiceParallaxBand";
import ServiceSplitStory from "./ServiceSplitStory";
import ServiceFloatingStory from "./ServiceFloatingStory";

function ShowcaseBlock({ block }) {
  switch (block.type) {
    case "parallax":
      return (
        <ServiceParallaxBand
          image={block.image}
          imageAlt={block.imageAlt}
          label={block.label}
          title={block.title}
          description={block.description}
        />
      );
    case "split":
      return (
        <ServiceSplitStory
          image={block.image}
          imageAlt={block.imageAlt}
          label={block.label}
          title={block.title}
          description={block.description}
          bullets={block.bullets}
          imagePosition={block.imagePosition}
          theme={block.theme}
        />
      );
    case "floating":
      return (
        <ServiceFloatingStory
          image={block.image}
          imageAlt={block.imageAlt}
          label={block.label}
          title={block.title}
          description={block.description}
          bullets={block.bullets}
          theme={block.theme}
        />
      );
    default:
      return null;
  }
}

export default function ServiceShowcase({ page, start = 0, end }) {
  const blocks = getServiceShowcase(page).slice(start, end);

  if (blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block) => (
        <ShowcaseBlock key={`${block.type}-${block.title}`} block={block} />
      ))}
    </>
  );
}
