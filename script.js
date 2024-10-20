const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
    "help": "Commandes disponibles:\n- help : afficher cette aide\n- index : afficher l'index des indices\n- exit : quitter le terminal",
    "index": "1. Le chemin le plus sûr pour accéder à hZYk36 est celui des ombres.\n2. Les réponses que tu cherches se cachent derrière des chiffres.\n3. Cherche le fichier \"secret.txt\" sur le serveur.",
    "exit": "Fermeture du terminal...\n"
};

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = input.value;
        input.value = '';

        output.innerHTML += `> ${command}<n`;
        processCommand(command);
    }
});

function processCommand(command) {
    if (command in commands) {
        output.innerHTML += `${commands[command]}\n`;
    } else {
        output.innerHTML += `Commande inconnue : ${command}\n`;
    }

    output.scrollTop = output.scrollHeight;
}