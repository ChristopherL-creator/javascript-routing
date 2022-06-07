console.log(window.location.hash); //    estrae solo parte a partire da "#", "#" incluso; "hash" indica "#"  

changePage(window.location.hash);

window.addEventListener('hashchange', () => changePage(window.location.hash)); // mi logga qualsiasi cosa metta dopo l'hashtag

function changePage(hash) { 
    // const container = document.getElementById('page-container');
    switch (hash) {
        case '#/about': //  riporto la stessa stringa al corrispondente href nel nav
            // container.innerHTML = '<h1>About<h1>' 
            displayPage('about');
            break; 
        case '#/gallery':
            // container.innerHTML = '<h1>Gallery<h1>' 
            displayPage('gallery');
            break; 
        case '#/contacts':
            // container.innerHTML = '<h1>Contacts<h1>' 
            displayPage('contacts');
            break;
        default:    //   container.innerHTML = '<h1>Home</h1>' 
        displayPage('home');
            break;
    }
} 

function displayPage(pageId) {
    const container = document.getElementById('page-container'); // metto tutti hetml in index
    // console.log(container.children); 
    const arrayOfChildren = [...container.children]; // creo array vuoto dove metter i children di continer, per poterli ciclare meglio

    for (const child of arrayOfChildren) {
        child.style.display = 'none'; // per ogni child di container in arrayofchildren, imposto display none, quindi li rendo invisibili i partenza
    } 

    const selectedPage = document.getElementById(pageId);  //   determino l pagina giusta

    selectedPage.style.display = 'block';   //  rendo visibile la pagina giusta
}