interface User {
    name: string;
    age: number;
}

class CreateUser {
    execute({name, age}: User) {
        return { name, age } 
    }
}

export default new CreateUser();