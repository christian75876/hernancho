const mostrarTabla = (data)=>{
    let tabla = document.getElementById('root')
    tabla.innerHTML = "";
    tabla.innerHTML = `
    <table id="usuarios">
        <thead>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puntos Acumulados</th>
            <th>Login</th>
            <th>Logout</th>
            <th>Cursos completados</th>
        </thead>
        <tbody id="tBody">
        </tbody>
    </table>`
    let tablaBody = document.getElementById('tBody');
    tablaBody.innerHTML='';
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
        tablaBody.innerHTML +=informacion
    });
}

const ordenarNombres = (data) =>{
    data.usuarios.sort((a,b) => {
        return a.nombre.localeCompare(b.nombre)
    });
    //mostrarTabla(data);
}


export{mostrarTabla, ordenarNombres}