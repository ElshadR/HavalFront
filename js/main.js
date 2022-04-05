"use strict";
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let scroll = Math.floor(window.scrollY * 10);
    makeChangesOnScroll(scroll);
  });

  const navbar = document.querySelector(".navbar"),
    navLink = document.querySelectorAll(".nav-link"),
    logo = document.querySelector(".navbar-brand");

  const changesOnHover = (elem) => {
    elem.onmouseover = elem.onmouseout = handler;

    function handler(event) {
      if (event.type === "mouseover") {
        logo.style.backgroundImage = 'url("images/haval_nav_log2.png")';
      }
      if (event.type === "mouseout") {
        logo.style.backgroundImage = 'url("images/haval_nav_log.png")';
      }
    }
  };

  changesOnHover(navbar);

  const makeChangesOnScroll = (scrl) => {
    let langText = document.querySelector("#havalLang-button");

    if (scrl > 100) {
      navbar.style.backgroundColor = "#fff";
      navLink.forEach((item) => {
        item.style.color = "#5a5a5a";
        item.addEventListener("mouseover", () => {
          item.style.color = "red";
        });
        item.addEventListener("mouseout", () => {
          item.style.color = "#5a5a5a";
        });
      });

      logo.style.backgroundImage = 'url("images/haval_nav_log2.png")';
      langText.style.color = "#5a5a5a";
    } else {
      // changesOnHover(navbar);

      navbar.style.background = "none";
      navLink.forEach((item) => {
        item.style.color = "#fff";
        item.addEventListener("mouseover", () => {
          item.style.color = "red";
        });
        item.addEventListener("mouseout", () => {
          item.style.color = "#fff";
        });
      });

      logo.style.backgroundImage = 'url("images/haval_nav_log.png")';
      langText.style.color = "#fff";
    }
  };
  function getFileOfInput() {
    const inputFile = document.querySelector("#havalFileMultiple"),
      label = document.querySelector(".add-file");
    if (inputFile != null) {
      inputFile.addEventListener("change", (e) => {
        let fileName = e.target.files[0].name;
        label.innerHTML = fileName;
      });
    }
  }

  const btnCredit = document.querySelector(".btn-credit");

  if (btnCredit != null) {
    const creditSelectbox = document.querySelector("[name='modelsForCredit']"),
      modelPrice = document.querySelector("#price"),
      creditPercent = document.querySelector("#inputPercent"),
      creditMonths = document.querySelectorAll("[name='months']"),
      initialElem = document.querySelector("#initial"),
      creditElem = document.querySelector("#credit"),
      paymentElem = document.querySelector("#payment");

    btnCredit.addEventListener("click", (e) => {
      e.preventDefault();
      function getMonthFromCheckbox(months) {
        let month;
        for (let i = 0; i < months.length; i++) {
          month = months[i];
          if (month.checked === true) {
            break;
          }
        }
        return month.value;
      }
      let monthValue = getMonthFromCheckbox(creditMonths);

      modelPrice.textContent = creditSelectbox.value;

      let initialPayment,
        bankPay,
        insurance,
        oneMonthPercent,
        creditPrice,
        monthlyPayment;

      function getInsurance(month) {
        switch (month) {
          case "12":
            insurance = (modelPrice.textContent * 3.2) / 100;
            break;

          case "24":
            insurance = (modelPrice.textContent * 5.3) / 100;
            break;

          case "36":
            insurance = (modelPrice.textContent * 6) / 100;
            break;

          case "48":
            insurance = (modelPrice.textContent * 8) / 100;
            break;
        }
        return insurance;
      }

      function getBankPayment() {
        bankPay =
          ((modelPrice.textContent - (modelPrice.textContent * 40) / 100) *
            0.6) /
          100;
        return bankPay;
      }

      function getInitial() {
        initialPayment =
          (modelPrice.textContent * 40) / 100 +
          getInsurance(monthValue) +
          getBankPayment();
        return initialPayment;
      }

      function getPercent() {
        if (monthValue === "48") {
          oneMonthPercent =
            ((parseInt(modelPrice.textContent) - getInitial()) * 17) / 100 / 12;
        } else {
          oneMonthPercent =
            ((parseInt(modelPrice.textContent) - getInitial()) *
              parseInt(creditPercent.value)) /
            100 /
            12;
        }

        return oneMonthPercent;
      }

      function getCredit() {
        creditPrice =
          parseInt(monthValue) * getPercent() +
          (parseInt(modelPrice.textContent) - getInitial());
        return creditPrice;
      }

      function getPayment() {
        monthlyPayment = getCredit() / parseInt(monthValue);
        return monthlyPayment;
      }

      const result = {
        initial: getInitial().toFixed(2),
        credit: getCredit().toFixed(2),
        payment: getPayment().toFixed(2),
      };
      initialElem.textContent = result.initial;
      creditElem.textContent = result.credit;
      paymentElem.textContent = result.payment;
    });
  }

  const tabsParent = document.querySelector(".color-list"),
    tabs = document.querySelectorAll(".color-list-item"),
    tabsContent = document.querySelectorAll(".model-content");

  function hideTabContent() {
    tabsContent.forEach((tabItem) => {
      tabItem.classList.add("hide-model-content");
      tabItem.classList.remove("show-model-content");
    });

    tabs.forEach((tabColor) => {
      tabColor.classList.remove("color-list-item-active");
    });
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.add("show-model-content");
    tabsContent[index].classList.remove("hide-model-content");
    tabs[index].classList.add("color-list-item-active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("color-list-item")) {
      tabs.forEach((tabColor, i) => {
        if (target === tabColor) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  getFileOfInput();
});
