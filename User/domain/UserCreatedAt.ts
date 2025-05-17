export class UserCreatedAt {
    vale: Date;

    constructor(vale: Date) {
        this.vale = vale;
        this.ensureIsValid();
    }

    // Validamos que el email sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(this.vale > new Date()) {
            throw new Error("UserCreatedAt must be in the past");
        }
    }
}