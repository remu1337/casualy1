const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: "instrukcja",
    aliases: ["konfiguracja"],
    run: async (client, msg, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'config12')


let instrukacja1 = new MessageEmbed()
.setAuthor('Instrukacja', 'https://cdn.discordapp.com/attachments/786700077937983549/798948744720547870/info.png')
.setColor('#FF8000')
.setDescription(`${emote}`  + "• Jak ustawić poprawnie Bota?\n**• Krok 1 •** `Dodanie bota na serwer` [BOT](https://discord.com/oauth2/authorize?client_id=780415759393226762&permissions=8&scope=bot)\n\n**• Krok 2 •** `Ustawienie Kanału na którym Bot będzie rozsyłał Reklamy! r!kanał #kanał`\n\n**• Krok 3 •** `Ustawienie Reklamy Serwera pod r!reklama <Treść Reklamy> (Bez Linku z Zaproszenie i bez oznaczeń here i everyone)`\n\n **• Krok 4 •** `Czekanie aż Weryfiaktorzy zaakcpetują Reklame! Status Reklamy tutaj` [Serwer](https://discord.gg/T7zeXakwhD)")
.setTimestamp()
.setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}` , msg.author.displayAvatarURL())
msg.channel.send(instrukacja1)
    }
    }