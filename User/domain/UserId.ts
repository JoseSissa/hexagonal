// Generamos esta clase porque el id:string puede ser:
// un texto, uuid, numero en string, etc.
export class UserId {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    // Validamos que el id sea valido, ya depende del requerimiento
    private ensureIsValid() {
        if(this.value.length < 5) {
            throw new Error("UserId must be at least 5 characters");
        }
    }
}