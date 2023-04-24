//Consumo Api ('https://digimon-api.vercel.app/api/digimon')
function getDigimon(done){
    const results = fetch("https://digimon-api.vercel.app/api/digimon");
    results
    .then(response => response.json())
    .then(datos => {
        done(datos)
    });
}

getDigimon(datos => {
   /* console.log(datos); */
    datos.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.img}">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.level}</span>
        </article>
        `);
        const main = document.querySelector("main");
        main.append(article);
    });
});


