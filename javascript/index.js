function updateTime() {
  let losAngelesElement = document.querySelector("#la");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("[<h1>]h:mm:ss[</h1>] [<p>]A[</p>]");

  let parisElement = document.querySelector("#paris");
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

updateTime();
setInterval(updateTime, 1000);
