import {IsInt, IsOptional, IsString, ValidateIf} from 'class-validator'

export class UpdateDTO {
    // @ValidateIf(o => o.name != undefined)
    @IsString()
    @IsOptional()
    name?: string;
    @IsString()
    @IsOptional()
    company?: string;
    @IsString()
    @IsOptional()
    country?: string;
    @IsString()
    @IsOptional()
    color?: string;
    @IsString()
    @IsOptional()
    type?: string;
    @IsInt()
    @IsOptional()
    price?: number;
    @IsString()
    @IsOptional()
    description?: string | null;
}