let pages = [] // variabile pages che posso richiamare in tutte le finzione 

const worker = new Worker('./myWorker.js') // gli collego myworker, dovremo creare sistema di ricezione con lui; non devo più collegarlo sotto al 
//                                            body di html

worker.addEventListener('message', logMessageFromWorker)

function logMessageFromWorker(message) { // creo cominicazone a due, worker può loggare message se riceve messaggio da app
    console.log('Messaggio proveniente dal worker: ', message.data);
}
//  guardo quante pagine ho 
function loadPages() {
    fetch("./pages.json") // locale
    .then(response => response.json())
    .then(result => displayPages(result))
} 

function displayPages(loadedPages) { 
    pages = loadedPages // ho irchiamata pages da fuori funzione

    const navMenu = document.getElementById('nav-menu'); // richiamo navmenu da html

    for (const page of pages) { // ciclo le pagine dal json
        // console.log(page); 
        const a = document.createElement('a'); //   creo link html
        const node = document.createTextNode(page.name);  
        a.appendChild(node); // attacco il name al link
        a.href = '/#/' + page.id; // aggiungo ashtag e id al link 
        navMenu.appendChild(a);
    } 

    // const firstPage = pages[0] // prendo primo elemento di pages; 

    // const container = document.getElementById('page-container'); // creo conteitore pagine

    // container.innerHTML = firstPage.html; 

    changePage(window.location.hash);
} 

window.addEventListener('hashchange', () => changePage(window.location.hash)); // mi logga qualsiasi cosa metta dopo l'hashtag 

function changePage(hash) { 
    
    let id = hash.replace('#/', ''); // devo ripulire hash da cancelletto

    if(id === ''){ 
        id = 'home';
    } 

    let selectedPage; 

    for (const page of pages) { // chiamo page da array pages dichiarato all'inizio
        if(page.id === id){ //  se l'id da pages è uguale a hash ripulito,
            selectedPage = page; // lo metto nella variabile selectedpages
            break; // interropo il ciclo perche non mi serve cercare oltre
        }
    } 

    const container = document.getElementById('page-container'); 

    container.innerHTML = selectedPage.html;
} 

function activateWorker() { 
    // console.log('pippo'); 
    worker.postMessage('ciao') // "ciao" sarà in .data
}

loadPages();