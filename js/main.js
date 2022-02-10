// Variables globales

let posts = [];
let post = {};

function initializeApp() {
    post = {
        title: 'Mi primer post',
        date: new Date(),
        username: 'Aldo Aldaco',
        keywords: ['js', 'html', 'css'],
        comments: ['Un comentario'],
        reactions: 0
    };

    posts = [{
        id: 1,
        title: 'Mi primer post',
        date: new Date(),
        user: 'Heidel',
        keywords: ['js', 'html', 'css'],
        comments: ['Un comentario'],
        reactions: 0,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt sit sequi et rerum voluptates, reprehenderit hic magni consequatur veniam placeat quae recusandae porro nisi voluptatem debitis rem perspiciatis dolorum.',
        imgUrl: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    },
    {
        id: 2,
        title: 'Mi segundo post',
        date: new Date(),
        user: 'Heidel',
        keywords: ['js', 'html', 'css'],
        comments: ['Un comentario'],
        reactions: 0,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt sit sequi et rerum voluptates, reprehenderit hic magni consequatur veniam placeat quae recusandae porro nisi voluptatem debitis rem perspiciatis dolorum.',
        imgUrl: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    }];

    printPosts();
    addButtonEventListeners();
}

function addButtonEventListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => updateReactions(event));
    })
}

function addPost(event) {
    const {detail} = event;
}

/**
 * Method print posts 
 * @param post Object
 */
function printPosts() {
    const templatePosts = posts.map(post => createTemplate(post)); // genera un nuevo arreglo procesando todos los posts, con ayuda del metodo map
    const main = document.getElementById('midside');
    templatePosts.map((template, index) => {
        let postSection = document.createElement('div');
        postSection.id = `postNumber${++index}`
        postSection.innerHTML = template;
        main.appendChild(postSection);
    });
}

function createTemplate(post) {
    const {id, user, title, text, imgUrl, keywords, reactions} = post; // obteniendo datos especificos del objeto que recibimos
    const template = `
        <figure>
            <title>Titulo imagen</title>
            <img width="50" height="50" src="${imgUrl}" alt="Foto de Nombre de Usuario">
        </figure>
        <span>${user}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <span id="reactionPost${id}">${reactions}</span>
        <div>
            <span>${keywords}</span>
            <button id="postButton${id}" onClick="${updateReactions}"> Reactions </button>
        </div>
    `; // template literal string 

    return template;
}

function updateReactions(event) {
    let id = event.target.id.split('-')[1];
    posts.map(post => {
        if(post.id == id) {
            post.reactions = post.reactions + 1;
            document.getElementById(`reactionPost${id}`).innerText = post.reactions;
        }
    });
}

function updateComments(event) {
    // TODO: Work with comments
}


initializeApp();