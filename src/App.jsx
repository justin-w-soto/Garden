import React, { useEffect, useState } from 'react';

const categories = [
  {
    title: 'Groundcover',
    count: '242 plants',
    plants: [
      { commonName: 'Blue Globe Gilia', latinName: 'Gilia capitata', total: 3, locations: [{ name: 'Front Yard', count: 3 }] },
      { commonName: 'Broad-leaved Penstemon', latinName: 'Penstemon ovatus', total: 1, locations: [{ name: 'Rain Garden', count: 1 }] },
      { commonName: 'Broadleaf Stonecrop', latinName: 'Sedum spathulifolium', total: 3, locations: [{ name: 'Backyard', count: 3 }] },
      { commonName: 'Bunchberry', latinName: 'Cornus canadensis', total: 3, locations: [{ name: 'Rain Garden', count: 3 }] },
      { commonName: 'California Poppy', latinName: 'Eschscholzia californica', total: 14, locations: [{ name: 'Front Yard', count: 14 }] },
      { commonName: 'Cascade Penstemon', latinName: 'Penstemon serrulatus', total: 14, locations: [{ name: 'Front Yard', count: 9 }, { name: 'Backyard', count: 5 }] },
      { commonName: 'Common Rush', latinName: 'Juncus effusus', total: 9, locations: [{ name: 'Front Yard', count: 3 }, { name: 'Backyard', count: 6 }] },
      { commonName: "Cusick's Checkermallow", latinName: 'Sidalcea cusickii', total: 4, locations: [{ name: 'Backyard', count: 4 }] },
      { commonName: "David's Penstemon", latinName: 'Penstemon davidsonii', total: 1, locations: [{ name: 'Backyard', count: 1 }] },
      { commonName: 'Douglas Aster', latinName: 'Symphyotrichum subspicatum', total: 3, locations: [{ name: 'Rain Garden', count: 3 }] },
      { commonName: 'Early-blue Violet', latinName: 'Viola adunca', total: 4, locations: [{ name: 'Backyard', count: 4 }] },
      { commonName: "False Solomon's Seal", latinName: 'Maianthemum racemosum', total: 1, locations: [{ name: 'Backyard', count: 1 }] },
      { commonName: 'Fireweed', latinName: 'Chamaenerion angustifolium', total: 25, locations: [{ name: 'Backyard', count: 25 }] },
      { commonName: 'Fringecup', latinName: 'Tellima grandiflora', total: 10, locations: [{ name: 'Front Yard', count: 3 }, { name: 'Backyard', count: 7 }] },
      { commonName: 'Giant White Fawn Lily', latinName: 'Erythronium oregonum', total: 3, locations: [{ name: 'Backyard', count: 3 }] },
      { commonName: 'Great Camas', latinName: 'Camassia leichtlinii', total: 3, locations: [{ name: 'Rain Garden', count: 3 }] },
      { commonName: 'Green-flowering Alumroot', latinName: 'Heuchera chlorantha', total: 1, locations: [{ name: 'Front Yard', count: 1 }] },
      { commonName: 'Inside-out Flower', latinName: 'Vancouveria hexandra', total: 3, locations: [{ name: 'Backyard', count: 3 }] },
      { commonName: 'Kinnikinnick', latinName: 'Arctostaphylos uva-ursi', total: 15, locations: [{ name: 'Front Yard', count: 13 }, { name: 'Backyard', count: 2 }] },
      { commonName: 'Meadow Arnica', latinName: 'Arnica chamissonis', total: 1, locations: [{ name: 'Backyard', count: 1 }] },
      { commonName: 'Oregon Iris', latinName: 'Iris tenax', total: 7, locations: [{ name: 'Front Yard', count: 7 }] },
      { commonName: 'Oregon Sunshine', latinName: 'Eriophyllum lanatum', total: 6, locations: [{ name: 'Front Yard', count: 3 }, { name: 'Backyard', count: 3 }] },
      { commonName: 'Pacific Bleeding Heart', latinName: 'Dicentra formosa', total: 4, locations: [{ name: 'Backyard', count: 4 }] },
      { commonName: 'Pacific Waterleaf', latinName: 'Hydrophyllum tenuipes', total: 3, locations: [{ name: 'Front Yard', count: 3 }] },
      { commonName: 'Piggyback Plant', latinName: 'Tolmiea menziesii', total: 3, locations: [{ name: 'Rain Garden', count: 3 }] },
      { commonName: 'Redwood Sorrel', latinName: 'Oxalis oregana', total: 9, locations: [{ name: 'Backyard', count: 9 }] },
      { commonName: "Rydberg's Penstemon", latinName: 'Penstemon rydbergii', total: 3, locations: [{ name: 'Rain Garden', count: 3 }] },
      { commonName: 'Seaside Fleabane', latinName: 'Erigeron glaucus', total: 5, locations: [{ name: 'Backyard', count: 5 }] },
      { commonName: 'Self-Heal', latinName: 'Prunella vulgaris', total: 14, locations: [{ name: 'Front Yard', count: 7 }, { name: 'Backyard', count: 7 }] },
      { commonName: 'Slender Cinquefoil', latinName: 'Potentilla gracilis', total: 8, locations: [{ name: 'Backyard', count: 8 }] },
      { commonName: "Smith's Fairybells", latinName: 'Prosartes smithii', total: 3, locations: [{ name: 'Front Yard', count: 3 }] },
      { commonName: 'Spreading Rush', latinName: 'Juncus patens', total: 7, locations: [{ name: 'Rain Garden', count: 7 }] },
      { commonName: 'Vanilla Leaf', latinName: 'Achlys triphylla', total: 2, locations: [{ name: 'Front Yard', count: 2 }] },
      { commonName: 'Western Coneflower', latinName: 'Rudbeckia occidentalis', total: 12, locations: [{ name: 'Backyard', count: 12 }] },
      { commonName: 'Western Red Columbine', latinName: 'Aquilegia formosa', total: 9, locations: [{ name: 'Front Yard', count: 9 }] },
      { commonName: 'Western Yarrow', latinName: 'Achillea millefolium', total: 2, locations: [{ name: 'Backyard', count: 2 }] },
      { commonName: 'Wild Ginger', latinName: 'Asarum caudatum', total: 10, locations: [{ name: 'Front Yard', count: 10 }] },
      { commonName: 'Yellow-eyed Grass', latinName: 'Sisyrinchium californicum', total: 14, locations: [{ name: 'Front Yard', count: 6 }, { name: 'Backyard', count: 8 }] }
    ]
  },
  {
    title: 'Small Shrubs',
    count: '206 plants',
    plants: [
      { commonName: 'Creeping Oregon Grape', latinName: 'Berberis repens', total: 26, locations: [{ name: 'Backyard', count: 26 }] },
      { commonName: 'Deer Fern', latinName: 'Blechnum spicant', total: 9, locations: [{ name: 'Front Yard', count: 6 }, { name: 'Backyard', count: 3 }] },
      { commonName: "Goat's Beard", latinName: 'Aruncus dioicus', total: 1, locations: [{ name: 'Backyard', count: 1 }] },
      { commonName: 'Lady Fern', latinName: 'Athyrium filix-femina', total: 3, locations: [{ name: 'Backyard', count: 3 }] },
      { commonName: 'Salal', latinName: 'Gaultheria shallon', total: 61, locations: [{ name: 'Front Yard', count: 15 }, { name: 'Backyard', count: 46 }] },
      { commonName: 'Shiny-leaf Spirea', latinName: 'Spiraea lucida', total: 1, locations: [{ name: 'Front Yard', count: 1 }] },
      { commonName: 'Sword Fern', latinName: 'Polystichum munitum', total: 103, locations: [{ name: 'Front Yard', count: 55 }, { name: 'Backyard', count: 45 }, { name: 'Rain Garden', count: 3 }] },
      { commonName: 'Western Maidenhair Fern', latinName: 'Adiantum aleuticum', total: 2, locations: [{ name: 'Front Yard', count: 2 }] }
    ]
  },
  {
    title: 'Large Shrubs',
    count: '59 plants',
    plants: [
      { commonName: 'Douglas Spirea', latinName: 'Spiraea douglasii', total: 4, locations: [{ name: 'Backyard', count: 4 }] },
      { commonName: 'Evergreen Huckleberry', latinName: 'Vaccinium ovatum', total: 17, locations: [{ name: 'Front Yard', count: 4 }, { name: 'Backyard', count: 13 }] },
      { commonName: 'Lewis’ Mock Orange', latinName: 'Philadelphus lewisii', total: 3, locations: [{ name: 'Front Yard', count: 2 }, { name: 'Backyard', count: 1 }] },
      { commonName: 'Nootka Rose', latinName: 'Rosa nutkana', total: 1, locations: [{ name: 'Backyard', count: 1 }] },
      { commonName: 'Oceanspray', latinName: 'Holodiscus discolor', total: 3, locations: [{ name: 'Backyard', count: 3 }] },
      { commonName: 'Osoberry', latinName: 'Oemleria cerasiformis', total: 5, locations: [{ name: 'Front Yard', count: 3 }, { name: 'Backyard', count: 2 }] },
      { commonName: 'Pacific Ninebark', latinName: 'Physocarpus capitatus', total: 3, locations: [{ name: 'Front Yard', count: 1 }, { name: 'Rain Garden', count: 2 }] },
      { commonName: 'Red-flowering Currant', latinName: 'Ribes sanguineum', total: 2, locations: [{ name: 'Front Yard', count: 1 }, { name: 'Backyard', count: 1 }] },
      { commonName: 'Red-osier Dogwood', latinName: 'Cornus sericea', total: 6, locations: [{ name: 'Front Yard', count: 3 }, { name: 'Backyard', count: 3 }] },
      { commonName: 'Salmonberry', latinName: 'Rubus spectabilis', total: 2, locations: [{ name: 'Backyard', count: 2 }] },
      { commonName: 'Shore Pine', latinName: 'Pinus contorta', total: 2, locations: [{ name: 'Backyard', count: 2 }] },
      { commonName: 'Tall Oregon Grape', latinName: 'Berberis aquifolium', total: 4, locations: [{ name: 'Front Yard', count: 4 }] },
      { commonName: 'Thimbleberry', latinName: 'Rubus parviflorus', total: 7, locations: [{ name: 'Front Yard', count: 4 }, { name: 'Backyard', count: 3 }] }
    ]
  },
  {
    title: 'Understory',
    count: '8 plants',
    plants: [
      { commonName: 'Serviceberry', latinName: 'Amelanchier alnifolia', total: 2, locations: [{ name: 'Backyard', count: 2 }] },
      { commonName: 'Vine Maple', latinName: 'Acer circinatum', total: 6, locations: [{ name: 'Front Yard', count: 2 }, { name: 'Backyard', count: 4 }] }
    ]
  },
  {
    title: 'Canopy',
    count: '4 plants',
    plants: [
      { commonName: 'Red Alder', latinName: 'Alnus rubra', total: 4, locations: [{ name: 'Backyard', count: 4 }] }
    ]
  }
];

const highlights = [
  'Habitat for pollinators, birds, and beneficial insects',
  'Water-wise planting with layered native structure',
  'Seasonal bloom from spring through autumn'
];

function buildWikipediaUrl(term) {
  const normalized = term.trim().replace(/ /g, '_');
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(normalized)}`;
}

function normalizeTitle(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function buildCategoryArtwork(title) {
  const slug = normalizeTitle(title).replace(/ /g, '-');
  const palettes = {
    'groundcover': { base: '#4f6b3d', accent: '#8ccf63', detail: '#f4f0d8' },
    'small-shrubs': { base: '#5d7d3f', accent: '#a6cf74', detail: '#f8f3dd' },
    'large-shrubs': { base: '#7d5b34', accent: '#d3a35f', detail: '#fff6de' },
    'understory': { base: '#3b5c2d', accent: '#76b05f', detail: '#f4f0d8' },
    'canopy': { base: '#3e4c2c', accent: '#8ea95a', detail: '#f8f3dd' }
  };

  const palette = palettes[slug] || palettes['groundcover'];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="30" fill="${palette.base}" />
      <circle cx="80" cy="80" r="54" fill="${palette.detail}" opacity="0.92" />
      <path d="M80 26c-10 18-25 30-42 38 16 12 30 22 42 46 14-24 32-34 42-46-17-8-32-20-42-38z" fill="${palette.accent}" />
      <path d="M72 58c6 8 8 16 8 24 0 9-3 18-8 26 13-2 24-8 32-18-4-9-8-16-8-26 0-7 1-14 8-24-10 4-21 10-32 18z" fill="#ffffff" opacity="0.8" />
      <path d="M52 92c12-2 21-7 28-16-7 18-16 30-28 37-4-7-6-14-6-21 0-1 0-1 6 0z" fill="${palette.accent}" opacity="0.95" />
      <path d="M108 92c-12-2-21-7-28-16 7 18 16 30 28 37 4-7 6-14 6-21 0-1 0-1-6 0z" fill="${palette.accent}" opacity="0.95" />
      <rect x="35" y="112" width="90" height="10" rx="5" fill="#ffffff" opacity="0.7" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

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
  const [imageMap] = useState(() => {
    const map = {};
    categories.forEach((category) => {
      map[normalizeTitle(category.title)] = buildCategoryArtwork(category.title);
    });
    return map;
  });

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
              <h2>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4605+SE+Center+St"
                  target="_blank"
                  rel="noreferrer"
                  className="summary-link"
                >
                  4605 SE Center St
                </a>
              </h2>
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
                <DropdownSection
                  key={category.title}
                  title={category.title}
                  subtitle={category.count}
                  defaultOpen={category.title === 'Groundcover'}
                >
                  <div className="category-card">
                    {category.plants.length > 0 ? (
                      <div className="species-list">
                        {category.plants.map((plant) => {
                          const imageUrl = imageMap[normalizeTitle(category.title)] || '/images/groundcover.png';

                          return (
                            <div key={plant.commonName} className="species-item">
                              <div className="species-name-block">
                                <div className="species-main">
                                  <h4>
                                    <a href={buildWikipediaUrl(plant.commonName)} target="_blank" rel="noreferrer">
                                      {plant.commonName}
                                    </a>
                                  </h4>
                                  <a
                                    className="latin-name"
                                    href={buildWikipediaUrl(plant.latinName)}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {plant.latinName}
                                  </a>
                                </div>
                              </div>
                              <div className="species-meta">
                                <span className="total-count">{plant.total}</span>
                                <div className="location-tags">
                                  {plant.locations.map((location) => (
                                    <span key={`${plant.commonName}-${location.name}`}>
                                      {location.name}: {location.count}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="category-note">
                        Detailed species counts for this layer are not included in the reference example.
                      </p>
                    )}
                  </div>
                </DropdownSection>
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
