import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({
        type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Электронная почта'})
    @Column({
        type: DataType.STRING, unique: true, allowNull: false
    })
    email: string;

    @ApiProperty({example: 'password', description: 'Пароль пользователя'})
    @Column({
        type: DataType.STRING, allowNull: false
    })
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен ли пользователь'})
    @Column({
        type: DataType.BOOLEAN, allowNull: false, defaultValue: false
    })
    banned: boolean;

    @ApiProperty({example: 'Ругается матом', description: 'Причина бана пользователя'})
    @Column({
        type: DataType.STRING, allowNull: true
    })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}

