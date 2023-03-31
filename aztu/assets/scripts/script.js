const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const body = document.getElementById("body");
const cardsContainer = document.getElementById("cards");
const selectInp = document.getElementById("search");
const selectBox = document.getElementById("region");
darkMode.onclick = () => {
  darkMode.classList.remove("active");
  lightMode.classList.add("active");
  body.classList.add("dark");
};
lightMode.onclick = () => {
  lightMode.classList.remove("active");
  darkMode.classList.add("active");
  body.classList.remove("dark");
};
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    let innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      innerHTML += `<div class="col-3 mb-5">
        <div class="custom__card">
          <div class="custom__card__image">
            <img
              src=${data[i]?.flags.png}
              alt=""
            />
          </div>
          <div class="custom__card__body">
            <h2 class="custom__card__body__name">${data[i].name.common}</h2>
            <p class="custom__card__body__population">
              Population: <span>${data[i].population}</span>
            </p>
            <p class="custom__card__body__region">
              Region: <span>${data[i].region}</span>
            </p>
            <p>Capital: <span>${data[i]?.capital[0]}</span></p>
          </div>
        </div>
      </div>`;
      cardsContainer.innerHTML = innerHTML;
    }
  });
selectInp.addEventListener("keyup", function (e) {
  if (e.target.value == "") {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        let innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          innerHTML += `<div class="col-3 mb-5">
        <div class="custom__card">
          <div class="custom__card__image">
            <img
              src=${data[i]?.flags.png}
              alt=""
            />
          </div>
          <div class="custom__card__body">
            <h2 class="custom__card__body__name">${data[i].name.common}</h2>
            <p class="custom__card__body__population">
              Population: <span>${data[i].population}</span>
            </p>
            <p class="custom__card__body__region">
              Region: <span>${data[i].region}</span>
            </p>
            <p>Capital: <span>${data[i]?.capital[0]}</span></p>
          </div>
        </div>
      </div>`;
          cardsContainer.innerHTML = innerHTML;
        }
      });
  } else {
    fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        let innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          innerHTML += `<div class="col-3 mb-5">
              <div class="custom__card">
                <div class="custom__card__image">
                  <img
                    src=${data[i]?.flags.png}
                    alt=""
                  />
                </div>
                <div class="custom__card__body">
                  <h2 class="custom__card__body__name">${data[i].name.common}</h2>
                  <p class="custom__card__body__population">
                    Population: <span>${data[i].population}</span>
                  </p>
                  <p class="custom__card__body__region">
                    Region: <span>${data[i].region}</span>
                  </p>
                  <p>Capital: <span>${data[i]?.capital[0]}</span></p>
                </div>
              </div>
            </div>`;
          cardsContainer.innerHTML = innerHTML;
        }
      });
  }
});
selectBox.addEventListener("change", function (e) {
  console.log(e.target.value);
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      let innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        innerHTML += `<div class="col-3 mb-5">
              <div class="custom__card">
                <div class="custom__card__image">
                  <img
                    src=${data[i]?.flags.png}
                    alt=""
                  />
                </div>
                <div class="custom__card__body">
                  <h2 class="custom__card__body__name">${data[i].name.common}</h2>
                  <p class="custom__card__body__population">
                    Population: <span>${data[i].population}</span>
                  </p>
                  <p class="custom__card__body__region">
                    Region: <span>${data[i].region}</span>
                  </p>
                  <p>Capital: <span>${data[i]?.capital[0]}</span></p>
                </div>
              </div>
            </div>`;
        cardsContainer.innerHTML = innerHTML;
      }
    });
});
