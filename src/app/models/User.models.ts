export class User {


    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        // 'hobbies' est optionnel grace a '?'
        public hobbies?: string[]
    ) {}
}
