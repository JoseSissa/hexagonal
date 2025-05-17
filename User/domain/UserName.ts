export class UserName {
    vale: string;

    constructor(vale: string) {
        this.vale = vale;
        this.ensureIsValid();
    }

    // Validamos que el nombre sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(this.vale.length < 3) {
            throw new Error("UserName must be at least 3 characters");
        }
    }
}