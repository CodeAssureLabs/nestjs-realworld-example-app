import { IsNotEmpty } from 'class-validator';

// Plan 11 shape validation (11.9) — DTO naming convention
export class CreateUserDto {
  @IsNotEmpty()
  readonly username!: string;

  @IsNotEmpty()
  readonly email!: string;

  @IsNotEmpty()
  readonly password!: string;
}
