import {CategoryChannel, Channel, GuildChannelManager} from "discord.js";

declare module 'discord.js' {
    interface GuildChannelManager {
        findCategory(name: string): Channel

        find(name: string, type: keyof typeof ChannelType | ChannelType): Channel
    }
}
GuildChannelManager.prototype.findCategory = function (name: string) {
    return (this as GuildChannelManager).find(name, "category")
}

GuildChannelManager.prototype.find = function (name, type) {
    return (this as GuildChannelManager).cache.filter(value => value.name == name && value.type == type).first();
}
