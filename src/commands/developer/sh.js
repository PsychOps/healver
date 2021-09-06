const { exec } = require("child_process");

module.exports = {
    name: 'sh',

    aliases: ['shell'],

    description: 'Run a shell command **DANGEROUS COMMAND**',


    async execute(message, args, client) {

        if (!client.application.owner)
            await client.application.fetch()

        if (client.application.owner.id !== message.author.id) {
            return message.reply('This command is restricted to my developers.')
        }

        const response = await message.reply('Running...');
        let cmd = args.join(' ')
        let result
        let flag = ''
        process = exec(cmd, async (error, stdout, stderr) => {
            if (error) {
                result += "[ERROR]"
                result += error.message;
                return;
            }
            if (stderr) {
                flag += "[STDERR]"
                result = stderr;
                return;
            }
            flag += "[STDOUT]"
            result = stdout;
            await response.edit(`Output${" " + flag}: \`\`\`${result}\`\`\``);
        });
        setTimeout(() => {
            process.kill("SIGTERM")
            response.edit("Command timed out.")
        }, 60*1000)

    },
};