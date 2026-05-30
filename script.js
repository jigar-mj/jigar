/* ========================================
   NATIVE VOICE NETWORK - MAIN JAVASCRIPT
   ======================================== */

// ============================================
// DEFAULT LANGUAGE DATA (Pre-loaded)
// You can add/remove languages from Admin Panel
// ============================================

const DEFAULT_LANGUAGES = [
    // RARE & UNIQUE
    { name: "Rohingya", category: "rare", speaker: "Native Rohingya speaker, newly added", audio: "", services: ["Voice-Over", "Translation", "AI Training Data"] },
    { name: "Burmese", category: "rare", speaker: "Native Burmese speaker, professional quality", audio: "", services: ["Voice-Over", "Translation", "AI Training Data"] },
    { name: "Wolof", category: "rare", speaker: "Native Wolof speaker from Senegal, IT professional background", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },
    { name: "Pashto", category: "rare", speaker: "Native Pashto speaker, available for all services", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Dubbing"] },
    { name: "Hindko", category: "rare", speaker: "Native Hindko speaker, multilingual professional", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Seraiki", category: "rare", speaker: "Native Seraiki speaker, multilingual talent", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Sindhi", category: "rare", speaker: "Native Sindhi speaker, translation specialist", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Kashmiri", category: "rare", speaker: "Native Kashmiri speaker, research background", audio: "", services: ["Voice-Over", "Translation", "AI Training Data"] },
    { name: "Manipuri", category: "rare", speaker: "Native Manipuri speaker, annotation experience", audio: "", services: ["Voice-Over", "Translation", "AI Training Data"] },
    { name: "Bundeli", category: "rare", speaker: "Native Bundeli speaker, transcription specialist", audio: "", services: ["Voice-Over", "Transcription"] },
    { name: "Bhojpuri", category: "rare", speaker: "Native Bhojpuri speaker, voice recording experience", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Maithili", category: "rare", speaker: "Native Maithili speaker, Google/Karya ASR projects", audio: "", services: ["Voice-Over", "Transcription", "AI Training Data"] },

    // INDIAN REGIONAL
    { name: "Gujarati", category: "indian", speaker: "Multiple native speakers, 3+ years experience, studio quality", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling", "Transcription"] },
    { name: "Hindi", category: "indian", speaker: "Multiple native speakers, AI voice evaluation expertise", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Dubbing", "Subtitling", "Transcription"] },
    { name: "Tamil", category: "indian", speaker: "Multiple speakers including dubbing director, audio engineer, PhD translator", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Dubbing", "Subtitling"] },
    { name: "Telugu", category: "indian", speaker: "Multiple speakers, Krutrim AI experience, Meta AI voice training", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Dubbing", "Transcription"] },
    { name: "Bengali", category: "indian", speaker: "Native Bengali speaker, voice recording specialist", audio: "", services: ["Voice-Over", "Translation", "Transcription", "AI Training Data"] },
    { name: "Marathi", category: "indian", speaker: "Native Marathi-Konkani speaker, legal interpretation background", audio: "", services: ["Voice-Over", "Translation", "Subtitling", "Transcription"] },
    { name: "Kannada", category: "indian", speaker: "Native Kannada speaker, accessibility specialist, journalism background", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },
    { name: "Malayalam", category: "indian", speaker: "Native Malayalam linguist, Navana.ai AI quality experience", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling"] },
    { name: "Punjabi", category: "indian", speaker: "Multiple speakers, IIT Madras research, AI red teaming", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },
    { name: "Odia", category: "indian", speaker: "Senior linguist, Ola-Krutrim AI Team Lead experience", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },
    { name: "Urdu", category: "indian", speaker: "Multiple speakers, Gemini AI evaluation, journalism background", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling"] },
    { name: "Nepali", category: "indian", speaker: "HIPAA certified interpreter, Ministry of Education translator", audio: "", services: ["Voice-Over", "Translation", "Transcription", "AI Training Data"] },
    { name: "Konkani", category: "indian", speaker: "Native Konkani speaker, legal interpretation", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Assamese", category: "indian", speaker: "Native Assamese speaker available", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },

    // EUROPEAN
    { name: "Greek", category: "european", speaker: "Fluent Greek speaker, 5+ years interpretation, Uber corporate experience", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },
    { name: "Hungarian", category: "european", speaker: "Native Hungarian linguist + backend developer, Siemens 400k+ words", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling"] },
    { name: "Persian (Farsi)", category: "european", speaker: "18+ years experience, 10000+ minutes subtitling, UI/UX localization", audio: "", services: ["Voice-Over", "Translation", "Subtitling", "AI Training Data", "Dubbing"] },
    { name: "Russian", category: "european", speaker: "Native Russian linguist, 14 years in tech/marketing/medicine translation", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling"] },
    { name: "German", category: "european", speaker: "Native German C2, Cambridge International Examiner, Life Science specialist", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling"] },
    { name: "French", category: "european", speaker: "Native French speaker, 8+ years, Scale AI & Appen experience", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling", "Dubbing"] },
    { name: "Spanish", category: "european", speaker: "C2 Spanish speaker, multilingual professional", audio: "", services: ["Voice-Over", "Translation", "Subtitling"] },
    { name: "Polish", category: "european", speaker: "Native Polish speaker, voice recording available", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Romanian", category: "european", speaker: "Native Romanian speaker available", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
    { name: "Portuguese", category: "european", speaker: "Portuguese speaker, 13 years data analysis, AI transcription training", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Transcription"] },

    // ASIAN & AFRICAN
    { name: "Arabic", category: "asian", speaker: "Multiple speakers, RLHF specialist, content moderation expert", audio: "", services: ["Voice-Over", "Translation", "AI Training Data", "Subtitling", "Transcription"] },
    { name: "Hebrew", category: "asian", speaker: "Professional Hebrew translator available", audio: "", services: ["Translation", "Transcription"] },
    { name: "Turkish", category: "asian", speaker: "Turkish language support available", audio: "", services: ["Translation", "Transcription"] },
    { name: "Kurdish", category: "asian", speaker: "Fluent Kurdish speaker, newsroom & broadcast experience", audio: "", services: ["Voice-Over", "Translation", "Transcription"] },
];

// ============================================
// STATE MANAGEMENT
// ============================================

let languages = [];
let currentFilter = 'all';
let adminPassword = 'jigar2026'; // Simple password

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadLanguages();
    renderLanguageGrid();
    setupEventListeners();
});

function loadLanguages() {
    const stored = localStorage.getItem('voiceNetworkLanguages');
    if (stored) {
        languages = JSON.parse(stored);
    } else {
        languages = [...DEFAULT_LANGUAGES];
        saveLanguages();
    }
}

function saveLanguages() {
    localStorage.setItem('voiceNetworkLanguages', JSON.stringify(languages));
}

// ============================================
// RENDER LANGUAGE GRID
// ============================================

function renderLanguageGrid(filterCategory = 'all', searchTerm = '') {
    const grid = document.getElementById('languageGrid');
    
    let filtered = languages;
    
    // Apply category filter
    if (filterCategory !== 'all') {
        filtered = filtered.filter(lang => lang.category === filterCategory);
    }
    
    // Apply search
    if (searchTerm) {
        filtered = filtered.filter(lang => 
            lang.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Sort: languages with audio first, then alphabetical
    filtered.sort((a, b) => {
        if (a.audio && !b.audio) return -1;
        if (!a.audio && b.audio) return 1;
        return a.name.localeCompare(b.name);
    });

    grid.innerHTML = filtered.map((lang, index) => {
        const badgeClass = `badge-${lang.category}`;
        const categoryLabel = getCategoryLabel(lang.category);
        const hasAudio = lang.audio ? 'has-audio' : '';
        
        return `
            <div class="language-card ${hasAudio}" onclick="openModal(${languages.indexOf(lang)})">
                <div class="lang-name">${lang.name}</div>
                <div class="lang-category">${categoryLabel}</div>
                <span class="lang-badge ${badgeClass}">${categoryLabel}</span>
            </div>
        `;
    }).join('');

    // Show message if no results
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:var(--gray-500); padding:40px;">No languages found. Try a different search or filter.</p>`;
    }
}

function getCategoryLabel(category) {
    const labels = {
        'rare': 'Rare & Unique',
        'indian': 'Indian Regional',
        'european': 'European',
        'asian': 'Asian & African'
    };
    return labels[category] || category;
}

// Convert a language name to a file-friendly slug.
// e.g. "Persian (Farsi)" -> "persian-farsi"
// To add a playable sample, upload an MP3 to the "audio/" folder
// named with this slug, e.g. audio/rohingya.mp3
function slugify(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// ============================================
// MODAL
// ============================================

function openModal(index) {
    const lang = languages[index];
    const modal = document.getElementById('audioModal');
    
    document.getElementById('modalLanguage').textContent = lang.name;
    document.getElementById('modalCategory').textContent = getCategoryLabel(lang.category);
    document.getElementById('modalSpeakerInfo').textContent = lang.speaker || 'Native speaker available. Contact for details.';
    
    // Audio: priority 1 = admin-uploaded (this device only),
    // priority 2 = MP3 file in the repo "audio/<slug>.mp3" (visible to ALL clients)
    const audioPlayer = document.getElementById('audioPlayer');
    const noAudioMsg = document.getElementById('noAudioMsg');

    // Reset state
    audioPlayer.pause();
    audioPlayer.style.display = 'none';
    noAudioMsg.style.display = 'block';

    if (lang.audio) {
        // Admin-uploaded sample stored locally
        audioPlayer.src = lang.audio;
        audioPlayer.style.display = 'block';
        noAudioMsg.style.display = 'none';
    } else {
        // Try to find a sample committed to the repo
        const repoAudioPath = `audio/${slugify(lang.name)}.mp3`;
        noAudioMsg.textContent = 'Checking for voice sample\u2026';

        const probe = new Audio();
        probe.src = repoAudioPath;

        probe.addEventListener('loadedmetadata', () => {
            audioPlayer.src = repoAudioPath;
            audioPlayer.style.display = 'block';
            noAudioMsg.style.display = 'none';
        });

        probe.addEventListener('error', () => {
            audioPlayer.style.display = 'none';
            noAudioMsg.textContent = 'Voice sample available on request. Contact us for a demo.';
            noAudioMsg.style.display = 'block';
        });
    }
    
    // Services
    const servicesList = document.getElementById('modalServices');
    servicesList.innerHTML = (lang.services || ['Voice-Over', 'Translation']).map(s => `<li>${s}</li>`).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('audioModal');
    const audioPlayer = document.getElementById('audioPlayer');
    
    modal.classList.remove('active');
    audioPlayer.pause();
    audioPlayer.src = '';
    document.body.style.overflow = '';
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Close modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('audioModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            const searchTerm = document.getElementById('languageSearch').value;
            renderLanguageGrid(currentFilter, searchTerm);
        });
    });

    // Search
    document.getElementById('languageSearch').addEventListener('input', (e) => {
        renderLanguageGrid(currentFilter, e.target.value);
    });

    // Admin toggle
    document.getElementById('adminToggle').addEventListener('click', () => {
        const panel = document.getElementById('adminPanel');
        if (panel.style.display === 'none') {
            const password = prompt('Enter admin password:');
            if (password === adminPassword) {
                panel.style.display = 'block';
                renderManageList();
            } else if (password !== null) {
                alert('Incorrect password.');
            }
        } else {
            panel.style.display = 'none';
        }
    });

    // File upload area
    const uploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.getElementById('audioFileInput');
    
    uploadArea.addEventListener('click', () => fileInput.click());
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--gray-300)';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--gray-300)';
        if (e.dataTransfer.files.length) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });
    
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFileSelect(e.target.files[0]);
        }
    });

    // Submit upload
    document.getElementById('submitUpload').addEventListener('click', handleSubmit);
}

// ============================================
// FILE HANDLING
// ============================================

let selectedFile = null;

function handleFileSelect(file) {
    if (!file.type.startsWith('audio/')) {
        alert('Please select an audio file (MP3, WAV, etc.)');
        return;
    }
    
    selectedFile = file;
    document.getElementById('fileName').textContent = `Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
}

// ============================================
// FORM SUBMISSION
// ============================================

function handleSubmit() {
    const langName = document.getElementById('uploadLanguage').value.trim();
    const category = document.getElementById('uploadCategory').value;
    const speaker = document.getElementById('uploadSpeaker').value.trim();
    
    if (!langName) {
        alert('Please enter a language name.');
        return;
    }

    // Get selected services
    const services = [];
    document.querySelectorAll('.checkbox-group input:checked').forEach(cb => {
        services.push(cb.value);
    });

    // Handle audio file
    let audioUrl = '';
    if (selectedFile) {
        // Store as base64 in localStorage (for demo purposes)
        // For production, you'd upload to a server/cloud storage
        const reader = new FileReader();
        reader.onload = function(e) {
            audioUrl = e.target.result;
            addLanguage(langName, category, speaker, audioUrl, services);
        };
        reader.readAsDataURL(selectedFile);
    } else {
        addLanguage(langName, category, speaker, '', services);
    }
}

function addLanguage(name, category, speaker, audio, services) {
    // Check if language already exists
    const existingIndex = languages.findIndex(l => l.name.toLowerCase() === name.toLowerCase());
    
    if (existingIndex >= 0) {
        // Update existing
        languages[existingIndex] = { name, category, speaker, audio: audio || languages[existingIndex].audio, services };
    } else {
        // Add new
        languages.push({ name, category, speaker, audio, services });
    }
    
    saveLanguages();
    renderLanguageGrid(currentFilter);
    renderManageList();
    
    // Clear form
    document.getElementById('uploadLanguage').value = '';
    document.getElementById('uploadSpeaker').value = '';
    document.getElementById('fileName').textContent = '';
    selectedFile = null;
    
    alert(`${name} has been ${existingIndex >= 0 ? 'updated' : 'added'} successfully!`);
}

// ============================================
// MANAGE LIST
// ============================================

function renderManageList() {
    const list = document.getElementById('manageList');
    
    list.innerHTML = languages.map((lang, index) => `
        <div class="manage-item">
            <div class="lang-info">
                ${lang.name} <small>(${getCategoryLabel(lang.category)}) ${lang.audio ? '&#127925; Audio' : '&#10060; No Audio'}</small>
            </div>
            <button class="delete-btn" onclick="deleteLanguage(${index})">Delete</button>
        </div>
    `).join('');
}

function deleteLanguage(index) {
    if (confirm(`Delete ${languages[index].name}? This cannot be undone.`)) {
        languages.splice(index, 1);
        saveLanguages();
        renderLanguageGrid(currentFilter);
        renderManageList();
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
