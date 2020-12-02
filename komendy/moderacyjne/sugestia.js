const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "propozycja",
    run: async (client, message, args) => {
        const emote = client.emojis.cache.find(e => e.name === 'yes1')
        const emote1 = client.emojis.cache.find(e => e.name === 'nope1')
        let suggestion =  args.join(" "); 
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "「💡」propozycje");
        if (!suggestion) message.channel.send("Podaj treść propozycij!")

        const embed = new MessageEmbed()
            .setTitle("Nowa Propozycja")
            .setDescription(suggestion)
            .setColor("#fff200")
            .setFooter(`${message.author.tag} | ID: ${message.author.id}`)
            .setTimestamp()
     if (suggestion) SuggestionChannel.send(embed).then(msg => {
            msg.react(emote)
            msg.react(emote1)
        });
        if (suggestion) message.channel.send(`Propozycja została wysłana na Kanał ${SuggestionChannel}`)
    }
}