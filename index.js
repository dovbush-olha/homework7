//task1
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=300,height=300,left=100,top=100`;

document.querySelector("#openTab").addEventListener("click", () => {
  let openTab = window.open("/", "test", params);
  setTimeout(() => {
    openTab.resizeTo("500", "500");
    setTimeout(() => {
      openTab.moveTo("200", "200");
    }, 2000);
  }, 2000);
  setTimeout(() => {
    openTab.close();
  }, 6000);
});

//task2
const button = document.querySelector("#changeStyle");

function changeStyle() {
  let p = document.querySelector("#text");
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Comic Sans MS";
}

button.addEventListener("click", changeStyle);

//task3
const blue = document.querySelector("#blue");
blue.addEventListener("click", () => {
  document.documentElement.style.backgroundColor = "lightblue";
});

const pink = document.querySelector("#pink");
pink.addEventListener("dblclick", () => {
  document.documentElement.style.backgroundColor = "pink";
});

const brown = document.querySelector("#brown");
brown.addEventListener("mousedown", () => {
  document.documentElement.style.backgroundColor = "brown";
});

brown.addEventListener("mouseup", () => {
  document.documentElement.style.backgroundColor = "white";
});

const yellow = document.querySelector("#yellow");
yellow.addEventListener("mouseenter", () => {
  document.documentElement.style.backgroundColor = "yellow";
});
yellow.addEventListener("mouseleave", () => {
  document.documentElement.style.backgroundColor = "white";
});

//task4
const select = document.querySelector("#names");
const form = document.querySelector("#form");
function handleSubmitNames(e) {
  e.preventDefault();
  select.options[select.selectedIndex].remove();
}
form.addEventListener("submit", handleSubmitNames);

//task5
const liveText = document.querySelector("#liveText");
const liveButton = document.querySelector("#liveButton");

liveButton.addEventListener("click", () => {
  const div = document.createElement("div");
  div.textContent = "I was pressed!";
  liveText.append(div);
});
liveButton.addEventListener("mouseenter", () => {
  const div = document.createElement("div");
  div.textContent = "Mouse on me!";
  liveText.append(div);
});

liveButton.addEventListener("mouseleave", () => {
  const div = document.createElement("div");
  div.textContent = "Mouse is not on me!";
  liveText.append(div);
});

//task6
const resizeText = document.querySelector("#resize");
const widthText = document.querySelector("#width");
const heightText = document.querySelector("#height");

window.addEventListener("resize", () => {
  widthText.textContent = `Width: ${window.innerWidth}`;
  heightText.textContent = `Height: ${window.innerHeight}`;
});

//task7
const selectedCountry = document.querySelector("#country");
const selectedCities = document.querySelector("#cities");
const selected = document.querySelector("#selected");

function createOptionsCity(cities, selector) {
  selector.innerHTML = "";
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    selector.append(option);
  });
}

function handleSelectedCountry() {
  switch (selectedCountry.options[selectedCountry.selectedIndex].value) {
    case "ger":
      createOptionsCity(
        ["Berlin", "Hamburg", "Munich", "Cologne"],
        selectedCities
      );
      break;
    case "usa":
      createOptionsCity(
        ["Chicago", "New-York", "Washington", "Boston"],
        selectedCities
      );
      break;
    case "ukr":
      createOptionsCity(["Kyiv", "Lviv", "Ternopil", "Rivne"], selectedCities);
      break;
  }
}

selectedCountry.addEventListener("change", handleSelectedCountry);
