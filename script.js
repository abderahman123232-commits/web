// بيانات التطبيق
const appData = {
    language: 'ar',
    currency: 'usd',
    selectedService: null,
    services: [{
            id: 1,
            name: { ar: "اختراق الأجهزة", en: "Device Hacking" },
            description: {
                ar: "اختراق أي جهاز إلكتروني عن بعد مع ضمان السرية التامة.",
                en: "Remote hacking of any electronic device with complete confidentiality."
            },
            price: { usd: 500, eur: 450, gbp: 400 }
        },
        {
            id: 2,
            name: { ar: "حماية البيانات", en: "Data Protection" },
            description: {
                ar: "حماية بياناتك من الاختراق مع حلول أمنية متقدمة.",
                en: "Protect your data from hacking with advanced security solutions."
            },
            price: { usd: 300, eur: 270, gbp: 240 }
        },
        {
            id: 3,
            name: { ar: "استعادة الحسابات", en: "Account Recovery" },
            description: {
                ar: "استعادة الحسابات المخترقة أو المسروقة بضمان 100%.",
                en: "Recover hacked or stolen accounts with 100% guarantee."
            },
            price: { usd: 200, eur: 180, gbp: 160 }
        },
        {
            id: 4,
            name: { ar: "اختبار الاختراق", en: "Penetration Testing" },
            description: {
                ar: "اختبار أنظمتك لاكتشاف الثغرات الأمنية قبل المخترقين.",
                en: "Test your systems to discover security vulnerabilities before hackers do."
            },
            price: { usd: 400, eur: 360, gbp: 320 }
        }
    ]
};

// عناصر DOM
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    progressBar: document.getElementById('progress-bar'),
    blackScreen: document.getElementById('black-screen'),
    neonLines: document.getElementById('neon-lines'),
    hackerAnimation: document.getElementById('hacker-animation'),
    languageSelection: document.getElementById('language-selection'),
    currencySelection: document.getElementById('currency-selection'),
    servicesScreen: document.getElementById('services-screen'),
    serviceDetails: document.getElementById('service-details'),
    confirmationScreen: document.getElementById('confirmation-screen'),
    servicesContainer: document.getElementById('services-container'),
    serviceNameDisplay: document.getElementById('service-name-display'),
    servicePriceDisplay: document.getElementById('service-price-display'),
    serviceDescription: document.getElementById('service-description'),
    orderForm: document.getElementById('order-form'),
    confirmBtn: document.getElementById('confirm-btn')
};

// النصوص متعددة اللغات
const texts = {
    langQuestion: {
        ar: "ما هي لغتك المفضلة؟",
        en: "What is your preferred language?"
    },
    currencyQuestion: {
        ar: "ما هي عملتك المفضلة؟",
        en: "What is your preferred currency?"
    },
    servicesTitle: {
        ar: "خدماتنا",
        en: "Our Services"
    },
    fullNameLabel: {
        ar: "الاسم الثلاثي",
        en: "Full Name"
    },
    phoneLabel: {
        ar: "رقم الجوال",
        en: "Phone Number"
    },
    addressLabel: {
        ar: "العنوان بالكامل",
        en: "Full Address"
    },
    notesLabel: {
        ar: "وصف إضافي (اختياري)",
        en: "Additional Notes (Optional)"
    },
    confirmBtn: {
        ar: "تأكيد",
        en: "Confirm"
    },
    confirmationMessage: {
        ar: "تم إرسال التأكيد، سيتم التواصل معك خلال ٢٤ ساعة",
        en: "Confirmation sent, we will contact you within 24 hours"
    }
};

// تهيئة التطبيق
function initApp() {
    // بدء سلسلة الرسوم المتحركة
    startAnimationSequence();

    // إعداد معالجات الأحداث
    setupEventListeners();
}

// بدء سلسلة الرسوم المتحركة
function startAnimationSequence() {
    // شريط التحميل لمدة 10 ثواني
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1;
        elements.progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(progressInterval);

            // إخفاء شاشة التحميل
            elements.loadingScreen.style.opacity = '0';
            setTimeout(() => {
                elements.loadingScreen.style.display = 'none';

                // عرض الشاشة السوداء لمدة 3 ثواني
                elements.blackScreen.style.opacity = '1';
                setTimeout(() => {
                    elements.blackScreen.style.opacity = '0';

                    // عرض الخطوط النيونية
                    showNeonLines();

                    // عرض رسوم متحركة للهاكر لمدة 4 ثواني
                    setTimeout(() => {
                        showHackerAnimation();

                        setTimeout(() => {
                            elements.hackerAnimation.style.opacity = '0';
                            setTimeout(() => {
                                elements.hackerAnimation.style.display = 'none';

                                // عرض شاشة اختيار اللغة
                                showLanguageSelection();
                            }, 1000);
                        }, 4000);
                    }, 1000);
                }, 3000);
            }, 1000);
        }
    }, 100);
}

// عرض الخطوط النيونية
function showNeonLines() {
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        line.style.opacity = '1';
    });

    setTimeout(() => {
        lines.forEach(line => {
            line.style.opacity = '0';
        });
    }, 1000);
}

// عرض رسوم متحركة للهاكر
function showHackerAnimation() {
    elements.hackerAnimation.style.display = 'block';
    elements.hackerAnimation.style.opacity = '1';

    // إنشاء تأثير نص متحرك للهاكر
    const hackerText = document.createElement('div');
    hackerText.textContent = 'ACCESS GRANTED\nINITIALIZING SYSTEM...\nWELCOME TO THE DARK WEB';
    hackerText.style.whiteSpace = 'pre';
    hackerText.style.fontSize = '24px';
    hackerText.style.textAlign = 'center';
    hackerText.style.lineHeight = '1.5';
    hackerText.classList.add('glitch-effect');

    elements.hackerAnimation.appendChild(hackerText);
}

// عرض شاشة اختيار اللغة
function showLanguageSelection() {
    updateTexts();
    elements.languageSelection.style.opacity = '1';
    elements.languageSelection.style.pointerEvents = 'auto';
}

// عرض شاشة اختيار العملة
function showCurrencySelection() {
    elements.languageSelection.style.opacity = '0';
    elements.languageSelection.style.pointerEvents = 'none';

    updateTexts();
    elements.currencySelection.style.opacity = '1';
    elements.currencySelection.style.pointerEvents = 'auto';
}

// عرض شاشة الخدمات
function showServicesScreen() {
    elements.currencySelection.style.opacity = '0';
    elements.currencySelection.style.pointerEvents = 'none';

    updateTexts();
    renderServices();
    elements.servicesScreen.style.display = 'flex';
    setTimeout(() => {
        elements.servicesScreen.style.opacity = '1';
    }, 50);
}

// عرض تفاصيل الخدمة
function showServiceDetails(serviceId) {
    const service = appData.services.find(s => s.id === serviceId);
    if (!service) return;

    appData.selectedService = service;

    elements.servicesScreen.style.opacity = '0';
    setTimeout(() => {
        elements.servicesScreen.style.display = 'none';

        updateServiceDetails();
        elements.serviceDetails.style.display = 'flex';
        setTimeout(() => {
            elements.serviceDetails.style.opacity = '1';
        }, 50);
    }, 500);
}

// عرض شاشة التأكيد
function showConfirmationScreen() {
    elements.serviceDetails.style.opacity = '0';
    setTimeout(() => {
        elements.serviceDetails.style.display = 'none';

        updateTexts();
        elements.confirmationScreen.style.display = 'flex';
        setTimeout(() => {
            elements.confirmationScreen.style.opacity = '1';
        }, 50);
    }, 500);
}

// تحديث النصوص حسب اللغة المختارة
function updateTexts() {
    const lang = appData.language;

    // تحديث النصوص العامة
    document.getElementById('lang-question').textContent = texts.langQuestion[lang];
    document.getElementById('currency-question').textContent = texts.currencyQuestion[lang];
    document.getElementById('services-title').textContent = texts.servicesTitle[lang];
    document.getElementById('full-name-label').textContent = texts.fullNameLabel[lang];
    document.getElementById('phone-label').textContent = texts.phoneLabel[lang];
    document.getElementById('address-label').textContent = texts.addressLabel[lang];
    document.getElementById('notes-label').textContent = texts.notesLabel[lang];
    document.getElementById('confirm-btn').textContent = texts.confirmBtn[lang];
    document.getElementById('confirmation-message').textContent = texts.confirmationMessage[lang];

    // تحديث اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// تحديث تفاصيل الخدمة المعروضة
function updateServiceDetails() {
    const service = appData.selectedService;
    const lang = appData.language;
    const currency = appData.currency;

    elements.serviceNameDisplay.textContent = service.name[lang];
    elements.servicePriceDisplay.textContent = `${service.price[currency]} ${currency.toUpperCase()}`;
    elements.serviceDescription.textContent = service.description[lang];
}

// عرض الخدمات المتاحة
function renderServices() {
    elements.servicesContainer.innerHTML = '';
    const lang = appData.language;
    const currency = appData.currency;

    appData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <h3 class="service-name">${service.name[lang]}</h3>
            <p class="service-price">${service.price[currency]} ${currency.toUpperCase()}</p>
        `;
        serviceCard.addEventListener('click', () => showServiceDetails(service.id));
        elements.servicesContainer.appendChild(serviceCard);
    });
}

// إعداد معالجات الأحداث
function setupEventListeners() {
    // معالجات اختيار اللغة
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', function() {
            appData.language = this.getAttribute('data-lang');
            showCurrencySelection();
        });
    });

    // معالجات اختيار العملة
    document.querySelectorAll('[data-currency]').forEach(btn => {
        btn.addEventListener('click', function() {
            appData.currency = this.getAttribute('data-currency');
            showServicesScreen();
        });
    });

    // معالج نموذج الطلب
    elements.orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // جمع بيانات النموذج
        const formData = {
            service: appData.selectedService.name[appData.language],
            price: `${appData.selectedService.price[appData.currency]} ${appData.currency.toUpperCase()}`,
            fullName: document.getElementById('full-name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            notes: document.getElementById('notes').value,
            language: appData.language === 'ar' ? 'Arabic' : 'English'
        };

        // إرسال البيانات عبر واتساب
        sendWhatsAppMessage(formData);

        // عرض شاشة التأكيد
        showConfirmationScreen();

        // إعادة تعيين النموذج
        this.reset();
    });
}

// إرسال رسالة واتساب
function sendWhatsAppMessage(formData) {
    const phoneNumber = '01553479878';
    let message = '';

    if (appData.language === 'ar') {
        message = `طلب خدمة جديد:
        
الخدمة: ${formData.service}
السعر: ${formData.price}
الاسم: ${formData.fullName}
الهاتف: ${formData.phone}
العنوان: ${formData.address}
ملاحظات: ${formData.notes || 'لا يوجد'}
اللغة: ${formData.language}`;
    } else {
        message = `New Service Request:
        
Service: ${formData.service}
Price: ${formData.price}
Name: ${formData.fullName}
Phone: ${formData.phone}
Address: ${formData.address}
Notes: ${formData.notes || 'None'}
Language: ${formData.language}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
}

// بدء التطبيق عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', initApp);