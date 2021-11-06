export function openMenu() {
  const burgerButton = document.querySelector(".burgerButton");

  let menuOpen = false;

  burgerButton.addEventListener("click", () => {
    if (!menuOpen) {
      burgerButton.classList.add("open");
      menuOpen = true;
      document.body.style.overflow = "hidden";
      document.body.classList.add("burgerMargin");
      burgerButton.classList.add("burgerMargin");

      document.querySelectorAll(".slideOut li").forEach((li) => {
        li.addEventListener("click", () => {
          li.firstChild.click();
          hideLinks();
          burgerButton.classList.remove("open");
          menuOpen = false;
        });
      });

      showLinks();
    } else {
      burgerButton.classList.remove("open");
      menuOpen = false;

      hideLinks();
    }
  });

  function showLinks() {
    document.querySelector("#menuSlideOut").classList.remove("hidden");

    document.querySelectorAll(".slideOut li:nth-of-type(odd)").forEach((link) => {
      link.animate(
        [
          {
            transform: "translateX(100vw)",
          },
          {
            transform: "translateX(0)",
          },
        ],
        {
          duration: 500,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });

    document.querySelectorAll(".slideOut li:nth-of-type(even)").forEach((link) => {
      link.animate(
        [
          {
            transform: "translateX(-100vw)",
          },
          {
            transform: "translateX(0)",
          },
        ],
        {
          duration: 500,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });
  }

  function hideLinks() {
    document.querySelectorAll(".slideOut li:nth-of-type(odd)").forEach((link) => {
      link.animate(
        [
          {
            transform: "translateX(0)",
          },
          {
            transform: "translateX(100vw)",
          },
        ],
        {
          duration: 500,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });

    document.querySelectorAll(".slideOut li:nth-of-type(even)").forEach((link) => {
      link.animate(
        [
          {
            transform: "translateX(0)",
          },
          {
            transform: "translateX(-100vw)",
          },
        ],
        {
          duration: 500,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });

    setTimeout(() => {
      document.querySelector("#menuSlideOut").classList.add("hidden");
      document.body.style.overflow = "visible";
      document.body.classList.remove("burgerMargin");
      burgerButton.classList.remove("burgerMargin");
    }, 500);
  }
}
