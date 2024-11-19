const http = require("http");
const chemin = require("path");
const systemeFichier = require("fs");
const promessesFichiers = require("fs").promises; // Utilisation des promesses pour les opérations sur les fichiers

// Modules spécifiques
const journalEvenement = require("./log"); // Module pour gérer les journaux d'événements
const evenements = require("events"); // Module pour gérer les événements
const monEmetteur = new evenements.EventEmitter(); // Création d'un émetteur d'événements personnalisé

const PORT = process.env.PORT || 3500; // Définit le port du serveur (3500 par défaut)

const serveur = http.createServer((requete, reponse) => {
  console.log(`URL demandée : ${requete.url}, Méthode : ${requete.method}`);
});

// Démarrer le serveur et écouter sur le port défini
serveur.listen(PORT, () =>
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`)
);
