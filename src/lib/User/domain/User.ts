import { UserCreatedAt } from "./UserCreatedAt";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

// Modelando el Dominio
export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    // Métodos servicios de dominio porque no depende ni de app ni de infraestructura
    public nameAndEmail() {
        return `${this.name} (${this.email})`;
    }
}