///•
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "premium",
    run: async (client, msg, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'paypalkoks')
        const emote1 = client.emojis.cache.find(e => e.name === 'psckoks')
        const emote2 = client.emojis.cache.find(e => e.name === 'koksportfel')



let embed = new MessageEmbed()
.setAuthor('Casualy.AD Premium', 'https://cdn.discordapp.com/attachments/797020528291479552/798268867989733446/6234_nitro_booster_s.gif')
.setColor('#FF8000')
.addField('• Co daje Premium?', '• Reklama w Embedzie!\n• Zmiana Koloru Embedu\n• Status Reklamy `Premium`\n• Specjalna Ranga na Serwerze Support\n• Wstawienie Reklamy na Kanale dla Premium\n• Custom Link `Zaniedługo`')
.addField('• Ile kosztuje Premium?', '• Premium kosztuje 5zł/miesiąc!\n • Po Kupno zgłaszać się do **remu#0003** `NAJLEPIEJ ZOBACZYĆ POPRZEZ SUPPORT SERWER`')
.addField(`\n• Jakie Formy Płatności?`, `• Obsługujemy:\n• ${emote} PayPal\n• ${emote1} PaySafeCard`)
.setFooter(`Wywołane Przez: ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL())
.setTimestamp()


msg.channel.send(embed)



    }
}