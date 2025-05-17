export class UserEmail {
    vale: string;

    constructor(vale: string) {
        this.vale = vale;
        this.ensureIsValid();
    }

    // Validamos que el email sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(!this.vale.includes('@')) {
            throw new Error("UserEmail must be a valid email");
        }
    }
}