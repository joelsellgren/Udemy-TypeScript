/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Joel',
    age: 28,
    hobbies: ['Cooking', 'Gaming'],
    role: [2, 'author'],
}; */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Joel',
    age: 28,
    hobbies: ['Cooking', 'Gaming'],
    role: Role.ADMIN,
};

/* person.role.push('admin'); */
/* person.role[1] = 10; */

/* person.role = [0, 'admin', 'user']; */

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    /* console.log(hobby.map()) */
}

if (person.role === Role.ADMIN) {
    console.log('is ADMIN');
}
