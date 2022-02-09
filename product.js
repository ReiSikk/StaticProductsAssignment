const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

/////FETCH the data/////
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

/////POPULATE THE PAGE/////

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
  document.querySelector(".purchaseBox .productname").textContent =
    product.productdisplayname;
  document.querySelector(".purchaseBox .brandname").textContent =
    product.brandname;
  document.querySelector(".purchaseBox .articletype").textContent =
    product.articletype;
  document.querySelector("#info .productname").textContent =
    product.productdisplayname;
  document.querySelector(".color").textContent = product.basecolour;
  document.querySelector(".inventorynumber").textContent = product.id;
  document.querySelector("#info .brandname").textContent = product.brandname;
  document.querySelector("#info .brandbio").textContent = product.brandbio;
}
