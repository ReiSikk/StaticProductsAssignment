const url = "https://kea-alt-del.dk/t7/api/products/";
const urlParams = new URLSearchParams(window.location.search);

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}
/* 
  <article class="smallProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="price"><span>Was</span> DKK 750,-</p>
          <div class="discounted">
            <p>Now DKK 650</p>
            <p>-15%</p>
          </div>
          <a href="product.html">Read More</a>
        </article>
*/
function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone the template
  const copy = template.cloneNode(true);

  //change the content

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} / ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(
    ".smallProduct img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  /*  
   <div class="discounted">
  <p>Now DKK 650</p>
  <p>-15%</p>
</div> 
*/
  copy.querySelector(".discounted p").textContent =
    "DKK " +
    Math.round(`${product.price - (product.price / 100) * product.discount}`) +
    " ,-";
  //&grab parent
  const parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}
