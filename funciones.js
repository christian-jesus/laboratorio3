function Reiniciar_Cotizacion() {
    document.getElementById("cantidad").value = "";
    document.form.resultado.value = "";
  }
  
  function calcular() {
    var simbolos = ["USD", "EUR", "SOL"];
    var tipo = document.getElementById("opciones").value;
    var cantidad = document.getElementById("cantidad").value;
  
    if (tipo === "eu_dol") {
      document.getElementById("resultado").value = eurosDolares(cantidad);
    }
    function eurosDolares(cantidad) {
      return Number.parseFloat(cantidad * 1.03).toFixed(2) + " " + simbolos[0];
    }
    if (tipo === "dol_eu") {
      document.getElementById("resultado").value = dolaresEuros(cantidad);
    }
    function dolaresEuros(cantidad) {
      return Number.parseFloat(cantidad * 0.97).toFixed(2) + " " + simbolos[1];
    }
    if (tipo === "sol_dol") {
      document.getElementById("resultado").value = solesDolares(cantidad);
    }
    function solesDolares(cantidad) {
      return Number.parseFloat(cantidad * 0.26).toFixed(2) + " " + simbolos[0];
    }
    if (tipo === "dol_sol") {
      document.getElementById("resultado").value = dolaresSoles(cantidad);
    }
    function dolaresSoles(cantidad) {
      return Number.parseFloat(cantidad * 3.71).toFixed(2) + " " + simbolos[4];
    }
    if (tipo === "sol_eu") {
      document.getElementById("resultado").value = solesEuros(cantidad);
    }
    function solesEuros(cantidad) {
      return Number.parseFloat(cantidad * 0.25).toFixed(2) + " " + simbolos[1];
    }
    if (tipo === "eu_sol") {
      document.getElementById("resultado").value = eurosSoles(cantidad);
    }
    function eurosSoles(cantidad) {
      return Number.parseFloat(cantidad * 3.94).toFixed(2) + " " + simbolos[4];
    }
  }
  