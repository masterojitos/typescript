import { Everis } from './everis.decorator';

// * Interfaces
interface UserResponse {
  name1: string;
  name2: string;
  password?: string;
  skills?: string;
  ubigeo?: Ubigeo;
}

interface Password {
  value: string;
  salt: string;
  password: string;
}

interface Ubigeo {
  department: string;
  province: string;
  district: string;
}

// * Literal Types
type PasswordType = string | Password;

// * Decorator
@Everis({
  community: 'Frontend',
})

// * Class
class User {
  firstname: string;
  lastname: string;
  password: PasswordType;
  skills: string;
  ubigeo: Ubigeo;

  constructor(user: UserResponse) {
    this.firstname = user.name1 || '';
    this.lastname = user.name2 || '';
    const salt =
      Math.random() > 0.4 ? String(Math.random()).substr(2, 4) : null;
    this.password = this.generatePassword(user.password, salt);
    this.skills = user.skills || '';
    this.ubigeo = user.ubigeo || null;
  }

  // * Utilities Types
  // public update(user: Required<UserResponse>) {
  update(user: Partial<UserResponse>) {
    this.firstname = user.name1 || this.firstname;
    this.lastname = user.name2 || this.lastname;
    this.password = null;
    this.skills = null;
    this.ubigeo = user.ubigeo || this.ubigeo;
    return this;
  }

  // * Function Overload
  generatePassword(value: string): string;
  generatePassword(value: string, salt: string): Password;
  generatePassword(value: string, salt?: string): PasswordType {
    if (!value) {
      return null;
    }
    if (!salt) {
      return value;
    }
    // * Object Shorthand
    const password: Password = {
      value,
      salt,
      password: value + salt,
    };
    return password;
  }
}

// * Modules
export { User, UserResponse, Password };
