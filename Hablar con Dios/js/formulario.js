const formulario = document.getElementById('formulario');
const inputformulario = document.getElementById('inputformulario');

const formularioReal = data => {
    // console.log(data)
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const textoCliente = inputformulario.value.toLowerCase()
        //console.log(textoCliente)
        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase()
            if (textoApi.indexOf(textoCliente) !== -1) {
                return item
            }
        })
        oracion(formularioFiltrado)
    
    
    })
}