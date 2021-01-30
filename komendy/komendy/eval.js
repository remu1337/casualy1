const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'eval',
    run: async (client, message, args) => {
        const msg = message;
        if (msg.author.id !== '768702975576899614') return message.channel.send('Byniu ta komenda tylko dla OWnera!')

        try {
            const cos = args[0]
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .addField('Argument', cos)
                .addField('Odpowiedz:', await data)
            await msg.channel.send(embed)

        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('Spier chłopie')
            return await msg.channel.send(embed);

        }
    }
}