function updateTime() {
  let losAngelesElement = document.querySelector("#la");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment();

    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("[<h1>]h:mm:ss[</h1>] [<p>]A[</p>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment();

    parisDateElement.innerHTML = moment()
      .tz("France/Paris")
      .format("MMMM Do YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("France/Paris")
      .format("[<h1>]h:mm:ss[</h1>] [<p>]A[</p>]");
  }
}

function cityUpdate(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  cityElement.innerHTML = `<div class="city-details">
          <div class="left">
            <h1 class="city">${cityName}</h1>
            <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
          </div>
          <div class="time">
            <h1 class="time">${cityTime.format(
              "[<h1>]h:mm:ss[</h1>] [<p>]A[</p>]"
            )}</h1>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", cityUpdate);
