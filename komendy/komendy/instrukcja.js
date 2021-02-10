const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: "instrukcja",
    aliases: ["konfiguracja"],
    run: async (client, msg, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'config12')


let instrukacja1 = new MessageEmbed()
.setAuthor('Instrukacja!', 'https://image.flaticon.com/icons/png/512/1028/1028907.png')
.setColor('#FF8000')
.setDescription(`${emote}`  + "• Jak ustawić poprawnie Bota?\n**• Krok 1 •** `Dodanie bota na serwer` [BOT](https://discord.com/oauth2/authorize?client_id=780415759393226762&permissions=8&scope=bot)\n\n**• Krok 2 •** `Ustawienie kanału na którym Bot będzie rozsyłał reklamy! r!kanał #oznacz-kanał (Musi być widoczny dla everyone nawet przed weryfikacją!)`\n\n**• Krok 3 •** `Ustawienie reklamy serwera pod r!reklama <Treść Reklamy> (Bez linku z zaproszeniem i bez oznaczeń here lub everyone)`\n\n **• Krok 4 •** `Czekanie aż Weryfiaktorzy zaakcpetują reklame! Status reklamy tutaj` [Support Serwer](https://discord.gg/T7zeXakwhD)")
.setTimestamp()
.setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
msg.channel.send(instrukacja1)
    }
    }