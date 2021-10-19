const subtitulos = document.querySelectorAll("h2");
const topicos = new Array();
subtitulos.forEach(element => {
	topicos.push(element.textContent);
});

const lista = document.querySelector("ol");
topicos.forEach(topico => {
  const item = document.createElement("li");
  item.textContent = topico;
  lista.append(item);
});
