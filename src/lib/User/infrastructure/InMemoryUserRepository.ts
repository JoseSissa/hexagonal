import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class InMemoryUserRepository implements UserRepository {
    private users: Array<User>;

    constructor() {
        this.users = [];
    }

    async create(user: User): Promise<void> {
        this.users.push(user);
    }

    async getAll(): Promise<Array<User>> {
        return this.users;
    }

    async getOneById(id: UserId): Promise<User | null> {
        return this.users.find(user => user.id.value === id.value) || null;
    }

    async edit(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id.value === user.id.value);
        if (index === -1) throw new UserNotFoundError("User not found");
        this.users[index] = user;
    }

    async delete(id: UserId): Promise<void> {
        const index = this.users.findIndex(u => u.id.value === id.value);
        if (index === -1) throw new UserNotFoundError("User not found");
        this.users.splice(index, 1);
    }
}