import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10), //Hash synchronously since we are using small amount of seeded users
    isAdmin: true,
  },
  {
    name: 'Bruce Banner',
    email: 'bruce@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tony Stark',
    email: 'tony@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
