import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserCreatedAt } from "../../domain/UserCreatedAt";

export class UserCreate {
    constructor(private repository: UserRepository) {}

    async run(id: string, name: string, email: string, createsAt: string): Promise<void> {
        const user = new User(
            new UserId(id), 
            new UserName(name), 
            new UserEmail(email), 
            new UserCreatedAt(new Date(createsAt))
        );

        return this.repository.create(user);
    }
}