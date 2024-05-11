const mostrarTabla = (data)=>{
    let tabla = document.getElementById("tBody")
    tabla.innerHTML = "";
data.usuarios.forEach(element => {
    let informacion = `
        <tr>
        <td>${element.ID}</td>
        <td>${element.nombre}</td>
        <td>${element.puntos_acumulados}</td>
        <td>${element.datetime_login}</td>
        <td>${element.datetime_logout}</td>
        <td>${element.cursos_completados}</td>
        </tr>`
        tabla.innerHTML +=informacion
    });
}

const ordenarNombres = (data) =>{
    data.usuarios.sort((a,b) => {
        return a.nombre.localeCompare(b.nombre)
    });
    //mostrarTabla(data);
}


export{mostrarTabla, ordenarNombres}