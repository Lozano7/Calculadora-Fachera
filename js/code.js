const tema = document.querySelectorAll(".cambiarTheme");
const links = document.getElementsByTagName("link");
const tema1 = document.getElementById("theme1");
const tema2 = document.getElementById("theme2");
const tema3 = document.getElementById("theme3");
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
