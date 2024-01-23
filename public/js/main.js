var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
//
var modals = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
};

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    console.log("đá")
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// hover: image ===> log
function changeImage(element) {
  var defaultImage = document.getElementById("defaultImage");
  defaultImage.src = element.src;
}
//
const toggleIcon = document.getElementById('toggleIcon');
const contentContainer = document.getElementById('contentContainer');
toggleIcon.addEventListener('click', () => {
  contentContainer.classList.toggle('hidden-overflow');
});
