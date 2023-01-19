toggleSwitch.checked = true;

let attribution = document.querySelector(".attribution");

let cardHeadings = document.querySelector(".card__headings");

let mainStatsArray = document.querySelectorAll(".main__stats");

let profiles = document.querySelectorAll(".profile");

let statsNumbers = document.querySelectorAll(".stats__number");

let mainOverviewArray = document.querySelectorAll(".main__overview");

let overviewStatsArray = document.querySelectorAll(".overview__stats");

let overviewNumbers = document.querySelectorAll(".overview__number");

toggleSwitch.addEventListener("click", toggleCheck);

function toggleCheck() {
  if (toggleSwitch.checked == false) {
    document.body.style.backgroundColor = "var(--Very-Dark-Blue)";
    attribution.style.color = "white";
    cardHeadings.style.color = "var(--Desaturated-Blue)";
    mainHeading.style.color = "white";
    secondaryHeading.style.color = "white";

    mainStatsArray.forEach((mainStats) => {
      mainStats.style.backgroundColor = "var(--Dark-Desaturated-Blue)";
    });

    profiles.forEach(
      (profile) => (profile.style.color = "var(--Desaturated-Blue)")
    );

    statsNumbers.forEach((number) => (number.style.color = "white"));

    mainOverviewArray.forEach(
      (mainOverview) =>
        (mainOverview.style.backgroundColor = "var(--Dark-Desaturated-Blue)")
    );

    overviewStatsArray.forEach(
      (overviewStats) => (overviewStats.style.color = "var(--Desaturated-Blue)")
    );

    overviewNumbers.forEach(
      (overviewNumber) => (overviewNumber.style.color = "white")
    );
  }
}
