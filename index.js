const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'aider les gens [!help]', type: 0 } });
    console.log("Nutellahhh !");
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', '🚩bienvenue');
    let role = member.guild.roles.find("name", "Abonnés");
    channel.send(`Salut ${member.user}, bienvenue !`)
    member.addRole(role);
    member.sendMessage(`Bienvenue sur le serveur d'**Adrien- Du29** ${member.user.username} ! Je t'invite à lire les règles du serveur dans le salon "📑règles".\nSi tu veux savoir les commandes que je peux faire, tapes !help dans le salon "🤖commandes-bot".\nSi tu as besoin d'aide pour quoi que ce soit et que je ne peut pas répondre à ta question, je t'invite a contacter mon créateur, @Birsol#1319 !`);
    console.log("Une personne a rejoint le serveur !")
  });

bot.on('message', msg => {

    if (msg.content.toUpperCase().includes('PUTE')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('PUTIN')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('FDP')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('CUL')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('NIQUE')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('NTM')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('CHIER')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('TG')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('SUCK')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('DICK')) {
        msg.delete()
        msg.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (msg.content.toUpperCase().includes('HTTPS://')) {
        if (msg.member.roles.find("name", "Modérateur")) {
            return;
        }
        msg.delete()
        msg.author.send("S'il te plaît, ne fais pas de publicité !")
    }

    if (msg.content === "Comment ça va Nutellah ?"){
        random();

        if (randnum == 0){
            msg.reply("Je vais très bien, merci.");
            console.log("humeurbien");
        }

        if (randnum == 1){
            msg.reply("Bof, je suis pas de bonne humeur en ce moment.");
            console.log("humeurbof");
        }

    }

    if (msg.content === 'Quelle est ma photo de profil ?') {
        msg.reply(`ta photo de profil est : ${msg.author.avatarURL}`);
    }

    if (msg.content === "Par qui as-tu été créé ?"){
        msg.reply("J'ai été créé par Birsol !")
    }

    if (msg.content === "Que la lumière soit !"){
        msg.reply("Et la lumière fut !")
    }

    if (msg.content === "Quel est le sens de la vie ?"){
        msg.reply("42, bien évidemment !")
    }

    if (msg.content === "Je m'ennuie..."){
        msg.reply("Regarde les vidéos d'Adrien- Du29 !")
    }

    let msgs = msg.content.toUpperCase();
    let sender = msg.author;
    let cont = msg.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msgs.startsWith(prefix + 'CLEAR')) {
        async function purge() {
            msg.delete();

            if (!msg.member.roles.find("name", "Modérateur")) {
                msg.channel.send('Tu dois avoir le rôle \`Modérateur\` pour utiliser cette commande !');
                return;
            }

            if (isNaN(args[0])) {
                msg.channel.send("Merci d'entrer le nombre de messages à supprimer. \n Usage: " + prefix + "clear <nb_de_messages>");
                return;
            }

            const fetched = await msg.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages trouves, suppression...');

            msg.channel.bulkDelete(fetched).then(() => {
                msg.channel.send(fetched.size + " messages ont étés supprimés.").then(msg => msg.delete(5000));
            });

        }

        purge();

    }

})

bot.on('message', async message => {

      if (message.content === prefix + "help"){
        message.reply("La liste des commandes t'as été envoyée en messages privés !");
        message.author.send({embed: {
            color: 16777215,
            title: "__Aide__",
            description: "Ce message indique toutes les commandes que je peux exécuter !",
            fields: [{
                name: "Commandes",
                value: "- !help : Affiche mes commandes disponibles"
              },
              {
                name: "Interactions",
                value: "- Comment ça va Nutellah ? : Posez-moi cette question et je vous répondrai une réponse en fonction de mon humeur.\n- Quelle est ma photo de profil ? : Posez moi cette question et je vous donnerai votre photo de profil."
              },
            ],
          }
        });
    }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}