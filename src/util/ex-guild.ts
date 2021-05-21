import {GuildChannelManager} from "discord.js";

declare module 'discord.js' {
    interface GuildChannelManager {
        findCategory(name: string)

        find(name: string, type: keyof typeof ChannelType | ChannelType)
    }
}
GuildChannelManager.prototype.findCategory = function (name: string) {
    return (this as GuildChannelManager).find(name, "category")
}
