function degreeHeading(newHeading) {
  let heading = document.querySelector("h1");
  heading.innerHTML = newHeading;
}

function inform() {
  let city = prompt("what city do you live in?");
  let tempurature = prompt("What temperature is it?");

  if (tempurature < 0) {
    degreeHeading(`🥶<br /> Currently ${tempurature}°C in ${city}`);
  } else {
    degreeHeading(`😊<br /> Currently ${tempurature}°C in ${city}`);
  }
}

let informButton = document.querySelector("button");

informButton.addEventListener("click", inform);
