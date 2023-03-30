const container = document.getElementById("cards");
fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderList(data.products);
  });
function renderList(products) {
  let innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    innerHTML += ` <div class="col-3 mb-5">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">${products[i].brand} ${products[i].model}</h5>
            <p class="card-text">
              ${products[i].desc} ${products[i].price} AZN
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <button id="${products[i].id}" class="deleteBtns btn btn-danger text-light">delete</button>
          </div>
        </div>
      </div>`;
    container.innerHTML = innerHTML;
    const deleteBtns = document.getElementsByClassName("deleteBtns");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", function (e) {
        deleteProd(products, e.target.id);
      });
    }
  }
}
function deleteProd(array, id) {
  const target = array.find((prod) => prod.id == id);
  console.log(target);
  const indexOfTarget = array.indexOf(target);
  array.splice(indexOfTarget, 1);
  renderList(array);
}
