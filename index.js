let chatBox = document.querySelector(".chatBox");
let buka = document.querySelector(".buka");
let kembali = document.querySelector(".kembali");

buka.onclick = function () {
  chatBox.classList.remove("hide");
};

kembali.onclick = function () {
  chatBox.classList.add("hide");
};
