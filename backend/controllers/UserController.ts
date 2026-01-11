import { JsonController, Get, Param } from 'routing-controllers';
interface User {
  id: number;
  name: string;
  role: "admin" | "user";
}

const users: User[] = [
  { id: 1, name: "Krishna", role: "admin" },
  { id: 2, name: "Radha", role: "user" },
  { id: 3, name: "Arjun", role: "user" }
];
@JsonController('/users')
export class UserController {
  @Get('/')
  getAllUsers() {
    return users;
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    const user = users.find(u => u.id === id);
    return {
      id,
      name: user?.name || 'Unknown',
      role: user?.role || 'user'
    };
  }
}