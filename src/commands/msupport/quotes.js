const { MessageEmbed } = require('discord.js');
const { color } = require('../../util');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'quotes',

    aliases: ['quote'],

    description: 'Invite me to your server(s)!',

    cooldown: 5,

    async execute(message, args, client) {
        const msg = await message.reply(`Getting a quote...`);
        const response = await fetch('https://api.quotable.io/random?tags=happiness');
        const data = await response.json();

        const embed = new MessageEmbed()
            .setTitle(data.author)
            .setDescription(data.content)
            .setFooter(`Added ${data.dateAdded} & modified ${data.dateModified}`)
            .setColor(color.green)

        await msg.edit( { embeds: [embed] } )

    },
};