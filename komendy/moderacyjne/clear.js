const Discord = require("discord.js");


module.exports = {
  name: "clear",
  run: async (client, message, args) => {
      const amount = args.join(" ");
message.delete();

      if(!amount) return message.reply('**Podaj ile wiadomości mam Usunąć!**').then(m => m.delete({timeout: 5000}));
      
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('**Nie posiadasz wystarczających Uprawnień!**').then(m => m.delete({timeout: 5000}));
       
    
        if(amount > 100) return message.reply('**Bot nie może wyczyścić więcej niż 100 Wiadmości!**').then(m => m.delete({timeout: 5000}));
     

        if(amount < 1) return message.reply('**Musisz wyczyścić przynajmniej jedną Wiadomość**').then(m => m.delete({timeout: 5000}));
        

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle("Pomyślnie Wyczyszczono")
        .setColor("#8a000e")
        .setDescription(`Wyczyszczono ${amount} Wiadomości!`)
        .setFooter("ArgHC.eu - Twój serwer Minecraft")
        .setAuthor(message.author.tag, message.author.avatarURL)
      )
    }
}