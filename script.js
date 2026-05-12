// ========================================================
// TRANSLATIONS — EN / AR / RU
// ========================================================
const translations = {
    en: {
        'header.subtitle':'WATCH FREE ANIME',
        'nav.home':'Home','nav.anime':'Anime','nav.action':'Action','nav.romance':'Romance','nav.features':'Features',
        'header.search':'Search anime...',
        'auth.signin':'Sign In','auth.signup':'Sign Up','auth.logout':'Logout',
        'auth.signin_title':'Sign In','auth.signup_title':'Create Account',
        'auth.name_label':'Full Name','auth.name_placeholder':'Enter your name',
        'auth.email_label':'Email Address','auth.email_placeholder':'you@example.com','auth.email_error':'Invalid email',
        'auth.pass_label':'Password','auth.pass_placeholder':'••••••••','auth.pass_error':'Minimum 6 characters',
        'auth.success_msg':'✓ Success! You can now watch anime.',
        'auth.switch_login':"Don't have an account?",'auth.switch_signup':'Sign Up',
        'auth.switch_signup_login':'Already have an account?','auth.switch_login_text':'Sign In',
        'hero.badge':'Free · No Ads · HD','hero.title1':'Watch','hero.title2':'Anime','hero.title3':'For Free, On LordSensei',
        'hero.desc':'Stream thousands of action & romance anime episodes in HD quality. No subscriptions, no hidden fees — just pure anime.',
        'hero.stat1':'Anime Series','hero.stat2':'Episodes','hero.stat3':'Active Users',
        'hero.cta1':'Start Watching','hero.cta2':'Learn More','hero.genre':'Action · Fantasy','hero.trending':'🔥 Trending',
        'anime.title':'Explore <span>Anime</span>','anime.viewall':'View All <i class="fas fa-arrow-right"></i>',
        'filter.all':'All','filter.action':'Action','filter.romance':'Romance',
        'loading.loading':'Loading anime...','loading.more':'Loading more...',
        'features.title':'Why <span>LordSensei</span>?',
        'features.f1_title':'Unlimited Streaming','features.f1_desc':'Watch as many episodes as you want, anytime, anywhere — completely free.',
        'features.f2_title':'HD Quality','features.f2_desc':'All episodes available in HD with fast streaming servers worldwide.',
        'features.f3_title':'Free Forever','features.f3_desc':'No subscriptions, no payments. Premium features included for all users.',
        'features.f4_title':'Real Content','features.f4_desc':'Real anime from MyAnimeList database with authentic streaming sources.',
        'footer.about':'About','footer.contact':'Contact','footer.dmca':'DMCA','footer.terms':'Terms','footer.privacy':'Privacy',
        'footer.rights':'All rights reserved. Fan-made platform.',
        'player.nowplaying':'Now Playing','player.clickepisode':'Click an episode to start streaming','player.episodes':'Episodes',
        'player.select':'Select Episode','player.episode':'Episode','player.loaderror':'Could not load video',
        'toast.login_success':'Welcome back! You are now signed in.',
        'toast.register_success':'Account created! Welcome to LordSensei.',
        'toast.logout':'You have been logged out.',
        'toast.login_required':'Please sign in to save your favorites.',
        'no.episodes':'No episodes available'
    },
    ar: {
        'header.subtitle':'شاهد الأنمي مجاناً',
        'nav.home':'الرئيسية','nav.anime':'الأنمي','nav.action':'أكشن','nav.romance':'رومانسية','nav.features':'المميزات',
        'header.search':'ابحث عن أنمي...',
        'auth.signin':'تسجيل دخول','auth.signup':'إنشاء حساب','auth.logout':'تسجيل خروج',
        'auth.signin_title':'تسجيل دخول','auth.signup_title':'إنشاء حساب جديد',
        'auth.name_label':'الاسم الكامل','auth.name_placeholder':'أدخل اسمك',
        'auth.email_label':'البريد الإلكتروني','auth.email_placeholder':'br@example.com','auth.email_error':'البريد الإلكتروني غير صحيح',
        'auth.pass_label':'كلمة المرور','auth.pass_placeholder':'••••••••','auth.pass_error':'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
        'auth.success_msg':'✓ تم بنجاح! يمكنك الآن مشاهدة الأنمي.',
        'auth.switch_login':'ليس لديك حساب؟','auth.switch_signup':'إنشاء حساب',
        'auth.switch_signup_login':'لديك حساب بالفعل؟','auth.switch_login_text':'تسجيل دخول',
        'hero.badge':'مجاني · بدون إعلانات · جودة عالية','hero.title1':'شاهد','hero.title2':'الأنمي','hero.title3':'مجاناً، على لورد سينسي',
        'hero.desc':'شاهد آلاف الحلقات من أنمي الأكشن والرومانسية بجودة عالية. بدون اشتراكات ولا رسوم خفية — أنمي نقي فقط.',
        'hero.stat1':'مسلسل أنمي','hero.stat2':'حلقة','hero.stat3':'مستخدم نشط',
        'hero.cta1':'ابدأ المشاهدة','hero.cta2':'اعرف المزيد','hero.genre':'أكشن · فنتازيا','hero.trending':'🔥 رائج',
        'anime.title':'استكشف <span>الأنمي</span>','anime.viewall':'عرض الكل <i class="fas fa-arrow-right"></i>',
        'filter.all':'الكل','filter.action':'أكشن','filter.romance':'رومانسية',
        'loading.loading':'جاري تحميل الأنمي...','loading.more':'جاري تحميل المزيد...',
        'features.title':'لماذا <span>لورد سينسي</span>؟',
        'features.f1_title':'مشاهدة غير محدودة','features.f1_desc':'شاهد عدد غير محدود من الحلقات في أي وقت وأي مكان — مجاناً تماماً.',
        'features.f2_title':'جودة عالية','features.f2_desc':'جميع الحلقات متوفرة بجودة عالية مع خوادم بث سريعة حول العالم.',
        'features.f3_title':'مجاني للأبد','features.f3_desc':'لا اشتراكات ولا مدفوعات. جميع المميزات متاحة لجميع المستخدمين.',
        'features.f4_title':'محتوى حقيقي','features.f4_desc':'أنمي حقيقي من قاعدة بيانات MyAnimeList مع مصادر بث أصلية.',
        'footer.about':'عن الموقع','footer.contact':'اتصل بنا','footer.dmca':'DMCA','footer.terms':'الشروط','footer.privacy':'الخصوصية',
        'footer.rights':'جميع الحقوق محفوظة. منصة من صنع المعجبين.',
        'player.nowplaying':'قيد التشغيل','player.clickepisode':'اضغط على حلقة لبدء المشاهدة','player.episodes':'الحلقات',
        'player.select':'اختر حلقة','player.episode':'حلقة','player.loaderror':'تعذر تحميل الفيديو',
        'toast.login_success':'مرحباً بعودتك! تم تسجيل الدخول بنجاح.',
        'toast.register_success':'تم إنشاء الحساب! مرحباً بك في لورد سينسي.',
        'toast.logout':'تم تسجيل الخروج.',
        'toast.login_required':'يرجى تسجيل الدخول لحفظ المفضلة.',
        'no.episodes':'لا توجد حلقات متاحة'
    },
    ru: {
        'header.subtitle':'СМОТРИТЕ АНИМЕ БЕСПЛАТНО',
        'nav.home':'Главная','nav.anime':'Аниме','nav.action':'Экшн','nav.romance':'Романтика','nav.features':'Возможности',
        'header.search':'Поиск аниме...',
        'auth.signin':'Войти','auth.signup':'Регистрация','auth.logout':'Выйти',
        'auth.signin_title':'Вход','auth.signup_title':'Создать аккаунт',
        'auth.name_label':'Полное имя','auth.name_placeholder':'Введите ваше имя',
        'auth.email_label':'Email','auth.email_placeholder':'you@example.com','auth.email_error':'Неверный email',
        'auth.pass_label':'Пароль','auth.pass_placeholder':'••••••••','auth.pass_error':'Минимум 6 символов',
        'auth.success_msg':'✓ Успешно! Теперь вы можете смотреть аниме.',
        'auth.switch_login':'Нет аккаунта?','auth.switch_signup':'Регистрация',
        'auth.switch_signup_login':'Уже есть аккаунт?','auth.switch_login_text':'Войти',
        'hero.badge':'Бесплатно · Без рекламы · HD','hero.title1':'Смотри','hero.title2':'Аниме','hero.title3':'Бесплатно на LordSensei',
        'hero.desc':'Тысячи серий экшн и романтики в HD. Без подписок, без скрытых платежей — просто аниме.',
        'hero.stat1':'Серий аниме','hero.stat2':'Эпизодов','hero.stat3':'Активных пользователей',
        'hero.cta1':'Начать просмотр','hero.cta2':'Узнать больше','hero.genre':'Экшн · Фэнтези','hero.trending':'🔥 В тренде',
        'anime.title':'Исследуйте <span>Аниме</span>','anime.viewall':'Смотреть всё <i class="fas fa-arrow-right"></i>',
        'filter.all':'Все','filter.action':'Экшн','filter.romance':'Романтика',
        'loading.loading':'Загрузка аниме...','loading.more':'Загрузка...',
        'features.title':'Почему <span>LordSensei</span>?',
        'features.f1_title':'Безлимитный стриминг','features.f1_desc':'Смотрите сколько угодно серий в любое время — абсолютно бесплатно.',
        'features.f2_title':'HD качество','features.f2_desc':'Все серии в HD на быстрых серверах по всему миру.',
        'features.f3_title':'Навсегда бесплатно','features.f3_desc':'Никаких подписок. Все премиум-функции доступны каждому.',
        'features.f4_title':'Настоящий контент','features.f4_desc':'Реальное аниме из MyAnimeList с оригинальными источниками.',
        'footer.about':'О нас','footer.contact':'Контакты','footer.dmca':'DMCA','footer.terms':'Условия','footer.privacy':'Конфиденциальность',
        'footer.rights':'Все права защищены. Фан-платформа.',
        'player.nowplaying':'Сейчас играет','player.clickepisode':'Выберите эпизод для просмотра','player.episodes':'Эпизоды',
        'player.select':'Выбрать эпизод','player.episode':'Эпизод','player.loaderror':'Не удалось загрузить видео',
        'toast.login_success':'С возвращением! Вы вошли.',
        'toast.register_success':'Аккаунт создан! Добро пожаловать на LordSensei.',
        'toast.logout':'Вы вышли из системы.',
        'toast.login_required':'Пожалуйста, войдите, чтобы сохранять избранное.',
        'no.episodes':'Нет доступных эпизодов'
    }
};

// ========================================================
// STATE
// ========================================================
let currentLang = 'en';
let animes = [];
let currentPage = 1;
let itemsPerPage = 20;
let currentGenre = 'all';
let currentAnime = null;
let isLoginMode = true;
let currentUser = JSON.parse(localStorage.getItem('lsUser') || 'null');
let currentAnimeData = null;
let searchTimeout = null;

// ========================================================
// API CONFIG
// ========================================================
const DROPFILE_BASE = 'https://dropfile.cc';

// ========================================================
// DOM REFS (cached on init)
// ========================================================
let $ = (id) => document.getElementById(id);
let DOM = {};

function cacheDom() {
    DOM.header = $('header');
    DOM.nav = $('nav');
    DOM.searchInput = $('searchInput');
    DOM.langSelect = $('langSelect');
    DOM.authBtns = $('authBtns');
    DOM.userMenu = $('userMenu');
    DOM.userAvatar = $('userAvatar');
    DOM.userName = $('userName');
    DOM.animeGrid = $('animeGrid');
    DOM.loadingIndicator = $('loadingIndicator');
    DOM.pagination = $('pagination');
    DOM.toast = $('toast');
    DOM.videoModal = $('videoModal');
    DOM.videoIframe = $('videoIframe');
    DOM.videoPlaceholder = $('videoPlaceholder');
    DOM.episodeList = $('episodeList');
    DOM.modalTitle = $('modalTitle');
    DOM.animeInfoTitle = $('animeInfoTitle');
    DOM.animeMeta = $('animeMeta');
    DOM.animeDesc = $('animeDesc');
    DOM.authModal = $('authModal');
    DOM.authTitle = $('authTitle');
    DOM.nameGroup = $('nameGroup');
    DOM.regName = $('regName');
    DOM.authEmail = $('authEmail');
    DOM.authPassword = $('authPassword');
    DOM.authSubmitBtn = $('authSubmitBtn');
    DOM.authSwitchText = $('authSwitchText');
    DOM.authSwitchLink = $('authSwitchLink');
    DOM.authSuccess = $('authSuccess');
    DOM.emailError = $('emailError');
    DOM.passError = $('passError');
    DOM.genreBtns = document.querySelectorAll('.genre-btn');
}

// ========================================================
// UTILITY FUNCTIONS
// ========================================================
function t(key) {
    return translations[currentLang]?.[key] || translations['en'][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = t(key);
    });
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    DOM.langSelect.value = currentLang;
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lsLang', lang);
    applyTranslations();
}

function toggleMenu() {
    DOM.nav.classList.toggle('open');
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg, type = 'info') {
    DOM.toast.textContent = msg;
    DOM.toast.className = 'toast ' + type;
    DOM.toast.style.display = 'flex';
    setTimeout(() => { DOM.toast.style.display = 'none'; }, 3000);
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
    if (id === 'videoModal') {
        DOM.videoIframe.style.display = 'none';
        DOM.videoIframe.src = '';
        DOM.videoPlaceholder.style.display = 'flex';
    }
}

function openModal(id) {
    document.getElementById(id).classList.add('show');
}

// ========================================================
// AUTH SYSTEM
// ========================================================
function openAuth(mode) {
    isLoginMode = mode === 'login';
    DOM.authTitle.textContent = isLoginMode ? t('auth.signin_title') : t('auth.signup_title');
    DOM.nameGroup.style.display = isLoginMode ? 'none' : 'block';
    DOM.authSubmitBtn.querySelector('span').textContent = isLoginMode ? t('auth.signin') : t('auth.signup');
    DOM.authSwitchText.textContent = isLoginMode ? t('auth.switch_login') : t('auth.switch_signup_login');
    DOM.authSwitchLink.textContent = isLoginMode ? t('auth.switch_signup') : t('auth.switch_login_text');
    DOM.authSuccess.style.display = 'none';
    DOM.emailError.style.display = 'none';
    DOM.passError.style.display = 'none';
    openModal('authModal');
}

function toggleAuthMode() {
    openAuth(isLoginMode ? 'register' : 'login');
}

function handleAuth() {
    const email = DOM.authEmail.value.trim();
    const pass = DOM.authPassword.value.trim();
    const name = DOM.regName.value.trim() || 'User';

    DOM.emailError.style.display = 'none';
    DOM.passError.style.display = 'none';
    DOM.authSuccess.style.display = 'none';

    let valid = true;
    if (!email || !email.includes('@')) {
        DOM.emailError.style.display = 'block';
        valid = false;
    }
    if (!pass || pass.length < 6) {
        DOM.passError.style.display = 'block';
        valid = false;
    }
    if (!valid) return;

    if (isLoginMode) {
        const stored = JSON.parse(localStorage.getItem('lsUsers') || '[]');
        const found = stored.find(u => u.email === email && u.pass === pass);
        if (found) {
            currentUser = found;
            localStorage.setItem('lsUser', JSON.stringify(currentUser));
            updateUserUI();
            closeModal('authModal');
            showToast(t('toast.login_success'), 'success');
        } else {
            DOM.emailError.textContent = 'User not found or wrong password';
            DOM.emailError.style.display = 'block';
        }
    } else {
        const stored = JSON.parse(localStorage.getItem('lsUsers') || '[]');
        if (stored.find(u => u.email === email)) {
            DOM.emailError.textContent = 'Email already registered';
            DOM.emailError.style.display = 'block';
            return;
        }
        const newUser = { name, email, pass, id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6) };
        stored.push(newUser);
        localStorage.setItem('lsUsers', JSON.stringify(stored));
        currentUser = newUser;
        localStorage.setItem('lsUser', JSON.stringify(currentUser));
        updateUserUI();
        DOM.authSuccess.style.display = 'block';
        setTimeout(() => {
            closeModal('authModal');
            showToast(t('toast.register_success'), 'success');
        }, 1200);
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('lsUser');
    updateUserUI();
    showToast(t('toast.logout'), 'info');
}

function updateUserUI() {
    if (currentUser) {
        DOM.authBtns.style.display = 'none';
        DOM.userMenu.classList.add('show');
        DOM.userName.textContent = currentUser.name || currentUser.email.split('@')[0];
        DOM.userAvatar.textContent = (currentUser.name || currentUser.email)[0].toUpperCase();
    } else {
        DOM.authBtns.style.display = 'flex';
        DOM.userMenu.classList.remove('show');
    }
}

// ========================================================
// DROPFILE API
// ========================================================
async function searchAnime(query, page = 1) {
    try {
        const url = `${DROPFILE_BASE}/api/anime/search?q=${encodeURIComponent(query)}&page=${page}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Search failed');
        const data = await res.json();
        return data.results || data.data || [];
    } catch (e) {
        console.error('Search error:', e);
        return [];
    }
}

async function fetchTrending(page = 1) {
    try {
        const url = `${DROPFILE_BASE}/api/anime/ranking?type=airing&page=${page}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Trending fetch failed');
        const data = await res.json();
        return data.results || data.data || [];
    } catch (e) {
        console.error('Trending error:', e);
        return [];
    }
}

async function fetchAnimeByGenre(genreId, page = 1) {
    const query = genreId === '1' ? 'action' : genreId === '22' ? 'romance' : 'anime';
    return searchAnime(query, page);
}

async function getAnimeStream(animeId, season = 1, episode = 1, type = 'tv', audio = 'sub', lang = 'en') {
    try {
        const url = `${DROPFILE_BASE}/api/anime/embed/${type}/${animeId}/${season}/${episode}?audio=${audio}&lang=${lang}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Stream fetch failed');
        return await res.json();
    } catch (e) {
        console.error('Stream error:', e);
        return null;
    }
}

// ========================================================
// ANIME GRID
// ========================================================
async function loadAnime(genre = 'all', page = 1) {
    DOM.loadingIndicator.style.display = 'flex';
    DOM.animeGrid.innerHTML = '';
    DOM.pagination.innerHTML = '';

    try {
        let results = [];
        if (genre === 'all') {
            results = await fetchTrending(page);
        } else {
            results = await fetchAnimeByGenre(genre, page);
        }

        if (!results || results.length === 0) {
            results = await searchAnime('anime', page);
        }

        animes = results.slice(0, 20);
        currentGenre = genre;
        currentPage = page;

        DOM.loadingIndicator.style.display = 'none';

        if (animes.length === 0) {
            DOM.animeGrid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;font-size:14px;">
                    <i class="fas fa-frown" style="font-size:40px;display:block;margin-bottom:12px;color:#e62429;"></i>
                    No anime found. Try a different search.
                </div>`;
            return;
        }

        renderAnimeGrid(animes);
        renderPagination(page, results.totalPages || Math.ceil((results.total || 50) / itemsPerPage));
    } catch (e) {
        DOM.loadingIndicator.style.display = 'none';
        DOM.animeGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">
                <i class="fas fa-wifi-slash" style="font-size:40px;display:block;margin-bottom:12px;color:#e62429;"></i>
                Could not load anime. Please try again later.
            </div>`;
        console.error(e);
    }
}

function renderAnimeGrid(list) {
    DOM.animeGrid.innerHTML = list.map(a => {
        const title = a.title || a.name || 'Unknown';
        const img = a.image || a.images?.jpg?.image_url || a.poster || 'https://via.placeholder.com/270x360/1a1a22/555?text=No+Image';
        const rating = a.score || a.rating || '?';
        const eps = a.episodes || a.episodeCount || '?';
        const genre = a.genres?.[0]?.name || a.genre || '';
        const id = a.mal_id || a.id || (a.ids?.mal ? 'mal-' + a.ids.mal : '');
        const tagClass = genre.toLowerCase().includes('action') || genre.toLowerCase().includes('ecchi')
            ? 'tag-action'
            : genre.toLowerCase().includes('romance')
                ? 'tag-romance'
                : 'tag-action';

        return `<div class="anime-card" onclick="openAnime('${id}','${encodeURIComponent(title)}','${encodeURIComponent(img)}','${encodeURIComponent(genre)}','${rating}','${eps}','${encodeURIComponent(a.synopsis || a.description || 'No description available.')}')">
            <img class="anime-card-img" src="${img}" alt="${title}" loading="lazy" onerror="this.src='https://via.placeholder.com/270x360/1a1a22/555?text=Error'" />
            ${genre ? `<span class="anime-card-tag ${tagClass}">${genre}</span>` : ''}
            <div class="anime-card-play"><i class="fas fa-play"></i></div>
            <div class="anime-card-body">
                <h3>${title}</h3>
                <div class="anime-card-meta">
                    <span class="rating"><i class="fas fa-star"></i> ${rating}</span>
                    <span class="eps">${eps} eps</span>
                </div>
            </div>
        </div>`;
    }).join('');
}

function renderPagination(page, totalPages) {
    totalPages = Math.min(totalPages || 10, 10);
    let html = `<button class="page-btn" onclick="loadAnime('${currentGenre}',${Math.max(1, page - 1)})" ${page <= 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="loadAnime('${currentGenre}',${i})">${i}</button>`;
    }
    html += `<button class="page-btn" onclick="loadAnime('${currentGenre}',${Math.min(totalPages, page + 1)})" ${page >= totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
    DOM.pagination.innerHTML = html;
}

// ========================================================
// ANIME PLAYER MODAL
// ========================================================
async function openAnime(id, title, img, genre, rating, eps, desc) {
    title = decodeURIComponent(title);
    img = decodeURIComponent(img);
    genre = decodeURIComponent(genre);
    desc = decodeURIComponent(desc);

    currentAnime = { id, title, img, genre, rating, eps, desc };
    currentAnimeData = null;

    DOM.modalTitle.innerHTML = `<i class="fas fa-play" style="color:#e62429;margin-right:6px;"></i> ${title}`;
    DOM.animeInfoTitle.textContent = title;
    DOM.animeMeta.innerHTML = `
        <span><i class="fas fa-star"></i> ${rating}</span>
        <span><i class="fas fa-layer-group"></i> ${eps} ${t('player.episodes')}</span>
        ${genre ? `<span><i class="fas fa-tag"></i> ${genre}</span>` : ''}
    `;
    DOM.animeDesc.textContent = desc;

    // Reset player
    DOM.videoIframe.style.display = 'none';
    DOM.videoIframe.src = '';
    DOM.videoPlaceholder.style.display = 'flex';
    DOM.videoPlaceholder.innerHTML = `<i class="fas fa-spinner fa-pulse" style="font-size:36px;color:#e62429;"></i><p style="margin-top:12px;">${t('loading.more')}</p>`;

    openModal('videoModal');

    // Try to fetch stream info
    try {
        let animeId = id;
        let type = 'tv';

        if (id && !id.toString().startsWith('mal-') && !isNaN(Number(id))) {
            animeId = 'mal-' + id;
        }

        const streamData = await getAnimeStream(animeId, 1, 1, type, 'sub', currentLang);

        if (streamData && streamData.anime) {
            currentAnimeData = streamData;
            const totalEps = streamData.anime.episodes || parseInt(eps) || 12;
            buildEpisodeList(totalEps);
            DOM.videoPlaceholder.innerHTML = `<i class="fas fa-play-circle"></i><p>${t('player.clickepisode')}</p>`;
        } else {
            const totalEps = parseInt(eps) || 12;
            buildEpisodeList(totalEps);
            DOM.videoPlaceholder.innerHTML = `<i class="fas fa-play-circle"></i><p>${t('player.clickepisode')}</p>`;
        }
    } catch (e) {
        const totalEps = parseInt(eps) || 12;
        buildEpisodeList(totalEps);
        DOM.videoPlaceholder.innerHTML = `<i class="fas fa-play-circle"></i><p>${t('player.clickepisode')}</p>`;
    }
}

function buildEpisodeList(totalEps) {
    let html = '';
    const maxEpisodes = Math.min(totalEps, 50);
    for (let i = 1; i <= maxEpisodes; i++) {
        html += `<button class="episode-btn" onclick="playEpisode(${i})" data-ep="${i}">${t('player.episode')} ${i}</button>`;
    }
    DOM.episodeList.innerHTML = html;
}

async function playEpisode(ep) {
    DOM.videoPlaceholder.style.display = 'flex';
    DOM.videoPlaceholder.innerHTML = `<i class="fas fa-spinner fa-pulse" style="font-size:36px;color:#e62429;"></i><p style="margin-top:12px;">Loading Episode ${ep}...</p>`;
    DOM.videoIframe.style.display = 'none';
    DOM.videoIframe.src = '';

    // Highlight active episode
    document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.episode-btn[data-ep="${ep}"]`)?.classList.add('active');

    let animeId = currentAnime?.id || 'mal-21';
    let type = 'tv';

    if (animeId && !animeId.toString().startsWith('mal-') && !isNaN(Number(animeId))) {
        animeId = 'mal-' + animeId;
    }

    const audioMode = 'sub';
    const lang = currentLang === 'ar' ? 'en' : currentLang === 'ru' ? 'en' : currentLang;

    // Try JSON API first for embed URL
    try {
        const streamData = await getAnimeStream(animeId, 1, ep, type, audioMode, lang);
        if (streamData && streamData.stream && streamData.stream.embed_url) {
            DOM.videoIframe.src = streamData.stream.embed_url;
            DOM.videoIframe.style.display = 'block';
            DOM.videoPlaceholder.style.display = 'none';
            return;
        }
        if (streamData && streamData.embed && streamData.embed.direct_src) {
            DOM.videoIframe.src = streamData.embed.direct_src;
            DOM.videoIframe.style.display = 'block';
            DOM.videoPlaceholder.style.display = 'none';
            return;
        }
    } catch (e) { /* fallback below */ }

    // Fallback: direct player URL
    const playerUrl = `${DROPFILE_BASE}/player/${type}/${animeId}/1/${ep}?audio=${audioMode}&lang=${lang}`;
    DOM.videoIframe.src = playerUrl;
    DOM.videoIframe.style.display = 'block';
    DOM.videoPlaceholder.style.display = 'none';
}

// ========================================================
// SEARCH
// ========================================================
function setupSearch() {
    DOM.searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const q = this.value.trim();
        searchTimeout = setTimeout(async () => {
            if (q.length < 2) {
                loadAnime(currentGenre, 1);
                return;
            }
            DOM.loadingIndicator.style.display = 'flex';
            DOM.animeGrid.innerHTML = '';
            DOM.pagination.innerHTML = '';

            const results = await searchAnime(q);
            animes = results.slice(0, 20);
            DOM.loadingIndicator.style.display = 'none';

            if (animes.length === 0) {
                DOM.animeGrid.innerHTML = `
                    <div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;font-size:14px;">
                        <i class="fas fa-search" style="font-size:40px;display:block;margin-bottom:12px;color:#e62429;"></i>
                        No results for "${q}"
                    </div>`;
                return;
            }
            renderAnimeGrid(animes);
            DOM.pagination.innerHTML = '';
        }, 500);
    });
}

// ========================================================
// GENRE FILTER
// ========================================================
function setupGenreFilter() {
    DOM.genreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            DOM.genreBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const genre = this.dataset.genre;
            loadAnime(genre, 1);
        });
    });
}

// ========================================================
// MODAL OUTSIDE CLICK
// ========================================================
function setupModalClicks() {
    document.querySelectorAll('.modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                closeModal(el.id);
            }
        });
    });
}

// ========================================================
// HEADER SCROLL EFFECT
// ========================================================
function setupScrollEffect() {
    window.addEventListener('scroll', () => {
        DOM.header.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// ========================================================
// INIT
// ========================================================
async function init() {
    // Cache DOM elements
    cacheDom();

    // Load saved language
    const savedLang = localStorage.getItem('lsLang') || 'en';
    currentLang = savedLang;
    applyTranslations();
    updateUserUI();

    // Load anime
    await loadAnime('all', 1);

    // Setup event listeners
    setupSearch();
    setupGenreFilter();
    setupModalClicks();
    setupScrollEffect();
}

document.addEventListener('DOMContentLoaded', init);