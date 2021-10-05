//import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'purge',

    description: 'Purge the chat',

    args: true,

    usage: '<messagecount>',

    permissions: 'MANAGE_MESSAGES',

    async execute(message, args, client) {
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES") {
            return message.reply(`I could not purge chat, please make sure i have \`Manage Messages\` permissions.`)
        }
        if (isNaN(args)) return message.reply("Invalid arguments. Usage: ;purge <limit:int>")
        /*<editor-fold desc="​">*/
        //</editor-fold>
        if (args > 100) return message.reply("You can't purge more than 100 messages.")
        if (args < 1) return message.reply(":warning: | You can't purge less than 1 message.");
        await message.delete()
        //args++;
        const channel = message.channel
        let test = await channel.messages.fetch({ limit: args.toString()})

        let log = []
        for (let msg of test.map(bullshit => bullshit).reverse()) {
            log.push(`${msg.author.tag} (${msg.author.id}) - ${msg.content}`)
        }

        const params = new URLSearchParams();
        params.append('content', `If there are empty messages, they may have been embeds or images that we are unable to display in these logs. We apologize for the inconvience. \n\n` + log.join("\n"));
        const response = await fetch('https://api.mclo.gs/1/log', {method: 'POST', body: params});
        const data = await response.json();
        await message.channel.bulkDelete(args.toString())
        //await message.channel.bulkDelete(args[1].join(''))
        await message.channel.send(`Success! A link with the purged data has been messaged to you.`);
        await message.author.send(`Logs: <${data.url}>`)
    }
};
