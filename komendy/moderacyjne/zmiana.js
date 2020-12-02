const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "zmiana",
    run: async (client, message, args) => {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "「⚙」changelog");
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send('Nie posiadasz wystarczających Uprawnień!')
        if (!suggestion) return message.channel.send("Podaj co zostało Zmienione!");

        const embed = new MessageEmbed()
            .setAuthor("ZMIANA", 'https://lh3.googleusercontent.com/proxy/Z4Rx6H61awGW2owYTB9eheuDozxAFMFEX95xFx4ZGfwOjjXUAUt0sRoEQgPwVleDY_XY-8prcP0lLXkllSKlrU0')
            .setDescription(suggestion)
            .setColor("#fff200")
            .setFooter(`ArgHC.eu - Twój serwer Minecraft`)
            .setTimestamp()
  if (suggestion) SuggestionChannel.send(embed)
        if (suggestion) message.channel.send(`Nowa Zmiana została wysłana!`);
        }
    }
  