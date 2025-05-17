import { Pool } from "pg";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserEmail } from "../domain/UserEmail";
import { UserName } from "../domain/UserName";
import { UserCreatedAt } from "../domain/UserCreatedAt";

type PostgresUser = {
    id: string;
    name: string;
    email: string;
    created_at: Date;
}

export class PostgresUserRepository implements UserRepository {
    client: Pool;
    constructor() {
        this.client = new Pool({
            connectionString: process.env.DATABASE_URL
        });
    }

    async create(user: User): Promise<void> {
        const query = {
            text: "INSERT INTO users (id, name, email, created_at) VALUES ($1, $2, $3, $4)",
            values: [
                user.id.value,
                user.name.value,
                user.email.value,
                user.createdAt.value
            ]
        };

        await this.client.query(query);
    }

    async getAll(): Promise<Array<User>> {
        const query = {
            text: "SELECT * FROM users"
        };

        const result = await this.client.query<PostgresUser>(query);

        return result.rows.map(row => this.mapToDomain(row));
    }

    async getOneById(id: UserId): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id.value]
        };

        const result = await this.client.query<PostgresUser>(query);

        if(result.rows.length === 0) return null;
        
        return this.mapToDomain(result.rows[0]);
    }

    async edit(user: User): Promise<void> {
        const query = {
            text: "UPDATE users SET name = $1, email = $2 WHERE id = $4",
            values: [
                user.name.value,
                user.email.value,
                user.id.value
            ]
        };

        await this.client.query(query);
    }

    async delete(id: UserId): Promise<void> {
        const query = {
            text: "DELETE FROM users WHERE id = $1",
            values: [id.value]
        };

        await this.client.query(query);
    }

    private mapToDomain(row: PostgresUser): User {
        return new User(
            new UserId(row.id),
            new UserName(row.name),
            new UserEmail(row.email),
            new UserCreatedAt(row.created_at)
        );
    }
}