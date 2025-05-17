export class UserEmail {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    // Validamos que el email sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(!this.value.includes('@')) {
            throw new Error("UserEmail must be a valid email");
        }
    }
}