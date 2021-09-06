const util = require('../../util');

module.exports = {
    name: 'invite',

    aliases: ['inv'],

    description: 'Invite me to your server(s)!',


    async execute(message, args, client) {
        await message.reply(`You can invite me [here](${util.links.invite})`);
    },
};