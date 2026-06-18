const storageKey = "carRentalCart";
const locale = document.documentElement.lang || "en";
const texts = {
  en: {
    addButton: "Add to cart",
    removeButton: "Remove",
    emptyCart: "No selected cars yet.",
    totalLabel: "Total:",
    clearCart: "Clear cart",
    formSuccess: "Thank you! Your registration is saved.",
    formError: "Please fill required fields.",
    loginError: "Please enter your email and password.",
    loginSuccess: "Login successful. (Demo only)",
    registerError: "Please complete all fields.",
    registerSuccess: "Registration successful. (Demo only)",
  },
  ka: {
    addButton: "დაამატე კალათაში",
    removeButton: "წაშლა",
    emptyCart: "ჯერ არჩეული მანქანა არ არის.",
    totalLabel: "სულ:",
    clearCart: "კალათის გასუფთავება",
    formSuccess: "გმადლობთ! თქვენი რეგისტრაცია შენახულია.",
    formError: "გთხოვთ, შეავსოთ სავალდებულო ველები.",
    loginError: "გთხოვთ, შეიყვანოთ ელ.ფოსტა და პაროლი.",
    loginSuccess: "ავტორიზაცია წარმატებულია. (ტესტური)",
    registerError: "გთხოვთ, დაასრულოთ ყველა ველის შევსება.",
    registerSuccess: "რეგისტრაცია წარმატებულია. (ტესტური)",
  },
  ru: {
    addButton: "Добавить в корзину",
    removeButton: "Удалить",
    emptyCart: "Пока нет выбранных автомобилей.",
    totalLabel: "Общая сумма:",
    clearCart: "Очистить корзину",
    formSuccess: "Спасибо! Ваша регистрация сохранена.",
    formError: "Пожалуйста, заполните обязательные поля.",
    loginError: "Пожалуйста, введите email и пароль.",
    loginSuccess: "Вход выполнен успешно. (Демо)",
    registerError: "Пожалуйста, заполните все поля.",
    registerSuccess: "Регистрация успешна. (Демо)",
  },
};
const text = texts[locale] || texts.en;
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

function renderCart() {
  if (!cartList || !cartTotal) return;

  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = `<p class="empty_cart">${text.emptyCart}</p>`;
    if (cartMessage) cartMessage.textContent = "";
  } else {
    cart.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "cart_item";
      itemEl.innerHTML = `
        <div>
          <p class="cart_item_name">${item.name}</p>
          <p class="cart_item_details">${item.type} • ${item.price}$</p>
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
  saveCart();
}

function addCarToCart(button) {
  const carBox = button.closest(".car_box");
  if (!carBox) return;

  const name = carBox.querySelector(".car_name")?.textContent.trim() || "Car";
  const priceText = carBox.querySelector(".price")?.textContent.trim() || "0";
  const price = Number(priceText.replace(/[^0-9]/g, "")) || 0;
  const type = carBox.querySelector(".car_namecont span")?.textContent.trim() || "";

  cart.push({ name, type, price });
  renderCart();
}

function setupCartButtons() {
  document.querySelectorAll(".car_box .card_btn").forEach((btn) => {
    btn.textContent = text.addButton;
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
      formMessage.textContent = text.formError;
      formMessage.style.color = "#d8000c";
      return;
    }

    formMessage.textContent = text.formSuccess;
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
      loginMessage.textContent = text.loginError;
      loginMessage.style.color = "#d8000c";
      return;
    }

    loginMessage.textContent = text.loginSuccess;
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
      registerMessage.textContent = text.registerError;
      registerMessage.style.color = "#d8000c";
      return;
    }

    registerMessage.textContent = text.registerSuccess;
    registerMessage.style.color = "#1a7f37";
    event.target.reset();
  });
}

function init() {
  setupCartButtons();
  bindCartActions();
  renderCart();
  bindRegistrationForm();
  bindLoginForm();
  bindRegisterForm();
}

init();
