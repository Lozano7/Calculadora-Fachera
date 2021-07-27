const tema = document.querySelectorAll(".cambiarTheme");
const links = document.getElementsByTagName("link");
const tema1 = document.getElementById("theme1");
const tema2 = document.getElementById("theme2");
const tema3 = document.getElementById("theme3");
const del = document.getElementById("del");
const botonesNum = document.querySelectorAll(".num");
const botonesFunc = document.querySelectorAll(".function");
const pantalla = document.getElementById("pantallaMos");
const reset = document.getElementById("reset");
const igual = document.getElementById("igual");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;
function encontrarLink(link, theme) {
  for (let i = 0; i < link.length; i++) {
    if (link[i].title == "cambios") {
      link[i].href = "css/" + theme + ".css";
    }
  }
}
if (tema1.checked && tema2.checked == false && tema3.checked == false) {
  encontrarLink(links, "theme1");
}

tema.forEach((radioButon) => {
  console.log(radioButon.id);
  radioButon.addEventListener("change", () => {
    if (radioButon.id == "theme1") {
      encontrarLink(links, "theme1");
    } else if (radioButon.id == "theme2") {
      encontrarLink(links, "theme2");
    } else if (radioButon.id == "theme3") {
      encontrarLink(links, "theme3");
    }
  });
});
reset.addEventListener("click", () => {
  pantalla.value = null;
  operacion = undefined;
  opeActual = "";
  opeAnterior = "";
});
botonesNum.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (pantalla.value.length <= 20) {
      agregarNumero(boton.innerHTML);
    }
  });
});
botonesFunc.forEach((boton) => {
  boton.addEventListener("click", () => {
    selectOperacion(boton.innerHTML);
  });
});
del.addEventListener("click", () => {
  let numero = pantalla.value;
  let numeroRecortado = numero.substring(0, numero.length - 1);
  opeActual = numeroRecortado;
  actulizarDisplay();
});

igual.addEventListener("click", () => {
  calcular();
  actulizarDisplay();
});

function agregarNumero(numero) {
  opeActual = opeActual.toString() + numero.toString();
  actulizarDisplay();
}
function actulizarDisplay() {
  pantalla.value = opeActual;
}
function selectOperacion(operacionBoton) {
  if (opeActual === "") return;
  if (opeAnterior !== "") {
    calcular();
  }
  operacion = operacionBoton.toString();
  opeAnterior = opeActual;
  opeActual = "";
}
function calcular() {
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";
}
