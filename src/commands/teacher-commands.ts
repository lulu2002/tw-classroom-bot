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

        botEvents.emit('classCreate', className)

        guild.roles.create({
            data: {
                name: className,
                mentionable: false
            }
        })


        guild.channels.create(
            `${className}`,
            {type: "category",}
        ).then(value => {
            guild.channels.create('公告區', {parent: value})
            guild.channels.create('幹部討論區', {parent: value})
            guild.channels.create('上課', {parent: value, type: "voice"})
        })
    }

    @Command("class delete :name")
    private deleteClass(message: CommandMessage) {
        const guild = message.guild
        const name = message.args.name

        const category = guild.channels.findCategory(name)

        if (category === null) {
            message.reply("找不到此班級")
            return
        }

        (category as CategoryChannel).children.forEach(value => value.delete())
        category.delete()
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {

    }
}
