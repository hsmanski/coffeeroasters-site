// Navigation Variables
// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modalNav = document.querySelector(".modal-nav");

// Close Modal Function
function closeNavModal() {
  hamburgerMenu.classList.remove("change");
  modalNav.classList.add("hidden");
}
// End of Navigation Functions

// Navigation Event Listeners
// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  modalNav.classList.toggle("hidden");
});
// End of Navigation Event Listeners

// Order Modal
// Order Modal Variables
const orderModal = document.querySelector(".order-modal");
const orderModalBackground = document.querySelector(".order-modal-background");
// btn variable
const orderBtn = document.querySelector(".order-create-plan-btn");
// price variable
const orderPrice = document.querySelector(".order-modal-price span");

// End of Order Modal Variables
// Order Modal EventListeners
orderBtn.addEventListener("click", () => {
  orderModal.classList.remove("hidden");
});

orderModalBackground.addEventListener("click", () => {
  orderModal.classList.add("hidden");
});

// End of Order Modal EventListeners
// End of Order Modal

// Dropdown Menu Functionality
// Dropdown Menu Variables
// Title Variables
const howTitle = document.querySelector(".how-title");
const typeTitle = document.querySelector(".type-title");
const amountTitle = document.querySelector(".amount-title");
const grindTitle = document.querySelector(".grind-title");
const deliverTitle = document.querySelector(".deliver-title");
// Button Variables
const howBtns = document.querySelector(".how-btns");
const typeBtns = document.querySelector(".type-btns");
const amountBtns = document.querySelector(".amount-btns");
const grindBtns = document.querySelector(".grind-btns");
const deliverBtns = document.querySelector(".deliver-btns");
// End of Dropdown Menu Variables

// Side Menu Variables
const sidePreferences = document.querySelector(".side-preferences");
const sideBeanType = document.querySelector(".side-bean-type");
const sideQuantity = document.querySelector(".side-quantity");
const sideGrind = document.querySelector(".side-grind");
const sideDeliveries = document.querySelector(".side-deliveries");
// End of Dropdown Menu Variables

// Dropdown Menu Functions
function titleDropdown(btn, sideMenu) {
  btn.classList.toggle("change");
  sideMenu.classList.toggle("change");
}
// End of Dropdown Menu Functions

// Dropdown Menu Event Listeners
howTitle.addEventListener("click", () => {
  titleDropdown(howBtns, sidePreferences);
});

typeTitle.addEventListener("click", () => {
  titleDropdown(typeBtns, sideBeanType);
});

amountTitle.addEventListener("click", () => {
  titleDropdown(amountBtns, sideQuantity);
});

grindTitle.addEventListener("click", () => {
  titleDropdown(grindBtns, sideGrind);
});

deliverTitle.addEventListener("click", () => {
  titleDropdown(deliverBtns, sideDeliveries);
});
// End of Dropdown Menu Event Listeners

// Order Form Button Selection Variables
// How you drink coffee Button variables
const capsuleBtn = document.querySelector(".form-selection-capsule");
const filterBtn = document.querySelector(".form-selection-filter");
const espressoBtn = document.querySelector(".form-selection-espresso");
// modal paragraph variables
const howText = document.querySelector(".how-type");
const howText2 = document.querySelector(".how-type2");

// paragraph variables
const howText3 = document.querySelector(".how-type3");
const howText4 = document.querySelector(".how-type4");

// What type of coffee Button variables
const originBtn = document.querySelector(".form-selection-origin");
const decafBtn = document.querySelector(".form-selection-decaf");
const blendedBtn = document.querySelector(".form-selection-blended");
// modal paragraph variables
const coffeeText = document.querySelector(".coffee-type");
const coffeeText2 = document.querySelector(".coffee-type2");

// paragraph variables
const coffeeText3 = document.querySelector(".coffee-type3");
const coffeeText4 = document.querySelector(".coffee-type4");

// Amount of coffee Button variables
const amount250 = document.querySelector(".form-selection-amount-250");
const amount500 = document.querySelector(".form-selection-amount-500");
const amount1000 = document.querySelector(".form-selection-amount-1000");
// modal paragraph variables
const amountText = document.querySelector(".amount-type");
const amountText2 = document.querySelector(".amount-type2");

// paragraph variables
const amountText3 = document.querySelector(".amount-type3");
const amountText4 = document.querySelector(".amount-type4");

// Grind of coffee Button variables
const wholeBean = document.querySelector(".form-selection-wholebean");
const filter2 = document.querySelector(".form-selection-filter-2");
const cafetiere = document.querySelector(".form-selection-cafetiere");
// modal paragraph variables
const grindText = document.querySelector(".grind-type");
// const grindText2 = document.querySelector(".grind-type2");

// paragraph variables
const grindText3 = document.querySelector(".grind-type3");

// Delivery of coffee Button variables
const week = document.querySelector(".form-selection-week");
const biWeekly = document.querySelector(".form-selection-bi-weekly");
const month = document.querySelector(".form-selection-month");
// modal paragraph variables
const deliveryText = document.querySelector(".delivery-type");
const deliveryText2 = document.querySelector(".delivery-type2");

// paragraph variables
const deliveryText3 = document.querySelector(".delivery-type3");
const deliveryText4 = document.querySelector(".delivery-type4");

// End of Button Selection Variables

// Paragraph Variables paragraphDefault();
const orderTextDefault = document.querySelector(".order-text-default");
const orderTextCapsule = document.querySelector(".order-text-capsule");

const orderTextDefaultModal = document.querySelector(
  ".order-text-default-modal"
);
const orderTextCapsuleModal = document.querySelector(
  ".order-text-capsule-modal"
);
// End of Paragraph Variables paragraphDefault();

// Price Variables
const priceWeekly = document.querySelector(".text-weekly span");
const priceBiweekly = document.querySelector(".text-biweekly span");
const priceMonthly = document.querySelector(".text-monthly span");
// End of Price Variables

// Side Menu Variables
const side1 = document.querySelector(".side-01");
const side2 = document.querySelector(".side-02");
const side3 = document.querySelector(".side-03");
const side4 = document.querySelector(".side-04");
const side5 = document.querySelector(".side-05");
// End of Side Menu Variables

// Price Change Variables
var weeklyPriceVar;
var biweeklyPriceVar;
var monthlyPriceVar;
// End of Price Change Variables

// Order Button to become active
var a;
var b;
var c;
var d;
var e;
// End of Order Button to become active
// End of Order Form Button Selection Variables

// Order Selection Functions
// Paragraph Default and Capsule
function paragraphCapsule() {
  // Modal
  orderTextCapsuleModal.classList.remove("hidden");
  orderTextDefaultModal.classList.add("hidden");
  // Main Paragraph
  orderTextCapsule.classList.remove("hidden");
  orderTextDefault.classList.add("hidden");
  grindTitle.classList.add("change");
  grindBtns.classList.remove("change");
}

function paragraphDefault() {
  // Modal
  orderTextCapsuleModal.classList.add("hidden");
  orderTextDefaultModal.classList.remove("hidden");
  // Main Paragraph
  orderTextCapsule.classList.add("hidden");
  orderTextDefault.classList.remove("hidden");
  grindTitle.classList.remove("change");
}

function paragraphTextInput(option, selection, text) {
  if (option === capsule) {
    selection.textContent = text;
  } else if (option === main) {
    selection.textContent = text;
  }
}

// Side Menu Number Color Change
function sideMenuNumber(side) {
  side.style.color = "#0e8784";
}

// Price Change Calculator
function priceChange(week, biweekly, monthly) {
  priceWeekly.textContent = week;
  priceBiweekly.textContent = biweekly;
  priceMonthly.textContent = monthly;
  weeklyPriceVar = week;
  biweeklyPriceVar = biweekly;
  monthlyPriceVar = monthly;
}

function calculateMonthlyPrice(selection, multiply) {
  if (selection === weeklyPriceVar) {
    orderPrice.textContent = (weeklyPriceVar * multiply).toFixed(2);
  } else if (selection === biweeklyPriceVar) {
    orderPrice.textContent = (biweeklyPriceVar * multiply).toFixed(2);
  } else if (selection === monthlyPriceVar) {
    orderPrice.textContent = (monthlyPriceVar * multiply).toFixed(2);
  }
}

// Purchase Button Active
function orderButtonActive(variable) {
  if (variable === 1 || variable === 1.5) {
    a = 1;
  }
  if (variable === 2) {
    b = 2;
  }
  if (variable === 3) {
    c = 3;
  }
  if (variable === 4 || variable === 1.5) {
    d = 4;
  }
  if (variable === 5) {
    e = 5;
  }
  if (a && b && c && d && e) {
    document.querySelector(".order-btn").classList.add("btn-active");
  }
}

// End of Order Selection Functions

// Selection Button Event Listeners
// How you drink coffee HTML change
capsuleBtn.addEventListener("click", () => {
  howText2.textContent = "Capsule";
  howText4.textContent = "Capsule";
  // paragraphTextInput(capsule, howText2, "Capsule");
  // paragraphTextInput(capsule, howText4, "Capsule");
  paragraphCapsule();
  sideMenuNumber(side1);
  orderButtonActive(1.5);
});

filterBtn.addEventListener("click", () => {
  howText.textContent = "Filter";
  howText3.textContent = "Filter";
  // paragraphTextInput(main, howText, "Filter");
  // paragraphTextInput(main, howText3, "Filter");
  paragraphDefault();
  sideMenuNumber(side1);
  orderButtonActive(1);
});

espressoBtn.addEventListener("click", () => {
  howText.textContent = "Espresso";
  howText3.textContent = "Espresso";
  paragraphDefault();
  sideMenuNumber(side1);
  orderButtonActive(1);
});

// What type of coffee HTML change
originBtn.addEventListener("click", () => {
  coffeeText.textContent = "Single Origin";
  coffeeText2.textContent = "Single Origin";
  coffeeText3.textContent = "Single Origin";
  coffeeText4.textContent = "Single Origin";
  sideMenuNumber(side2);
  orderButtonActive(2);
});
decafBtn.addEventListener("click", () => {
  coffeeText.textContent = "Decaf";
  coffeeText2.textContent = "Decaf";
  coffeeText3.textContent = "Decaf";
  coffeeText4.textContent = "Decaf";
  sideMenuNumber(side2);
  orderButtonActive(2);
});
blendedBtn.addEventListener("click", () => {
  coffeeText.textContent = "Blended";
  coffeeText2.textContent = "Blended";
  coffeeText3.textContent = "Blended";
  coffeeText4.textContent = "Blended";
  sideMenuNumber(side2);
  orderButtonActive(2);
});

// Amount of coffee HTML change
amount250.addEventListener("click", () => {
  amountText.textContent = "250g";
  amountText2.textContent = "250g";
  amountText3.textContent = "250g";
  amountText4.textContent = "250g";
  sideMenuNumber(side3);
  priceChange("7.20", "9.60", "12.00");
  orderButtonActive(3);
});
amount500.addEventListener("click", () => {
  amountText.textContent = "500g";
  amountText2.textContent = "500g";
  amountText3.textContent = "500g";
  amountText4.textContent = "500g";
  sideMenuNumber(side3);
  priceChange("13.00", "17.50", "22.00");
  orderButtonActive(3);
});
amount1000.addEventListener("click", () => {
  amountText.textContent = "1000g";
  amountText2.textContent = "1000g";
  amountText3.textContent = "1000g";
  amountText4.textContent = "1000g";
  sideMenuNumber(side3);
  priceChange("22.00", "32.00", "42.00");
  orderButtonActive(3);
});

// Grind of coffee HTML change
wholeBean.addEventListener("click", () => {
  grindText.textContent = "Whole Bean";
  grindText3.textContent = "Whole Bean";
  sideMenuNumber(side4);
  orderButtonActive(4);
});
filter2.addEventListener("click", () => {
  grindText.textContent = "Filter";
  grindText3.textContent = "Filter";
  sideMenuNumber(side4);
  orderButtonActive(4);
});
cafetiere.addEventListener("click", () => {
  grindText.textContent = "Cafetiere";
  grindText3.textContent = "Cafetiere";
  sideMenuNumber(side4);
  orderButtonActive(4);
});

// Delivery of coffee HTML change
week.addEventListener("click", () => {
  deliveryText.textContent = "Every Week";
  deliveryText2.textContent = "Every Week";
  deliveryText3.textContent = "Every Week";
  deliveryText4.textContent = "Every Week";
  sideMenuNumber(side5);
  calculateMonthlyPrice(weeklyPriceVar, 4);
  orderButtonActive(5);
});
biWeekly.addEventListener("click", () => {
  deliveryText.textContent = "Every 2 Weeks";
  deliveryText2.textContent = "Every 2 Weeks";
  deliveryText3.textContent = "Every 2 Weeks";
  deliveryText4.textContent = "Every 2 Weeks";
  sideMenuNumber(side5);
  calculateMonthlyPrice(biweeklyPriceVar, 2);
  orderButtonActive(5);
});
month.addEventListener("click", () => {
  deliveryText.textContent = "Every Month";
  deliveryText2.textContent = "Every Month";
  deliveryText3.textContent = "Every Month";
  deliveryText4.textContent = "Every Month";
  sideMenuNumber(side5);
  calculateMonthlyPrice(monthlyPriceVar, 1);
  orderButtonActive(5);
});
// End of Selection Button Event Listeners
// End of Dropdown Menu Functionality
