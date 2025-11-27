
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


// Seleciona todos os botões de submenu (ex: "Ofertas", "Tintas", etc)
const botoesSubmenu = document.querySelectorAll('.naosei > .botao-menu');

botoesSubmenu.forEach(botao => {
    botao.addEventListener('click', function(e) {
        e.preventDefault(); // evita que o link abra
        const submenu = this.parentElement.querySelector('.submenu');
        if(submenu) {
            submenu.style.display = (submenu.style.display === 'flex') ? 'none' : 'flex';
        }
    });
});

// Opcional: fecha o submenu ao clicar fora
document.addEventListener('click', function(e){
    botoesSubmenu.forEach(botao => {
        const submenu = botao.parentElement.querySelector('.submenu');
        if(submenu && !botao.contains(e.target) && !submenu.contains(e.target)){
            submenu.style.display = 'none';
        }
    });
});

