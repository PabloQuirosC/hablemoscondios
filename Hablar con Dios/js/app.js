const oraciones= document.getElementById('oraciones');

document.addEventListener("DOMContentLoaded", function(event) 
{
    // console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => 
{
    try 
    {
        const res = await fetch('api.json')
        const data = await res.json()
        oracion(data)
        formularioReal(data)
        filtro(data)

    } catch (error) {
        console.log(error)
    }
}

const oracion = (data) => {

    let elementos = ''

    data.forEach(item => {
        elementos += `
        <article class="card">
        <img src="${item.flag}" alt="" class="img-fluid">
        <div class="card-content">
            <h3>${item.name}</h3>
                <p>
                    <b>${item.Linea}</b>
                </p>
                <p>
                    <b>${item.tipos}</b>
                    <p>${item.ora}</p>
                </p>
                <p>
                <a class="btn-dark-mode" type="button" href="Oraciones.html?name=${item.name}">Acceder</a>
            </p>
        </div>
    </article>
        `
    })
    oraciones.innerHTML = elementos
}