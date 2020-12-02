const {Collection, Client, Discord} = require('discord.js')
const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./komendy/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}pomoc`)
    console.log(`${client.user.username} ✅`)
})

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('guildMemberAdd', async member => { 
    const regulamin = member.guild.channels.cache.get('779436170324607018')
    const Channel = member.guild.channels.cache.get('779378815821414421') 
let embed = new MessageEmbed()
.setTitle('Nowy Użytkownik')
.setColor('#00ff22')
.setDescription(`Cześć ${member}! Witamy cię na naszym serwerze. Mamy nadzieję że zostaniesz z nami na dłużej! Zapoznaj się z kanałem ${regulamin}!`)
.setTimestamp()
Channel.send(embed)
})

client.on('guildMemberAdd', async member => {
    const memberrole = member.guild.roles.cache.find(r => r.id === '779377679199633449')
    member.roles.add(memberrole)
})

  
client.login(config.token)