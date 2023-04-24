let selectDigimones = document.getElementById("digimon");

async function getDigimones() {
    try {
        let urlBase = "https://digimon-api.vercel.app/api/digimon";
        let response = await fetch(urlBase);
        let digimones = await response.json();

        let acumulador = "<option value='0'>Elige un digimon</option>";
        digimones.forEach((digimon) => {
            acumulador += `<option value="${
                digimon.name
            }">${digimon.name.toString()}</option>`;
        });
        selectDigimones.innerHTML = acumulador;
    } catch (error) {
        alert("Ha ocurrido un error el consultar los digimones");
    }
}

function getDigimon(nombre) {
    let url = "https://digimon-api.vercel.app/api/digimon/name/" + nombre;
    fetch(url)
        .then((response) => response.json())
        .then((digimon) => {
            mostrarModal(digimon[0]);
        })
        .catch((error) => {
            console.log(error)
            alert("Ha ocurrido un error al consultar el digimon.");
        });
}

function main() {
    getDigimones();
}

main();

selectDigimones.addEventListener("change", function () {
    getDigimon(selectDigimones.value);
});

function mostrarModal(digimon) {
    const myModal = new bootstrap.Modal("#exampleModal");
    document.getElementById("nombreDigimon").innerText = digimon.name;

    let imagenModal = document.querySelector("#exampleModal img");
    imagenModal.setAttribute("src", digimon.img);
    imagenModal.setAttribute("alt", digimon.name);

    document.getElementById("nivelDigimon").innerText = digimon.level;

    //mostrar modal una vez que tenga todos los datos
    myModal.show();
}

