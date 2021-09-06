const Discord = require("discord.js");
const util = require("../../util")

module.exports = {
    name: 'privacy',

    aliases: ['policy', 'pp'],

    description: 'See our privacy policy.',


    async execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`${client.user.username} Does not save any data. However, when messages are purged they will be saved in a private log file for up to 90 days. For any concerns, [join our support server](${util.links.support})`)
            .setColor(util.color.blue)

        await message.reply({ embeds: [embed] });

    },
};