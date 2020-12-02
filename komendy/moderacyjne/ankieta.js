const Discord = require("discord.js");



module.exports = {
    name: "ankieta",
    run: async (client, message, args) => {
        const emote = client.emojis.cache.find(e => e.name === 'yes1')
        const emote1 = client.emojis.cache.find(e => e.name === 'nope1')
        const ankiety = client.channels.cache.find(channel => channel.name === '「📊」ankiety')


    let errEmbed = new Discord.MessageEmbed()
    .setColor("FF0000")
    .setTitle("Błąd")
    .setDescription("Błąd Polecenia, podaj Tekst do ankiety!")
    .setTimestamp();
    
    
    let permEmbed = new Discord.MessageEmbed()
    .setColor("FF0000")
    .setTitle("Błąd")
    .setDescription("Nie masz wystarczających Uprawnień!")
    .setTimestamp();
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(permEmbed)
 var x = message.channel;

    let tresc = args.join(" "); 
    if(!tresc) x.send(errEmbed);
    message.delete()


    let ankieta = new Discord.MessageEmbed()
    .setColor("#f23030")
    .setAuthor("Ankieta","")
    .setDescription(tresc)
    .setFooter(`ArgHC.eu - Twój serwer Minecraft`)
    .setTimestamp();

    ankiety.send(ankieta).then(async embedMessage => {
        await embedMessage.react(emote)
        await embedMessage.react(emote1)
    })
    }
}
