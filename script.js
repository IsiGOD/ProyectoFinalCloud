// Función para enviar datos (Crear o Actualizar)
function sendData() {
    const url = "https://3znhrpa9ak.execute-api.us-east-1.amazonaws.com/items";
    const headers = {"Content-Type": "application/json"};
    const data = {
        "id": document.getElementById('id').value,
        "nombre": document.getElementById('name').value,
        "altura": parseInt(document.getElementById('height').value),
        "peso": parseInt(document.getElementById('weight').value),
        "tipo": document.getElementById('type').value
    };

    fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Status Code: ${data.statusCode}\nResponse: ${data.body}`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending data.');
    });
}

// Función para obtener todos los Pokemones
function getAllItems() {
    const url = "https://3znhrpa9ak.execute-api.us-east-1.amazonaws.com/items";
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('allItemsResult').textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error getting all items.');
    });
}

// Función para buscar un Pokemon por ID
function searchItem() {
    const apiUrl = 'https://3znhrpa9ak.execute-api.us-east-1.amazonaws.com/items';
    const id = document.getElementById('searchId').value;
    
    fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('searchResult').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}

// Función para eliminar un Pokemon
function deleteItem() {
    const deleteId = document.getElementById('deleteId').value;
    const url = `https://3znhrpa9ak.execute-api.us-east-1.amazonaws.com/items/${deleteId}`;

    fetch(url, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert(`Status Code: ${data.statusCode}\nResponse: ${data.body}`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error deleting item.');
    });
}