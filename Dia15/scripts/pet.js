const clientId = 'eFLFoDJJkBQ5EOVaEgcCY1EYsYNgijXszmKHPsXFJZ38LGMpMI';
const clientSecret = '25t1hAFdbNXkdnutHGuOLEPugNxrhO4UruhBr6RP';
let accessToken = '';


async function getAccessToken() {
  const url = 'https://api.petfinder.com/v2/oauth2/token';
  const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  });

  const data = await res.json();
  console.log(data)
  accessToken = data.access_token;
}



async function fetchAnimals(type = '', age = '') {
  let url = 'https://api.petfinder.com/v2/animals?limit=100';
  if (type) {
    url += `&type=${type}`;
  }
  if (age) {
    url += `&age=${age}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const data = await res.json();

  const populares = data.animals.slice(0, 3);
  displayPopularPets(populares);

  const restantes = data.animals.slice(3);
  displayAnimals(restantes);
}







function displayAnimals(animals) {
  const container = document.getElementById('petsContainer');
  container.innerHTML = '';

  animals.forEach(pet => {
    const imageUrl = pet.photos.length > 0 ? pet.photos[0].medium : 'img/no-image.png';
    const card = `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" alt="${pet.name}">
            <div class="card-body">
              <h5 class="card-title">${pet.name}</h5>
              <p class="card-text">${pet.species} - ${pet.breeds.primary || 'Unknown'}</p>
              <p class="card-text"><small class="text-muted">${pet.age} • ${pet.contact.address.city || 'Unknown'}</small></p>
              <a href="#" class="btn btn-success w-100">View Details</a>
            </div>
          </div>
        </div>
      `;

    container.innerHTML += card;
  });
}

function displayPopularPets(animals) {
  const container = document.getElementById('popularPetsContainer');
  container.innerHTML = '';

  animals.forEach(pet => {
    const imageUrl = pet.photos.length > 0 ? pet.photos[0].medium : 'img/no-image.png';
    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 border-success">
          <img src="${imageUrl}" class="card-img-top" alt="${pet.name}">
          <div class="card-body">
            <h5 class="card-title">${pet.name}</h5>
            <p class="card-text">${pet.species} - ${pet.breeds.primary || 'Unknown'}</p>
            <p class="card-text"><small class="text-muted">${pet.age} • ${pet.contact.address.city || 'Unknown'}</small></p>
            <a href="#" class="btn btn-success w-100">View Details</a>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}
let selectedType = '';
let selectedAge = '';



document.addEventListener('DOMContentLoaded', async () => {
  await getAccessToken();
  await fetchAnimals();

  document.querySelectorAll('.filter-option').forEach(item => {
    item.addEventListener('click', async (e) => {
      selectedType = e.target.getAttribute('data-type');
      document.querySelector('.dropdown-toggle').innerHTML = `<i class="bi-house-heart me-1"></i> ${e.target.innerText}`;
      await fetchAnimals(selectedType, selectedAge);
    });
  });

  document.querySelectorAll('.age-option').forEach(item => {
    item.addEventListener('click', async (e) => {
      e.preventDefault();
      selectedAge = e.target.getAttribute('data-age');
      document.getElementById('ageFilterButton').innerHTML = `<i class="bi bi-cake me-1"></i> ${e.target.innerText}`;
      await fetchAnimals(selectedType, selectedAge);
    });
  });
});


// Funcionalidad de Search by Image
document.addEventListener('DOMContentLoaded', function() {
    const searchByImageBtn = document.getElementById('searchByImageBtn');
    const imageUploadInput = document.getElementById('imageUploadInput');
    const dropZone = document.getElementById('dropZone');
  
    // 1. Al hacer clic en el botón - abrir selector de archivos
    searchByImageBtn.addEventListener('click', function() {
      imageUploadInput.click();
    });
  
    // 2. Manejar selección de archivo
    imageUploadInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        handleImageUpload(this.files[0]);
      }
    });
  
    // 3. Configurar zona de arrastre solo cuando se arrastra sobre el botón
    searchByImageBtn.addEventListener('dragenter', function(e) {
      e.preventDefault();
      dropZone.classList.remove('d-none');
    });
  
    // 4. Manejar eventos de arrastre globales
    ['dragover', 'dragleave', 'drop'].forEach(eventName => {
      document.addEventListener(eventName, function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    });
  
    // 5. Ocultar zona de arrastre al salir
    document.addEventListener('dragleave', function(e) {
      if (e.relatedTarget === null || e.relatedTarget === document.documentElement) {
        dropZone.classList.add('d-none');
      }
    });
  
    // 6. Manejar cuando se suelta la imagen
    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      const files = e.dataTransfer.files;
      
      if (files.length > 0 && files[0].type.startsWith('image/')) {
        handleImageUpload(files[0]);
      }
      
      dropZone.classList.add('d-none');
    });
  
    // Función para procesar la imagen
    function handleImageUpload(file) {
      // Mostrar carga
      const originalContent = searchByImageBtn.innerHTML;
      searchByImageBtn.innerHTML = `
        <div class="spinner-border spinner-border-sm me-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <strong>Processing image...</strong>
      `;
  
      // Simular procesamiento (1.5 segundos)
      setTimeout(() => {
        // Restaurar botón
        searchByImageBtn.innerHTML = originalContent;
        
        // Mostrar resultados (aquí iría tu lógica real)
        alert(`Imagen "${file.name}" procesada correctamente. Mostrando mascotas similares...`);
        
      }, 1500);
    }
  });

  