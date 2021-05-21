import {Channel, GuildChannelManager, RoleManager} from "discord.js";

declare module 'discord.js' {
    interface GuildChannelManager {
        findCategory(name: string): Channel

        find(name: string, type: keyof typeof ChannelType | ChannelType): Channel
    }

    interface RoleManager {
        find(name: string): Role
    }
}
GuildChannelManager.prototype.findCategory = function (name: string) {
    return (this as GuildChannelManager).find(name, "category")
}

GuildChannelManager.prototype.find = function (name, type) {
    return (this as GuildChannelManager).cache.find(value => value.name == name && value.type == type);
}

RoleManager.prototype.find = function (name) {
    return (this as RoleManager).cache.find(value => value.name == name)
}
