function onRowClick(row) {
  let title = document.getElementById("title")
  title.innerText = row.dataset.title;
  let image = document.getElementById("image")
  image.src = row.dataset.image;

  let director = document.getElementById("director")
  director.innerText = row.dataset.director;
  let year = document.getElementById("year")
  year.innerText = row.dataset.year;
  let rating = document.getElementById("rating")
  rating.innerText = row.dataset.rating;

  // находим все теги tr, которые внутри tbody, который внутри тега с классом table
  document.querySelectorAll(".table tbody tr").forEach(el => {
    el.classList.remove("table-info"); // удаляем у них класс table-info
  })
  row.classList.add("table-info");
}