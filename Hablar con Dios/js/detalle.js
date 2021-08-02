const oraciones= document.getElementById('oraciones');
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e =>
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
        const filterData = data.filter(item => item.name === params)
        oracion(filterData)
    } catch (error) {
        console.log(error)
    }
}

const oracion = (data) => {

    let elementos = ''

    data.forEach(item => {
        elementos += `
        <blockquote class="blockquote-before">
        <h1>${item.name}</h1>
        <h3>${item.tema1}</h3>
        <p>${item.oracion1}</p>
        <h3>${item.tema2}</h3>
        <p>${item.oracion2}</p>
        <h3>${item.tema3}</h3>
        <p>${item.oracion3}</p>
        </blockquote>
        `
    })
    oraciones.innerHTML = elementos
}
