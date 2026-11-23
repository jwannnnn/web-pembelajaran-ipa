/* =========================================================
   Belajar Sains Interaktif
   Data materi, video, dan kuis ada di array TOPICS.
   Untuk menambah materi, cukup tambahkan objek baru.
   ========================================================= */

   const TOPICS = [
    {
      id: "hakikat-sains",
      emoji: "📏",
      title: "Hakikat Sains dan Pengukuran",
      desc: "Mengenal sains dan cara mengukur benda dengan alat ukur.",
      videoId: "_uxl4UfFgUg",
      sections: [
        {
          heading: "Apa itu Sains?",
          type: "text",
          content: [
            "Sains atau IPA adalah ilmu yang mempelajari alam dan segala sesuatu yang terjadi di sekitar kita. Dengan belajar sains, kita bisa mengetahui bagaimana alam bekerja melalui pengamatan dan percobaan.",
            "Pengukuran adalah kegiatan mengetahui ukuran suatu benda menggunakan alat ukur tertentu."
          ]
        },
        {
          heading: "Contoh Pengukuran Sehari-hari",
          type: "list",
          content: [
            "Mengukur panjang meja menggunakan penggaris.",
            "Mengukur berat badan menggunakan timbangan.",
            "Mengukur suhu tubuh menggunakan termometer.",
            "Mengukur waktu menggunakan stopwatch."
          ]
        },
        {
          heading: "Alat Ukur dan Satuannya",
          hint: "Klik kartu untuk melihat satuannya.",
          type: "flip",
          content: [
            { t: "Penggaris", d: "Satuan: sentimeter (cm) atau meter (m)." },
            { t: "Timbangan", d: "Satuan: gram (g) atau kilogram (kg)." },
            { t: "Termometer", d: "Satuan: derajat Celsius (°C)." },
            { t: "Stopwatch", d: "Satuan: sekon (s)." }
          ]
        }
      ],
      conclusion: "Sains membantu kita memahami alam, sedangkan pengukuran digunakan untuk mengetahui ukuran suatu benda secara tepat.",
      quiz: [
        {
          q: "Alat yang digunakan untuk mengukur suhu tubuh adalah...",
          options: ["Penggaris", "Termometer", "Stopwatch", "Timbangan"],
          answer: 1,
          explain: "Termometer mengukur suhu dengan satuan derajat Celsius (°C)."
        },
        {
          q: "Satuan waktu yang diukur dengan stopwatch adalah...",
          options: ["Gram", "Meter", "Sekon", "Celsius"],
          answer: 2,
          explain: "Stopwatch mengukur waktu dalam sekon (s)."
        },
        {
          q: "Sains mempelajari alam melalui...",
          options: ["Tebak-tebakan", "Pengamatan dan percobaan", "Cerita dongeng", "Hafalan saja"],
          answer: 1,
          explain: "Sains bekerja lewat pengamatan dan percobaan."
        }
      ]
    },
    {
      id: "zat-perubahannya",
      emoji: "🧊",
      title: "Zat dan Perubahannya",
      desc: "Wujud zat, perubahan wujud, serta perubahan fisika dan kimia.",
      videoId: "CfwPsKdC5w8",
      sections: [
        {
          heading: "Pengertian Zat",
          type: "text",
          content: [
            "Zat adalah segala sesuatu yang memiliki massa dan menempati ruang. Contohnya air, udara, batu, dan minyak."
          ]
        },
        {
          heading: "Tiga Wujud Zat",
          type: "pairs",
          content: [
            { t: "Zat Padat", d: "Bentuk dan volume tetap. Contoh: batu, kayu, pensil." },
            { t: "Zat Cair", d: "Volume tetap, bentuk mengikuti wadah. Contoh: air, minyak, susu." },
            { t: "Zat Gas", d: "Bentuk dan volume mengikuti ruang. Contoh: udara, uap air." }
          ]
        },
        {
          heading: "Perubahan Wujud Zat",
          hint: "Klik kartu untuk melihat penjelasannya.",
          type: "flip",
          content: [
            { t: "Mencair", d: "Es berubah menjadi air." },
            { t: "Membeku", d: "Air berubah menjadi es." },
            { t: "Menguap", d: "Air berubah menjadi uap." },
            { t: "Mengembun", d: "Uap air berubah menjadi titik-titik air." },
            { t: "Menyublim", d: "Kapur barus berubah menjadi gas." },
            { t: "Mengkristal", d: "Gas berubah menjadi padat." }
          ]
        },
        {
          heading: "Perubahan Fisika dan Kimia",
          type: "pairs",
          content: [
            { t: "Perubahan Fisika", d: "Tidak menghasilkan zat baru. Contoh: es mencair." },
            { t: "Perubahan Kimia", d: "Menghasilkan zat baru. Contoh: kayu terbakar, besi berkarat." }
          ]
        }
      ],
      conclusion: "Zat memiliki tiga wujud, yaitu padat, cair, dan gas. Zat juga dapat mengalami perubahan bentuk maupun perubahan yang menghasilkan zat baru.",
      quiz: [
        {
          q: "Zat yang bentuknya mengikuti wadah tetapi volumenya tetap adalah...",
          options: ["Zat padat", "Zat cair", "Zat gas", "Semua benar"],
          answer: 1,
          explain: "Zat cair memiliki volume tetap, tetapi bentuknya mengikuti wadah."
        },
        {
          q: "Es berubah menjadi air disebut...",
          options: ["Membeku", "Menguap", "Mencair", "Mengembun"],
          answer: 2,
          explain: "Perubahan es menjadi air disebut mencair."
        },
        {
          q: "Contoh perubahan kimia adalah...",
          options: ["Es mencair", "Besi berkarat", "Air menguap", "Garam larut"],
          answer: 1,
          explain: "Besi berkarat menghasilkan zat baru (karat), jadi termasuk perubahan kimia."
        }
      ]
    },
    {
      id: "suhu-kalor-pemuaian",
      emoji: "🌡️",
      title: "Suhu, Kalor, dan Pemuaian",
      desc: "Panas dan dingin, perpindahan kalor, dan pemuaian benda.",
      videoId: "9D0x-u9LegE",
      sections: [
        {
          heading: "Suhu dan Kalor",
          type: "text",
          content: [
            "Suhu adalah ukuran yang menunjukkan panas atau dinginnya suatu benda. Suhu diukur menggunakan termometer dengan satuan derajat Celsius (°C).",
            "Kalor adalah energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah."
          ]
        },
        {
          heading: "Perpindahan Kalor",
          type: "pairs",
          content: [
            { t: "Konduksi", d: "Panas berpindah melalui benda. Contoh: sendok panas saat dimasukkan ke air panas." },
            { t: "Konveksi", d: "Panas berpindah melalui aliran zat. Contoh: air bergerak saat dipanaskan." },
            { t: "Radiasi", d: "Panas berpindah tanpa perantara. Contoh: panas Matahari." }
          ]
        },
        {
          heading: "Pemuaian",
          type: "text",
          content: [
            "Pemuaian adalah bertambahnya ukuran benda akibat kenaikan suhu. Contohnya, rel kereta api diberi celah agar tidak rusak saat memuai."
          ]
        }
      ],
      conclusion: "Suhu menunjukkan panas atau dinginnya benda, kalor merupakan energi panas yang berpindah, dan pemuaian terjadi ketika ukuran benda bertambah akibat kenaikan suhu.",
      quiz: [
        {
          q: "Panas Matahari sampai ke Bumi melalui perpindahan kalor secara...",
          options: ["Konduksi", "Konveksi", "Radiasi", "Pemuaian"],
          answer: 2,
          explain: "Radiasi adalah perpindahan panas tanpa perantara."
        },
        {
          q: "Rel kereta api diberi celah agar...",
          options: ["Terlihat bagus", "Tidak rusak saat memuai", "Kereta lebih cepat", "Lebih murah"],
          answer: 1,
          explain: "Saat panas, rel memuai. Celah mencegah rel melengkung atau rusak."
        },
        {
          q: "Kalor berpindah dari benda bersuhu...",
          options: ["Rendah ke tinggi", "Tinggi ke rendah", "Sama ke sama", "Tidak berpindah"],
          answer: 1,
          explain: "Kalor selalu berpindah dari benda bersuhu tinggi ke benda bersuhu rendah."
        }
      ]
    },
    {
      id: "gerak-gaya",
      emoji: "🚴",
      title: "Gerak dan Gaya",
      desc: "Perubahan posisi benda dan jenis-jenis gaya.",
      videoId: "IIU3kbuwADM",
      sections: [
        {
          heading: "Pengertian",
          type: "text",
          content: [
            "Gerak adalah perubahan posisi suatu benda dari tempat semula. Gaya adalah tarikan atau dorongan yang dapat memengaruhi gerakan suatu benda.",
            "Gaya dapat membuat benda bergerak, berhenti, berubah arah, atau berubah bentuk."
          ]
        },
        {
          heading: "Contoh Sehari-hari",
          type: "list",
          content: [
            "Bola bergerak ketika ditendang.",
            "Pintu terbuka ketika didorong.",
            "Sepeda berhenti ketika direm."
          ]
        },
        {
          heading: "Jenis-jenis Gaya",
          hint: "Klik kartu untuk melihat contohnya.",
          type: "flip",
          content: [
            { t: "Gaya Otot", d: "Contoh: saat mendorong meja." },
            { t: "Gaya Gravitasi", d: "Contoh: buah jatuh dari pohon." },
            { t: "Gaya Gesek", d: "Contoh: rem sepeda menghentikan roda." },
            { t: "Gaya Magnet", d: "Contoh: magnet menarik benda dari besi." }
          ]
        }
      ],
      conclusion: "Gerak adalah perubahan posisi benda, sedangkan gaya merupakan tarikan atau dorongan yang dapat memengaruhi gerak benda.",
      quiz: [
        {
          q: "Buah jatuh dari pohon disebabkan oleh gaya...",
          options: ["Otot", "Gesek", "Magnet", "Gravitasi"],
          answer: 3,
          explain: "Gaya gravitasi menarik benda ke arah Bumi."
        },
        {
          q: "Gaya adalah...",
          options: ["Cahaya", "Tarikan atau dorongan", "Suara", "Warna benda"],
          answer: 1,
          explain: "Gaya adalah tarikan atau dorongan pada suatu benda."
        },
        {
          q: "Rem sepeda dapat menghentikan roda karena adanya gaya...",
          options: ["Gesek", "Magnet", "Otot", "Listrik"],
          answer: 0,
          explain: "Gaya gesek antara rem dan roda memperlambat dan menghentikan roda."
        }
      ]
    },
    {
      id: "klasifikasi-makhluk-hidup",
      emoji: "🐱",
      title: "Klasifikasi Makhluk Hidup",
      desc: "Ciri makhluk hidup dan cara mengelompokkannya.",
      videoId: "RCa5w72uSX4",
      sections: [
        {
          heading: "Pengertian Klasifikasi",
          type: "text",
          content: [
            "Klasifikasi makhluk hidup adalah cara mengelompokkan makhluk hidup berdasarkan persamaan dan perbedaan ciri-cirinya. Tujuannya agar kita lebih mudah mengenali dan mempelajari berbagai jenis makhluk hidup."
          ]
        },
        {
          heading: "Ciri-ciri Makhluk Hidup",
          type: "list",
          content: [
            "Bernapas",
            "Tumbuh",
            "Bergerak",
            "Membutuhkan makanan",
            "Berkembang biak"
          ]
        },
        {
          heading: "Pengelompokan Hewan",
          hint: "Klik kartu untuk melihat contohnya.",
          type: "flip",
          content: [
            { t: "Mamalia", d: "Contoh: kucing." },
            { t: "Ikan", d: "Contoh: ikan." },
            { t: "Burung", d: "Contoh: ayam." },
            { t: "Reptil", d: "Contoh: kadal." }
          ]
        }
      ],
      conclusion: "Makhluk hidup dikelompokkan berdasarkan persamaan dan perbedaan cirinya agar lebih mudah dipelajari.",
      quiz: [
        {
          q: "Kucing termasuk kelompok...",
          options: ["Reptil", "Burung", "Ikan", "Mamalia"],
          answer: 3,
          explain: "Kucing termasuk mamalia."
        },
        {
          q: "Tujuan klasifikasi makhluk hidup adalah...",
          options: ["Mempersulit belajar", "Memudahkan mengenali dan mempelajari", "Menghitung usia", "Menentukan harga"],
          answer: 1,
          explain: "Klasifikasi membantu kita mengenali dan mempelajari makhluk hidup dengan lebih mudah."
        },
        {
          q: "Manakah yang BUKAN ciri makhluk hidup?",
          options: ["Tumbuh", "Bernapas", "Berkembang biak", "Tidak butuh makanan"],
          answer: 3,
          explain: "Makhluk hidup membutuhkan makanan."
        }
      ]
    },
    {
      id: "ekologi-keanekaragaman-hayati",
      emoji: "🌿",
      title: "Ekologi dan Keanekaragaman Hayati Indonesia",
      desc: "Hubungan makhluk hidup dengan lingkungan dan kekayaan hayati Indonesia.",
      videoId: "1T7r3l-6irQ",
      sections: [
        {
          heading: "Ekologi",
          type: "text",
          content: [
            "Ekologi adalah ilmu yang mempelajari hubungan antara makhluk hidup dengan lingkungannya."
          ]
        },
        {
          heading: "Komponen Ekosistem",
          type: "pairs",
          content: [
            { t: "Biotik", d: "Semua makhluk hidup, seperti manusia, hewan, dan tumbuhan." },
            { t: "Abiotik", d: "Benda tak hidup, seperti air, tanah, udara, dan cahaya matahari." }
          ]
        },
        {
          heading: "Keanekaragaman Hayati",
          type: "text",
          content: [
            "Keanekaragaman hayati adalah berbagai macam jenis makhluk hidup yang ada di bumi. Indonesia memiliki keanekaragaman hayati yang tinggi."
          ]
        },
        {
          heading: "Contoh dari Indonesia",
          hint: "Klik kartu untuk melihat asalnya.",
          type: "flip",
          content: [
            { t: "Komodo", d: "Berasal dari Nusa Tenggara Timur." },
            { t: "Orang utan", d: "Berasal dari Kalimantan." },
            { t: "Bunga Rafflesia", d: "Berasal dari Bengkulu." }
          ]
        }
      ],
      conclusion: "Makhluk hidup saling berhubungan dengan lingkungannya. Indonesia memiliki banyak jenis hewan dan tumbuhan yang harus dijaga kelestariannya.",
      quiz: [
        {
          q: "Air, tanah, dan udara termasuk komponen...",
          options: ["Biotik", "Abiotik", "Hayati", "Konsumen"],
          answer: 1,
          explain: "Benda tak hidup disebut komponen abiotik."
        },
        {
          q: "Orang utan berasal dari...",
          options: ["Kalimantan", "Bengkulu", "Nusa Tenggara Timur", "Papua"],
          answer: 0,
          explain: "Orang utan berasal dari Kalimantan."
        },
        {
          q: "Ekologi mempelajari...",
          options: ["Bintang di langit", "Hubungan makhluk hidup dengan lingkungannya", "Mesin dan alat", "Sejarah kerajaan"],
          answer: 1,
          explain: "Ekologi adalah ilmu tentang hubungan makhluk hidup dengan lingkungannya."
        }
      ]
    },
    {
      id: "tata-surya",
      emoji: "🪐",
      title: "Tata Surya",
      desc: "Matahari, delapan planet, dan fenomena di tata surya.",
      videoId: "FwZH1JD08SQ",
      sections: [
        {
          heading: "Pengertian Tata Surya",
          type: "text",
          content: [
            "Tata surya adalah kumpulan benda langit dengan Matahari sebagai pusatnya. Di dalamnya terdapat Matahari, planet, satelit, asteroid, dan komet."
          ]
        },
        {
          heading: "Delapan Planet (Berurutan dari Matahari)",
          type: "olist",
          content: ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"]
        },
        {
          heading: "Fenomena dalam Tata Surya",
          type: "list",
          content: [
            "Siang dan malam terjadi karena Bumi berputar pada porosnya.",
            "Bulan terlihat bercahaya karena memantulkan cahaya Matahari.",
            "Bumi mengelilingi Matahari selama sekitar 365 hari."
          ]
        }
      ],
      conclusion: "Tata surya merupakan kumpulan benda langit yang berpusat pada Matahari, termasuk Bumi sebagai tempat tinggal manusia dan makhluk hidup lainnya.",
      quiz: [
        {
          q: "Pusat tata surya adalah...",
          options: ["Bumi", "Bulan", "Matahari", "Mars"],
          answer: 2,
          explain: "Matahari menjadi pusat tata surya."
        },
        {
          q: "Planet ketiga dari Matahari adalah...",
          options: ["Venus", "Bumi", "Mars", "Merkurius"],
          answer: 1,
          explain: "Urutannya: Merkurius, Venus, Bumi."
        },
        {
          q: "Siang dan malam terjadi karena...",
          options: ["Bumi mengelilingi Matahari", "Bulan berputar", "Bumi berputar pada porosnya", "Matahari bergerak"],
          answer: 2,
          explain: "Rotasi Bumi pada porosnya menyebabkan siang dan malam."
        }
      ]
    }
  ];
  
  /* ---------------- State & storage ---------------- */
  
  const STORE_KEY = "sains-interaktif-v1";
  
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* abaikan */ }
    return { done: {}, scores: {}, theme: null };
  }
  
  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) { /* abaikan */ }
  }
  
  const state = loadState();
  
  /* ---------------- Elemen ---------------- */
  
  const $content = document.getElementById("content");
  const $nav = document.getElementById("topicNav");
  const $sidebar = document.getElementById("sidebar");
  const $overlay = document.getElementById("overlay");
  const $search = document.getElementById("searchInput");
  const $progressFill = document.getElementById("progressFill");
  const $progressText = document.getElementById("progressText");
  const $themeBtn = document.getElementById("themeBtn");
  
  /* ---------------- Util ---------------- */
  
  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }
  
  function doneCount() {
    return TOPICS.filter(t => state.done[t.id]).length;
  }
  
  /* ---------------- Tema ---------------- */
  
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
  
  function initTheme() {
    const preferred = state.theme ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(preferred);
  }
  
  $themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    state.theme = next;
    saveState();
    applyTheme(next);
  });
  
  /* ---------------- Sidebar ---------------- */
  
  function renderNav(filter = "") {
    const q = filter.trim().toLowerCase();
    const items = TOPICS
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => !q || t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
  
    if (!items.length) {
      $nav.innerHTML = '<div class="empty">Materi tidak ditemukan.</div>';
      return;
    }
  
    const currentId = getCurrentId();
    $nav.innerHTML = items.map(({ t, i }) => `
      <a class="topic-link ${t.id === currentId ? "active" : ""} ${state.done[t.id] ? "done" : ""}"
         href="#/${t.id}" data-id="${t.id}">
        <span class="num">${state.done[t.id] ? "✓" : i + 1}</span>
        <span class="emoji">${t.emoji}</span>
        <span>${esc(t.title)}</span>
      </a>
    `).join("");
  }
  
  function updateProgress() {
    const n = doneCount();
    const pct = Math.round((n / TOPICS.length) * 100);
    $progressFill.style.width = pct + "%";
    $progressText.textContent = `${n}/${TOPICS.length} selesai`;
  }
  
  function openSidebar() {
    $sidebar.classList.add("open");
    $overlay.classList.add("show");
  }
  function closeSidebar() {
    $sidebar.classList.remove("open");
    $overlay.classList.remove("show");
  }
  
  document.getElementById("menuBtn").addEventListener("click", () => {
    $sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
  });
  $overlay.addEventListener("click", closeSidebar);
  $search.addEventListener("input", () => renderNav($search.value));
  
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("Hapus semua progres belajar dan skor kuis?")) {
      state.done = {};
      state.scores = {};
      saveState();
      updateProgress();
      renderNav($search.value);
      route();
    }
  });
  
  /* ---------------- Routing ---------------- */
  
  function getCurrentId() {
    const m = location.hash.match(/^#\/(.+)$/);
    return m ? m[1] : null;
  }
  
  function route() {
    const id = getCurrentId();
    const topic = TOPICS.find(t => t.id === id);
    if (topic) {
      renderTopic(topic);
    } else {
      renderHome();
    }
    renderNav($search.value);
    closeSidebar();
    window.scrollTo({ top: 0 });
    $content.focus({ preventScroll: true });
  }
  
  window.addEventListener("hashchange", route);
  
  document.getElementById("brandLink").addEventListener("click", (e) => {
    e.preventDefault();
    location.hash = "";
    route();
  });
  
  /* ---------------- Halaman Beranda ---------------- */
  
  function renderHome() {
    document.title = "Belajar Sains Interaktif";
    const next = TOPICS.find(t => !state.done[t.id]) || TOPICS[0];
  
    $content.innerHTML = `
      <section class="hero">
        <h1>Selamat datang! 👋</h1>
        <p>Pelajari ${TOPICS.length} materi sains lewat bacaan singkat, video pembelajaran, dan kuis interaktif. Progres belajarmu tersimpan otomatis.</p>
        <a class="btn" href="#/${next.id}">${doneCount() ? "Lanjut belajar" : "Mulai belajar"}</a>
      </section>
  
      <div class="card-grid">
        ${TOPICS.map((t, i) => `
          <a class="topic-card" href="#/${t.id}">
            ${state.done[t.id] ? '<span class="tag">Selesai ✓</span>' : ""}
            <div class="emoji">${t.emoji}</div>
            <h3>${i + 1}. ${esc(t.title)}</h3>
            <p style="color:var(--muted);font-size:.9rem;margin-top:4px">${esc(t.desc)}</p>
          </a>
        `).join("")}
      </div>
    `;
  }
  
  /* ---------------- Halaman Materi ---------------- */
  
  function renderSection(sec) {
    let body = "";
    switch (sec.type) {
      case "text":
        body = sec.content.map(p => `<p>${esc(p)}</p>`).join("");
        break;
      case "list":
        body = `<ul class="bullets">${sec.content.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
        break;
      case "olist":
        body = `<ol class="bullets">${sec.content.map(li => `<li>${esc(li)}</li>`).join("")}</ol>`;
        break;
      case "pairs":
        body = `<div class="pair-grid">${sec.content.map(p => `
          <div class="pair"><b>${esc(p.t)}</b><span>${esc(p.d)}</span></div>`).join("")}</div>`;
        break;
      case "flip":
        body = `
          ${sec.hint ? `<p class="hint">${esc(sec.hint)}</p>` : ""}
          <div class="flip-grid">${sec.content.map(p => `
            <button class="flip" type="button">
              <span class="front">${esc(p.t)}</span>
              <span class="back">${esc(p.d)}</span>
            </button>`).join("")}</div>`;
        break;
    }
    return `<h3>${esc(sec.heading)}</h3>${body}`;
  }
  
  function renderTopic(topic) {
    document.title = topic.title + " | Belajar Sains";
    const idx = TOPICS.indexOf(topic);
    const prev = TOPICS[idx - 1];
    const next = TOPICS[idx + 1];
    const isDone = !!state.done[topic.id];
    const best = state.scores[topic.id];
  
    $content.innerHTML = `
      <div class="topic-header">
        <div class="eyebrow">MATERI ${idx + 1} DARI ${TOPICS.length}</div>
        <h1>${topic.emoji} ${esc(topic.title)}</h1>
        <p>${esc(topic.desc)}</p>
      </div>
  
      <section class="panel">
        <h2>🎬 Video Pembelajaran</h2>
        <div class="video-wrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${topic.videoId}"
            title="Video ${esc(topic.title)}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <p class="video-note">Video tidak tampil? <a href="https://www.youtube.com/watch?v=${topic.videoId}" target="_blank" rel="noopener">Buka di YouTube</a>.</p>
      </section>
  
      <section class="panel">
        <h2>📖 Materi</h2>
        ${topic.sections.map(renderSection).join("")}
        <div class="conclusion"><b>Kesimpulan:</b> ${esc(topic.conclusion)}</div>
      </section>
  
      <section class="panel" id="quizPanel">
        <h2>📝 Kuis Singkat</h2>
        ${best !== undefined ? `<p class="hint">Skor terbaikmu: ${best}/${topic.quiz.length}</p>` : ""}
        <div id="quizBody"></div>
      </section>
  
      <div class="actions">
        <button id="doneBtn" class="btn ${isDone ? "secondary" : "good"}" type="button">
          ${isDone ? "✓ Sudah selesai (klik untuk batal)" : "Tandai selesai"}
        </button>
      </div>
  
      <div class="pager">
        ${prev ? `<a class="btn secondary" href="#/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="#/${next.id}">${esc(next.title)} →</a>` : ""}
      </div>
    `;
  
    // Kartu flip
    $content.querySelectorAll(".flip").forEach(btn => {
      btn.addEventListener("click", () => btn.classList.toggle("open"));
    });
  
    // Tombol selesai
    document.getElementById("doneBtn").addEventListener("click", () => {
      state.done[topic.id] = !state.done[topic.id];
      saveState();
      updateProgress();
      renderNav($search.value);
      renderTopic(topic);
    });
  
    renderQuiz(topic);
  }
  
  /* ---------------- Kuis ---------------- */
  
  function renderQuiz(topic) {
    const body = document.getElementById("quizBody");
    let answered = 0;
    let correct = 0;
    const total = topic.quiz.length;
  
    body.innerHTML = topic.quiz.map((item, qi) => `
      <div class="quiz-q" data-q="${qi}">
        <div class="q-text">${qi + 1}. ${esc(item.q)}</div>
        <div class="options">
          ${item.options.map((opt, oi) => `
            <button class="option" type="button" data-o="${oi}">${esc(opt)}</button>
          `).join("")}
        </div>
        <div class="explain" hidden></div>
      </div>
    `).join("") + `<div id="quizResult"></div>`;
  
    body.querySelectorAll(".quiz-q").forEach(block => {
      const qi = Number(block.dataset.q);
      const item = topic.quiz[qi];
      const buttons = block.querySelectorAll(".option");
      const explain = block.querySelector(".explain");
  
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const chosen = Number(btn.dataset.o);
          buttons.forEach(b => (b.disabled = true));
          buttons[item.answer].classList.add("correct");
          if (chosen === item.answer) {
            correct++;
          } else {
            btn.classList.add("wrong");
          }
          explain.hidden = false;
          explain.textContent = (chosen === item.answer ? "Benar! " : "Kurang tepat. ") + item.explain;
          answered++;
          if (answered === total) finishQuiz(topic, correct, total);
        });
      });
    });
  }
  
  function finishQuiz(topic, correct, total) {
    const prevBest = state.scores[topic.id];
    if (prevBest === undefined || correct > prevBest) {
      state.scores[topic.id] = correct;
    }
    if (correct >= Math.ceil(total * 0.6)) {
      state.done[topic.id] = true;
    }
    saveState();
    updateProgress();
    renderNav($search.value);
  
    const pct = Math.round((correct / total) * 100);
    const msg =
      pct === 100 ? "Sempurna! 🎉" :
      pct >= 60 ? "Bagus, terus semangat! 👍" :
      "Ayo coba lagi setelah membaca materi dan menonton video. 💪";
  
    const res = document.getElementById("quizResult");
    res.innerHTML = `
      <div class="quiz-result">
        <div class="score">${correct} / ${total}</div>
        <p>${msg}</p>
        <button class="btn secondary" id="retryBtn" type="button" style="margin-top:8px">Ulangi kuis</button>
      </div>`;
    document.getElementById("retryBtn").addEventListener("click", () => renderTopic(topic));
  }
  
  /* ---------------- Mulai ---------------- */
  
  initTheme();
  updateProgress();
  route();