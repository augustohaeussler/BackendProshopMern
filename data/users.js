import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@doe.com',
        password: bcrypt.hashSync('12345', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        password: bcrypt.hashSync('12345', 10),
    }
    
]

export default users