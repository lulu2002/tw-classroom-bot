import {Client, Command, CommandMessage, CommandNotFound, Description, Discord, Infos} from "@typeit/discord";
import {GuildChannel, Message} from "discord.js";


@Discord("*")
@Description("Teacher Commands")
abstract class TeacherCommands {

    @Command("class create :name")
    private createClass(message: CommandMessage) {
        const guild = message.guild;
        const className = message.args.name

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
        const guild = message.guild;
        const name = message.args.name


    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {

    }
}
