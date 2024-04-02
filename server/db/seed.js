import { User, db } from "./model.js";

console.log("Syncing database ...")
await db.sync({ force: true })
console.log("Seeding database ...")

let i = 1

while (i < 5){

    const newUser = await User.create({
        username: `user${i}`,
        password: `${i}asdf`
    })

    i++
}

await db.close()