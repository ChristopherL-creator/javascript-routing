//  devo dichiare che è file worker 
self.addEventListener('message', messageReceived); // worker ascolterà eventi di tipo message 

function messageReceived(message){ // loggherà messaggi in arrivo
    console.log('messaggio ricevuto dal worker:', message.data); // loggo anche il contenuto di message.data da postmessage, 
    //                                                              nella funzione activateworker 
    postMessage('eccomi');
} 