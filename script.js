/* =========================================================
   CHITWAN WOOD CRAFT — single-file app script
   ========================================================= */
(function () {
  'use strict';

  /* =========================================================
     1. ICON LIBRARY
     ========================================================= */
  const ICONS = {
    chair:`<path d="M7 3h10v8H7z"/><path d="M4 11h16v3H4z"/><path d="M6 14v7M18 14v7"/>`,
    table:`<path d="M2 7h20v2.5H2z"/><path d="M5 9.5V20M19 9.5V20"/><path d="M5 15h14"/>`,
    sofa:`<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 11h20v6H2z"/><path d="M6 17v3M18 17v3"/>`,
    bed:`<path d="M3 6v13"/><path d="M3 13h18v6"/><path d="M21 19v-5a2 2 0 0 0-2-2h-8v5"/><path d="M6 13V9h4v4"/>`,
    cabinet:`<path d="M5 3h14v18H5z"/><path d="M12 3v18"/><path d="M9.5 11h.01M14.5 11h.01"/>`,
    shelf:`<path d="M4 4h16v16H4z"/><path d="M4 10h16M4 15h16"/><path d="M8 6.5h4M13 12h4"/>`,
    bowl:`<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9.5 20h5"/>`,
    board:`<rect x="5" y="2.5" width="14" height="19" rx="3"/><circle cx="12" cy="6.5" r="1.2"/>`,
    tray:`<rect x="2.5" y="8" width="19" height="10" rx="2.5"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/>`,
    utensil:`<path d="M7 3v6a3 3 0 0 0 6 0V3"/><path d="M10 9v12"/><path d="M17.5 3c-1.6 1.7-2.2 3.7-2.2 5.6s.6 3 2.2 3.6V21"/>`,
    box:`<path d="M4 9h16v11H4z"/><path d="M4 9l2-5h12l2 5"/><path d="M12 4v16"/>`,
    vase:`<path d="M10 3h4l-.9 3.2C16 8 17.5 10.6 17.5 13a5.5 5.5 0 0 1-11 0C6.5 10.6 8 8 10.9 6.2z"/><path d="M9.5 20.5h5"/>`,
    frame:`<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7.5" y="6.5" width="9" height="11"/>`,
    panel:`<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="3"/>`,
    lamp:`<path d="M8.5 3h7l3 8h-13z"/><path d="M12 11v7"/><path d="M8 20.5h8"/>`,
    mirror:`<ellipse cx="12" cy="10.5" rx="7" ry="8"/><path d="M12 18.5V22M9 22h6"/>`,
    door:`<path d="M4 3h16v18H4z"/><path d="M8 3v18"/><path d="M15 12h.01"/><path d="M3 21h18"/>`,
    window:`<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M12 3v18M3 12h18"/>`,
    pillar:`<path d="M6 3h12M7 6h10"/><path d="M8 6v12M16 6v12"/><path d="M6 18h12M4.5 21h15"/>`,
    stair:`<path d="M3 20h4.5v-4.5H12V11h4.5V6.5H21"/>`,
    beam:`<path d="M3 6h18v4H3z"/><path d="M6.5 10v8M17.5 10v8"/><path d="M3 18h18"/>`,
    mandala:`<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16M6.4 6.4l11.2 11.2M17.6 6.4L6.4 17.6"/>`,
    pagoda:`<path d="M12 2l2.6 3.6H9.4z"/><path d="M6 9.5L12 6l6 3.5z"/><path d="M4 16l8-4.5L20 16z"/><path d="M8.5 16v5.5h7V16"/>`,
    elephant:`<path d="M4 12.5A5 5 0 0 1 9 7.5h5.5a5 5 0 0 1 5 5v1.6a3 3 0 0 1-3 3h-1v3.4h-2.4v-3.4h-3v3.4H7.7v-3.4A4 4 0 0 1 4 13.5z"/><path d="M19.2 12.6c1.5.4 2.3 1.5 2.3 2.9 0 1.3-.8 1.9-1.3 2.9"/>`,
    chess:`<path d="M9.5 4h5l-.8 3.6h-3.4z"/><path d="M7.5 7.6h9L15.4 12H8.6z"/><path d="M6.5 12h11l-1.2 6H7.7z"/><path d="M4.5 21h15"/>`
  };

  function svgIcon(name) {
    const path = ICONS[name] || ICONS.box;
    return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      ${path}</svg>`;
  }

  /* =========================================================
     2. CATALOGUE DATA
     ========================================================= */
  const CATALOGUES = [
    {
      id:'furniture', name:'Living & Dining',
      blurb:'Solid-wood seating and tables built for daily life.',
      note:'Mortise-and-tenon joinery keeps every frame rigid without metal fasteners.',
      items:[
        {id:'f1',name:'Sal Wood Dining Table',wood:'Sal',finish:'Natural oil',dims:'180 × 90 × 76 cm',price:68000,icon:'table',tag:'Bestseller'},
        {id:'f2',name:'Teak Lounge Chair',wood:'Teak',finish:'Matte lacquer',dims:'70 × 75 × 80 cm',price:24500,icon:'chair'},
        {id:'f3',name:'Handcarved Sofa Set (3+2)',wood:'Sal',finish:'Walnut stain',dims:'210 cm / 160 cm',price:145000,icon:'sofa',tag:'Signature'},
        {id:'f4',name:'Chitwan Coffee Table',wood:'Sisau',finish:'Natural oil',dims:'120 × 60 × 45 cm',price:32000,icon:'table'},
        {id:'f5',name:'Rocking Chair',wood:'Teak',finish:'Hand-rubbed wax',dims:'65 × 90 × 100 cm',price:27500,icon:'chair'},
        {id:'f6',name:'Open Bookshelf',wood:'Pine',finish:'Honey wax',dims:'90 × 30 × 180 cm',price:38500,icon:'shelf'}
      ]
    },
    {
      id:'bedroom', name:'Bedroom',
      blurb:'Beds, wardrobes and storage with hand-finished edges.',
      note:'Slatted bases and reinforced corners for years of daily use.',
      items:[
        {id:'b1',name:'Four-Poster Bed (Queen)',wood:'Sal',finish:'Dark walnut',dims:'210 × 160 cm',price:165000,icon:'bed',tag:'Signature'},
        {id:'b2',name:'Two-Door Wardrobe',wood:'Sal',finish:'Matte PU',dims:'120 × 60 × 200 cm',price:92000,icon:'cabinet'},
        {id:'b3',name:'Bedside Table',wood:'Teak',finish:'Natural oil',dims:'45 × 40 × 55 cm',price:14500,icon:'cabinet'},
        {id:'b4',name:'Dressing Table with Mirror',wood:'Sisau',finish:'Honey wax',dims:'110 × 45 × 150 cm',price:58000,icon:'mirror'}
      ]
    },
    {
      id:'kitchen', name:'Kitchen & Dining',
      blurb:'Food-safe bowls, boards and serving ware.',
      note:'Finished with food-safe oil — re-oil once a year to keep the grain alive.',
      items:[
        {id:'k1',name:'Chakati Bowl Set (4 pcs)',wood:'Chakati',finish:'Food-safe oil',dims:'12–20 cm dia',price:4800,icon:'bowl'},
        {id:'k2',name:'Teak Cutting Board',wood:'Teak',finish:'Food-safe oil',dims:'40 × 25 × 2.5 cm',price:2600,icon:'board',tag:'Bestseller'},
        {id:'k3',name:'Serving Tray with Handles',wood:'Sisau',finish:'Natural oil',dims:'45 × 30 cm',price:3200,icon:'tray'},
        {id:'k4',name:'Salad Server Pair',wood:'Teak',finish:'Food-safe oil',dims:'30 cm length',price:1800,icon:'utensil'},
        {id:'k5',name:'Spice Box (Masala Dabba)',wood:'Sisau',finish:'Natural oil',dims:'22 cm dia',price:3900,icon:'box'}
      ]
    },
    {
      id:'decor', name:'Home Décor',
      blurb:'Carved panels, frames and accents for the walls.',
      note:'Each piece is carved and sanded by hand, so no two are exactly alike.',
      items:[
        {id:'d1',name:'Carved Wall Panel',wood:'Sal',finish:'Antique finish',dims:'90 × 90 cm',price:22000,icon:'panel',tag:'Signature'},
        {id:'d2',name:'Turned Wooden Vase',wood:'Sisau',finish:'Matte lacquer',dims:'H 40 cm',price:6500,icon:'vase'},
        {id:'d3',name:'Photo Frame Set (3 pcs)',wood:'Teak',finish:'Natural oil',dims:'5 × 7 in',price:2800,icon:'frame'},
        {id:'d4',name:'Carved Table Lamp',wood:'Teak',finish:'Honey wax',dims:'H 45 cm',price:7200,icon:'lamp'},
        {id:'d5',name:'Round Mirror Frame',wood:'Sal',finish:'Walnut stain',dims:'60 cm dia',price:9500,icon:'mirror'}
      ]
    },
    {
      id:'handicraft', name:'Handicrafts & Gifts',
      blurb:'Traditional Nepali carving, small and giftable.',
      note:'Traditional Chitwan carving, made to be gifted and kept.',
      items:[
        {id:'h1',name:'Mandala Wall Art',wood:'Sisau',finish:'Hand-painted',dims:'45 cm dia',price:5400,icon:'mandala'},
        {id:'h2',name:'Pagoda Model',wood:'Sal',finish:'Natural',dims:'H 30 cm',price:4200,icon:'pagoda'},
        {id:'h3',name:'Carved Elephant Pair',wood:'Sal',finish:'Antique',dims:'H 18 cm',price:3600,icon:'elephant',tag:'Bestseller'},
        {id:'h4',name:'Jewellery Box with Brass Inlay',wood:'Sisau',finish:'Brass inlay',dims:'20 × 15 × 10 cm',price:4900,icon:'box'},
        {id:'h5',name:'Wooden Chess Set',wood:'Teak & Sisau',finish:'Polished',dims:'40 × 40 cm',price:8600,icon:'chess'}
      ]
    },
    {
      id:'architectural', name:'Doors & Joinery',
      blurb:'Carved doors, windows and structural joinery.',
      note:'Made to your site measurements; installation available across Bagmati.',
      items:[
        {id:'a1',name:'Handcarved Teak Door',wood:'Teak',finish:'Natural oil',dims:'210 × 90 cm',price:185000,icon:'door',tag:'Signature'},
        {id:'a2',name:'Newari Style Window',wood:'Sal',finish:'Carved',dims:'120 × 90 cm',price:74000,icon:'window'},
        {id:'a3',name:'Staircase Railing',wood:'Sal',finish:'Matte PU',dims:'Custom',price:3500,unit:'/ running ft',icon:'stair'},
        {id:'a4',name:'Carved Ceiling Beam',wood:'Sal',finish:'Natural',dims:'Custom',price:4200,unit:'/ running ft',icon:'beam'},
        {id:'a5',name:'Decorative Wooden Pillar',wood:'Sal',finish:'Antique',dims:'H 240 cm',price:96000,icon:'pillar'}
      ]
    }
  ];

  const ALL_PRODUCTS = CATALOGUES.flatMap(c =>
    c.items.map(p => Object.assign({}, p, {catId:c.id, catName:c.name, catNote:c.note}))
  );
  const byId = id => ALL_PRODUCTS.find(p => p.id === id);
  const money = n => 'NPR ' + n.toLocaleString('en-IN');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

  /* =========================================================
     3. UI PRIMITIVES
     ========================================================= */
  const modal = document.getElementById('modal');

  function productCard(p) {
    const unit = p.unit
      ? `<small style="font-size:11px;color:var(--muted)">${esc(p.unit)}</small>` : '';
    return `
    <article class="p-card reveal" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="${esc(p.name)}">
      <div class="p-thumb wood-light">
        ${svgIcon(p.icon)}
        ${p.tag ? `<span class="p-tag">${esc(p.tag)}</span>` : ''}
      </div>
      <div class="p-body">
        <h4>${esc(p.name)}</h4>
        <p class="p-meta">${esc(p.wood)} · ${esc(p.finish)}</p>
        <div class="p-foot">
          <span class="p-price">${money(p.price)}${unit}</span>
          <span class="p-more">View →</span>
        </div>
      </div>
    </article>`;
  }

  function openProduct(id) {
    const p = byId(id);
    if (!p) return;
    modal.innerHTML = `
      <div class="modal wood">
        <button class="modal-close" aria-label="Close">✕</button>
        <div class="modal-thumb">${svgIcon(p.icon)}</div>
        <div class="modal-body">
          <span class="eyebrow">${esc(p.catName)}</span>
          <h3>${esc(p.name)}</h3>
          <p class="modal-desc">
            Made to order in our Bharatpur workshop from kiln-seasoned ${esc(p.wood.toLowerCase())},
            finished with ${esc(p.finish.toLowerCase())}. ${esc(p.catNote)}
          </p>
          <dl class="specs">
            <div><dt>Wood</dt><dd>${esc(p.wood)}</dd></div>
            <div><dt>Finish</dt><dd>${esc(p.finish)}</dd></div>
            <div><dt>Dimensions</dt><dd>${esc(p.dims)}</dd></div>
            <div><dt>Catalogue</dt><dd>${esc(p.catName)}</dd></div>
          </dl>
          <div class="modal-foot">
            <div>
              <span class="p-price">${money(p.price)}${p.unit || ''}</span>
              <small>Ex-works, Bharatpur · Custom sizes on request</small>
            </div>
            <button class="btn btn-primary" id="quote-btn">Request a Quote</button>
          </div>
        </div>
      </div>`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('#quote-btn').addEventListener('click', () => {
      closeModal();
      sessionStorage.setItem('quote-subject', `${p.name} (${p.catName})`);
      location.hash = '#/contact';
      setTimeout(() => {
        const s = document.getElementById('cf-subject');
        if (s) { s.value = `${p.name} (${p.catName})`; s.focus(); }
      }, 150);
    });
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Delegated card clicks */
  document.addEventListener('click', e => {
    const card = e.target.closest('.p-card');
    if (card && card.dataset.id) openProduct(card.dataset.id);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.p-card');
    if (card && card.dataset.id) { e.preventDefault(); openProduct(card.dataset.id); }
  });

  /* Toast */
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 320);
    }, 2800);
  }

  /* Reveal on scroll */
  let observer;
  function initReveal() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* =========================================================
     4. VIEWS
     ========================================================= */
  function viewHome() {
    const featured = ['f3','b1','d1','a1','h3','f1'].map(byId).filter(Boolean);
    return `
    <section class="hero wood">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">Bharatpur-5 · Chitwan · Est. 2079</span>
          <h1>Bringing the warmth of<br>  wood to your <em> home.</em></h1>
          <p>A Woodcraft/Furniture and interior decorations products manufacturing company with in-house Seasoning and Treatment facilities. Located in Chitwan.
            <div class="hero-cta">
            <a class="btn btn-primary" href="#/products">Browse Catalogues</a>
            <a class="btn btn-ghost" href="#/contact">Request a Quote</a>
          </div>
          <ul class="hero-badges">
            <li>Seasoned and Treated Wood</li>
            <li>Hand-carved detailing</li>
            <li>Avaliable across Nepal</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="stats-wrap">
      <div class="stats">
        <div class="stat"><b>4+</b><span>Years crafting</span></div>
        <div class="stat"><b>18</b><span>Skilled artisans</span></div>
        <div class="stat"><b>1,20+</b><span>Product Customization</span></div>
        <div class="stat"><b>18+</b><span>Wood species</span></div>
      </div>
    </div>

    <section class="section">
      <div class="section-head reveal">
        <span class="eyebrow">Products</span>
        <h2 class="section-title">Signature pieces from the workshop</h2>
        <p class="section-sub">    </p>
      </div>
      <div class="grid">${featured.map(productCard).join('')}</div>
    </section>

    <section class="craft-band">
      <div class="section">
        <div class="section-head reveal">
          <span class="eyebrow">Our Craft</span>
          <h2 class="section-title">From log to legacy</h2>
          <p class="section-sub">Four stages, no shortcuts. This is why a Chitwan piece feels
             different the moment you touch it.</p>
        </div>
        <div class="steps">
          <div class="step reveal"><b>01</b><h4>Sourcing</h4>
            <p>Timber selected from managed community forests around Chitwan and the Churia hills.</p></div>
          <div class="step reveal"><b>02</b><h4>Seasoning</h4>
            <p>Slow kiln-drying to 8–10% moisture so the wood never twists or splits in your home.</p></div>
          <div class="step reveal"><b>03</b><h4>Hand-carving</h4>
            <p>Joinery cut and motifs carved by hand — the Newari detailing that machines can't copy.</p></div>
          <div class="step reveal"><b>04</b><h4>Finishing</h4>
            <p>Natural oils, waxes and lacquers rubbed in by hand to bring out the grain, not hide it.</p></div>
        </div>
        <div class="chips reveal">
          <span class="chip">Sal</span><span class="chip">Teak</span><span class="chip">Sisau</span>
          <span class="chip">Katar</span><span class="chip">Mango</span><span class="chip">Sajiwan</span>
          <span class="chip">Bakaino</span><span class="chip">Khair</span>
        </div>
      </div>
    </section>

    <!--
    <section class="section">
      <div class="section-head reveal">
        <span class="eyebrow">Clients</span>
        <h2 class="section-title">What people say</h2>
      </div>
      <div class="quotes">
        <div class="quote reveal">
          <p>“They rebuilt our ancestral window exactly as it was — down to the carved lotus.
             You can't tell the new wood from the old.”</p>
          <footer><strong>R. Shrestha</strong><span>Heritage home, Bhaktapur</span></footer>
        </div>
        <div class="quote reveal">
          <p>“Forty rooms furnished, delivered on schedule, and three years later not a single
             wobbly chair. That says everything.”</p>
          <footer><strong>A. Gurung</strong><span>Boutique resort, Sauraha</span></footer>
        </div>
        <div class="quote reveal">
          <p>“The dining table is the first thing guests comment on. The grain is unreal —
             you can feel the hand work in it.”</p>
          <footer><strong>S. Thapa</strong><span>Private residence, Kathmandu</span></footer>
        </div>
      </div>
    </section>
    -->

    <section class="cta-band wood">
      <div class="cta-inner">
        <div>
          <h2>Want a custom designed product?</h2>
          <p>Send us a sketch, a photo or just a rough size. We'll quote it, build it, and deliver it.</p>
        </div>
        <a class="btn btn-primary" href="#/contact">Design with Us</a>
      </div>
    </section>`;
  }

  /* ---------- Products state ---------- */
  const state = { cat: 'all', q: '', sort: 'featured' };

  function catNavHTML() {
    const all = `<li><button class="cat-btn ${state.cat === 'all' ? 'active' : ''}" data-cat="all">
        All Catalogues <span class="count">${ALL_PRODUCTS.length}</span></button></li>`;
    const rest = CATALOGUES.map(c => `
      <li><button class="cat-btn ${state.cat === c.id ? 'active' : ''}" data-cat="${c.id}">
        ${c.name} <span class="count">${c.items.length}</span>
      </button></li>`).join('');
    return all + rest;
  }

  function viewProducts() {
    const current = CATALOGUES.find(c => c.id === state.cat);
    return `
    <div class="page-head">
      <span class="eyebrow">Catalogues</span>
      <h1 id="catalog-title">${current ? current.name : 'All Products'}</h1>
      <p class="section-sub" id="catalog-sub">${
        current ? current.blurb
        : 'Thirty pieces across six catalogues — furniture, kitchen ware, décor, handicrafts and architectural joinery. Everything is made to order.'
      }</p>
    </div>

    <div class="catalog-layout">
      <aside class="catalog-nav">
        <h5>Browse by catalogue</h5>
        <ul id="cat-nav">${catNavHTML()}</ul>
      </aside>

      <div class="catalog-main">
        <div class="toolbar">
          <div class="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
            </svg>
            <input type="search" id="search" inputmode="search" enterkeyhint="search"
                   autocomplete="off" placeholder="Search by name, wood or finish…"
                   value="${esc(state.q)}">
          </div>
          <select id="sort" aria-label="Sort products">
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name: A → Z</option>
          </select>
          <span id="result-count"></span>
        </div>
        <div class="grid" id="grid"></div>
      </div>
    </div>`;
  }

  function paintGrid() {
    const grid = document.getElementById('grid');
    const counter = document.getElementById('result-count');
    if (!grid) return;

    let list = ALL_PRODUCTS.slice();
    if (state.cat !== 'all') list = list.filter(p => p.catId === state.cat);

    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter(p =>
        (p.name + ' ' + p.wood + ' ' + p.finish + ' ' + p.catName).toLowerCase().includes(q)
      );
    }

    if (state.sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
    if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (state.sort === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : `<div class="empty">No pieces match your search.<br>Try another wood or catalogue.</div>`;

    if (counter) counter.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
    initReveal();
  }

  function mountProducts() {
    const nav = document.getElementById('cat-nav');
    const search = document.getElementById('search');
    const sort = document.getElementById('sort');
    if (sort) sort.value = state.sort;

    nav.addEventListener('click', e => {
      const btn = e.target.closest('[data-cat]');
      if (!btn) return;
      state.cat = btn.dataset.cat;
      nav.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('active', b === btn));
      history.replaceState(null, '', '#/products' + (state.cat === 'all' ? '' : '/' + state.cat));
      const title = document.getElementById('catalog-title');
      const sub = document.getElementById('catalog-sub');
      const current = CATALOGUES.find(c => c.id === state.cat);
      if (title) title.textContent = current ? current.name : 'All Products';
      if (sub) sub.textContent = current ? current.blurb
        : 'Thirty pieces across six catalogues — furniture, kitchen ware, décor, handicrafts and architectural joinery. Everything is made to order.';
      paintGrid();
    });

    let timer;
    search.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.q = e.target.value.trim(); paintGrid(); }, 180);
    });

    sort.addEventListener('change', e => { state.sort = e.target.value; paintGrid(); });

    paintGrid();
  }

  function viewContact() {
    return `
    <div class="page-head">
      <span class="eyebrow">Contact</span>
      <h1>Let's talk about your piece</h1>
      <p class="section-sub">Tell us what you need.</p>
    </div>

    <section class="section" style="padding-top:44px">
      <div class="contact-grid">
        <div>
          <div class="info-card">
            <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg></span>
            <div><h5>Factory &amp; Address</h5>
              <p>Bharatpur-5, Chitwan<br>Sun – Fri, 8:00 – 18:00</p></div>
          </div>
          <div class="info-card">
            <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5c0-1 1-2 2-2h2l2 5-2 1.5a12 12 0 0 0 5.5 5.5L15 13l5 2v2c0 1-1 2-2 2A15 15 0 0 1 4 5z"/></svg></span>
            <div><h5>Phone / Viber</h5>
              <p>+9779845048276<br>
              +9779855060624 
              </p></div>
          </div>
          <div class="info-card">
            <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg></span>
            <div><h5>Email</h5>
              <p>info@chitwanwoodcraft.com.np<br>sales@chitwanwoodcraft.com.np</p></div>
          </div>
          <div class="info-card">
            <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span>
            <div><h5>Lead time</h5>
              <p>Small items 1–2 weeks · Furniture 3–6 weeks<br>Doors &amp; joinery 6–10 weeks</p></div>
          </div>
        </div>

        <form id="contact-form">
          <div class="form-row">
            <div class="field">
              <label for="cf-name">Your name</label>
              <input id="cf-name" type="text" required placeholder="Ram Bahadur">
            </div>
            <div class="field">
              <label for="cf-phone">Phone</label>
              <input id="cf-phone" type="tel" placeholder="+977 …">
            </div>
          </div>
          <div class="field">
            <label for="cf-email">Email</label>
            <input id="cf-email" type="email" required placeholder="you@example.com">
          </div>
          <div class="field">
            <label for="cf-subject">What do you need?</label>
            <input id="cf-subject" type="text" placeholder="e.g. Carved teak door, 210 × 90 cm">
          </div>
          <div class="field">
            <label for="cf-msg">Details</label>
            <textarea id="cf-msg" rows="5" placeholder="Dimensions, wood preference, quantity, delivery location…"></textarea>
          </div>
          <button class="btn btn-primary" type="submit" style="width:100%">Send Enquiry</button>
        </form>
      </div>
    </section>`;
  }

  /* =========================================================
     5. ROUTER
     ========================================================= */
  const app = document.getElementById('app');

  function setActiveNav(route) {
    document.querySelectorAll('.nav a[data-route]').forEach(a => {
      a.classList.toggle('active', a.dataset.route === route);
    });
  }

  function router() {
    closeModal();
    const raw = (location.hash || '#/').replace(/^#\/?/, '');
    const parts = raw.split('/').filter(Boolean);
    const page = parts[0] || 'home';
    const param = parts[1] || '';

    document.getElementById('nav').classList.remove('open');
    document.getElementById('burger').classList.remove('open');

    if (page === 'products') {
      state.cat = param && CATALOGUES.some(c => c.id === param) ? param : 'all';
      app.innerHTML = viewProducts();
      setActiveNav('products');
      mountProducts();
    } else if (page === 'contact') {
      app.innerHTML = viewContact();
      setActiveNav('contact');
      initReveal();
      const form = document.getElementById('contact-form');
      form.addEventListener('submit', e => {
        e.preventDefault();
        toast("Thank you — we'll reply within one working day.");
        form.reset();
      });
    } else {
      app.innerHTML = viewHome();
      setActiveNav('home');
      initReveal();
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);

  /* =========================================================
     6. MOBILE MENU + FOOTER YEAR
     ========================================================= */
  const burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    const nav = document.getElementById('nav');
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* =========================================================
     7. KICKOFF
     ========================================================= */
  router();
})();