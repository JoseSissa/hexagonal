import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
    // Las cosas que modifiquen/muten el estado devuelvan void
    create(user: User): Promise<void>;
    getAll(): Promise<Array<User>>;
    // Puede que exista el usuario o no: return User | null
    getOneById(id: UserId): Promise<User | null>;
    edit(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}