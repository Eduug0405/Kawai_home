document.addEventListener('DOMContentLoaded', function() {
    const formularios = document.getElementsByClassName('miFormulario');

    // Iterar sobre todos los formularios con la clase 'miFormulario'
    Array.from(formularios).forEach(formulario => {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

            const nombre = formulario.querySelector('.nombreProducto').value;
            const precio = parseFloat(formulario.querySelector('.precioProducto').value);

            const data = {
                nombre: nombre,
                precio: precio
            };

            // Aquí puedes proceder a realizar la solicitud POST a la API utilizando 'data'
            // Usando fetch() u otra librería para realizar la solicitud

            // Por ejemplo:
            const apiUrl = 'https://ejemplo.com/api/productos'; // Reemplaza con la URL de tu API

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            };

            fetch(apiUrl, options)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error en la solicitud');
                })
                .then(data => {
                    console.log('Datos enviados correctamente:', data);
                    // Aquí puedes realizar acciones adicionales después de enviar los datos
                })
                .catch(error => {
                    console.error('Hubo un error:', error);
                });
        });
    });
});
