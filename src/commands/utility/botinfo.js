const Discord = require('discord.js');
const { color } = require('../../util');

module.exports = {
    name: 'botinfo',
    aliases: ['bi', 'about'],
    description: 'A test command',
    cooldown: 5,

    async execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(`About ${client.user.username}`)
        embed.setColor(color.blue)
        embed.setDescription(`${client.user.username} is a multifunctional bot developed and maintained by ${(await client.users.fetch('843866750131109909')).tag} in co-operation with ${(await client.users.fetch('282825580141871104')).tag} and ${(await client.users.fetch('104933285506908160')).tag} to provide users with modules such as utility, moderation and mental support. ${client.user.username} is a product by [Modraxis Development](https://github.com/Modraxis). The code can be found [here on github](https://github.com/Modraxis/Healver) and is licensed under the GPL 3.0 license. For inquiries, contact **modraxisorg@gmail.com**.`)

        const uptime = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

        let stats = '';
        stats += `**Users:** ${client.users.cache.size} \n`
        stats += `**Guilds:** ${client.guilds.cache.size} \n`
        stats += `**Created:** <t:${Math.round(client.user.createdAt.getTime() / 1000)}:R> \n`
        stats += `**Up since:** <t:${uptime}:R>`

        embed.addFields(
            {name: 'statistics', value: stats, inline: false}
        )
        embed.setTimestamp()
        embed.setFooter(`Command executed by ${message.author.tag}`)

        await message.channel.send({ embeds: [embed] })
    },
};