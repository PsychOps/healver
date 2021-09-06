const util = require('../../util');

module.exports = {
    name: 'invite',

    aliases: ['inv'],

    description: 'Invite me to your server(s)!',


    async execute(message, args, client) {
        await message.reply(`You can invite me [here](https://discord.com/api/oauth2/authorize?client_id=884515940967006309&permissions=103079603265&scope=bot)`);
    },
};