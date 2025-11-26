function filtrar() {
  const filtro = document.getElementById("search").value.toLowerCase();
  const itens = document.querySelectorAll("#lista li");

  itens.forEach(item => {
    if (item.textContent.toLowerCase().includes(filtro)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
