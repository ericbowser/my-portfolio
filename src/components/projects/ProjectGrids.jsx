import ProjectCard from "./ProjectCard";

const BENTO_STYLES = `
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    align-items: stretch;
  }
  .bento-item {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .bento-featured > div { flex: 1; }
  @media (max-width: 1024px) {
    .bento-grid { grid-template-columns: repeat(2, 1fr); }
    .bento-featured { grid-column: span 2 !important; }
    .bento-wide { grid-column: span 2 !important; }
  }
  @media (max-width: 640px) {
    .bento-grid { grid-template-columns: 1fr; }
    .bento-featured, .bento-wide { grid-column: span 1 !important; }
  }
  .mobile-scroll {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 768px) {
    .mobile-scroll {
      display: flex;
      overflow-x: auto;
      gap: 16px;
      padding-bottom: 8px;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
    }
    .mobile-scroll > div {
      flex: 0 0 min(85vw, 340px);
      scroll-snap-align: start;
    }
  }
`;

function bentoStyle(bento) {
  if (bento === "featured" || bento === "wide") {
    return { gridColumn: "span 2" };
  }
  return {};
}

function bentoClass(bento) {
  if (bento === "featured") return "bento-item bento-featured";
  if (bento === "wide") return "bento-item bento-wide";
  return "bento-item";
}

export function BentoProjectGrid({ projects }) {
  return (
    <>
      <style>{BENTO_STYLES}</style>
      <div className="bento-grid">
        {projects.map((p, i) => (
          <div key={p.id} className={bentoClass(p.bento)} style={bentoStyle(p.bento)}>
            <ProjectCard
              project={p}
              index={i}
              size={p.bento === "featured" ? "featured" : "standard"}
              variant="web"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export function MobileProjectRow({ projects }) {
  return (
    <div className="mobile-scroll">
      {projects.map((p, i) => (
        <div key={p.id}>
          <ProjectCard project={p} index={i} variant="mobile" />
        </div>
      ))}
    </div>
  );
}
