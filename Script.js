// Función para crear una publicación
function createPost(name, message, imageURL) {
    // Crear elementos HTML
    const postContainer = document.createElement('div');
    const postHeader = document.createElement('div');
    const postContent = document.createElement('div');
    const userName = document.createElement('h2');
    const userMessage = document.createElement('p');
    const image = document.createElement('img');
  
    // Establecer contenido y atributos
    image.src = imageURL;
    userName.textContent = name;
    userMessage.textContent = message;
   
    // Agregar clases CSS si es necesario
    postHeader.classList.add('post-header');
    postContent.classList.add('post-content');
    image.classList.add('post-img')
    // Construir la estructura del post
    postHeader.appendChild(userName);
    postContent.appendChild(userMessage);
    postContent.appendChild(image);
    postContainer.appendChild(postHeader);
    postContainer.appendChild(postContent);
  
    return postContainer;
  } 
  // Obtener el elemento donde se agregarán las publicaciones
  const postsContainer = document.getElementById('posts-container');
  
  
  // Ciclo para crear 826 publicaciones
  for (let i = 1; i <= 826; i++) {
    // Generar la URL de la imagen basada en el número actual (i)
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
  
    // Crear una publicación con texto relleno
    const post = createPost(`Usuario ${i}`, `Este es el mensaje de la publicación ${i}`, imageURL);
  
    // Agregar la publicación al contenedor de publicaciones
    postsContainer.appendChild(post);
  }
