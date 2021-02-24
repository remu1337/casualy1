const db = new require("quick.db")

module.exports = {
    name: "gclear",
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("797219516920234054")) return;
        if (!args[0]) return msg.reply("Podaj ilośc wiadomości!")
        client.guilds.cache.forEach(servers_each => {
                    if (!client.channels.cache.get(db.get(`gchat_${servers_each.id}`))) return;
                    client.channels.cache.get(db.get(`gchat_${servers_each.id}`)).bulkDelete(`${args[0]}`)
            })
        msg.reply(`Wyczyszczono ${args[0]} wiadomości!`)
    }
}