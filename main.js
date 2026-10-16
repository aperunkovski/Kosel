(() => {
  "use strict";

  // ==========================================
  // WINE-GLASS PRELOADER
  // ==========================================

  const preloader = document.querySelector("#sitePreloader");

  if (preloader) {
    document.body.classList.add("preloader-active");

    const startedAt = performance.now();
    let dismissed = false;

    function dismissPreloader() {
      if (dismissed) return;
      dismissed = true;

      // The wine-fill animation has at least 1.5 seconds.
      const remaining = Math.max(
        0,
        1500 - (performance.now() - startedAt)
      );

      window.setTimeout(() => {
        preloader.classList.add("is-hidden");
        document.body.classList.remove("preloader-active");

        window.setTimeout(() => {
          preloader.remove();
        }, 750);
      }, remaining);
    }

    if (document.readyState === "complete") {
      dismissPreloader();
    } else {
      window.addEventListener("load", dismissPreloader, {
        once: true
      });
    }

    // Don't leave the visitor waiting if an external image is slow.
    window.setTimeout(dismissPreloader, 3300);
  }

  // ==========================================
  // MACEDONIAN / ENGLISH TRANSLATIONS
  // ==========================================

  const translations = {
    mk: {
      "nav.wines": "Наши вина",
      "nav.story": "Нашата приказна",
      "nav.menu": "Мени",
      "nav.gallery": "Галерија",
      "nav.events": "Настани",
      "nav.contact": "Контакт",

      "hero.eyebrow": "КОСЕЛ · ОХРИДСКИ РЕГИОН",
      "hero.title": "Вино кое<br>ги поврзува луѓето",
      "hero.copy": "Традиција, природа и автентично доживување во срцето на охридскиот регион.",
      "hero.cta": "ЗАПОЗНАЈТЕ ЈА ПРИКАЗНАТА",

      "wines.eyebrow": "ИЗБРАНО ОД ВИНАРИЈАТА",
      "wines.title": "Наши вина",
      "wines.copy": "Вина за долги разговори, добра храна и моменти што вреди да се запаметат.",
      "wines.cta": "ИСТРАЖИ ГО ВИНСКОТО МЕНИ",

      "wine.vranec": "Вранец",
      "wine.vranecDesc": "Црвено суво вино",
      "wine.merlot": "Мерло",
      "wine.red": "Црвено суво вино",
      "wine.chardonnay": "Шардоне",
      "wine.white": "Бело суво вино",
      "wine.rose": "Розе",
      "wine.roseDesc": "Розе суво вино",
      "wine.reserve": "Резерва",
      "wine.reserveDesc": "Одбрана винска линија",

      "quote.eyebrow": "ЕДНА ЧАША. МНОГУ ПРИКАЗНИ.",
      "quote.title": "„Доброто вино не го мери времето. Го прави незаборавно.“",
      "quote.copy": "За разговорите што траат подолго, тишината што ни годи и луѓето со кои вреди да се наздрави.",

      "story.eyebrow": "КОРЕНИ ВО ПРИРОДАТА",
      "story.title": "Нашата приказна",
      "story.copy": "Косел ја замислуваме како место каде што виното започнува со земјата, а продолжува околу трпезата. Инспирирани од охридскиот крај, ги спојуваме мирот на природата, локалните вкусови и гостопримството што прави секој гостин да се чувствува како дома.",
      "story.cta": "ПРОЧИТАЈТЕ ЈА ПРИКАЗНАТА",

      "restaurant.eyebrow": "ОД НАШАТА КУЈНА",
      "restaurant.title": "Ресторанско<br>мени",
      "restaurant.copy": "Локални состојки, рецепти за споделување и вкусови што природно се надополнуваат со чаша добро вино.",
      "restaurant.cta": "ИСТРАЖИ ГО МЕНИТО",

      "events.eyebrow": "НАСТАНИ ВО КОСЕЛ",
      "events.title": "Настани што ги организираме",
      "events.copy": "Од интимни прослави до големи собири — создадовме место каде што добрата атмосфера, храната и виното стануваат дел од вашата приказна.",
      "events.weddings": "Свадби",
      "events.proms": "Матури",
      "events.baptisms": "Крштевки",
      "events.birthdays": "Родендени",
      "events.team": "Тим билдинг",
      "events.private": "Приватни настани",
      "events.cta": "ПЛАНИРАЈ НАСТАН",

      "reviews.eyebrow": "УБАВИ ЗБОРОВИ ОД ГОСТИТЕ",
      "reviews.title": "Спомени што остануваат",
      "reviews.copy": "Најубавото признание е кога гостите повторно ни се враќаат.",
      "reviews.one": "„Прекрасна атмосфера, одлично вино и топло гостопримство. Место на кое со задоволство се враќаме.“",
      "reviews.two": "„Локални вкусови, мир и прекрасна природа. Секој детаљ придонесува за вистинско уживање.“",
      "reviews.three": "„Совршено место за посебен повод. Прекрасната атмосфера го прави денот уште поубав.“",
      "reviews.guest1": "Гостин на винаријата",
      "reviews.guest2": "Посетител од Охрид",
      "reviews.guest3": "Гостин на настан",

      "reservation.eyebrow": "ВАШЕТО МЕСТО ВЕ ЧЕКА",
      "reservation.title": "Резервирајте ја<br>вашата посета",
      "reservation.copy": "Уживајте во вината на Косел, вкусната храна и атмосферата на нашето мало винско прибежиште.",
      "reservation.cta": "КОНТАКТИРАЈТЕ НÈ",

      "contact.address": "Косел, Охрид, Македонија",
      "contact.map": "КОСЕЛ · ОХРИД",

      "footer.copy": "Вино, природа и автентични вкусови во срцето на охридскиот регион.",
      "footer.links": "Брзи линкови",
      "footer.contact": "Контакт",
      "footer.hours": "Работно време",
      "footer.opening": "Понеделник – Недела<br>11:00 – 21:00",
      "footer.visit": "Посетете нè",
      "footer.maps": "ОТВОРИ ВО GOOGLE MAPS",
      "footer.rights": "Сите права се задржани.",
      "footer.made": "Создадено со љубов кон виното.",

      "menu.headingLine": "ВКУСОТ НА НАШИОТ КРАЈ",
      "menu.eyebrow": "ОД НАШАТА КУЈНА И ВИНСКА ПОДРУМСКА КОЛЕКЦИЈА",
      "menu.title": "Менито на Косел",
      "menu.subtitle": "Едноставни локални вкусови, чаша вино и време за уживање.",
      "menu.meta1": "ЛОКАЛНИ СОСТОЈКИ",
      "menu.meta2": "ПОДГОТВЕНО СО ЉУБОВ",
      "menu.meta3": "СПАРЕНО СО НАШИТЕ ВИНА",

      "menu.all": "Сè",
      "menu.drinks": "Пијалаци",
      "menu.salads": "Салати",
      "menu.mezze": "Мезе",
      "menu.mains": "Главни јадења",
      "menu.desserts": "Десерти",
      "menu.wines": "Вина",
      "menu.search": "Пребарај во менито…",
      "menu.collection": "ИЗБОР ОД КУЈНАТА",
      "menu.noresults": "Нема резултати за ова пребарување.",
      "menu.note": "Понудата и цените се примерни и треба да се потврдат со винаријата пред објавување.",
      "menu.ctaEyebrow": "СЕ ГЛЕДАМЕ ОКОЛУ ТРПЕЗАТА",
      "menu.ctaTitle": "Одберете вкус.<br>Отворете добро вино.",
      "menu.ctaCopy": "Контактирајте нè за резервација или организирање настан.",
      "price.placeholder": "— ден.",

      "item.water": "Минерална и негазирана вода",
      "item.waterDesc": "Разладена, за секоја трпеза.",
      "item.coffee": "Кафе",
      "item.coffeeDesc": "Еспресо и топли напитоци.",
      "item.soft": "Безалкохолни пијалаци",
      "item.softDesc": "Избор на освежителни пијалаци.",
      "item.shopska": "Шопска салата",
      "item.shopskaDesc": "Домат, краставица, пиперка и сирење.",
      "item.season": "Сезонска салата",
      "item.seasonDesc": "Свеж зеленчук и домашен прелив.",
      "item.village": "Селска салата",
      "item.villageDesc": "Состојки инспирирани од локалната кујна.",
      "item.cheese": "Плато со локални сирења",
      "item.cheeseDesc": "Избор на сирења за споделување.",
      "item.cold": "Домашно ладно мезе",
      "item.coldDesc": "Мали залчиња, маслинки и сезонски прилози.",
      "item.bruschetta": "Брускети од куќата",
      "item.bruschettaDesc": "Печен леб, домати, маслиново масло и билки.",
      "item.grill": "Избор од скара",
      "item.grillDesc": "Свежо подготвено, со сезонски прилог.",
      "item.house": "Домашен специјалитет",
      "item.houseDesc": "Рецепт инспириран од локалните вкусови.",
      "item.veg": "Вегетаријанска чинија",
      "item.vegDesc": "Зеленчук од сезоната, житарици и билки.",
      "item.dessert": "Десерт на денот",
      "item.dessertDesc": "Домашно слатко изненадување.",
      "item.fruit": "Свежо овошје",
      "item.fruitDesc": "Сезонски избор, според достапноста.",

      "story.home": "← Назад на почетна",
      "storypage.eyebrow": "КОСЕЛ · ОХРИДСКИ РЕГИОН",
      "storypage.title": "Приказна што се открива со секоја чаша.",
      "storypage.lead": "За земјата што нè инспирира, трпезата што нè собира и виното што ги поврзува луѓето.",
      "storypage.chapter1": "ОД ЗЕМЈАТА ДО ЧАШАТА",
      "storypage.heading1": "Сè започнува со време и внимание.",
      "storypage.body1": "Во оваа замислена приказна, корените на Косел се поставени во 1988 година — како почеток на семејна идеја изградена врз љубовта кон лозјето и почитта кон гостите. Од првите гроздови до трпезата, водилка е едно едноставно уверување: добрите работи не треба да се брзаат.",
      "storypage.body2": "Секоја сезона носи поинаква боја, мирис и ритам. Токму таа промена нè потсетува дека виното не е само производ — тоа е одраз на местото, времето и луѓето што го споделуваат.",
      "storypage.body3": "Инспирирани од охридскиот крај и богатството на локалната кујна, ја замислуваме Косел како место каде што природата го одредува темпото, трпезата ги зближува гостите, а секоја чаша отвора простор за нова приказна.",

      "storypage.timelineEyebrow": "ПРИКАЗНАТА ПРОДОЛЖУВА",
      "storypage.timelineTitle": "Од корени до спомени.",
      "storypage.timeline1Label": "ПОЧЕТОКОТ",
      "storypage.timeline1Title": "Идеја со длабоки корени",
      "storypage.timeline1Text": "Сè почнува со почит кон земјата, љубопитност за виното и желба да се создаде место во кое гостопримството е исто толку важно колку и вкусот.",
      "storypage.timeline2Label": "СЕКОЈА СЕЗОНА",
      "storypage.timeline2Title": "Трпение што се чувствува во чашата",
      "storypage.timeline2Text": "Лозјето нè учи да ги почитуваме природните циклуси. Од сончевите денови до бербата, секоја фаза бара внимание и носи сопствен карактер.",
      "storypage.timeline3Label": "ДЕНЕС",
      "storypage.timeline3Title": "Место за средби и наздравици",
      "storypage.timeline3Text": "Она што навистина го паметиме не е само виното, туку луѓето околу масата. Затоа секоја посета ја гледаме како можност да се создаде нешто лично и посебно.",

      "storypage.valuesEyebrow": "ШТО НÈ ВОДИ",
      "storypage.valuesTitle": "Едноставни вредности.<br>Искрени доживувања.",
      "storypage.value1Title": "Почит кон природата",
      "storypage.value1": "Сезоната, земјата и локалните вкусови се дел од секоја наша инспирација.",
      "storypage.value2Title": "Трпеза за споделување",
      "storypage.value2": "Најубавите моменти се оние во кои добрата храна и виното ги зближуваат луѓето.",
      "storypage.value3Title": "Гостопримство од срце",
      "storypage.value3": "Сакаме секоја посета да се чувствува природно, топло и лично.",

      "storypage.endEyebrow": "СЕКОЈА ЧАША НОСИ ПРИКАЗНА",
      "storypage.endTitle": "Следната наздравица нека биде ваша.",
      "storypage.endCta": "ПЛАНИРАЈТЕ ПОСЕТА"
    },

    en: {
      "nav.wines": "Our Wines",
      "nav.story": "Our Story",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.events": "Events",
      "nav.contact": "Contact",

      "hero.eyebrow": "KOSEL · OHRID REGION",
      "hero.title": "Wine that<br>brings people together",
      "hero.copy": "Tradition, nature and an authentic experience in the heart of the Ohrid region.",
      "hero.cta": "DISCOVER OUR STORY",

      "wines.eyebrow": "SELECTED BY THE WINERY",
      "wines.title": "Our Wines",
      "wines.copy": "Wines for long conversations, good food and moments worth remembering.",
      "wines.cta": "EXPLORE THE WINE LIST",

      "wine.vranec": "Vranec",
      "wine.vranecDesc": "Dry red wine",
      "wine.merlot": "Merlot",
      "wine.red": "Dry red wine",
      "wine.chardonnay": "Chardonnay",
      "wine.white": "Dry white wine",
      "wine.rose": "Rosé",
      "wine.roseDesc": "Dry rosé wine",
      "wine.reserve": "Reserve",
      "wine.reserveDesc": "Selected wine collection",

      "quote.eyebrow": "ONE GLASS. MANY STORIES.",
      "quote.title": "“Great wine doesn't measure time. It makes it unforgettable.”",
      "quote.copy": "For conversations that linger, moments of quiet, and the people worth raising a glass to.",

      "story.eyebrow": "ROOTED IN NATURE",
      "story.title": "Our Story",
      "story.copy": "We imagine Kosel as a place where wine begins with the land and continues around the table. Inspired by the Ohrid region, we bring together the calm of nature, local flavours and warm hospitality that makes every guest feel at home.",
      "story.cta": "READ OUR STORY",

      "restaurant.eyebrow": "FROM OUR KITCHEN",
      "restaurant.title": "Restaurant<br>Menu",
      "restaurant.copy": "Local ingredients, dishes made to share and flavours that naturally complement a glass of good wine.",
      "restaurant.cta": "EXPLORE THE MENU",

      "events.eyebrow": "EVENTS AT KOSEL",
      "events.title": "Events We Host",
      "events.copy": "From intimate celebrations to larger gatherings, we bring atmosphere, food and wine together to become part of your story.",
      "events.weddings": "Weddings",
      "events.proms": "Proms",
      "events.baptisms": "Baptisms",
      "events.birthdays": "Birthdays",
      "events.team": "Team building",
      "events.private": "Private events",
      "events.cta": "PLAN YOUR EVENT",

      "reviews.eyebrow": "KIND WORDS FROM OUR GUESTS",
      "reviews.title": "Memories That Stay",
      "reviews.copy": "The best compliment is when guests choose to return.",
      "reviews.one": "“A beautiful atmosphere, excellent wine and warm hospitality. A place we are always happy to return to.”",
      "reviews.two": "“Local flavours, peace and beautiful nature. Every detail makes the experience special.”",
      "reviews.three": "“A lovely place for a special occasion. The atmosphere made our day even better.”",
      "reviews.guest1": "Winery guest",
      "reviews.guest2": "Visitor from Ohrid",
      "reviews.guest3": "Event guest",

      "reservation.eyebrow": "YOUR PLACE IS WAITING",
      "reservation.title": "Reserve<br>your visit",
      "reservation.copy": "Enjoy Kosel wines, delicious food and the atmosphere of our little wine hideaway.",
      "reservation.cta": "GET IN TOUCH",

      "contact.address": "Kosel, Ohrid, North Macedonia",
      "contact.map": "KOSEL · OHRID",

      "footer.copy": "Wine, nature and authentic flavours in the heart of the Ohrid region.",
      "footer.links": "Quick links",
      "footer.contact": "Contact",
      "footer.hours": "Opening hours",
      "footer.opening": "Monday – Sunday<br>11:00 AM – 9:00 PM",
      "footer.visit": "Find us",
      "footer.maps": "OPEN IN GOOGLE MAPS",
      "footer.rights": "All rights reserved.",
      "footer.made": "Made with a love for wine.",

      "menu.headingLine": "A TASTE OF OUR REGION",
      "menu.eyebrow": "FROM OUR KITCHEN AND CELLAR",
      "menu.title": "The Kosel Menu",
      "menu.subtitle": "Local flavours, a glass of wine and time to enjoy.",
      "menu.meta1": "LOCAL INGREDIENTS",
      "menu.meta2": "MADE WITH CARE",
      "menu.meta3": "PAIRED WITH OUR WINES",

      "menu.all": "All",
      "menu.drinks": "Drinks",
      "menu.salads": "Salads",
      "menu.mezze": "Small plates",
      "menu.mains": "Main courses",
      "menu.desserts": "Desserts",
      "menu.wines": "Wines",
      "menu.search": "Search the menu…",
      "menu.collection": "FROM THE KITCHEN",
      "menu.noresults": "No results found for this search.",
      "menu.note": "Menu items and prices are examples and must be confirmed by the winery before publishing.",
      "menu.ctaEyebrow": "SEE YOU AT THE TABLE",
      "menu.ctaTitle": "Choose a flavour.<br>Open a good bottle.",
      "menu.ctaCopy": "Contact us for a reservation or to plan an event.",
      "price.placeholder": "— MKD",

      "item.water": "Still and sparkling water",
      "item.waterDesc": "Chilled and ready for the table.",
      "item.coffee": "Coffee",
      "item.coffeeDesc": "Espresso and hot drinks.",
      "item.soft": "Soft drinks",
      "item.softDesc": "A selection of refreshing drinks.",

      "item.shopska": "Shopska salad",
      "item.shopskaDesc": "Tomato, cucumber, pepper and white cheese.",
      "item.season": "Seasonal salad",
      "item.seasonDesc": "Fresh vegetables and house dressing.",
      "item.village": "Village salad",
      "item.villageDesc": "Inspired by local ingredients.",

      "item.cheese": "Local cheese board",
      "item.cheeseDesc": "A selection of cheeses to share.",
      "item.cold": "House mezze",
      "item.coldDesc": "Small bites, olives and seasonal sides.",
      "item.bruschetta": "House bruschetta",
      "item.bruschettaDesc": "Toasted bread, tomato, olive oil and herbs.",

      "item.grill": "Grill selection",
      "item.grillDesc": "Freshly prepared with a seasonal side.",
      "item.house": "House speciality",
      "item.houseDesc": "A dish inspired by local flavours.",
      "item.veg": "Vegetarian plate",
      "item.vegDesc": "Seasonal vegetables, grains and herbs.",

      "item.dessert": "Dessert of the day",
      "item.dessertDesc": "A homemade sweet surprise.",
      "item.fruit": "Fresh fruit",
      "item.fruitDesc": "Seasonal selection, subject to availability.",

      "story.home": "← Back to home",
      "storypage.eyebrow": "KOSEL · OHRID REGION",
      "storypage.title": "A story that opens with every glass.",
      "storypage.lead": "About the land that inspires us, the table that brings us together and the wine that connects people.",
      "storypage.chapter1": "FROM THE LAND TO THE GLASS",
      "storypage.heading1": "It all begins with time and care.",
      "storypage.body1": "In this concept story, Kosel begins in 1988 — a time when a love for the vineyard and respect for guests become the foundation of a family idea. From the first grapes to the table, each step follows the same belief: good things should never be rushed.",
      "storypage.body2": "Every season brings a different colour, scent and rhythm. It reminds us that wine is more than a product — it reflects a place, a moment and the people who share it.",
      "storypage.body3": "Inspired by the Ohrid region and the richness of local cuisine, we imagine Kosel as a place where nature sets the pace, the table brings guests closer, and every glass opens space for a new story.",

      "storypage.timelineEyebrow": "THE STORY CONTINUES",
      "storypage.timelineTitle": "From roots to memories.",
      "storypage.timeline1Label": "THE BEGINNING",
      "storypage.timeline1Title": "An idea with deep roots",
      "storypage.timeline1Text": "It begins with respect for the land, curiosity for wine and a wish to create a place where hospitality matters as much as flavour.",
      "storypage.timeline2Label": "EVERY SEASON",
      "storypage.timeline2Title": "Patience you can taste",
      "storypage.timeline2Text": "The vineyard teaches us to respect natural cycles. From sunny days to harvest, every stage calls for care and brings its own character.",
      "storypage.timeline3Label": "TODAY",
      "storypage.timeline3Title": "A place to gather and raise a glass",
      "storypage.timeline3Text": "What we truly remember is not only the wine, but the people around the table. We see every visit as a chance to create something personal and special.",

      "storypage.valuesEyebrow": "WHAT GUIDES US",
      "storypage.valuesTitle": "Simple values.<br>Honest experiences.",
      "storypage.value1Title": "Respect for nature",
      "storypage.value1": "The seasons, the land and local flavours inspire everything we do.",
      "storypage.value2Title": "A table for sharing",
      "storypage.value2": "The best moments are the ones where good food and wine bring people closer.",
      "storypage.value3Title": "Hospitality from the heart",
      "storypage.value3": "We want every visit to feel natural, warm and personal.",

      "storypage.endEyebrow": "EVERY GLASS HOLDS A STORY",
      "storypage.endTitle": "Let your next toast be here.",
      "storypage.endCta": "PLAN YOUR VISIT"
    }
  };

  // ==========================================
  // APPLY LANGUAGE
  // ==========================================

  const languageButtons = document.querySelectorAll("[data-set-lang]");

  function getPageType() {
    if (document.body.classList.contains("menu-page")) return "menu";
    if (document.body.classList.contains("story-page")) return "story";
    return "home";
  }

  function setLanguage(language) {
    if (!translations[language]) {
      language = "mk";
    }

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[language][element.dataset.i18n];

      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[language][element.dataset.i18nPlaceholder];

      if (typeof value === "string") {
        element.setAttribute("placeholder", value);
      }
    });

    languageButtons.forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.setLang === language
      );
    });

    try {
      localStorage.setItem("kosel-language", language);
    } catch (_) {
      // Page remains functional if localStorage is unavailable.
    }

    const titles = {
      mk: {
        home: "Косел Винарија — Вино кое ги поврзува луѓето",
        menu: "Мени — Косел Винарија",
        story: "Нашата приказна — Косел Винарија"
      },
      en: {
        home: "Kosel Winery — Wine that brings people together",
        menu: "Menu — Kosel Winery",
        story: "Our Story — Kosel Winery"
      }
    };

    document.title = titles[language][getPageType()];
  }

  let savedLanguage = "mk";

  try {
    savedLanguage = localStorage.getItem("kosel-language") || "mk";
  } catch (_) {
    savedLanguage = "mk";
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.setLang);
    });
  });

  setLanguage(savedLanguage);

  // ==========================================
  // MOBILE NAVIGATION
  // ==========================================

  const menuToggle = document.querySelector("#menuToggle");
  const mainNav = document.querySelector("#mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open =
        menuToggle.getAttribute("aria-expanded") !== "true";

      menuToggle.setAttribute("aria-expanded", String(open));

      menuToggle.setAttribute(
        "aria-label",
        open ? "Затвори мени" : "Отвори мени"
      );

      mainNav.classList.toggle("is-open", open);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ==========================================
  // AUTOMATIC WINE CAROUSEL
  // ==========================================

  const wineRail = document.querySelector("#wineRail");
  const progressBar = document.querySelector(".wine-progress span");

  if (wineRail) {
    let timer = null;

    function updateProgress() {
      if (!progressBar) return;

      const max = wineRail.scrollWidth - wineRail.clientWidth;

      const progress =
        max > 0 ? (wineRail.scrollLeft / max) * 100 : 100;

      progressBar.style.width = `${progress}%`;
    }

    function moveWine() {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const card = wineRail.querySelector(".wine-card");
      if (!card) return;

      const gap =
        parseFloat(getComputedStyle(wineRail).gap) || 0;

      const step = card.getBoundingClientRect().width + gap;
      const max = wineRail.scrollWidth - wineRail.clientWidth;

      if (max < 10) return;

      if (wineRail.scrollLeft >= max - 4) {
        wineRail.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        wineRail.scrollBy({
          left: step,
          behavior: "smooth"
        });
      }
    }

    function stopCarousel() {
      if (timer !== null) {
        window.clearInterval(timer);
      }

      timer = null;
    }

    function startCarousel() {
      stopCarousel();

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      timer = window.setInterval(moveWine, 3600);
    }

    wineRail.addEventListener("scroll", updateProgress, {
      passive: true
    });

    wineRail.addEventListener("mouseenter", stopCarousel);
    wineRail.addEventListener("mouseleave", startCarousel);
    wineRail.addEventListener("focusin", stopCarousel);
    wineRail.addEventListener("focusout", startCarousel);

    wineRail.addEventListener("touchstart", stopCarousel, {
      passive: true
    });

    wineRail.addEventListener(
      "touchend",
      () => window.setTimeout(startCarousel, 1500),
      { passive: true }
    );

    window.addEventListener("resize", updateProgress);

    updateProgress();
    startCarousel();
  }

  // ==========================================
  // SCROLL-REVEAL ANIMATIONS
  // ==========================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // ==========================================
  // MENU CATEGORY FILTERS + SEARCH
  // ==========================================

  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuGroups = document.querySelectorAll(".menu-group");
  const menuRows = document.querySelectorAll(".menu-row");

  const searchInput = document.querySelector("#menuSearch");
  const noResults = document.querySelector("#noResults");

  let activeCategory = "all";

  function normalize(value) {
    return value
      .trim()
      .toLocaleLowerCase(document.documentElement.lang || "mk");
  }

  function filterMenu() {
    if (!menuRows.length) return;

    const term = normalize(searchInput?.value || "");
    let visibleCount = 0;

    menuRows.forEach((row) => {
      const categoryMatches =
        activeCategory === "all" ||
        row.dataset.category === activeCategory;

      const textMatches =
        !term || normalize(row.textContent).includes(term);

      row.hidden = !(categoryMatches && textMatches);

      if (!row.hidden) {
        visibleCount += 1;
      }
    });

    menuGroups.forEach((group) => {
      const hasVisibleRows = [
        ...group.querySelectorAll(".menu-row")
      ].some((row) => !row.hidden);

      group.hidden = !hasVisibleRows;
    });

    if (noResults) {
      noResults.hidden = visibleCount > 0;
    }
  }

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeCategory = tab.dataset.category || "all";

      menuTabs.forEach((otherTab) => {
        otherTab.classList.toggle("active", otherTab === tab);
      });

      filterMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterMenu);
  }

  filterMenu();
})();