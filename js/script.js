let adv_hide = document.querySelector("#adv_hide");
let adv = document.querySelector(".advertising");
adv_hide.onclick = () => {
  adv.classList.add("hide");
};

let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let interval = setInterval(timeFunc, 1000);
function timeFunc() {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  }
  if (minutes.innerHTML < 0) {
    minutes.innerHTML = 59;
    hours.innerHTML--;
  }
  if (hours.innerHTML < 0) {
    days.innerHTML = 00;
    hours.innerHTML = 00;
    minutes.innerHTML = 00;
    seconds.innerHTML = 00;
    clearInterval(interval);
  }
}

let block = document.createElement("div");block.classList.add("block");document.body.insertAdjacentElement("beforeend", block);
let sale = document.createElement("div");sale.classList.add("sale_block");sale.innerHTML = Math.ceil(Math.random()) + "%";block.insertAdjacentElement("beforeend", sale);

let img1 = document.createElement("img");img1.setAttribute("src", "./img/like.png");img1.classList.add("img1");block.insertAdjacentElement("beforeend", img1);
let img2 = document.createElement("img");img2.setAttribute("src", "./img/rise.png");img2.classList.add("img2");block.insertAdjacentElement("beforeend", img2);

let img_main = document.createElement("img");img_main.setAttribute("src", "./img/nootbook.jpeg");img_main.classList.add("img_main");block.insertAdjacentElement("beforeend", img_main);

let h = document.createElement("h3");h.classList.add("text");h.innerHTML = "Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15. 6HD (from UAE)";block.insertAdjacentElement("beforeend", h);

let p = document.createElement("p");p.classList.add("text2");p.innerHTML = "2 957 000 сум";block.insertAdjacentElement("beforeend", p);

let pp = document.createElement("p");pp.classList.add("text3");pp.innerHTML = "2 581 040 сум";block.insertAdjacentElement("beforeend", pp);

let btn = document.createElement("button");btn.classList.add("btnbtn");btn.innerHTML = "В расстрочку";block.insertAdjacentElement('beforeend', btn)
