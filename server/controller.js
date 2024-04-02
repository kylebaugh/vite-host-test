import { User, db } from "./db/model.js";
import bcrypt from 'bcryptjs'

const handlerFunctions = {
    register: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body

        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)

        console.log('password', password)
        console.log('salt', salt)
        console.log('passHash', passHash)

        const newUser = await User.create({
            username,
            password: passHash
        })

        res.send(newUser)
    },

    login: async (req, res) => {
        // console.log(req.body)
        const {username, password} = req.body

        const userCheck = await User.findOne({
            where:{
                username: username
            }}
        )

        const passwordCheck = bcrypt.compareSync(password, userCheck.password)

        if(passwordCheck){
            res.status(200).send('success')
        }else{
            res.status(400).send('failure')
        }

    }
}

export default handlerFunctions