const { MessageEmbed } = require('discord.js');
const { color } = require('../../util');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'fox',

    description: 'Get a random fox image & fact',

    cooldown: 5,

    async execute(message, args, client) {
        const msg = await message.reply(`Fetching fox...`);
        const response = await fetch('https://some-random-api.ml/animal/fox');
        const data = await response.json();

        console.log(data)

        const embed = new MessageEmbed()
            .setTitle(`Random fox`)
            .setImage(data.image)
            .setFooter(`Command executed by ${message.author.tag}`)
            .setTimestamp()
            .setColor(color.green)

        await msg.edit( { content: data.fact, embeds: [embed] } )

    },
};