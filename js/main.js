// start cod window buy 
// window Buy Product
let detials = document.querySelectorAll(".seemore_bt a");
let btnsBuy = document.querySelectorAll(".buy_bt a");
let windo = document.querySelector(".buy-product");
let nameProduct = document.querySelector(".buy-product .name-product");
let priceProduct = document.querySelector(".buy-product .price-product");
let locationClient = document.querySelector(".buy-product .location");
let count = document.querySelector(".buy-product .count-product");
let buyProduct = document.querySelector(".buy-product .btns .buy-now");
let CancelProduct = document.querySelector(".buy-product .btns .Cancel");
let blurPage = document.querySelector(".blur-page");
// this is Product 
let nameP = document.querySelectorAll(".shirt_text");
let price = document.querySelectorAll(".price_text span");


// function detials on click 
function det() {
  detials.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
      btn.innerHTML = "قـــريـــبـــاً";
      setTimeout(()=>btn.innerHTML = "تفصيل اكتر", 1000)
    })
  })
}det()
// function detials on click 


function windowBuy() {
  btnsBuy.forEach((butt, num) => {
    butt.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      windo.style.display = "flex";
      nameProduct.innerHTML = nameP[num].innerHTML;
      priceProduct.innerHTML = price[num].innerHTML;
      buyNow(nameP[num].innerHTML, price[num].innerHTML)
      blurPage.style.display = "block";
    })
  })
} windowBuy()


function buyNow(name_Product, price_product) {
  buyProduct.addEventListener("click", () => {
    if (locationClient.value != "" && count.value != "") {
      
      buyProduct.href = `
      https://wa.me/+201146969884/?text=طلب شراء : ${name_Product} %0A بسعر : ${price_product} %0A عدد : ${count.value} %0A الي عنوان : ${locationClient.value} %0A`;
      Exit();
      
    } else {
      if (locationClient.value == "") {
        locationClient.focus();
      } else if ( count.value == "" ) {
        count.focus();
      }
    }
  })
}

// Exit From Window of Buy
CancelProduct.addEventListener("click", () => Exit ());

function Exit () {
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("height");
  windo.style.display = "none"
  blurPage.style.display = "none";
}
// end cod window buy 

// start code search
let btnSearch = document.querySelector(".input-group-append button");
let searchInput = document.getElementById("search");
let result = document.querySelector(".result");

searchInput.addEventListener("input", ()=> {
  result.innerHTML = "";
})

btnSearch.addEventListener("click", ()=>{

  result.innerHTML = "";
  let res = searchInput.value.split(" ");
  nameP.forEach((productElement)=>{
    let element = productElement.innerHTML.split(" ")
    element.find((item)=>{
      res.forEach((itemInput)=>{
        if(item == itemInput){
          productElement.classList.add(`search`);
        }
      })
    })
  });

  let itemInSearch = document.querySelectorAll(".search");
  itemInSearch.forEach((title, num)=>{
    let aElem = document.createElement("a");
    aElem.setAttribute("href", `#element-${num}`)
    title.parentNode.parentNode.parentNode.setAttribute("id", `element-${num}`)
    let textElem = document.createTextNode(`${title.innerHTML}`)
    aElem.appendChild(textElem);
    result.appendChild(aElem);
    title.classList.remove("search");
  })

  // -----------------------------------------------------
  let all_a = document.querySelectorAll(".result a");
  all_a.forEach((link_A, index)=>{
    link_A.addEventListener("click", ()=>{
      result.innerHTML = "";
      searchInput.value = "";
      itemInSearch.forEach((item)=>{
        item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("active")
        setTimeout(()=>item.parentNode.parentNode.parentNode.removeAttribute("id"),500 )
      })
      itemInSearch[index].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("active");
    })
  })

  // -----------------------------------------------------
  
})
// end code search