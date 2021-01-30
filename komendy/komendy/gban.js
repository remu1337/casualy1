const blacklist = require('../../models/blacklist')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'gban',
    
    
    run : async(client, message, args) => {



        if(message.author.id !== '768702975576899614') return message.channel.send('Ta komenda jest tylko dla OWNERA BOTA!')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('Zła Nazwa lub ID!')

        const embed12 = new MessageEmbed()
        .setAuthor('Pomyślnie nadano!')
        .setColor('RED')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Użytkownik o ID ${User.user.tag} otrzymał globalną blokade na Komendy!`)
        .setFooter('Casualy.AD')

        const embed6 = new MessageEmbed()
        .setAuthor('Global Ban!')
        .setColor('RED')
        .setThumbnail('https://cdn.discordapp.com/attachments/780804972392087552/800726253287374868/Hammer.png')
        .setDescription(`Otrzymałeś Globalną Blokade na Komendy!`)
        .setFooter('Casualy.AD')



        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** już ma globalbana!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(embed12)
            User.send(embed6)
            }
           
        })
    }
}







