import {IsString, IsInt, ValidateIf} from 'class-validator'

export class Product{
    @IsString()
    name: string;
    @IsString()
    company: string;
    @IsString()
    country: string;
    @IsString()
    color: string;
    @IsString()
    type: string;
    @IsInt()
    price: number;
    @ValidateIf(o => o.description != undefined)
    @IsString()
    description?: string | null;
}
