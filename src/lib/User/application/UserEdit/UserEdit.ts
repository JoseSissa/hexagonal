import { UserRepository } from "../../domain/UserRepository";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";

export class UserEdit {
    constructor(private repository: UserRepository) {}

    async run(id: string, name: string, email: string, createdAt: Date): Promise<void> {
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreatedAt(createdAt)
        );

        return this.repository.edit(user);
    }
}