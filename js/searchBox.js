
const alertBox = document.querySelector(".alert");
const after = document.querySelector(".after");
const header = document.querySelector("#panel");
const biying = document.getElementsByName("biying")[0];
const baidu = document.getElementsByName("baidu")[0];

function showInput() {
    alertBox.style.display = "block";
    after.style.height = "180px"
}
function biyingSubmit () {
    // console.log(biying);
    biying.submit();
}
function baiduSubmit () {
    // console.log(baidu);
    baidu.submit();
}