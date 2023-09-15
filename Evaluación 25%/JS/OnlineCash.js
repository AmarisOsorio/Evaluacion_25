function realizarRetiro(){
    let cantidadRetiro = parseFloat(document.getElementById("cantidadRetiro").value);
    let nombreInput = document.getElementById("nombre");
    let nombreValor = nombreInput.value;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Hola ${nombreValor}, tu retiro ha sido realizado de la siguiente manera: `;
    resultadoElement.classList.add("mostrar");
    resultadoElement.className = "alert alert-success mostrar";

    let billetes100 = Math.floor(cantidadRetiro / 100);
    cantidadRetiro = cantidadRetiro % 100;

    let billetes50 = Math.floor(cantidadRetiro / 50);
    cantidadRetiro = cantidadRetiro % 50;

    let billetes20 = Math.floor(cantidadRetiro / 20);
    cantidadRetiro = cantidadRetiro % 20;

    let billetes10 = Math.floor(cantidadRetiro / 10);
    cantidadRetiro = cantidadRetiro % 10;

    let billetes5 = Math.floor(cantidadRetiro / 5);
    cantidadRetiro = cantidadRetiro % 5;

    let billetes1 = Math.floor(cantidadRetiro / 1);

   document.getElementById('resultado100').value = billetes100;
   document.getElementById('resultado50').value = billetes50;
   document.getElementById('resultado20').value = billetes20;
   document.getElementById('resultado10').value = billetes10;
   document.getElementById('resultado5').value = billetes5;
   document.getElementById('resultado1').value = billetes1;
}

document.getElementById("retiroBtn").addEventListener("click", realizarRetiro);
