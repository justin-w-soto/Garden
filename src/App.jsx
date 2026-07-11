import React, { useState } from 'react';

const categories = [
  {
    title: 'Groundcover',
    count: '242 plants',
    plants: [
      'Blue Globe Gilia',
      'California Poppy',
      'Cascade Penstemon',
      'Common Rush',
      'False Solomon’s Seal',
      'Wild Ginger',
      'Western Red Columbine'
    ]
  },
  {
    title: 'Small Shrubs',
    count: '206 plants',
    plants: [
      'Dwarf Oregon Grape',
      'Mock Orange',
      'Red Flowering Currant',
      'Snowberry',
      'Spirea'
    ]
  },
  {
    title: 'Large Shrubs',
    count: '59 plants',
    plants: ['Serviceberry', 'Douglas Spiraea', 'Oregon Crabapple']
  },
  {
    title: 'Understory',
    count: '8 plants',
    plants: ['Sword Fern', 'Salal', 'Huckleberry']
  },
  {
    title: 'Canopy',
    count: '4 plants',
    plants: ['Douglas Fir', 'Western Red Cedar', 'Bigleaf Maple']
  }
];

const highlights = [
  'Habitat for pollinators, birds, and beneficial insects',
  'Water-wise planting with layered native structure',
  'Seasonal bloom from spring through autumn'
];

function DropdownSection({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="dropdown-section">
      <button className="dropdown-toggle" onClick={() => setOpen((value) => !value)}>
        <span>
          <strong>{title}</strong>
          {subtitle ? <small>{subtitle}</small> : null}
        </span>
        <span className="dropdown-icon">{open ? '−' : '+'}</span>
      </button>
      {open ? <div className="dropdown-content">{children}</div> : null}
    </section>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="hero-card">
        <div className="hero-copy-block">
          <p className="eyebrow">Backyard Habitat Certification Program</p>
          <h1>Native garden, layered with life.</h1>
          <p className="hero-copy">
            A resilient, wildlife-friendly landscape built with native species that support birds,
            pollinators, and local biodiversity from the ground up.
          </p>
          <div className="hero-actions">
            <a href="#inventory" className="primary-link">Explore the inventory</a>
            <a href="mailto:kathryn.sechrist@gmail.com" className="secondary-link">Ask a question</a>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-number">64</span>
            <span className="stat-label">species</span>
          </div>
          <div>
            <span className="stat-number">519</span>
            <span className="stat-label">plants</span>
          </div>
          <div>
            <span className="stat-number">74%</span>
            <span className="stat-label">coverage</span>
          </div>
        </div>
      </header>

      <main className="content">
        <DropdownSection title="Garden Overview" subtitle="Location, size, and certification" defaultOpen>
          <div className="summary-card">
            <div>
              <p className="summary-label">Location</p>
              <h2>4605 SE Center St</h2>
            </div>
            <div>
              <p className="summary-label">Planting area</p>
              <h2>1,684 ft²</h2>
            </div>
            <div>
              <p className="summary-label">Certification</p>
              <h2>Certified Wildlife Garden</h2>
            </div>
          </div>
        </DropdownSection>

        <DropdownSection title="Why this garden works" subtitle="Habitat and design benefits" defaultOpen>
          <div className="highlights-card">
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </DropdownSection>

        <DropdownSection title="Plant Inventory" subtitle="Layers of native planting" defaultOpen>
          <div className="inventory-card" id="inventory">
            <div className="inventory-heading">
              <p>Plant Inventory</p>
              <h2>Layers of native planting</h2>
            </div>

            <div className="inventory-grid">
              {categories.map((category) => (
                <article key={category.title} className="category-card">
                  <div className="category-title-row">
                    <h3>{category.title}</h3>
                    <span>{category.count}</span>
                  </div>
                  <ul>
                    {category.plants.map((plant) => (
                      <li key={plant}>{plant}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </DropdownSection>

        <DropdownSection title="Garden Philosophy" subtitle="A quote from Aldo Leopold">
          <div className="quote-card">
            <blockquote>
              “We abuse land because we see it as a commodity belonging to us. When we see land as a
              community to which we belong, we may begin to use it with love and respect.”
            </blockquote>
            <p className="quote-author">— Aldo Leopold</p>
          </div>
        </DropdownSection>

        <DropdownSection title="Questions" subtitle="Contact the garden team">
          <div className="contact-card">
            <h2>Questions about our garden?</h2>
            <a href="mailto:kathryn.sechrist@gmail.com">Contact us</a>
          </div>
        </DropdownSection>
      </main>
    </div>
  );
}

export default App;
