import { mostrarTabla, ordenarNombres } from "./functions.js";

const url = './Data/data.json'

async function consumirData(){
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Error al cargar los datos')
        }
        const data = await response.json();
        console.table(data)
        //ordenarNombres(data);
        
        mostrarTabla(data);
        return data 
    } catch (error) {
        console.log('Error',error)
        throw new error
    }
} 

consumirData()




  

