import { IsString } from 'class-validator';
export class UpdateTwittDto {
  @IsString()
  readonly message: string;
}
