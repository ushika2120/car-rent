const storageKey = "carRentalCart";
const languageKey = "carRentalLanguage";

const translations = {
  en: {
    pageTitle: "Car Rental",
    logo: "Car Rental",
    nav: ["Home", "Vehicles", "Details", "About Us", "Contact Us"],
    cart: "Cart",
    login: "Login",
    register: "Register",
    heroTitle: "Experience the road like never before",
    heroText:
      "Choose your ideal vehicle, book online in seconds and enjoy a smooth and comfortable ride. Reliable service, a modern fleet, and flexible rental options.",
    viewCars: "View all cars",
    bookToggle: "Book your car",
    bookTitle: "Book your car",
    carTypes: ["Car type", "Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
    rentalPlaces: ["Place of rental", "Tbilisi Airport", "Kote Afkhazi street", "Avlabari"],
    returnPlaces: ["Place of return", "Tbilisi Airport", "Kote Afkhazi street", "Avlabari"],
    bookNow: "Book now",
    features: [
      ["Availability", "Cars are ready for the road - just choose and book"],
      ["Comfort", "Relax on the road - travel in maximum comfort"],
      ["Savings", "Pay less, get more"],
    ],
    chooseTitle: "Choose the car that suits you",
    viewAll: "View All",
    suv: "SUV",
    sedan: "Sedan",
    automatic: "Automatic",
    air: "Air Conditioner",
    addButton: "Add to cart",
    removeButton: "Remove",
    emptyCart: "No selected cars yet.",
    totalLabel: "Total:",
    clearCart: "Clear cart",
    registration: "Registration",
    shoppingCart: "Shopping cart",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    pickup: "Pickup location",
    password: "Password",
    submitRegister: "Register",
    submitLogin: "Login",
    fullNamePlaceholder: "Ivan Ivanov",
    emailPlaceholder: "email@example.com",
    phonePlaceholder: "+995 5XX XX XX XX",
    pickupPlaceholder: "Tbilisi Airport",
    formSuccess: "Thank you! Your registration is saved.",
    formError: "Please fill required fields.",
    loginTitle: "Login",
    loginPrompt: "Don't have an account?",
    loginPromptLink: "Register here",
    loginError: "Please enter your email and password.",
    loginSuccess: "Login successful. (Demo only)",
    registerTitle: "Register",
    registerPrompt: "Already have an account?",
    registerPromptLink: "Login here",
    registerError: "Please complete all fields.",
    registerSuccess: "Registration successful. (Demo only)",
    footerText:
      "Experience the road like never before. Choose your ideal vehicle and enjoy a smooth ride.",
    footerLinks: "Quick Links",
    contactInfo: "Contact Info",
    about: "About Us",
    contact: "Contact Us",
    phoneLabel: "Phone:",
    address: "Address: Tbilisi, Georgia",
    rights: "© 2024 Car Rental. All rights reserved.",
  },
  ka: {
    pageTitle: "მანქანის გაქირავება",
    logo: "მანქანის გაქირავება",
    nav: ["მთავარი", "მანქანები", "დეტალები", "ჩვენ შესახებ", "კონტაქტი"],
    cart: "კალათა",
    login: "შესვლა",
    register: "რეგისტრაცია",
    heroTitle: "განიცადეთ გზა ისე, როგორც არასდროს",
    heroText:
      "აირჩიეთ თქვენთვის იდეალური ავტომობილი, დაჯავშნეთ ონლაინ წამებში და ისიამოვნეთ კომფორტული მგზავრობით. სანდო მომსახურება, თანამედროვე ავტოპარკი და მოქნილი პირობები.",
    viewCars: "ყველა მანქანა",
    bookToggle: "დაჯავშნე მანქანა",
    bookTitle: "დაჯავშნე მანქანა",
    carTypes: ["მანქანის ტიპი", "სედანი", "კაბრიოლეტი", "პიკაპი", "მინივენი", "SUV"],
    rentalPlaces: ["გაქირავების ადგილი", "თბილისის აეროპორტი", "კოტე აფხაზის ქუჩა", "ავლაბარი"],
    returnPlaces: ["დაბრუნების ადგილი", "თბილისის აეროპორტი", "კოტე აფხაზის ქუჩა", "ავლაბარი"],
    bookNow: "დაჯავშნა",
    features: [
      ["ხელმისაწვდომობა", "მანქანები მზად არის გზისთვის - უბრალოდ აირჩიეთ და დაჯავშნეთ"],
      ["კომფორტი", "დაისვენეთ გზაში - იმგზავრეთ მაქსიმალური კომფორტით"],
      ["ეკონომია", "გადაიხადეთ ნაკლები, მიიღეთ მეტი"],
    ],
    chooseTitle: "აირჩიეთ მანქანა, რომელიც შეგეფერებათ",
    viewAll: "ყველა",
    suv: "SUV",
    sedan: "სედანი",
    automatic: "ავტომატიკა",
    air: "კონდიციონერი",
    addButton: "კალათაში დამატება",
    removeButton: "წაშლა",
    emptyCart: "ჯერ არჩეული მანქანა არ არის.",
    totalLabel: "სულ:",
    clearCart: "კალათის გასუფთავება",
    registration: "რეგისტრაცია",
    shoppingCart: "კალათა",
    fullName: "სახელი და გვარი",
    email: "ელ. ფოსტა",
    phone: "ტელეფონი",
    pickup: "აყვანის ადგილი",
    password: "პაროლი",
    submitRegister: "რეგისტრაცია",
    submitLogin: "შესვლა",
    fullNamePlaceholder: "ივან ივანოვი",
    emailPlaceholder: "email@example.com",
    phonePlaceholder: "+995 5XX XX XX XX",
    pickupPlaceholder: "თბილისის აეროპორტი",
    formSuccess: "მადლობა! თქვენი რეგისტრაცია შენახულია.",
    formError: "გთხოვთ, შეავსოთ სავალდებულო ველები.",
    loginTitle: "შესვლა",
    loginPrompt: "არ გაქვთ ანგარიში?",
    loginPromptLink: "დარეგისტრირდით",
    loginError: "გთხოვთ, შეიყვანოთ ელ. ფოსტა და პაროლი.",
    loginSuccess: "შესვლა წარმატებულია. (დემო)",
    registerTitle: "რეგისტრაცია",
    registerPrompt: "უკვე გაქვთ ანგარიში?",
    registerPromptLink: "შედით აქ",
    registerError: "გთხოვთ, შეავსოთ ყველა ველი.",
    registerSuccess: "რეგისტრაცია წარმატებულია. (დემო)",
    footerText:
      "განიცადეთ გზა ისე, როგორც არასდროს. აირჩიეთ იდეალური ავტომობილი და ისიამოვნეთ კომფორტული მგზავრობით.",
    footerLinks: "სწრაფი ბმულები",
    contactInfo: "საკონტაქტო ინფორმაცია",
    about: "ჩვენ შესახებ",
    contact: "კონტაქტი",
    phoneLabel: "ტელეფონი:",
    address: "მისამართი: თბილისი, საქართველო",
    rights: "© 2024 მანქანის გაქირავება. ყველა უფლება დაცულია.",
  },
  ru: {
    pageTitle: "Прокат автомобилей",
    logo: "Прокат автомобилей",
    nav: ["Главная", "Автомобили", "Детали", "О нас", "Контакты"],
    cart: "Корзина",
    login: "Войти",
    register: "Регистрация",
    heroTitle: "Почувствуйте дорогу как никогда раньше",
    heroText:
      "Выберите идеальный автомобиль, забронируйте онлайн за секунды и наслаждайтесь комфортной поездкой. Надежный сервис, современный автопарк и гибкие условия аренды.",
    viewCars: "Все автомобили",
    bookToggle: "Забронировать",
    bookTitle: "Забронируйте автомобиль",
    carTypes: ["Тип автомобиля", "Седан", "Кабриолет", "Пикап", "Минивэн", "SUV"],
    rentalPlaces: ["Место аренды", "Аэропорт Тбилиси", "улица Коте Абхази", "Авлабари"],
    returnPlaces: ["Место возврата", "Аэропорт Тбилиси", "улица Коте Абхази", "Авлабари"],
    bookNow: "Забронировать",
    features: [
      ["Доступность", "Автомобили готовы к поездке - просто выберите и забронируйте"],
      ["Комфорт", "Отдыхайте в дороге - путешествуйте с максимальным комфортом"],
      ["Экономия", "Платите меньше, получайте больше"],
    ],
    chooseTitle: "Выберите автомобиль, который вам подходит",
    viewAll: "Все",
    suv: "SUV",
    sedan: "Седан",
    automatic: "Автомат",
    air: "Кондиционер",
    addButton: "В корзину",
    removeButton: "Удалить",
    emptyCart: "Пока нет выбранных автомобилей.",
    totalLabel: "Итого:",
    clearCart: "Очистить корзину",
    registration: "Регистрация",
    shoppingCart: "Корзина",
    fullName: "ФИО",
    email: "Email",
    phone: "Телефон",
    pickup: "Место получения",
    password: "Пароль",
    submitRegister: "Зарегистрироваться",
    submitLogin: "Войти",
    fullNamePlaceholder: "Иван Иванов",
    emailPlaceholder: "email@example.com",
    phonePlaceholder: "+995 5XX XX XX XX",
    pickupPlaceholder: "Аэропорт Тбилиси",
    formSuccess: "Спасибо! Ваша регистрация сохранена.",
    formError: "Пожалуйста, заполните обязательные поля.",
    loginTitle: "Войти",
    loginPrompt: "Нет аккаунта?",
    loginPromptLink: "Зарегистрируйтесь",
    loginError: "Пожалуйста, введите email и пароль.",
    loginSuccess: "Вход выполнен успешно. (Демо)",
    registerTitle: "Регистрация",
    registerPrompt: "Уже есть аккаунт?",
    registerPromptLink: "Войти",
    registerError: "Пожалуйста, заполните все поля.",
    registerSuccess: "Регистрация успешна. (Демо)",
    footerText:
      "Почувствуйте дорогу как никогда раньше. Выберите идеальный автомобиль и наслаждайтесь комфортной поездкой.",
    footerLinks: "Быстрые ссылки",
    contactInfo: "Контакты",
    about: "О нас",
    contact: "Контакты",
    phoneLabel: "Телефон:",
    address: "Адрес: Тбилиси, Грузия",
    rights: "© 2024 Прокат автомобилей. Все права защищены.",
  },
};

let locale = localStorage.getItem(languageKey) || document.documentElement.lang || "en";
if (!translations[locale]) locale = "en";

const cart = loadCart();
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const cartSummary = document.querySelector(".cart_summary p");
const clearCartBtn = document.getElementById("clearCartBtn");
const formMessage = document.getElementById("formMessage");
const cartMessage = document.getElementById("cartMessage");
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const overlays = document.querySelectorAll(".overlay");

function t() {
  return translations[locale] || translations.en;
}

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setOptions(selectId, values) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = values.map((value, index) => `<option value="${value}"${index === 0 ? " selected" : ""}>${value}</option>`).join("");
}

function loadCart() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch {
    // ignore storage errors
  }
}

function applyHeaderLanguage() {
  const text = t();
  document.documentElement.lang = locale;
  document.title = text.pageTitle;
  setText(".logo_text, .logo_textgeo", text.logo);
  setAllText(".nav_box .nav_text, .nav_box .nav_textgeo", text.nav);
  setText(".cart_link span", text.cart);
  const authButtons = document.querySelectorAll(".auth_button");
  if (authButtons[0]) authButtons[0].textContent = text.login;
  if (authButtons[1]) authButtons[1].textContent = text.register;

  document.querySelectorAll(".lang_button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === locale);
  });
}

function applyHomeLanguage() {
  const text = t();
  setText(".title, .titlegeo", text.heroTitle);
  setText(".small_text, .small_textgeo", text.heroText);
  setText(".btn_text", text.viewCars);
  const bookBurger = document.querySelector(".book_burger");
  if (bookBurger) {
    [...bookBurger.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = "";
    });
    bookBurger.append(document.createTextNode(` ${text.bookToggle}`));
  }
  setText(".book_title", text.bookTitle);
  setOptions("car_type", text.carTypes);
  setOptions("rental_place", text.rentalPlaces);
  setOptions("return_place", text.returnPlaces);
  setText(".book_text", text.bookNow);
  document.querySelectorAll(".icon_box").forEach((box, index) => {
    const item = text.features[index];
    if (!item) return;
    setText(".icon_text", item[0], box);
    setText(".icon_smalltext", item[1], box);
  });
  setText(".choose_text", text.chooseTitle);
  setText(".choose_smalltext", text.viewAll);
}

function applyCardsLanguage() {
  const text = t();
  document.querySelectorAll(".car_box").forEach((card) => {
    card.querySelectorAll(".car_namecont span").forEach((span) => {
      if (!span.dataset.carType) {
        span.dataset.carType = span.textContent.trim().toLowerCase() === "sedan" ? "sedan" : "suv";
      }
      span.textContent = span.dataset.carType === "sedan" ? text.sedan : text.suv;
    });
    card.querySelectorAll(".data_text").forEach((item) => {
      const value = item.textContent.trim().toLowerCase();
      if (value.includes("automatic") || value.includes("ავტომ") || value.includes("авто")) {
        item.textContent = text.automatic;
      }
      if (value.includes("air") || value.includes("კონდ") || value.includes("конди")) {
        item.textContent = text.air;
      }
    });
    setText(".card_btn", text.addButton, card);
  });
}

function applyFormsLanguage() {
  const text = t();
  const sections = document.querySelectorAll(".section_title");
  sections.forEach((title) => {
    const parent = title.closest(".registration_section, .cart_section");
    if (parent?.classList.contains("cart_section")) title.textContent = text.shoppingCart;
    if (parent?.classList.contains("registration_section")) title.textContent = text.registration;
  });
  setText(".cart_drawer .section_title", text.shoppingCart);

  document.querySelectorAll('label[for="fullName"], label[for="registerFullName"]').forEach((label) => {
    label.textContent = text.fullName;
  });
  document.querySelectorAll('label[for="email"], label[for="loginEmail"], label[for="registerEmail"]').forEach((label) => {
    label.textContent = text.email;
  });
  document.querySelectorAll('label[for="phone"], label[for="registerPhone"]').forEach((label) => {
    label.textContent = text.phone;
  });
  document.querySelectorAll('label[for="pickup"]').forEach((label) => {
    label.textContent = text.pickup;
  });
  document.querySelectorAll('label[for="password"], label[for="loginPassword"], label[for="registerPassword"]').forEach((label) => {
    label.textContent = text.password;
  });
  document.querySelectorAll("#fullName, #registerFullName").forEach((input) => (input.placeholder = text.fullNamePlaceholder));
  document.querySelectorAll("#email, #loginEmail, #registerEmail").forEach((input) => (input.placeholder = text.emailPlaceholder));
  document.querySelectorAll("#phone, #registerPhone").forEach((input) => (input.placeholder = text.phonePlaceholder));
  document.querySelectorAll("#pickup").forEach((input) => (input.placeholder = text.pickupPlaceholder));
  document.querySelectorAll("#registrationForm .submit_btn, #registerForm .submit_btn").forEach((button) => {
    button.textContent = text.submitRegister;
  });
  document.querySelectorAll("#loginForm .submit_btn").forEach((button) => {
    button.textContent = text.submitLogin;
  });

  if (loginForm) {
    setText(".section_title", text.loginTitle, loginForm.closest(".registration_section"));
    const prompt = loginForm.nextElementSibling;
    if (prompt) {
      prompt.innerHTML = `${text.loginPrompt} <button type="button" class="auth_switch" data-open-panel="register">${text.loginPromptLink}</button>`;
    }
  }
  if (registerForm) {
    setText(".section_title", text.registerTitle, registerForm.closest(".registration_section"));
    const prompt = registerForm.nextElementSibling;
    if (prompt) {
      prompt.innerHTML = `${text.registerPrompt} <button type="button" class="auth_switch" data-open-panel="login">${text.registerPromptLink}</button>`;
    }
  }
}

function applyFooterLanguage() {
  const text = t();
  setText("footer .footer_section:nth-child(1) h3", text.logo);
  setText("footer .footer_section:nth-child(1) p", text.footerText);
  setText("footer .footer_section:nth-child(2) h3", text.footerLinks);
  const footerLinks = document.querySelectorAll("footer .footer_section:nth-child(2) a");
  const labels = [text.nav[0], text.nav[1], text.about, text.contact];
  footerLinks.forEach((link, index) => {
    if (labels[index]) link.textContent = labels[index];
  });
  setText("footer .footer_section:nth-child(3) h3", text.contactInfo);
  const contacts = document.querySelectorAll("footer .footer_section:nth-child(3) p");
  if (contacts[0]) contacts[0].textContent = `${text.phoneLabel} +995 599 376694`;
  if (contacts[1]) contacts[1].textContent = "Email: info@carrental.ge";
  if (contacts[2]) contacts[2].textContent = text.address;
  setText(".footer_bottom p", text.rights);
}
// Auto-playing image slider
const slider = document.querySelector('[data-slider]');
if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slider-image'));
    const dots = Array.from(slider.querySelectorAll('[data-slider-dot]'));
    const prevBtn = slider.querySelector('[data-slider-prev]');
    const nextBtn = slider.querySelector('[data-slider-next]');
    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    function startSlider() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => showSlide(currentSlide + 1), 4000);
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startSlider();
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startSlider();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(Number(dot.dataset.sliderDot));
            startSlider();
        });
    });

    startSlider();
}

function renderCart() {
  const text = t();
  if (!cartList || !cartTotal) return;

  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = `<p class="empty_cart">${text.emptyCart}</p>`;
    if (cartMessage) cartMessage.textContent = "";
  } else {
    cart.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "cart_item";
      const typeLabel = item.typeKey
        ? item.typeKey === "sedan"
          ? text.sedan
          : text.suv
        : item.type;
      itemEl.innerHTML = `
        <div>
          <p class="cart_item_name">${item.name}</p>
          <p class="cart_item_details">${typeLabel} - ${item.price}$</p>
        </div>
        <button class="remove_item_btn" data-index="${index}" type="button">${text.removeButton}</button>
      `;
      cartList.appendChild(itemEl);
    });
    if (cartMessage) cartMessage.textContent = "";
  }

  cartTotal.textContent = cart.reduce((sum, item) => sum + item.price, 0);
  if (cartSummary) {
    cartSummary.innerHTML = `${text.totalLabel} <span id="cartTotal">${cartTotal.textContent}</span>$`;
  }
  if (clearCartBtn) clearCartBtn.textContent = text.clearCart;
  saveCart();
}

function addCarToCart(button) {
  const carBox = button.closest(".car_box");
  if (!carBox) return;

  const name = carBox.querySelector(".car_name")?.textContent.trim() || "Car";
  const priceText = carBox.querySelector(".price")?.textContent.trim() || "0";
  const price = Number(priceText.replace(/[^0-9]/g, "")) || 0;
  const typeElement = carBox.querySelector(".car_namecont span");
  const type = typeElement?.textContent.trim() || "";
  const typeKey = typeElement?.dataset.carType || "";

  cart.push({ name, type, typeKey, price });
  renderCart();
  openPanel("cart");
}

function setupCartButtons() {
  document.querySelectorAll(".car_box .card_btn").forEach((btn) => {
    btn.addEventListener("click", () => addCarToCart(btn));
  });
}

function bindCartActions() {
  if (cartList) {
    cartList.addEventListener("click", (event) => {
      if (!event.target.matches(".remove_item_btn")) return;
      const index = Number(event.target.dataset.index);
      cart.splice(index, 1);
      renderCart();
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cart.length = 0;
      renderCart();
    });
  }
}

function bindRegistrationForm() {
  if (!registrationForm || !formMessage) return;

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value.trim();
    const email = event.target.email.value.trim();
    const phone = event.target.phone.value.trim();
    if (!fullName || !email || !phone) {
      formMessage.textContent = t().formError;
      formMessage.style.color = "#d8000c";
      return;
    }

    formMessage.textContent = t().formSuccess;
    formMessage.style.color = "#1a7f37";
    event.target.reset();
  });
}

function bindLoginForm() {
  if (!loginForm) return;
  const loginMessage = document.getElementById("loginMessage");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    if (!loginMessage) return;
    if (!email || !password) {
      loginMessage.textContent = t().loginError;
      loginMessage.style.color = "#d8000c";
      return;
    }

    loginMessage.textContent = t().loginSuccess;
    loginMessage.style.color = "#1a7f37";
    event.target.reset();
  });
}

function bindRegisterForm() {
  if (!registerForm) return;
  const registerMessage = document.getElementById("registerMessage");
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value.trim();
    const email = event.target.email.value.trim();
    const phone = event.target.phone.value.trim();
    const password = event.target.password.value.trim();
    if (!registerMessage) return;
    if (!fullName || !email || !phone || !password) {
      registerMessage.textContent = t().registerError;
      registerMessage.style.color = "#d8000c";
      return;
    }

    registerMessage.textContent = t().registerSuccess;
    registerMessage.style.color = "#1a7f37";
    event.target.reset();
  });
}

function openPanel(panelName) {
  overlays.forEach((overlay) => {
    const isTarget = overlay.dataset.panel === panelName;
    overlay.classList.toggle("is_open", isTarget);
    overlay.setAttribute("aria-hidden", isTarget ? "false" : "true");
  });
  document.body.classList.toggle("panel_open", Boolean(panelName));
}

function closePanels() {
  overlays.forEach((overlay) => {
    overlay.classList.remove("is_open");
    overlay.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("panel_open");
}

function bindPanelActions() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-panel]");
    if (openButton) {
      event.preventDefault();
      openPanel(openButton.dataset.openPanel);
      return;
    }

    if (event.target.closest("[data-close-panel]")) {
      closePanels();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanels();
  });
}

function bindLanguageButtons() {
  document.querySelectorAll(".lang_button").forEach((button) => {
    button.addEventListener("click", () => {
      locale = button.dataset.lang;
      localStorage.setItem(languageKey, locale);
      applyLanguage();
    });
  });
}

function applyLanguage() {
  applyHeaderLanguage();
  applyHomeLanguage();
  applyCardsLanguage();
  applyFormsLanguage();
  applyFooterLanguage();
  renderCart();
}

function bindBookFormActions() {
  // Outside click closes form - simple version
  const bookBox = document.querySelector(".book_box");
  const bookToggle = document.getElementById("book_toggle");
  
  if (bookBox && bookToggle) {
    document.addEventListener("click", (event) => {
      if (!bookBox.contains(event.target) && event.target.id !== "book_toggle") {
        const label = document.querySelector("label[for='book_toggle']");
        if (label && !label.contains(event.target)) {
          bookToggle.checked = false;
        }
      }
    });
  }
}

function init() {
  bindPanelActions();
  bindLanguageButtons();
  setupCartButtons();
  bindCartActions();
  bindRegistrationForm();
  bindLoginForm();
  bindRegisterForm();
  applyLanguage();
}

init();
