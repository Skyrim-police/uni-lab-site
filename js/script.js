let currentLanguage = 'ua';

myFunc = function() {
    let quotes = [
    "Talk is cheap. Show me the code. — Linus Torvalds",
    "Programs are meant to be read by humans and only incidentally for computers to execute. — Donald Knuth",
    "The most dangerous phrase in the language is: 'We’ve always done it this way.' — Grace Hopper",
    "Everybody should learn to program a computer, because it teaches you how to think. — Steve Jobs",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",
    "Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. — Edsger Dijkstra",
    "We can only see a short distance ahead, but we can see plenty there that needs to be done. — Alan Turing",
    "There are only tswo kinds of programming languages: those people always complain about and those nobody uses. — Bjarne Stroustrup",
    "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function. — John Carmack",
    "Debugging is twice as hard as writing the code in the first place. — Brian Kernighan",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie"];

    function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * 11);
    document.getElementById("myBox").innerHTML = quotes[randomIndex];

    setTimeout(showRandomQuote, 3000); 
    }

    showRandomQuote();
}

timeFunc = function() {
    let currentTime = new Date();
    currentTime.getHours();   // 16
    currentTime.getMinutes(); // 24
// Київ (без змін)
    document.getElementById("current-time").innerHTML = (currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()); // Форматування працює неправильно для годин та хвилин менших за 10
// Лондон (-2 години від Києва)
    document.getElementById("current-time-london").innerHTML = (currentTime.getHours() - 2 < 10 ? "0" + (currentTime.getHours() - 2) : currentTime.getHours() - 2) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
// Астана (+2 години від Києва)
    document.getElementById("current-time-astana").innerHTML = (currentTime.getHours() + 2 < 10 ? "0" + (currentTime.getHours() + 2) : currentTime.getHours() + 2) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
// Токіо (+6 годин від Києва) 
    document.getElementById("current-time-tokyo").innerHTML = (currentTime.getHours() + 6 < 10 ? "0" + (currentTime.getHours() + 6) : currentTime.getHours() + 6) + ":" + (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
}

function timeASM() {
    let a = 10;
    let b = 5;

    let result = "";
    result += "Сума: " + (a + b) + "<br>";
    result += "Різниця: " + (a - b) + "<br>";


    document.getElementById("math5").innerHTML = result;

    alert("Добуток: " + (a * b));
    alert("Частка: " + (a / b));
}

function bigImg(x) {
  x.style.height = "260px";
  x.style.width = "340px";
}

function normalImg(x) {
  x.style.height = "240px";
  x.style.width = "320px";
}

const translations = {
    ua: {
        title: "Мови програмування.",
        quotes: "Цитати великих програмістів:",
        linkText: "Посилання на сайт з вивченння мов програмування",
        imageCaption: "Ілюстрація мов програмування",
        tableTitle: "Таблиця.",
        tableHeader1: "Мова програмування",
        tableHeader2: "Призначенння",
        tableHeader3: "Показ картинки",
        selectLanguage: "Оберіть мову програмування",
        navigateLabel: "Перейти на сторінку:",
        selectOption: "-- Оберіть сторінку --",
        cppPurpose: "Розширення C з підтримкою об'єктно-орієнтованого програмування; ігри, графіка, ПЗ.",
        asmPurpose: "Низькорівневе програмування, прямий контроль над процесором та пам'яттю.",
        csharpPurpose: "Розробка додатків під Windows, веб-сервіси, Unity (ігри).",
        javaPurpose: "Кросплатформенні застосунки, Android, корпоративні системи.",
        pythonPurpose: "Веб-розробка, наука про дані, машинне навчання, автоматизація.",
        factsTitle: "5 цікавих фактів про С++.",
        fact1: "Створена у 1983 році Б'ярне Страуструпом як розширення мови C.",
        fact2: "Підтримує як процедурне, так і об'єктно-орієнтоване програмування.",
        fact3: "Використовується для створення ігор, операційних систем, браузерів.",
        fact4: "Має високу швидкодію, майже як асемблер.",
        fact5: "Назва \"C++\" означає \"C з інкрементом\" (покращена версія C).",
        fact6: "С++ це мова розмітки",
        warning: "C++ не є мовою розмітки, це мова програмування.",
        videoTitle: "Відео про порівняння швидкості роботи різних мов програмування.",
        currentTime: "Поточний час:",
        timeKyiv: "Час в Києві:",
        timeLondon: "Час в Лондоні:",
        timeAstana: "Час в Астані:",
        timeTokyo: "Час в Токіо:",
        cppTitle: "Мова програмування C++",
        cppDescription: "C++ — потужна мова програмування, яка використовується для створення ігор, програм і системного ПЗ.",
        cppFact1: "Створена у 1983 році Б'ярне Страуструпом.",
        cppFact2: "Підтримує процедурне та об'єктно-орієнтоване програмування.",
        cppFact3: "Має високу швидкодію.",
        cppWiki: "Детальніше про C++ можна дізнатися на Вікіпедії.",
        asmTitle: "Мова програмування Assembly (ASM)",
        asmDescription: "Assembly — низькорівнева мова програмування, яка дає прямий контроль над процесором і пам'яттю.",
        asmFact1: "Використовується для системного програмування та драйверів.",
        asmFact2: "Дозволяє писати дуже швидкий та оптимізований код.",
        asmFact3: "Зазвичай застосовується для критичних частин програм і операційних систем.",
        asmWiki: "Детальніше про Assembly можна дізнатися на Вікіпедії.",
        csharpTitle: "Мова програмування C#",
        csharpBox1Title: "Що таке C#",
        csharpBox1Text: "C# — це сучасна, об'єктно-орієнтована мова програмування, створена компанією Microsoft для платформи .NET.",
        csharpBox2Title: "Сфера використання",
        csharpBox2Text: "C# використовують для створення десктопних застосунків, веб-сервісів, ігор на Unity, мобільних додатків і навіть ШІ-систем.",
        csharpBox3Title: "Переваги",
        csharpBox3Text: "Простий синтаксис, висока безпека, автоматичне керування пам'яттю та інтеграція з .NET Framework.",
        csharpBox4Title: "Цікавий факт",
        csharpBox4Text: "Назва C# походить від ноти \"до-дієз\" у музиці (C-sharp), що символізує \"покращену версію C\".",
        javaTitle: "Мова програмування Java",
        javaDescription: "Java — одна з найпопулярніших мов програмування у світі, створена компанією Sun Microsystems у 1995 році.",
        javaFeaturesTitle: "Основні особливості:",
        javaFeature1: "Кросплатформенність: \"Напиши один раз, запускай скрізь\" (Write Once, Run Anywhere).",
        javaFeature2: "Використовується для розробки Android-додатків, веб-застосунків та корпоративних систем.",
        javaFeature3: "Має автоматичне управління пам'яттю через збирач сміття (Garbage Collector).",
        javaFeature4: "Підтримує об'єктно-орієнтоване програмування та багатопоточність.",
        javaWiki: "Детальніше про Java можна дізнатися на Вікіпедії."
    },
    en: {
        title: "Programming Languages.",
        quotes: "Quotes from great programmers:",
        linkText: "Link to programming languages learning website",
        imageCaption: "Programming languages illustration",
        tableTitle: "Table.",
        tableHeader1: "Programming Language",
        tableHeader2: "Purpose",
        tableHeader3: "Show Image",
        selectLanguage: "Select a programming language",
        navigateLabel: "Go to page:",
        selectOption: "-- Select a page --",
        cppPurpose: "C extension with object-oriented programming support; games, graphics, software.",
        asmPurpose: "Low-level programming, direct control over processor and memory.",
        csharpPurpose: "Windows application development, web services, Unity (games).",
        javaPurpose: "Cross-platform applications, Android, enterprise systems.",
        pythonPurpose: "Web development, data science, machine learning, automation.",
        factsTitle: "5 interesting facts about C++.",
        fact1: "Created in 1983 by Bjarne Stroustrup as an extension of C language.",
        fact2: "Supports both procedural and object-oriented programming.",
        fact3: "Used to create games, operating systems, browsers.",
        fact4: "Has high performance, almost like assembly.",
        fact5: "The name \"C++\" means \"C with increment\" (improved version of C).",
        fact6: "C++ is a markup language",
        warning: "C++ is not a markup language, it is a programming language.",
        videoTitle: "Video about comparing the performance of different programming languages.",
        currentTime: "Current time:",
        timeKyiv: "Time in Kyiv:",
        timeLondon: "Time in London:",
        timeAstana: "Time in Astana:",
        timeTokyo: "Time in Tokyo:",
        cppTitle: "C++ Programming Language",
        cppDescription: "C++ is a powerful programming language used for creating games, applications, and system software.",
        cppFact1: "Created in 1983 by Bjarne Stroustrup.",
        cppFact2: "Supports procedural and object-oriented programming.",
        cppFact3: "Has high performance.",
        cppWiki: "Learn more about C++ on Wikipedia.",
        asmTitle: "Assembly Programming Language (ASM)",
        asmDescription: "Assembly is a low-level programming language that provides direct control over the processor and memory.",
        asmFact1: "Used for system programming and drivers.",
        asmFact2: "Allows writing very fast and optimized code.",
        asmFact3: "Usually applied to critical parts of programs and operating systems.",
        asmWiki: "Learn more about Assembly on Wikipedia.",
        csharpTitle: "C# Programming Language",
        csharpBox1Title: "What is C#",
        csharpBox1Text: "C# is a modern, object-oriented programming language created by Microsoft for the .NET platform.",
        csharpBox2Title: "Area of Use",
        csharpBox2Text: "C# is used for creating desktop applications, web services, Unity games, mobile apps, and even AI systems.",
        csharpBox3Title: "Advantages",
        csharpBox3Text: "Simple syntax, high security, automatic memory management, and integration with .NET Framework.",
        csharpBox4Title: "Interesting Fact",
        csharpBox4Text: "The name C# comes from the musical note \"C-sharp\", symbolizing an \"improved version of C\".",
        javaTitle: "Java Programming Language",
        javaDescription: "Java is one of the most popular programming languages in the world, created by Sun Microsystems in 1995.",
        javaFeaturesTitle: "Key Features:",
        javaFeature1: "Cross-platform: \"Write Once, Run Anywhere\" (WORA).",
        javaFeature2: "Used for Android app development, web applications, and enterprise systems.",
        javaFeature3: "Has automatic memory management through Garbage Collector.",
        javaFeature4: "Supports object-oriented programming and multithreading.",
        javaWiki: "Learn more about Java on Wikipedia."
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
    
    updatePageContent();
    
    const button = document.getElementById('language-toggle');
    button.innerHTML = currentLanguage === 'ua' ? '🌐 EN' : '🌐 UA';
    
    // Зберігаємо вибір мови в localStorage(збереження даних локально)
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// функція для оновлення вмісту сторінки через data-атрибути
function updatePageContent() {
    const t = translations[currentLanguage];
    
    document.querySelectorAll('[data-i18n]').forEach(element => { // querySelectorAll - вибирає всі елементи з атрибутом data-i18n
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
}

// Функція для ініціалізації мови при завантаженні сторінки
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updatePageContent();
        
        // Оновлюємо текст кнопки
        const button = document.getElementById('language-toggle');
        button.innerHTML = currentLanguage === 'ua' ? '🌐 EN' : '🌐 UA';
    }
}

// Функція для показу логотипу мови програмування
function showLanguageLogo(language) {
    const logoContainer = document.getElementById('logo-container');
    
    const logos = {
        'cpp': 'images/cpp.png',
        'asm': 'images/asm.png',
        'csharp': 'images/Csharp_Logo.png',
        'java': 'images/Java.png',
        'python': 'images/python.png'
    };
    
    const languageNames = {
        'cpp': 'C++',
        'asm': 'Assembly',
        'csharp': 'C#',
        'java': 'Java',
        'python': 'Python'
    };
    
    // Створюємо і показуємо зображення
    if (logos[language]) {
        logoContainer.innerHTML = `
            <img src="${logos[language]}" 
                 alt="${languageNames[language]} logo" 
                 style="width: 100%; height: 100%; object-fit: contain; transition: transform 0.3s ease;"
                 onmouseover="this.style.transform='scale(1.1)'"
                 onmouseout="this.style.transform='scale(1)'">
        `;
    }
}

// select-меню
function navigateToPage() {
    const selectElement = document.getElementById('page-select');
    const selectedPage = selectElement.value;
    
    // Якщо вибрана сторінка (не порожнє значення), переходимо на неї
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

// ЗАВДАННЯ 4: Підсвічування активної сторінки в меню
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

window.onload = function() {
    timeASM();
    initializeLanguage();
    highlightActivePage(); // Підсвічуємо активну сторінку в меню
}; // виклик гарантує, що функція виконається після завантаження сторінки

myFunc();
timeFunc();
