import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '1990-01-01',
  email: 'ze@gmail.com',
  name: 'Zé das Couves',
  password: '123456',
  role: Role.User,
};
