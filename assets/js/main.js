document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const searchFeedback = document.getElementById("searchFeedback");

  const categoriesButton = document.getElementById("categoriesButton");
  const megaMenu = document.getElementById("megaMenu");

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mainNavigation = document.getElementById("mainNavigation");

  const newsletterForm = document.getElementById("newsletterForm");
  const buyButtons = document.querySelectorAll(".buy-button");

  const handleSearch = () => {
    if (!searchInput || !searchFeedback) {
      return;
    }

    const query = searchInput.value.trim();

    if (query !== "") {
      searchFeedback.textContent = `Você buscou por: '${query}'`;
      searchFeedback.style.display = "block";
    } else {
      searchFeedback.textContent = "";
      searchFeedback.style.display = "none";
    }
  };

  if (searchBtn) {
    searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      handleSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch();
      }
    });
  }

  const closeMegaMenu = () => {
    if (!megaMenu || !categoriesButton) {
      return;
    }

    megaMenu.classList.remove("is-open");
    categoriesButton.setAttribute("aria-expanded", "false");
  };

  if (categoriesButton && megaMenu) {
    categoriesButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const menuIsOpen = megaMenu.classList.toggle("is-open");

      categoriesButton.setAttribute("aria-expanded", String(menuIsOpen));
    });

    megaMenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", () => {
    closeMegaMenu();
  });

  if (mobileMenuButton && mainNavigation) {
    mobileMenuButton.addEventListener("click", () => {
      const menuIsOpen = mainNavigation.classList.toggle("is-mobile-open");

      mobileMenuButton.setAttribute("aria-expanded", String(menuIsOpen));
    });
  }

  if (typeof Swiper !== "undefined") {
    const swiperSettings = {
      slidesPerView: 1,
      spaceBetween: 14,
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 14,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    };

    const firstSwiper = document.querySelector(".mySwiper");
    const secondSwiper = document.querySelector(".secondSwiper");

    if (firstSwiper) {
      new Swiper(firstSwiper, swiperSettings);
    }

    if (secondSwiper) {
      new Swiper(secondSwiper, {
        ...swiperSettings,
        navigation: {
          nextEl: ".secondSwiper .swiper-button-next",
          prevEl: ".secondSwiper .swiper-button-prev",
        },
        pagination: {
          el: ".secondSwiper .swiper-pagination",
          clickable: true,
        },
      });
    }
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      alert("Cadastro realizado com sucesso!");
      newsletterForm.reset();
    });
  }

  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Produto adicionado ao carrinho!");
    });
  });
});
