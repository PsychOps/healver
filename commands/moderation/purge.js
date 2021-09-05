module.exports = {
    name: 'purge',

    description: 'Purge the chat',

    args: true,

    usage: '<messagecount>',

    async execute(message, args, client) {
        //await message.reply(':warning: | This command is still in the works!');
        args++;
        const channel = message.channel
        let test = await channel.messages.fetch({ limit: 5})
        console.log(test)
        await message.channel.bulkDelete(args.toString())
        //await message.channel.bulkDelete(args[1].join(''))
        await message.channel.send(`Success!`);
    },
};