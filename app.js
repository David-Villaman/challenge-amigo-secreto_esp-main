// Here is all the logic for the app
/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

const friends = [];

function addFriend() {
  const friendName = document.getElementById('friendName').value;
  if (friendName === '') {
    alert('Please add a valid name.');
    return;
  }
  
  friends.push(friendName);
  updateFriendsList();
  document.getElementById('friendName').value = '';
}

function updateFriendsList() {
  const list = document.getElementById('friendsList');
  list.innerHTML = '';
  friends.forEach(friend => {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(friend));
    list.appendChild(listItem);
  });
}

function drawFriend() {
  const list = document.getElementById('friendsList');
  const friends = list.getElementsByTagName('li');
  const randomFriend = friends[Math.floor(Math.random() * friends.length)];
  document.getElementById('drawResult').innerText = randomFriend.innerText;
}