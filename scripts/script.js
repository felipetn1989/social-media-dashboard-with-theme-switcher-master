toggleSwitch.checked = true;

let attribution = document.querySelector(".attribution");

let cardHeadings = document.querySelector(".card__headings");

let boxToggles = document.querySelectorAll(".box_toggle");

let textToggles = document.querySelectorAll(".text_toggle");

let numberToggles = document.querySelectorAll(".number_toggle");

toggleSwitch.addEventListener("click", toggleCheck);

function toggleCheck() {
  if (toggleSwitch.checked == false) {
    document.body.style.backgroundColor = "var(--Very-Dark-Blue)";
    attribution.style.color = "white";
    cardHeadings.style.color = "var(--Desaturated-Blue)";
    mainHeading.style.color = "white";
    secondaryHeading.style.color = "white";

    boxToggles.forEach(
      (boxToggle) =>
        (boxToggle.style.backgroundColor = "var(--Dark-Desaturated-Blue)")
    );

    textToggles.forEach(
      (textToggle) => (textToggle.style.color = "var(--Desaturated-Blue)")
    );

    numberToggles.forEach(
      (numberToggle) => (numberToggle.style.color = "white")
    );
  } else {
    document.body.style.backgroundColor = "var(--Very-Pale-Blue)";
    attribution.style.color = "var(--Very-Dark-Blue)";
    cardHeadings.style.color = "var(--Dark-Grayish-Blue)";
    mainHeading.style.color = "var(--Very-Dark-Blue)";
    secondaryHeading.style.color = "var(--Very-Dark-Blue)";

    boxToggles.forEach(
      (boxToggle) =>
        (boxToggle.style.backgroundColor = "var(--Light-Grayish-Blue)")
    );

    textToggles.forEach(
      (textToggle) => (textToggle.style.color = "var(--Dark-Grayish-Blue)")
    );

    numberToggles.forEach(
      (numberToggle) => (numberToggle.style.color = "var(--Very-Dark-Blue)")
    );
  }
}
