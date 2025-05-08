async function GetApi() {
    try {
        const response = await fetch('https://681a86c417018fe50578103f.mockapi.io/heroes');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}


async function agregarHeroe(event) {
    event.preventDefault();

    try {
        const nuevoHeroe = {
            personaje: document.getElementById('personaje').value,
            actor: document.getElementById('actor').value,
            edad: document.getElementById('edad').value,
            ubicacion: document.getElementById('ubicacion').value,
            poster: document.getElementById('poster').value,
            fecha: document.getElementById('fecha').value,
            productora: document.getElementById('productora').value
        };

        const response = await fetch('https://681a86c417018fe50578103f.mockapi.io/heroes', {
            method: 'POST',
            body: JSON.stringify(nuevoHeroe),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Héroe guardado:", data);


        alert('Héroe guardado éxitosamente!');
        event.target.reset();

    } catch (error) {
        console.error('Error al guardar el héroe:', error);
        alert('Error al guardar el héroe. Por favor intenta nuevamente.');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    GetApi().catch(error => console.error('Error inicial:', error));


    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', agregarHeroe);
    } else {
        console.error('No se encontró el formulario');
    }
});

// Variables para registrar los trajes
let costumes_number = 0;

// Elementos principales
const botonTraje = document.getElementById('btn-traje');
const trajesContainer = document.getElementById('trajes');

// Función principal para mostrar la sección de trajes
botonTraje.addEventListener('click', function TrajesDiv(event) {
    event.preventDefault();
    
    trajesContainer.innerHTML = `
    <div class="container mt-5 mb-5">
        <div class="card border border-primary shadow-sm">
            <div class="card-header">
                <h5>Registro de trajes</h5>
            </div>
            <div class="card-body">
                <h4 class="mt-2 text-primary">Trajes del personaje</h4>
                <p class="fs-5 text-primary">En esta sección podrá registrar los nombres de los trajes usados por el actor en cada una de las películas.</p>
                <button type="button" id="card-inner__body-add-costume-btn" class="btn btn-warning">+</button>
                <div id="card-inner__costumes-container"></div>
            </div>
        </div>
    </div>
    `;


    // Configurar el evento para el botón de agregar trajes
    const addButton = document.getElementById('card-inner__body-add-costume-btn');
    addButton.addEventListener('click', agregarTraje);
});

// Función para agregar un nuevo traje
function agregarTraje() {
    costumes_number++;
    const costumesContainer = document.getElementById('card-inner__costumes-container');
    
    const nuevoTraje = document.createElement('div');
    nuevoTraje.innerHTML = `
        <div id="card-inner__costume--${costumes_number}" class="mt-3 align-items-center">
            <label for="costume-name--${costumes_number}" class="form-label card-inner__costume-label text-primary">Nombre traje</label>
            <div class="card-inner__costume-inputs-container d-flex gap-2">
                <input type="text" class="form-control w-75 " id="costume-name--${costumes_number}" costume-id="${costumes_number}" />
                <button class="btn btn-danger btn-delete" costume-id="${costumes_number}">-</button>
            </div>
        </div>
    `;
    
    costumesContainer.appendChild(nuevoTraje);

    // Agregar evento al botón de eliminar
    const deleteBtn = nuevoTraje.querySelector(`button[costume-id="${costumes_number}"]`);
    deleteBtn.addEventListener('click', () => {
        nuevoTraje.remove();
    });
}
