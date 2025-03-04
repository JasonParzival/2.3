function onRowClick(row) {
  let title = document.getElementById("title")
  title.innerText = row.dataset.title;
  let image = document.getElementById("image")
  image.src = row.dataset.image;

  // находим все теги tr, которые внутри tbody, который внутри тега с классом table
  document.querySelectorAll(".table tbody tr").forEach(el => {
    el.classList.remove("table-info"); // удаляем у них класс table-info
  })
  row.classList.add("table-info");
}