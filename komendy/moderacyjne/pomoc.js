const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "pomoc",
    run: async (client, message, args) => { 

        const emote = client.emojis.cache.find(e => e.name === 'strzalka')
        const emote1 = client.emojis.cache.find(e => e.name === '6623_Bell')

        if (!args[0]) {
            client.user.displayAvatarURL()
            const pomocmenu = new MessageEmbed()
            .setThumbnail(`${ client.user.displayAvatarURL()}`)
        .setTitle(`${emote1} **MENU POMOCY** ${emote1}`)
        .setColor("#f23030")
        .addField(`${emote} Jeśli posiadasz propozycje`, "**`$propozycja <treść>`**")
        .addField(`${emote} Komendy dla Administracij`, "**`$pomoc admin`**")
        .setFooter("ArgHC.eu - Twój serwer Minecraft")
        .setTimestamp()
        message.channel.send(pomocmenu)
          } else {
            if (args[0] == 'admin') {
              client.user.displayAvatarURL()
              const pomocmenu = new MessageEmbed()
              .setThumbnail(`${ client.user.displayAvatarURL()}`)
                .setTitle(`${emote1} **POMOC ADMIN** ${emote1}`)
                .setColor("#f23030")
                .addField(`${emote} **Jeśli nastąpiła zmiana na Serwerze!**`, "`$zmiana <Treść Zmiany>`")
                .addField(`${emote} **Prosta Ankieta!**`,"`$ankieta <Treść>`")
                .addField(`${emote} Wyciszenie Użytkownika na Podany Czas!`,"`$mute <@Użytkownik> <Czas> <Powód>`")
                .addField(`${emote} Czyszczenie Wiadomości`, '`$clear <1-100>`')
                .addField(`${emote} Wyrzucenie Użytkownika`, '`$kick <@Użytkownik> <Powód>`')
                .addField(`${emote} Zbanowanie Użytkownika`, '`$ban <@Użytkownik> <Powód>`')
                .setFooter("ArgHC.eu - Twój serwer Minecraft")
                .setTimestamp()
              message.channel.send(pomocmenu)
            }
    } 
    } 
}