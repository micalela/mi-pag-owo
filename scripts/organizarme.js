let containers = [
    { containerId: 'container1', resultId: 'result1', checkboxNumber: 7, title: 'estudiar prexi', selected: []},
    { containerId: 'container2', resultId: 'result2', checkboxNumber: 3, title: 'sobrevivir', selected: []},
    { containerId: 'container3', resultId: 'result3', checkboxNumber: 3, title: 'html fun', selected: []}
];

/* const actividad = document.getElementById("actividad");
const total = document.getElementById("total");
const botones = document.getElementById("botones"); */

// crea el div con los checkboxes
function createContainer(containerId, checkboxNumber) {
    // Create container div
    const containerDiv = document.createElement('div');
    containerDiv.id = containerId;
    containerDiv.className = 'botones';

    // Add checkboxes to the container
    for (let i = 1; i <= checkboxNumber; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${containerId}-checkbox${i}`;
        containerDiv.appendChild(checkbox);
        if(i==5){containerDiv.appendChild(document.createElement('br'))}
    }

    // Append the container to the body
    document.getElementById('cajaflex').appendChild(containerDiv);
}

// crear el div de resultados
function createResultContainer(resultId, checkboxNumber) {
   
    const resultDiv = document.createElement('div'); // Create result div
    resultDiv.id = resultId;
    resultDiv.className = 'total';

    const resultText = document.createElement('p'); // Create initial result text
    resultText.textContent = `0 / ${checkboxNumber}`;
    resultDiv.appendChild(resultText);

    document.getElementById('cajaflex').appendChild(resultDiv); // Append the result container to the body
}

// crear el div con el título
function ponertitulo(title) {
    const titulo = document.createElement("div");
    titulo.className = "actividad";
    titulo.textContent = title;
    document.getElementById("cajaflex").appendChild(titulo);
}

// cuenta checked checkboxes en un contenedor y pone el resultado en otro
function countCheckedCheckboxes(containerId, resultId, checkboxNumber) {
    
    const container = document.getElementById(containerId); // Select the div container by id
    const checkboxes = container.querySelectorAll('input[type="checkbox"]'); // Find all checkbox inputs within the container
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length; // Filter and count the checked checkboxes
    document.getElementById(resultId).querySelector('p').textContent = `${checkedCount} / ${checkboxNumber}`; // Update the result text for the specific container
}

// agarra cada checkbox container y le dice estate atento a si cambia una checkbox y en ese caso conta de nuevo. y también cuenta de entrada cuando inicializas.
function setupContainer(containerId, resultId, checkboxNumber) {
    
    const container = document.getElementById(containerId);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
   
    checkboxes.forEach(checkbox => {  // Attach event listener to each checkbox to update the count when changed
        checkbox.addEventListener('change', () => countCheckedCheckboxes(containerId, resultId, checkboxNumber)); 
    });

    // Initial count update
    countCheckedCheckboxes(containerId, resultId, checkboxNumber);
}

 // guarda el estado de 1 checkbox en localstorage
 function saveCheckboxState(checkbox) {
    localStorage.setItem(checkbox.id, checkbox.checked);
}

// agarra 1 checkbox y la deja igual que estaba en localstorage
function loadCheckboxState(checkbox) {
    const savedState = localStorage.getItem(checkbox.id);
    checkbox.checked = savedState === 'true'; // Set checkbox state based on saved value
}

// carga el checkbox state al inicializar y tambien agarra y dice si cambia la checkbox guarda el estado en localstorage
function setupCheckbox(checkbox) {
    checkbox.addEventListener('change', () => saveCheckboxState(checkbox));
    loadCheckboxState(checkbox); // Load the state when initializing
}

// Create containers and results dynamically
containers.forEach(({ containerId, resultId, checkboxNumber, title}) => {

    ponertitulo(title);
    createContainer(containerId, checkboxNumber);

    // Select all checkboxes on the page and set up event listeners and state
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        setupCheckbox(checkbox);
    });

    createResultContainer(resultId, checkboxNumber);
    setupContainer(containerId, resultId, checkboxNumber);
});


// Function to get the current week number of the year
function getWeekNumber(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - start) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + 1) / 7);
}

// Function to check if the week has changed
function hasWeekChanged() {
    const currentWeek = getWeekNumber(new Date());
    const lastWeek = localStorage.getItem('lastWeek');

    if (lastWeek === null) {
        localStorage.setItem('lastWeek', currentWeek);
        return false; // First visit or no stored week
    }

    if (parseInt(lastWeek) !== currentWeek) {
        localStorage.setItem('lastWeek', currentWeek);
        return true; // Week has changed
    }

    return false; // Same week
}

/* const 

function cambiosemana() {
    if(hasWeekChanged()) {

    };
} */