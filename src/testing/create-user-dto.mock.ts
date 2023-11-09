import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '1990-01-01',
  email: 'ze@gmail.com',
  name: 'Zé das Couves',
  password: '123456',
  role: Role.User,
};
