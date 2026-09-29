// ================================================================
// Cyndy Consultancy — Pricelist App Logic
// ================================================================

(function () {
  "use strict";

  const sectionsEl = document.getElementById("sections");
  const searchInput = document.getElementById("searchInput");
  const filterRow = document.getElementById("filterRow");
  const emptyState = document.getElementById("emptyState");

  // ---- Build filter pills ----
  const ALL_LABEL = "All Services";
  let activeFilter = ALL_LABEL;

  function buildPills() {
    const pills = [ALL_LABEL, ...CATEGORIES.map(c => c.title)];
    filterRow.innerHTML = "";
    pills.forEach(label => {
      const btn = document.createElement("button");
      btn.className = "pill" + (label === activeFilter ? " active" : "");
      btn.textContent = label;
      btn.addEventListener("click", () => {
        activeFilter = label;
        filterRow.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        render();
      });
      filterRow.appendChild(btn);
    });
  }

  // ---- Render sections ----
  function render() {
    const q = searchInput.value.trim().toLowerCase();
    sectionsEl.innerHTML = "";
    let totalVisible = 0;

    CATEGORIES.forEach(cat => {
      // Filter by category pill
      if (activeFilter !== ALL_LABEL && cat.title !== activeFilter) return;

      // Filter items by search
      const filtered = cat.items.filter(item => {
        if (!q) return true;
        return (
          item.country.toLowerCase().includes(q) ||
          item.name.toLowerCase().includes(q) ||
          item.service.toLowerCase().includes(q) ||
          item.level.toLowerCase().includes(q) ||
          item.notes.toLowerCase().includes(q)
        );
      });

      if (filtered.length === 0) return;
      totalVisible += filtered.length;

      // Section wrapper
      const section = document.createElement("div");
      section.className = "cat-section";
      section.id = "cat-" + cat.id;

      // Header
      section.innerHTML = `
        <div class="cat-header">
          <div class="cat-icon" style="background:${cat.iconBg}">${cat.icon}</div>
          <h2 class="cat-title">${cat.title}</h2>
          <span class="cat-count">${filtered.length} service${filtered.length > 1 ? "s" : ""}</span>
        </div>
      `;

      // Table
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      const table = document.createElement("table");
      table.className = "price-table";

      // Thead
      table.innerHTML = `
        <thead>
          <tr>
            <th>Country</th>
            <th>Opportunity / Service</th>
            <th class="col-level">Level</th>
            <th class="col-deadline">Timing</th>
            <th>Price</th>
          </tr>
        </thead>
      `;
      const tbody = document.createElement("tbody");

      filtered.forEach(item => {
        const code = FLAG_MAP[item.country];
        const flagHtml = (code && code !== "globe")
          ? `<img src="https://flagcdn.com/20x15/${code}.png" srcset="https://flagcdn.com/40x30/${code}.png 2x" width="20" height="15" alt="${item.country}" class="flag-img" loading="lazy">`
          : `<span class="flag-globe">🌐</span>`;
        const lc = levelClass(item.level);
        const sc = serviceClass(item.service);
        const priceIsSet = item.price && !item.price.includes("Insert");
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><span class="country-badge">${flagHtml}${item.country}</span></td>
          <td><strong>${item.name}</strong></td>
          <td class="col-level" data-label="Level"><span class="level-badge ${lc}">${item.level}</span></td>
          <td class="col-deadline" data-label="Timing">${item.deadline}</td>
          <td data-label="Price"><span class="price-val ${priceIsSet ? "" : "tbd"}">${priceIsSet ? item.price : "Contact Us"}</span></td>
        `;
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      wrap.appendChild(table);
      section.appendChild(wrap);
      sectionsEl.appendChild(section);

      // Trigger scroll animation
      requestAnimationFrame(() => {
        section.classList.add("visible");
      });
    });

    // Empty state
    if (totalVisible === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  // ---- Search debounce ----
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(render, 200);
  });

  // ---- Counter animation ----
  function animateCounters() {
    document.querySelectorAll(".stat-num[data-count]").forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // ---- Intersection observer for scroll-in ----
  function observeSections() {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );
    document.querySelectorAll(".cat-section").forEach(s => obs.observe(s));
  }

  // ---- Init ----
  buildPills();
  render();
  animateCounters();
  // Re-observe after initial render
  setTimeout(observeSections, 100);
})();
