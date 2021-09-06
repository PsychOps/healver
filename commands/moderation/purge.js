//import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'purge',

    description: 'Purge the chat',

    args: true,

    usage: '<messagecount>',

    permissions: 'MANAGE_MESSAGES',

    async execute(message, args, client) {
        if (isNaN(+args))  return message.reply("Invalid arguments. Usage: ;purge <limit:int>")
        args = +args
        /*<editor-fold desc="​">*/
        if (+args === 1) return message.reply(':no_entry: | Just use delete, you lazy bastard.');
        //</editor-fold>
        if (args > 1000) return message.reply("You can't purge more than 1000 messages.")
        if (args < 1) return message.reply(":warning: | You can't purge less than 1 message.");
        args++;
        const channel = message.channel
        let test = await channel.messages.fetch({ limit: args.toString()})

        let log = []
        for (let msg of test.map(bullshit => bullshit).reverse()) {
            log.push(`${msg.author.tag} (${msg.author.id}) - ${msg.content}`)
        }

        const params = new URLSearchParams();
        params.append('content', log.join("\n"));
        const response = await fetch('https://api.mclo.gs/1/log', {method: 'POST', body: params});
        const data = await response.json();
        await message.channel.bulkDelete(args.toString())
        //await message.channel.bulkDelete(args[1].join(''))
        await message.author.send(`Success!\nLogs: <${data.url}>`);
    }
};