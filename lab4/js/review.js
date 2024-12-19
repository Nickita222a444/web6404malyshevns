const filters_form = document.getElementById("review");
filters_form.addEventListener("submit", formHandler);

function formHandler() {
  const elms = filters_form.elements;

  let EMPTY_FIELD_FLAG = false;
  Array.from(elms).forEach((el) => {
    const { type } = el;

    if (type !== "submit") {
      const { name, value } = el;

      if (name === "rating") {
        if (!((value ^ 0) !== value && value >= 0 && value <= 5))
          alert("Wrong rating inputed!");
      } else {
        if (!value) {
          EMPTY_FIELD_FLAG = true;
        }
      }
    }
  });

  if (EMPTY_FIELD_FLAG) alert("Empty field inputed!");
}
