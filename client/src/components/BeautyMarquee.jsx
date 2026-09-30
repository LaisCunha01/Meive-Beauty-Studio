import "./BeautyMarquee.css";

function BeautyMarquee() {
  const items = [
    "VOLUME RUSSO",
    "FIO A FIO",
    "MEIVE GIRLS",
    "HOT GIRL MOMENT",
    "GOSTOSAS & INTELIGENTES",
    "VOLUME RUSSO",
    "FIO A FIO",
  ];

  const renderGroup = (group) => (
    <div className="marquee-group" key={group}>
      {items.map((item, index) => (
        <span className="marquee-item" key={`${group}-${index}`}>
          {item}
          <span className="marquee-separator">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="beauty-marquee">
      <div className="marquee-track">
        {renderGroup(1)}
        {renderGroup(2)}
        {renderGroup(3)}
      </div>
    </section>
  );
}

export default BeautyMarquee;