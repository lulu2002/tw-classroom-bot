import {Client, Command, CommandMessage, CommandNotFound, Description, Discord} from "@typeit/discord";
import {CategoryChannel} from "discord.js";
import '../extensions'
import {botEvents} from "../events";

@Discord("*")
@Description("Teacher Commands")
abstract class TeacherCommands {

    @Command("class create :name")
    private createClass(message: CommandMessage, client: Client) {
        const guild = message.guild;
        const className = message.args.name

        guild.channels.create(
            `${className}`,
            {type: "category",}
        ).then(value => {
            botEvents.emit('classCreate', className, value)
        })
    }


    @Command("class delete :name")
    private deleteClass(message: CommandMessage) {
        const guild = message.guild
        const name = message.args.name

        const category = guild.channels.findCategory(name)
        const role = guild.roles.find(name)

        if (category === null || role === null) {
            message.reply("找不到此班級")
            return
        }

        botEvents.emit('classDelete', category as CategoryChannel, role);

        (category as CategoryChannel).children.forEach(value => value.delete());
        (category as CategoryChannel).delete();
        role.delete()
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {

    }
}
