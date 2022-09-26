function enviarSaludo() {
  let $saludo = document.getElementById("saludo"),
    $nombre = document.getElementById("nombre").value,
    $apellido = document.getElementById("apellido").value;

  if ($nombre == "" || $apellido == "") {
    $saludo.classList.remove("confirm");
    $saludo.classList.add("alert");
    $saludo.innerHTML = "Debe ingresar ambos campos";
  } else {
    $saludo.classList.remove("alert");
    $saludo.classList.add("confirm");
    $saludo.innerHTML =
      "Hola ${$nombre} ${$apellido}, gracias por rellenar el formulario de LarnU";
  }
}
