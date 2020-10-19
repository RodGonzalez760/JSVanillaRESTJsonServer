export function mostrarAlerta(mensaje) {
    const existe = document.querySelector('.bg-red-100');

    if( !existe ) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font.bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj) {
    // Reemplazamoe el if(nombre === '') por el siguiente código con every, el cual nos retorna true si se cumple la condicion o false si no se cumple
    return Object.values(obj).every( input => input != '' );        
}