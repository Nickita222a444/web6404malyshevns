const filters_form = document.getElementById("filters-bar");
filters_form.addEventListener("submit", formHandler);

function formHandler(event) {
  const elms = filters_form.elements;

  //   for (let i = 0; i < elms.length; ++i) {
  //     alert(elms[i]);
  //   }
  Array.from(elms).forEach((el) => {
    const { name, value } = el;
    alert(value);
  });
}
