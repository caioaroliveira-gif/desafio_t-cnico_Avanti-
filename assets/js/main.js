document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const searchFeedback = document.getElementById("searchFeedback");

  const handleSearch = () => {
    const query = searchInput.value.trim();

    if (query !== "") {
      searchFeedback.textContent = `Você buscou por: '${query}'`;
      searchFeedback.style.display = "block";
    } else {
      searchFeedback.style.display = "none";
    }
  };

  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
    });
  }

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      newsletterForm.reset();
    });
  }
});
