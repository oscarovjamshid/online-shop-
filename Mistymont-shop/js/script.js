// VARIABLES
const images = document.querySelectorAll(".slider .image");
const indicators = document.querySelectorAll(".indicators");
const slider = document.querySelector(".slider");

let indexes = new Array(indicators.length).fill(0);
let timer = null;

// EVENTS
slider.addEventListener("mouseover", () => clearTimeout(timer));
slider.addEventListener("mouseleave", () => autoplay());

// FUNCTIONS
function autoplay() {
  timer = setTimeout(nextSlide, 1000);
}

autoplay();

function nextSlide() {
  indicators.forEach((indicator, i) => {
    const dots = indicator.querySelectorAll(".dot");
    const imgs = images[i].querySelectorAll("img");
    dots.forEach((dot, j) => {
      dot.addEventListener("click", () => {
        indexes[i] = j;
        removeActive(dots, imgs);
        dot.classList.add("actived");
        imgs[j].classList.add("actived");
      });
    });
  });
}

function removeActive(dots, imgs) {
  dots.forEach((dot) => dot.classList.remove("actived"));
  imgs.forEach((img) => img.classList.remove("actived"));
  autoplay();
}

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("loader-hide");
});

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let filterBtn = document.querySelectorAll(".filter-buttons .buttons");
let filterItem = document.querySelectorAll(".products .box-container .box");

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");

      if (item.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  };
});

var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const btnn = document.querySelector(".to-top");

btnn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (pageYOffset > 1000) {
    btnn.style.transform = "scale(1)";
  } else {
    btnn.style.transform = "scale(0)";
  }
});

// Send Form to Bot

let client_name = document.querySelector("#name");
let client_email = document.querySelector("#email");
let client_number = document.querySelector("#number");
let client_subject = document.querySelector("#subject");
let client_text = document.querySelector("#textt");

const token = "5187229969:AAGk_AnBFbKx2WwfNJyWRXrB3nAyGIYtuZ0";
const chatId = "-600290657";
const submit = document.querySelector("#submit-all");

submit.addEventListener("click", async function (e) {
  e.preventDefault();

  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_name.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_email.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_number.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_subject.value}`
  );
  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${client_text.value}`
  );

  client_name.value = "";
  client_email.value = "";
  client_number.value = "";
  client_subject.value = "";
  client_text.value = "";

  alert("Yuborildi // Отправлено // Sent");
});





