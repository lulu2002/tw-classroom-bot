import {botEvents} from "../events";

botEvents.on('classCreate', name => {
    console.log(`created class ${name}`)
})
