const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {

    try {
        /* fetch por defecto ejecuta el verbo get, entonces como para crear utilizamos post, podemos crear un objeto de configuración de fetch */
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ), // aquí el objeto ya se envía validado, se convierte a string y se envía con metodo post
            headers: {
                // los headers son información de que tipo de datos estamos enviando, va a cambiar si enviamos otro tipo de datos
                'Content-Type': 'application/json'
            }
        });
        // Si esta linea se ejecuta, es por que el cliente se envió correctamente
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Elimina un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

// obtiene un cliente por su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza el registro 
export const editarCliente = async cliente => {
    try {
        await fetch( `${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}