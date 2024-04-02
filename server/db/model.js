import {DataTypes, Model} from 'sequelize'
import connectToDB from './database.js'
import util from 'util'

export const db = await connectToDB('postgresql:///bcrypt-demo')

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    }
)