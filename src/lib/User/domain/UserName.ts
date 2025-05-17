export class UserName {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    // Validamos que el nombre sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(this.value.length < 3) {
            throw new Error("UserName must be at least 3 characters");
        }
    }
}