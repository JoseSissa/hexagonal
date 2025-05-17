export class UserCreatedAt {
    value: Date;

    constructor(value: Date) {
        this.value = value;
        this.ensureIsValid();
    }

    // Validamos que el email sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(this.value > new Date()) {
            throw new Error("UserCreatedAt must be in the past");
        }
    }
}