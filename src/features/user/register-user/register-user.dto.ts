import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches
} from 'class-validator';

const PASSWORD_RULE = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-~`+=\[\]\\\/])[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-~`+=\[\]\\\/]{8,24}$'
const PASSWORD_MESSAGE = 'Password must be 8 characters long with 1 uppercase, 1 lowercase, 1 number and 1 special character'
const REGEX = {
    PASSWORD_RULE
}

export class RegisterUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, "", {message: PASSWORD_MESSAGE})
  password: string;
}

