/* --- TPU CYBER CLUB | CORE JAVASCRIPT --- */

// 1. Ma'lumotlar bazasi
const DEFAULT_TEAM = [
    {
        id: 1,
        name: "Jasurbek Jo'lanboyev G'ayrat o'g'li",
        role: "CEO & Founder",
        description: "Strategik yo‘nalishni belgilaydi va jamoani rivojlanishga yetaklaydi.",
        image: "assets/jasurbek.png",
        socials: {
            telegram: "https://t.me/Vscoderr",
            youtube: "https://www.youtube.com/@Jasurbek_Jolanboyev",
            instagram: "https://www.instagram.com/jasurbek.official.uz",
            linkedin: "https://www.linkedin.com/in/jasurbek-jo-lanboyev-74b758351",
            
        }
    },
   {
        id: 2,
        name: "Jasurbek Jo'lanboyev G'ayrat o'g'li",
        role: "Co Founder",
        description: "Strategik yo‘nalishni belgilaydi va jamoani rivojlanishga yetaklaydi.",
        image: "assets/jasurbek.png",
        socials: {
            telegram: "https://t.me/Vscoderr",
            youtube: "https://www.youtube.com/@Jasurbek_Jolanboyev",
            instagram: "https://www.instagram.com/jasurbek.official.uz",
            linkedin: "https://www.linkedin.com/in/jasurbek-jo-lanboyev-74b758351",
            
        }
    },
 {
        id: 1,
        name: "Jasurbek Jo'lanboyev G'ayrat o'g'li",
        role: "Co Founder",
        description: "Strategik yo‘nalishni belgilaydi va jamoani rivojlanishga yetaklaydi.",
        image: "assets/jasurbek.png",
        socials: {
            telegram: "https://t.me/Vscoderr",
            youtube: "https://www.youtube.com/@Jasurbek_Jolanboyev",
            instagram: "https://www.instagram.com/jasurbek.official.uz",
            linkedin: "https://www.linkedin.com/in/jasurbek-jo-lanboyev-74b758351",
            
        }
    }
];

// 2. Sahifa yuklanganda ishga tushuvchi asosiy qism
document.addEventListener('DOMContentLoaded', () => {
    
    // Loader-ni terminal uslubida yopish
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 600);
        }, 1500);
    }

    // Funksiyalarni chaqirish
    renderTeam();
    initMobileMenu(); // Yangilangan funksiya
    initThemeToggle();
    initMatrixEffect();
    initAccordion();
});

// 3. Jamoani HTML-ga chiqarish
function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container) return;

    DEFAULT_TEAM.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        let socialIcons = '';
        const iconMap = {
            telegram: 'fa-telegram',
            youtube: 'fa-youtube',
            instagram: 'fa-instagram',
            linkedin: 'fa-linkedin-in',
            globe: 'fa-globe'
        };

        for (const [platform, link] of Object.entries(member.socials)) {
            socialIcons += `<a href="${link}" target="_blank" title="${platform}"><i class="fab ${iconMap[platform]}"></i></a>`;
        }

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/149/149071.png'">
            <h3>${member.name}</h3>
            <div class="role-badge" style="color: var(--primary); font-weight: 700; font-size: 0.8rem; margin: 10px 0;">${member.role}</div>
            <p style="color: var(--text-dim); font-size: 0.85rem;">${member.description}</p>
            <div class="team-socials">${socialIcons}</div>
        `;
        container.appendChild(card);
    });
}

// 4. Mobil menyu boshqaruvi (TO'G'RILANGAN)
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Klassni qo'shish yoki olib tashlash
            navLinks.classList.toggle('active');
            
            // Ikonkani o'zgartirish (Bars <-> Times)
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Linklardan biri bosilganda menyuni avtomatik yopish
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// 5. Accordion funksiyasi
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            
            // Boshqalarni yopish
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            accordionItem.classList.toggle('active');
        });
    });
}

// 6. Mavzu almashtirish
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    
    const icon = themeBtn.querySelector('i');

    themeBtn.onclick = () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('tp-theme', 'light');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('tp-theme', 'dark');
        }
    };

    if (localStorage.getItem('tp-theme') === 'light') {
        document.body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    }
}

// 7. Matrix Rain Effect
function initMatrixEffect() {
    const canvas = document.createElement('canvas');
    const hero = document.getElementById('home');
    if (!hero) return;
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.15';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(5, 11, 24, 0.05)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#00d2ff";
        ctx.font = fontSize + "px JetBrains Mono";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.myHeroSwiper', {
        loop: true,             // Cheksiz aylanish
        grabCursor: true,       // Kursor uslubi
        effect: 'creative',     // Kiber-uslub uchun effekt
        creativeEffect: {
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ['100%', 0, 0] },
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, // Foydalanuvchi tegsa ham to'xtab qolmaydi
        },
        speed: 800,
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lib-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');

    // Kutubxonadagi har bir qatorni topish
    const libRows = document.querySelectorAll('.lib-row');

    libRows.forEach(row => {
        row.addEventListener('click', (e) => {
            // Agar download linki bosilsa, modal ochilmasin
            if (e.target.closest('.download-link')) return;

            const title = row.querySelector('h4').innerText;
            const desc = row.querySelector('p').innerText;
            const type = row.querySelector('.res-type').innerText;
            const size = row.querySelector('.res-size').innerText;
            const iconClass = row.querySelector('i').className;

            // Modal ichini to'ldirish
            modalContent.innerHTML = `
                <div class="modal-detail-header">
                    <i class="${iconClass} modal-icon-big"></i>
                    <div class="modal-info">
                        <h2>${title}</h2>
                        <span class="cyber-badge">${type}</span>
                    </div>
                </div>
                <p class="modal-desc">${desc} Bu kitob TPU Cyber Club a'zolari uchun maxsus tayyorlangan bo'lib, o'z ichiga amaliy laboratoriya ishlarini ham oladi.</p>
                <div class="modal-footer">
                    <span>Hajmi: <strong>${size}</strong></span>
                    <a href="#" class="btn-primary">Hozir yuklab olish</a>
                </div>
            `;

            modal.style.display = 'flex';
        });
    });

    // Modalni yopish
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }
});