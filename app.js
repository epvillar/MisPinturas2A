// este file es para explicar los pasos que se siguieron para armar script.js

// seleccionamos .secton-center
const sectionCenter = document.querySelector(".section-center")
//console.log(sectionCenter)
// me trae todo el div class section-center

// seleccionamos los buttons
// const filterBtns = document.querySelectorAll(".filter-btn")
const btnContainer = document.querySelector('.btn-container')

// load items
// reduce requiere dos parametros: call back function and initial value'All'
window.addEventListener("DOMContentLoaded", function() {
  displayObrasItems(obras)
  displayObrasButtons()
})


// funcion que selecciona y lleva article a index.html
function displayObrasItems(obrasItems) {
  let displayObras = obrasItems.map(function(item) {
      //console.log(item) // me trae individualmente todas las obras
      //return `<h1>${item.title}`  // me trae un array con todos los títulos 
      //de las obras
      
      // usa return y un template string `` para traer el article completo
      // usa las variables para reemplazar el contenido
      return `<article class="obras-item">
      <img src=${item.img} alt=${item.title} class="photo" />;
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="pintor">${item.pintor}</h4>
        </header>
        <p class="item-text">
          ${item.desc};
        </p>
      </div>
      </article>`;
  });

//console.log(displayObrasItems) // me da las obras individualmente

// el siguiente paso es unirlas en un string usando la propiedad join
// se le agrega join('') para quen entre un item y el siguiente no haya una 
// coma entre article y article

displayObras = displayObras.join("");
//console.log(displayObras) // un gran string con todas las obras

// el paso siguiente es add ese string a our data usando la propiedad innerHTML
sectionCenter.innerHTML = displayObras;
};

function displayObrasButtons() {
  const categories = obras.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const obrasCategory = obras.filter(function (obrasItem) {
        // console.log(menuItem.category);
        if (obrasItem.category === category) {
          return obrasItem;
        }
      });
      if (category === "all") {
        displayObrasItems(obras);
      } else {
        displayObrasItems(obrasCategory);
      }
    });
  });
}
