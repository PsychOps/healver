const vm = require("vm");
module.exports = {
    name: 'eval',

    aliases: ['evaluate'],

    description: 'Evaluate a piece of JavaScript code **DANGEROUS COMMAND**',


    async execute(message, args, client) {

        if (!client.application.owner)
            await client.application.fetch()

        if (client.application.owner.id !== message.author.id && message.author.id !== "104933285506908160") {
            return message.reply('This command is restricted to my developers.')
        }

        const response = await message.reply('Evaluating...');
        let code = args.join(' ')
        let result
        try {
            result = eval(code)
        } catch (e) {
            result = e.toString()
        }

        await response.edit(`Output: \`\`\`${result}\`\`\``);

    },
};