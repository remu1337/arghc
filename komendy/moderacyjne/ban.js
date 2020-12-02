const Discord = require('discord.js');


module.exports = {
    name: "ban",
    run: async (client, message, args) => {
  message.delete();

  const member = message.mentions.members.first();



  if (!message.member.hasPermission('KICK_MEMBERS'))
      return message.channel.send('**Nie posiadasz Uprawnień do banowania!**').then(m => m.delete({timeout: 5000}));

  if (!member)
      return message.channel.send('**Nie mogę znaleść tego Użytkownika! Oznacz Użytkownika!**').then(m => m.delete({timeout: 5000}));

  if (!member.bannable)
      return message.channel.send('**Nie mogę zbanować tego Użytkownika!**').then(m => m.delete({timeout: 5000}));

  if (message.member.roles.highest.position < member.roles.highest.position)
      return message.channel.send('**Nie możesz zbanować kogoś z wyższą rolą od ciebie!**').then(m => m.delete({timeout: 5000}));

  
  let reason = 'Brak Powodu';

  if (args.length > 1) reason = args.slice(1).join(' ');

  member.send(`👢Zostałeś \`zbanowany\` z Serwera **${message.guild.name}** \n**Powód**: ${reason}.`);
  member.ban({ reason: reason });
    message.channel.send(
      new Discord.MessageEmbed()
      .setTitle('Użytkownik Zbanowany')
      .setColor('#8a000e')
      .setDescription(`Użytkownik: ${member} 
      Powód: ${reason}`)
      .setTimestamp()
      .setFooter('ArgHC.eu - Twój serwer Minecraft')
  );
    }
}