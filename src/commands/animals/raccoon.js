const { MessageEmbed } = require('discord.js');
const { color } = require('../../util');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'raccoon',

    description: 'Get a random raccoon image & fact',

    cooldown: 5,

    async execute(message, args, client) {
        const msg = await message.reply(`Fetching raccoon...`);
        const response = await fetch('https://some-random-api.ml/animal/raccoon');
        const data = await response.json();

        console.log(data)

        const embed = new MessageEmbed()
            .setTitle(`Random raccoon`)
            .setImage(data.image)
            .setFooter(`Command executed by ${message.author.tag}`)
            .setTimestamp()
            .setColor(color.green)

        await msg.edit( { content: data.fact, embeds: [embed] } )

    },
};