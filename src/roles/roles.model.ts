import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
    value: string
    description: string
}

@Table({
    tableName: 'roles'
})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({
        type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'user', description: 'Значение роли пользователя'})
    @Column({
        type: DataType.STRING, unique: true, allowNull: false
    })
    value: string;

    @ApiProperty({example: 'Пользователь', description: 'Описание роли'})
    @Column({
        type: DataType.STRING, allowNull: true
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
