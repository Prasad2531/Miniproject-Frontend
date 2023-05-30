export class Login {
    email!: string | null;
    username!: string | null;
    password!: string | null;

    constructor(email: string | null, username: string | null, password: string | null) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
