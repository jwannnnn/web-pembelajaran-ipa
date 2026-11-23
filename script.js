/* =========================================================
   IPA VII - Belajar Sains Interaktif
   File: script.js
   ========================================================= */

   "use strict";

   /* ---------------- 1. Konfigurasi Rekap Nilai ---------------- */
   // Tempelkan URL Web App (/exec) dari Google Apps Script di dalam tanda kutip di bawah:
   const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyfrSmAmkDXqCV3yhhwmpQiu3zCBzwbbH6Ned7YG0tDWJ1ubjv2WFLbbM_ESv1IH_Kz/exechttps://script.google.com/macros/s/PASTE_URL_APPS_SCRIPT_DI_SINI/exec";
   const STORE_KEY = "ipa7-sains-interaktif-v1";
   
   /* ---------------- 2. Data Materi, Video & Kuis ---------------- */
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
   
   /* ---------------- 3. Manajemen State & Storage ---------------- */
   function loadState() {
     const defaultState = { done: {}, scores: {}, theme: null, studentName: "" };
     try {
       const raw = localStorage.getItem(STORE_KEY);
       if (!raw) return defaultState;
       return { ...defaultState, ...JSON.parse(raw) };
     } catch (err) {
       return defaultState;
     }
   }
   
   function saveState() {
     try {
       localStorage.setItem(STORE_KEY, JSON.stringify(state));
     } catch (err) {
       // Abaikan jika storage penuh/diblokir
     }
   }
   
   const state = loadState();
   
   /* ---------------- 4. Referensi Elemen DOM ---------------- */
   const dom = {
     welcomeScreen: document.getElementById("welcomeScreen"),
     welcomeForm: document.getElementById("welcomeForm"),
     studentNameInput: document.getElementById("studentNameInput"),
     studentBadge: document.getElementById("studentBadge"),
     brandLink: document.getElementById("brandLink"),
     menuBtn: document.getElementById("menuBtn"),
     themeBtn: document.getElementById("themeBtn"),
     progressText: document.getElementById("progressText"),
     progressFill: document.getElementById("progressFill"),
     sidebar: document.getElementById("sidebar"),
     searchInput: document.getElementById("searchInput"),
     topicNav: document.getElementById("topicNav"),
     resetBtn: document.getElementById("resetBtn"),
     overlay: document.getElementById("overlay"),
     content: document.getElementById("content")
   };
   
   /* ---------------- 5. Helper & Pengiriman Nilai ---------------- */
   function escapeHTML(str) {
     const div = document.createElement("div");
     div.textContent = String(str);
     return div.innerHTML;
   }
   
   function getCompletedCount() {
     return TOPICS.filter((topic) => Boolean(state.done[topic.id])).length;
   }
   
   async function sendScoreToTeacher(studentName, topicTitle, score, totalQuestions) {
     if (!WEBHOOK_URL || WEBHOOK_URL.includes("PASTE_URL")) {
       return false;
     }
   
     try {
       await fetch(WEBHOOK_URL, {
         method: "POST",
         mode: "no-cors",
         headers: { "Content-Type": "text/plain;charset=utf-8" },
         body: JSON.stringify({
           nama: studentName,
           materi: topicTitle,
           skor: score,
           total: totalQuestions
         })
       });
       return true;
     } catch (err) {
       return false;
     }
   }
   
   /* ---------------- 6. Layar Pembuka & Nama Siswa ---------------- */
   function syncStudentProfile() {
     const name = (state.studentName || "").trim();
     if (name) {
       dom.welcomeScreen.classList.add("hidden");
       dom.studentBadge.hidden = false;
       dom.studentBadge.textContent = `👤 ${name}`;
     } else {
       dom.welcomeScreen.classList.remove("hidden");
       dom.studentBadge.hidden = true;
       dom.studentNameInput.value = "";
     }
   }
   
   dom.welcomeForm.addEventListener("submit", (e) => {
     e.preventDefault();
     const enteredName = dom.studentNameInput.value.trim();
     if (!enteredName) return;
   
     state.studentName = enteredName;
     saveState();
     syncStudentProfile();
     renderCurrentRoute();
   });
   
   dom.studentBadge.addEventListener("click", () => {
     dom.studentNameInput.value = state.studentName || "";
     dom.welcomeScreen.classList.remove("hidden");
     setTimeout(() => dom.studentNameInput.focus(), 50);
   });
   
   /* ---------------- 7. Tema Gelap / Terang ---------------- */
   function applyTheme(theme) {
     document.documentElement.setAttribute("data-theme", theme);
     dom.themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
   }
   
   function initTheme() {
     const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
     const activeTheme = state.theme || (systemDark ? "dark" : "light");
     applyTheme(activeTheme);
   }
   
   dom.themeBtn.addEventListener("click", () => {
     const current = document.documentElement.getAttribute("data-theme");
     const next = current === "dark" ? "light" : "dark";
     state.theme = next;
     saveState();
     applyTheme(next);
   });
   
   /* ---------------- 8. Sidebar, Pencarian & Progres ---------------- */
   function updateProgressUI() {
     const done = getCompletedCount();
     const percentage = Math.round((done / TOPICS.length) * 100);
     dom.progressFill.style.width = `${percentage}%`;
     dom.progressText.textContent = `${done}/${TOPICS.length} selesai`;
   }
   
   function renderSidebarNav(keyword = "") {
     const query = keyword.trim().toLowerCase();
     const filtered = TOPICS
       .map((topic, index) => ({ topic, index }))
       .filter(({ topic }) => !query || topic.title.toLowerCase().includes(query) || topic.desc.toLowerCase().includes(query));
   
     if (filtered.length === 0) {
       dom.topicNav.innerHTML = '<div class="empty">Materi tidak ditemukan.</div>';
       return;
     }
   
     const activeId = getActiveTopicId();
     dom.topicNav.innerHTML = filtered.map(({ topic, index }) => {
       const isActive = topic.id === activeId ? "active" : "";
       const isDone = state.done[topic.id] ? "done" : "";
       const badge = state.done[topic.id] ? "✓" : index + 1;
   
       return `
         <a class="topic-link ${isActive} ${isDone}" href="#/${topic.id}">
           <span class="num">${badge}</span>
           <span class="emoji">${topic.emoji}</span>
           <span>${escapeHTML(topic.title)}</span>
         </a>
       `;
     }).join("");
   }
   
   function toggleMobileSidebar(forceOpen) {
     const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !dom.sidebar.classList.contains("open");
     dom.sidebar.classList.toggle("open", shouldOpen);
     dom.overlay.classList.toggle("show", shouldOpen);
   }
   
   dom.menuBtn.addEventListener("click", () => toggleMobileSidebar());
   dom.overlay.addEventListener("click", () => toggleMobileSidebar(false));
   dom.searchInput.addEventListener("input", () => renderSidebarNav(dom.searchInput.value));
   
   dom.resetBtn.addEventListener("click", () => {
     if (!confirm("Hapus semua progres belajar, skor kuis, dan nama siswa di perangkat ini?")) return;
   
     state.done = {};
     state.scores = {};
     state.studentName = "";
     saveState();
   
     updateProgressUI();
     renderSidebarNav(dom.searchInput.value);
     syncStudentProfile();
     renderCurrentRoute();
   });
   
   /* ---------------- 9. Navigasi & Routing ---------------- */
   function getActiveTopicId() {
     const match = location.hash.match(/^#\/(.+)$/);
     return match ? match[1] : null;
   }
   
   function renderCurrentRoute() {
     const topicId = getActiveTopicId();
     const selectedTopic = TOPICS.find((t) => t.id === topicId);
   
     if (selectedTopic) {
       renderTopicPage(selectedTopic);
     } else {
       renderHomePage();
     }
   
     renderSidebarNav(dom.searchInput.value);
     toggleMobileSidebar(false);
     window.scrollTo({ top: 0 });
     dom.content.focus({ preventScroll: true });
   }
   
   window.addEventListener("hashchange", renderCurrentRoute);
   
   dom.brandLink.addEventListener("click", (e) => {
     e.preventDefault();
     location.hash = "";
     renderCurrentRoute();
   });
   
   /* ---------------- 10. Tampilan Beranda ---------------- */
   function renderHomePage() {
     document.title = "IPA VII - Belajar Sains Interaktif";
     const nextTopic = TOPICS.find((t) => !state.done[t.id]) || TOPICS[0];
     const greeting = state.studentName
       ? `Selamat datang, ${escapeHTML(state.studentName)}! 👋`
       : "Selamat datang! 👋";
   
     dom.content.innerHTML = `
       <section class="hero">
         <h1>${greeting}</h1>
         <p>Pelajari ${TOPICS.length} materi IPA VII lewat bacaan singkat, video pembelajaran, dan kuis interaktif. Progres belajarmu tersimpan otomatis.</p>
         <a class="btn" href="#/${nextTopic.id}">${getCompletedCount() > 0 ? "Lanjut belajar" : "Mulai belajar"}</a>
       </section>
   
       <div class="card-grid">
         ${TOPICS.map((topic, index) => `
           <a class="topic-card" href="#/${topic.id}">
             ${state.done[topic.id] ? '<span class="tag">Selesai ✓</span>' : ""}
             <div class="emoji">${topic.emoji}</div>
             <h3>${index + 1}. ${escapeHTML(topic.title)}</h3>
             <p style="color:var(--muted);font-size:.9rem;margin-top:4px">${escapeHTML(topic.desc)}</p>
           </a>
         `).join("")}
       </div>
     `;
   }
   
   /* ---------------- 11. Tampilan Halaman Materi ---------------- */
   function buildSectionHTML(section) {
     let inner = "";
   
     switch (section.type) {
       case "text":
         inner = section.content.map((p) => `<p>${escapeHTML(p)}</p>`).join("");
         break;
       case "list":
         inner = `<ul class="bullets">${section.content.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
         break;
       case "olist":
         inner = `<ol class="bullets">${section.content.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol>`;
         break;
       case "pairs":
         inner = `<div class="pair-grid">${section.content.map((pair) => `
           <div class="pair">
             <b>${escapeHTML(pair.t)}</b>
             <span>${escapeHTML(pair.d)}</span>
           </div>
         `).join("")}</div>`;
         break;
       case "flip":
         inner = `
           ${section.hint ? `<p class="hint">${escapeHTML(section.hint)}</p>` : ""}
           <div class="flip-grid">${section.content.map((card) => `
             <button class="flip" type="button">
               <span class="front">${escapeHTML(card.t)}</span>
               <span class="back">${escapeHTML(card.d)}</span>
             </button>
           `).join("")}</div>
         `;
         break;
     }
   
     return `<h3>${escapeHTML(section.heading)}</h3>${inner}`;
   }
   
   function renderTopicPage(topic) {
     document.title = `${topic.title} | IPA VII`;
     const idx = TOPICS.indexOf(topic);
     const prevTopic = TOPICS[idx - 1];
     const nextTopic = TOPICS[idx + 1];
     const isCompleted = Boolean(state.done[topic.id]);
     const bestScore = state.scores[topic.id];
   
     dom.content.innerHTML = `
       <div class="topic-header">
         <div class="eyebrow">MATERI ${idx + 1} DARI ${TOPICS.length}</div>
         <h1>${topic.emoji} ${escapeHTML(topic.title)}</h1>
         <p>${escapeHTML(topic.desc)}</p>
       </div>
   
       <section class="panel">
         <h2>🎬 Video Pembelajaran</h2>
         <div class="video-wrap">
           <iframe
             src="https://www.youtube-nocookie.com/embed/${topic.videoId}"
             title="Video ${escapeHTML(topic.title)}"
             loading="lazy"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen></iframe>
         </div>
         <p class="video-note">Video tidak tampil? <a href="https://www.youtube.com/watch?v=${topic.videoId}" target="_blank" rel="noopener">Buka di YouTube</a>.</p>
       </section>
   
       <section class="panel">
         <h2>📖 Materi</h2>
         ${topic.sections.map(buildSectionHTML).join("")}
         <div class="conclusion"><b>Kesimpulan:</b> ${escapeHTML(topic.conclusion)}</div>
       </section>
   
       <section class="panel" id="quizPanel">
         <h2>📝 Kuis Singkat</h2>
         ${bestScore !== undefined ? `<p class="hint">Skor terbaikmu: ${bestScore}/${topic.quiz.length}</p>` : ""}
         <div id="quizBody"></div>
       </section>
   
       <div class="actions">
         <button id="doneBtn" class="btn ${isCompleted ? "secondary" : "good"}" type="button">
           ${isCompleted ? "✓ Sudah selesai (klik untuk batal)" : "Tandai selesai"}
         </button>
       </div>
   
       <div class="pager">
         ${prevTopic ? `<a class="btn secondary" href="#/${prevTopic.id}">← ${escapeHTML(prevTopic.title)}</a>` : "<span></span>"}
         ${nextTopic ? `<a class="btn" href="#/${nextTopic.id}">${escapeHTML(nextTopic.title)} →</a>` : ""}
       </div>
     `;
   
     dom.content.querySelectorAll(".flip").forEach((cardBtn) => {
       cardBtn.addEventListener("click", () => cardBtn.classList.toggle("open"));
     });
   
     document.getElementById("doneBtn").addEventListener("click", () => {
       state.done[topic.id] = !state.done[topic.id];
       saveState();
       updateProgressUI();
       renderSidebarNav(dom.searchInput.value);
       renderTopicPage(topic);
     });
   
     setupQuiz(topic);
   }
   
   /* ---------------- 12. Logika Kuis & Pengiriman Skor ---------------- */
   function setupQuiz(topic) {
     const quizBody = document.getElementById("quizBody");
     let answeredCount = 0;
     let correctCount = 0;
     const totalQuestions = topic.quiz.length;
   
     quizBody.innerHTML = topic.quiz.map((item, qIdx) => `
       <div class="quiz-q" data-q="${qIdx}">
         <div class="q-text">${qIdx + 1}. ${escapeHTML(item.q)}</div>
         <div class="options">
           ${item.options.map((opt, oIdx) => `
             <button class="option" type="button" data-o="${oIdx}">${escapeHTML(opt)}</button>
           `).join("")}
         </div>
         <div class="explain" hidden></div>
       </div>
     `).join("") + `<div id="quizResult"></div>`;
   
     quizBody.querySelectorAll(".quiz-q").forEach((questionBlock) => {
       const qIdx = Number(questionBlock.dataset.q);
       const questionData = topic.quiz[qIdx];
       const optionButtons = questionBlock.querySelectorAll(".option");
       const explanationBox = questionBlock.querySelector(".explain");
   
       optionButtons.forEach((btn) => {
         btn.addEventListener("click", () => {
           const chosenIdx = Number(btn.dataset.o);
           optionButtons.forEach((b) => { b.disabled = true; });
           optionButtons[questionData.answer].classList.add("correct");
   
           if (chosenIdx === questionData.answer) {
             correctCount++;
           } else {
             btn.classList.add("wrong");
           }
   
           explanationBox.hidden = false;
           explanationBox.textContent = (chosenIdx === questionData.answer ? "Benar! " : "Kurang tepat. ") + questionData.explain;
   
           answeredCount++;
           if (answeredCount === totalQuestions) {
             completeQuiz(topic, correctCount, totalQuestions);
           }
         });
       });
     });
   }
   
   function completeQuiz(topic, correct, total) {
     const previousBest = state.scores[topic.id];
     if (previousBest === undefined || correct > previousBest) {
       state.scores[topic.id] = correct;
     }
   
     if (correct >= Math.ceil(total * 0.6)) {
       state.done[topic.id] = true;
     }
   
     saveState();
     updateProgressUI();
     renderSidebarNav(dom.searchInput.value);
   
     const percentage = Math.round((correct / total) * 100);
     const feedback =
       percentage === 100 ? "Sempurna! 🎉" :
       percentage >= 60 ? "Bagus, terus semangat! 👍" :
       "Ayo coba lagi setelah membaca materi dan menonton video. 💪";
   
     const resultBox = document.getElementById("quizResult");
     resultBox.innerHTML = `
       <div class="quiz-result">
         <div class="score">${correct} / ${total}</div>
         <p>${feedback}</p>
         <p id="sendStatus" style="font-size:0.85rem;color:var(--muted);margin-top:6px;">⏳ Mengirim nilai ke rekapan guru...</p>
         <button class="btn secondary" id="retryBtn" type="button" style="margin-top:10px">Ulangi kuis</button>
       </div>
     `;
   
     document.getElementById("retryBtn").addEventListener("click", () => renderTopicPage(topic));
   
     const studentName = state.studentName || "Siswa Tanpa Nama";
     sendScoreToTeacher(studentName, topic.title, correct, total).then((isSent) => {
       const statusEl = document.getElementById("sendStatus");
       if (!statusEl) return;
   
       statusEl.textContent = isSent
         ? `✅ Nilai (${studentName}) berhasil dikirim ke rekapan guru.`
         : "⚠️ Nilai tersimpan di perangkatmu (URL Google Sheets belum dipasang).";
     });
   }
   
   /* ---------------- 13. Inisialisasi Aplikasi ---------------- */
   initTheme();
   syncStudentProfile();
   updateProgressUI();
   renderCurrentRoute();