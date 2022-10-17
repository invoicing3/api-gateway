import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/iam/user/dto/create-user.dto";

export class CreateCompanyDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    title: string;
    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto
}
