//console.log('Voila du code javascript!');

/* Nous allons impoter le server http de Node et y repondre*/
//Importation du package http
const http = require ('http');

// Creation de l'objet server par l'objet http ci-haut importé
/*Prendra2 arguments requete et reponse qui demande du server
renverra la fonction ci-dessous */

// On va ici, impoter notre apps depuis app.js
const app = require ('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port:' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRISENUSE':
            console.error(bind + 'is already in use ?');
            process.exit(1);
            break;
        default:
            throw error;
    }
}; 
//app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
/*const server = http.createServer((req, res) =>{
    res.end('voila la reponse du premier et du nodemon serveur');
});
*/
//server.listen(process.env.PORT || 3000);
server.on('error',errorHandler);
server.on('listening', () =>{
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port:' + port;
    console.log('Listening on ' + bind);
}); 

server.listen(port);

/*
// Passons notre app à un port
app.set('port', process.env.PORT || 3000);

// On passera notre app au server
const server = http.createServer(app);

/* Puis le seveur devra ecouter, attendre les requetes envoyer 
par défault en developpement on use le port 3000 si libre
sinon on use*/

/*
server.listen(process.env.PORT || 3000);
*/

/* -    La fonction normalizePort renvoie un port valide,qu'il soit fourni sous la 
forme d'une numero ou d'une chaine,

-   La fonction errorHandler recherche les differentes erreurset les gère de manière approprié
Ell est ensuite enregistrer dans le serveur,

-   Un ecouteur d'evenement est également enregistrer,consigant le port ou le canal
nommé sur lequel le serveur s'éxécute dans la console.
*/
// mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://xtiankav:<password>@monpremiercloud.sbzlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority