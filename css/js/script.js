// script.js
const restaurantes = [
    { nombre: "El Rincón Paisa", descripcion: "Auténtica comida antioqueña", direccion: "Calle 10 # 20-30" },
    { nombre: "La Pasta Mía", descripcion: "Pasta artesanal italiana", direccion: "Carrera 45 # 12-34" },
  ];
  
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = restaurantes.filter(r => r.nombre.toLowerCase().includes(query));
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = results.map(r => `<div><strong>${r.nombre}</strong> - ${r.descripcion}</div>`).join("");
  });
  