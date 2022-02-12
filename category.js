const url = "https://kea-alt-del.dk/t7/api/brands?limit=20";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategoryList(data);
  });

function handleCategoryList(data) {
  data.sort(function (a, b) {
    console.log(data);
    if (a.brandname < b.brandname) {
      return -1;
    }
    if (a.brandname < b.brandname) {
      return 1;
    }
    return 0;
  });
  data.forEach(showCategory);
}
/* 
<ol>
              <li><a href="productlist.html">brandname</a></li>
              <li><a href="productlist.html">brandname</a></li>
            </ol>

*/

function showCategory(category) {
  console.log(category);
  //grab the template
  const template = document.querySelector("#brandNameTemplate").content;
  //clone the template
  const copy = template.cloneNode(true);

  //change the content
  copy.querySelector(".brandname").textContent = `${category.brandname}`;
  copy.querySelector(
    ".brandname"
  ).href = `productlist.html?brandname=${category.brandname}`;
  //grab parent
  const parent = document.querySelector(".brandList");

  //append child
  parent.appendChild(copy);
}
