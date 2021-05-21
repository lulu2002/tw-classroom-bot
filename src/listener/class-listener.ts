import {botEvents} from "../events";

botEvents.on('classCreate', (name, category) => {
    const guild = category.guild;

    guild.roles.create({
        data: {
            name: name,
            mentionable: false
        }
    }).then(role => category.overwritePermissions(
        [
            {
                id: role.id,
                allow: ['VIEW_CHANNEL']
            },
            {
                id: guild.roles.everyone.id,
                deny: ['VIEW_CHANNEL']
            }
        ]
        )
    )
        .then(value => guild.channels.create('公告區', {parent: category}))
        .then(value => guild.channels.create('幹部討論區', {parent: category}))
        .then(value => guild.channels.create('上課', {parent: category, type: "voice"}))
})
