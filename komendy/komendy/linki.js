const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ["invite", "zapros", "zaproś", "Engir.ADV", "bot", "linki"],
    run: async (client, msg) => {

        const emote = client.emojis.cache.find(e => e.name === 'linki')
        const emote1 = client.emojis.cache.find(e => e.name === 'strzaa2137')



        const linki = new Discord.MessageEmbed()

    .setTitle(`${emote} Przydatne Linki bota Casualy.AD!`)
    .setColor('#FF8000')
    .setDescription(`${emote1}Strona Bota: [KLIKAJ](https://casualy.ga/) \n${emote1}Support Serwer: [KLIKAJ](https://discord.gg/KdvePvrwmu) \n${emote1}Dodaj bota: [KLIKAJ](https://discord.com/api/oauth2/authorize?client_id=804389994600857612&permissions=8&scope=bot)`)
    .setFooter(`Wywołane przez: ${msg.author.tag} | ${msg.author.id}`,  `${msg.author.displayAvatarURL()}`)
    msg.channel.send(linki)
    }
    
}
