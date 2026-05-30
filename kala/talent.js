/* ===== KALA — Our Specialists (anonymized talent showcase) ===== */
/* NOTE: No names, emails, phone numbers or LinkedIn — privacy by design.    */
/* Each entry shows only: role, languages, skills, experience, and the kind  */
/* of teams the specialist has worked with.                                  */

(function () {
  'use strict';

  /* ---- Anonymized specialist data (58) ---- */
  var SPECIALISTS = [
    { role: 'Networks & Telecom Technician', cats: ['tech', 'rare'], langs: ['French', 'English', 'Wolof'], skills: ['Server virtualization', 'Secure networks', 'Fiber optics'], exp: 'FTTH deployment & IT maintenance', companies: [] },
    { role: 'AI Voice Evaluator & Hindi Specialist', cats: ['ai', 'voice'], langs: ['Hindi', 'English'], skills: ['Voice quality evaluation', 'Prosody rating', 'Audio annotation'], exp: '14 yrs academic faculty + AI speech training', companies: [] },
    { role: 'French Translator & AI Chatbot Trainer', cats: ['translation', 'ai'], langs: ['French', 'English'], skills: ['MTPE', 'Linguistic QA', 'Subtitle localization'], exp: '8+ yrs translation & QA', companies: ['Appen', 'Scale AI'] },
    { role: 'Administrative Analyst & Data Specialist', cats: ['tech'], langs: ['Portuguese', 'English'], skills: ['Dashboards', 'Data lifecycle', 'Reporting'], exp: '13 yrs data analysis + AI transcription', companies: [] },
    { role: 'Persian Translator & Interpreter', cats: ['translation'], langs: ['Persian', 'English'], skills: ['Legal translation', 'MTPE', 'Proofreading'], exp: '11 yrs professional translation', companies: [] },
    { role: 'Odia Translator & Team Leader', cats: ['translation'], langs: ['Odia', 'Hindi', 'English'], skills: ['Music annotation', 'Data analysis', 'Content review'], exp: 'Freelance since 2021 + team lead', companies: [] },
    { role: 'HR Manager & Medical Interpreter', cats: ['translation'], langs: ['English', 'Urdu', 'Punjabi', 'Hindi'], skills: ['Medical interpretation', 'BPO operations', 'Counseling'], exp: 'HR supervision + remote interpretation', companies: [] },
    { role: 'TV News Editor & Multilingual Translator', cats: ['voice', 'translation'], langs: ['Persian', 'Arabic', 'Kurdish', 'Turkish', 'English'], skills: ['Newsroom operations', 'Broadcast production', 'Localization'], exp: 'Reporter & TV producer (Iraq, Iran, Turkey)', companies: [] },
    { role: 'Marathi–Konkani Translator & Legal Interpreter', cats: ['translation'], langs: ['Konkani', 'Marathi', 'Hindi', 'English'], skills: ['Court interpretation', 'Subtitling', 'Transcription'], exp: '5+ yrs multilingual transcription', companies: [] },
    { role: 'Arabic Researcher & AI Language Evaluator', cats: ['ai', 'rare'], langs: ['Arabic', 'English', 'Urdu', 'Kashmiri'], skills: ['RLHF', 'Arabic linguistics', 'Text classification'], exp: 'Research scholar + AI annotation', companies: [] },
    { role: 'Kannada Linguistic & Accessibility Specialist', cats: ['translation'], langs: ['Kannada', 'English', 'Hindi'], skills: ['WCAG remediation', 'Audio-to-text', 'Proofreading'], exp: 'Verification lead + freelance linguist', companies: [] },
    { role: 'Senior Odia Linguist & AI Team Lead', cats: ['ai', 'voice'], langs: ['Odia', 'Hindi', 'English'], skills: ['AI prompt creation', 'Synthetic data', 'Voice-over'], exp: 'AI model training team lead', companies: ['Ola Krutrim'] },
    { role: 'QA Engineer', cats: ['tech'], langs: ['English', 'Hindi', 'Marathi'], skills: ['Manual & automation testing', 'Python testing', 'API validation'], exp: '2+ yrs web/mobile QA', companies: [] },
    { role: 'AI Content Evaluator & Media Team Lead', cats: ['ai'], langs: ['Urdu', 'Hindi', 'English', 'Arabic'], skills: ['LLM evaluation', 'News production', 'Text evaluation'], exp: '5+ yrs AI data training', companies: ['Google Gemini'] },
    { role: 'Electronics & Communication Engineer', cats: ['tech'], langs: ['English', 'Telugu', 'Tamil', 'Kannada'], skills: ['Full-stack (intermediate)', 'IoT', 'Logical reasoning'], exp: 'Robotics & smart-irrigation projects', companies: [] },
    { role: 'Nepali Translation & Editorial Expert', cats: ['translation'], langs: ['Nepali', 'English', 'Hindi', 'Sanskrit', 'Assamese'], skills: ['Lexicology', 'Etymology', 'Legal translation'], exp: 'Ministry translator + parliamentary interpreter', companies: [] },
    { role: 'Senior System Analyst & Voice Artist', cats: ['voice', 'tech'], langs: ['English', 'Malayalam'], skills: ['Java/J2EE', 'E-learning voice-over', 'Dubbing'], exp: '10+ yrs IT + voice-over', companies: ['Infosys', 'Maersk'] },
    { role: 'Gujarati Language & Social Media Expert', cats: ['voice', 'translation'], langs: ['Gujarati', 'English', 'Hindi'], skills: ['Creative storytelling', 'Blog writing', 'Radio announcing'], exp: '3+ yrs translation & content', companies: [] },
    { role: 'Voice-Over Artist', cats: ['voice'], langs: ['Tamil', 'English', 'Hindi', 'Telugu'], skills: ['Character voices', 'Script interpretation', 'Narration'], exp: '5 yrs audiobooks & TVCs', companies: [] },
    { role: 'Transcriber & Subtitle Editor', cats: ['voice', 'translation'], langs: ['Tamil', 'English'], skills: ['Audio description', 'Time-coded transcription', 'Subtitling'], exp: 'Subtitle editing for web series', companies: [] },
    { role: 'Hungarian Linguist & Backend Developer', cats: ['translation', 'tech'], langs: ['Hungarian', 'English'], skills: ['Technical localization', 'API development', 'MTPE'], exp: 'Localization lead (400k+ words)', companies: ['Siemens'] },
    { role: 'Punjabi Translator & Teacher', cats: ['translation'], langs: ['Punjabi', 'Hindi', 'English'], skills: ['Paper evaluation', 'Error detection', 'QA'], exp: '5+ yrs teaching + localization QA', companies: [] },
    { role: 'Video Editor & Transcriptionist', cats: ['voice', 'rare'], langs: ['Hindi', 'English', 'Maithili'], skills: ['Annotation', 'ASR data', 'Transcription'], exp: 'ASR & transcription projects', companies: ['Google Karya'] },
    { role: 'Persian UI/UX Localizer & Project Manager', cats: ['translation'], langs: ['Persian', 'English'], skills: ['Transcreation', 'SEO copywriting', 'IT translation'], exp: '18+ yrs AV translation, 10k+ subtitle mins', companies: [] },
    { role: 'German Linguist & Principal Examiner', cats: ['translation'], langs: ['German', 'English', 'Spanish', 'French'], skills: ['Life-science linguistics', 'eLearning testing', 'Assessment authoring'], exp: 'Principal examiner + university lecturer', companies: ['Cambridge International'] },
    { role: 'Brand Manager & Content Expert', cats: ['voice'], langs: ['Gujarati', 'Hindi', 'English'], skills: ['Media strategy', 'Campaign management', 'Branding'], exp: '10+ yrs campaigning & brand leadership', companies: [] },
    { role: 'Nutrition Specialist & Arabic Teacher', cats: ['translation'], langs: ['Arabic', 'Urdu', 'Hindi', 'English'], skills: ['Program planning', 'Language teaching'], exp: '2 yrs Arabic teaching', companies: [] },
    { role: 'Digital Marketing Strategist & Tamil Specialist', cats: ['voice', 'translation'], langs: ['Tamil', 'English'], skills: ['Google Ads', 'Keyword research', 'A/B testing'], exp: '6+ yrs advertising + Tamil translation', companies: [] },
    { role: 'Safety Investigations Specialist & Greek Interpreter', cats: ['translation', 'rare'], langs: ['Arabic', 'Greek', 'English', 'Spanish'], skills: ['Risk & compliance', 'Greek interpretation'], exp: 'Safety investigations + interpreting', companies: ['Uber'] },
    { role: 'Game QA Engineer', cats: ['tech'], langs: ['English'], skills: ['AAA & mobile testing', 'Performance testing', 'Bug lifecycle'], exp: '5+ yrs QA leadership', companies: ['Electronic Arts'] },
    { role: 'Casino Dealer & Technical Translator', cats: ['translation'], langs: ['Portuguese', 'English'], skills: ['Technical translation', 'News writing', 'Marketing'], exp: 'Pharma/telecom translation', companies: [] },
    { role: 'Kannada Transcription & Telecalling Specialist', cats: ['voice'], langs: ['Kannada', 'English'], skills: ['Audio recording', 'Invoice processing', 'Support'], exp: '11 yrs admin & telecalling', companies: [] },
    { role: 'AI Quality Analyst & Telugu Expert', cats: ['ai', 'voice'], langs: ['Telugu', 'Hindi', 'English'], skills: ['ASR/TTS/STT validation', 'LLM rating', 'VLM image Q&A'], exp: 'QA for indigenous AI model', companies: ['Krutrim'] },
    { role: 'Gujarati Linguist & Sub Editor', cats: ['translation'], langs: ['Gujarati', 'Hindi', 'English'], skills: ['Transcreation', 'Live blogging', 'News reporting'], exp: 'Sub editor + 400k+ words delivered', companies: ['Sandesh Digital'] },
    { role: 'Tamil Translator & Associate Professor', cats: ['translation', 'ai'], langs: ['Tamil', 'English'], skills: ['Technical/legal translation', 'AI annotation', 'Content writing'], exp: 'PhD + extensive freelance translation', companies: ['TATA Motors', 'PhonePe', 'Samsung'] },
    { role: 'HIPAA Certified Interpreter', cats: ['translation'], langs: ['Nepali', 'English', 'Hindi', 'Marathi'], skills: ['OPI/VRI interpretation', 'Medical terminology'], exp: '2+ yrs healthcare interpretation', companies: [] },
    { role: 'Content Moderator (Arabic/Urdu)', cats: ['ai'], langs: ['Urdu', 'Arabic', 'English', 'Hindi'], skills: ['Trust & safety', 'Policy compliance', 'Decision making'], exp: 'Multilingual content moderation', companies: ['Genpact'] },
    { role: 'Russian Linguist & Electronics Engineer', cats: ['translation', 'tech'], langs: ['Russian', 'English'], skills: ['Embedded systems', 'Firmware', 'Manual translation'], exp: '14 yrs tech/medical translation', companies: [] },
    { role: 'Language Specialist (Gujarati & Hindi)', cats: ['translation'], langs: ['Gujarati', 'Hindi', 'English', 'Telugu'], skills: ['Error typology', 'Back-translation', 'Feature writing'], exp: 'Language lead + onsite specialist', companies: ['Snapchat (Lilt)', 'Google'] },
    { role: 'Telugu Translator & Content Writer', cats: ['translation'], langs: ['Telugu', 'English'], skills: ['Translation', 'Transcription review', 'Accuracy auditing'], exp: '3 yrs translation & writing', companies: [] },
    { role: 'AI Trainer & Voice Actor', cats: ['ai', 'voice'], langs: ['Telugu', 'English'], skills: ['Prompt creation', 'Model ranking', 'Image OCR'], exp: 'Translation & voice acting for AI', companies: ['Meta AI'] },
    { role: 'Dubbing Director & Post-Production Assistant', cats: ['voice'], langs: ['Tamil', 'English'], skills: ['Dubbing coordination', 'Critical thinking', 'Post-production'], exp: 'Dubbing director for TV & OTT', companies: ['Vijay TV', 'AHA OTT'] },
    { role: 'Punjabi Translator & Transcriptionist', cats: ['translation'], langs: ['Punjabi', 'Hindi', 'English'], skills: ['Literary translation', 'Adaptation', 'Cultural sensitivity'], exp: 'Translation for publishing houses', companies: [] },
    { role: 'Punjabi Expert & AI Trainer', cats: ['ai'], langs: ['Punjabi', 'Hindi', 'English'], skills: ['Red teaming', 'Risk management', 'NLP QA'], exp: '5+ yrs; lead researcher', companies: ['IIT Madras'] },
    { role: 'AI Engineer & Computer Vision Specialist', cats: ['ai', 'tech'], langs: ['Urdu', 'English'], skills: ['Deep learning', 'Object detection (YOLO)', 'Real-time pipelines'], exp: 'AI project contributor; ASL translator', companies: [] },
    { role: 'Journalist & Editor', cats: ['voice'], langs: ['Kannada', 'Hindi', 'English'], skills: ['Radio jockeying', 'Multimedia reporting', 'Script verification'], exp: 'Digital producer & reporter', companies: ['Times Internet'] },
    { role: 'Script & Story Writer', cats: ['voice'], langs: ['Bengali', 'Hindi', 'English'], skills: ['Dialogue writing', 'Brand scripts', 'Short stories'], exp: '4+ yrs story writing', companies: ['Pratilipi', 'Pocket FM'] },
    { role: 'Ads Quality Rater & Teacher', cats: ['ai'], langs: ['English', 'Hindi', 'Bengali'], skills: ['Search engine evaluation', 'Student engagement'], exp: 'Ads quality rating + teaching', companies: ['Welocalize'] },
    { role: 'Bengali Language Expert & Voice Recorder', cats: ['voice'], langs: ['Bengali', 'English', 'Hindi'], skills: ['Voice recording', 'Linguistic annotation', 'Programming basics'], exp: '1.5 yrs data ops + Bengali translation', companies: [] },
    { role: 'Trust & Safety Professional', cats: ['ai'], langs: ['Telugu', 'Hindi', 'English'], skills: ['Crisis & risk management', 'AI quality auditing', 'Child safety'], exp: '5+ yrs platform integrity', companies: ['Yahoo', 'TikTok', 'OpenAI'] },
    { role: 'Linguist & AI Data Quality Analyst', cats: ['ai', 'translation'], langs: ['Malayalam', 'English', 'Hindi', 'German', 'French'], skills: ['Phonetic transcription', 'Prompt testing', 'Academic writing'], exp: 'AI data quality analyst', companies: ['Navana.ai'] },
    { role: 'Spectral Operator for AI Dubbing', cats: ['ai', 'voice'], langs: ['Tamil', 'English'], skills: ['Spectral editing', 'Phonetic labelling', 'LLM validation'], exp: '4+ yrs media localization', companies: [] },
    { role: 'Content Writer & Senior Editor', cats: ['voice'], langs: ['English', 'Hindi'], skills: ['SEO copy', 'Medical content', 'Financial analysis'], exp: '5+ yrs copy editing', companies: [] },
    { role: 'Software Engineer (Frontend)', cats: ['tech'], langs: ['JavaScript', 'Python', 'English'], skills: ['Responsive design', 'Modern frontend', 'Ethical hacking'], exp: 'Consultancy & e-commerce builds', companies: [] },
    { role: 'Audio Engineer', cats: ['voice'], langs: ['Tamil', 'English'], skills: ['Sound design', 'SFX creation', 'Studio recording'], exp: '6+ yrs audio engineering', companies: [] },
    { role: 'AI Content Moderator', cats: ['ai'], langs: ['Telugu', 'English'], skills: ['LLM refining', 'PII validation', 'Scriptwriting'], exp: '5.5 yrs content + moderation', companies: ['Google Gemini'] },
    { role: 'Multilingual Content Specialist & Voiceover Artist', cats: ['voice'], langs: ['Telugu', 'Hindi', 'English', 'Italian'], skills: ['IVR recording', 'Jingle creation', 'Marketing'], exp: '6+ yrs voice services', companies: ['Reliance Jio'] },
    { role: 'Multilingual Translator (Rare Pairs)', cats: ['translation', 'rare'], langs: ['Urdu', 'Punjabi', 'Seraiki', 'Hindko', 'Pashto', 'English'], skills: ['Translation', 'Data entry', 'Document formatting'], exp: 'Professional translation across rare pairs', companies: [] }
  ];

  /* Companies for the "experience strip" — recognizable global teams */
  var EXPERIENCE = [
    'OpenAI', 'Google', 'Meta AI', 'Scale AI', 'Appen', 'TikTok', 'Yahoo',
    'Snapchat', 'Krutrim', 'Samsung', 'Siemens', 'Uber', 'Electronic Arts',
    'TATA Motors', 'PhonePe', 'Reliance Jio', 'Cambridge', 'IIT Madras',
    'Welocalize', 'Navana.ai'
  ];

  /* ---- Render experience strip ---- */
  var stripTrack = document.getElementById('expTrack');
  if (stripTrack) {
    var stripHTML = EXPERIENCE.map(function (c) { return '<span>' + c + '</span>'; }).join('');
    stripTrack.innerHTML = stripHTML + stripHTML; /* duplicate for seamless loop */
  }

  /* ---- Render specialist cards ---- */
  var grid = document.getElementById('talentGrid');
  var countEl = document.getElementById('talentCount');

  function badge(text) { return '<span class="t-tag">' + text + '</span>'; }

  function cardHTML(s, index) {
    var num = ('0' + (index + 1)).slice(-2);
    var langs = s.langs.map(badge).join('');
    var skills = s.skills.map(function (sk) { return '<li>' + sk + '</li>'; }).join('');
    var comp = s.companies && s.companies.length
      ? '<div class="t-exp"><span class="t-exp-label">Experience with</span><div class="t-exp-list">' +
          s.companies.map(function (c) { return '<span class="t-exp-chip">' + c + '</span>'; }).join('') +
        '</div></div>'
      : '';
    return '' +
      '<article class="t-card" data-cats="' + s.cats.join(' ') + '" data-search="' +
        (s.role + ' ' + s.langs.join(' ') + ' ' + s.skills.join(' ') + ' ' + (s.companies || []).join(' ')).toLowerCase() + '">' +
        '<div class="t-card-top">' +
          '<span class="t-id">Specialist #' + num + '</span>' +
          (s.companies && s.companies.length ? '<span class="t-star">★</span>' : '') +
        '</div>' +
        '<h3 class="t-role">' + s.role + '</h3>' +
        '<div class="t-langs">' + langs + '</div>' +
        '<ul class="t-skills">' + skills + '</ul>' +
        '<p class="t-years">' + s.exp + '</p>' +
        comp +
      '</article>';
  }

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map(cardHTML).join('');
    if (countEl) countEl.textContent = list.length;
    /* reveal newly added cards */
    grid.querySelectorAll('.t-card').forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i, 12) * 0.03) + 's';
      requestAnimationFrame(function () { el.classList.add('in'); });
    });
  }

  render(SPECIALISTS);

  /* ---- Filtering ---- */
  var filterBar = document.getElementById('talentFilters');
  var searchInput = document.getElementById('talentSearch');
  var activeCat = 'all';

  function applyFilters() {
    var q = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
    var visible = 0;
    grid.querySelectorAll('.t-card').forEach(function (card) {
      var cats = card.getAttribute('data-cats');
      var hay = card.getAttribute('data-search');
      var matchCat = activeCat === 'all' || cats.indexOf(activeCat) !== -1;
      var matchSearch = !q || hay.indexOf(q) !== -1;
      var show = matchCat && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl) countEl.textContent = visible;
    var empty = document.getElementById('talentEmpty');
    if (empty) empty.hidden = visible !== 0;
  }

  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.t-filter');
      if (!btn) return;
      filterBar.querySelectorAll('.t-filter').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat');
      applyFilters();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  /* ---- Shared bits: year, navbar scroll, mobile menu ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 30) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var burger = document.getElementById('burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }
})();
