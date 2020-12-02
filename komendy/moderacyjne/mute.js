  
const { MessageEmbed }= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Nie masz wystarczjących Uprawnień!**')
        const time = args[1]
        if(!time) return message.channel.send('Podaj czas Wyciszenia!')
        const reason = args.splice(2).join(' ')
        if (!reason) return message.reply('Podaj powód Wyciszenia!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send('Nie znaleziono Użytkownika!')
        const role = message.guild.roles.cache.find(role => role.name === 'Wyciszony')
       

        const emote = client.emojis.cache.find(e => e.name === 'strzalka')
        const emote1 = client.emojis.cache.find(e => e.name === 'logo')


            
        await Member.roles.add(role)
        message.channel.send(
            new MessageEmbed()
            .setTitle(`Użytkownik Wyciszony`)
            .setDescription(`${emote1} Administrator:${message.author}
            ${emote} Wyciszył: ${Member}
            ${emote} Powód: ${reason}
            ${emote} Na czas: ${time}`)

        )
        
        setTimeout(async () => {
            await Member.roles.remove(role)    
        }, ms(time))
    }

}

