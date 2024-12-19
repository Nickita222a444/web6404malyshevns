const good1 = document.getElementById("good1");
const good2 = document.getElementById("good2");
const good3 = document.getElementById("good3");

fetch("http://localhost:8000/catalogue")
  .then((res) => res.json())
  .then((data) => {
    good1.children[1].innerText = data[0]["price"];
    good2.children[1].innerText = data[1]["price"];
    good3.children[1].innerText = data[2]["price"];

    good1.children[2].innerText = data[0]["name"];
    good2.children[2].innerText = data[1]["name"];
    good3.children[2].innerText = data[2]["name"];

    good1.children[0].setAttribute("src", data[0]["image_path"]);
    good2.children[0].setAttribute("src", data[1]["image_path"]);
    good3.children[0].setAttribute("src", data[2]["image_path"]);

    if (data[0]["available"]) {
      good1.removeChild(good1.children[good1.children.length - 1]);
    } else {
      good1.removeChild(good1.children[good1.children.length - 2]);
    }

    if (data[1]["available"]) {
      good2.removeChild(good2.children[good2.children.length - 1]);
    } else {
      good2.removeChild(good2.children[good2.children.length - 2]);
    }

    if (data[2]["available"]) {
      good3.removeChild(good3.children[good3.children.length - 1]);
    } else {
      good3.removeChild(good3.children[good3.children.length - 2]);
    }
  })
  .catch((err) => console.log(err));
