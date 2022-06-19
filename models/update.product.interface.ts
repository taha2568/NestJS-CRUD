import {IsInt, IsString, ValidateIf} from 'class-validator'

export class UpdateDTO {
    @ValidateIf(o => o.name != undefined)
    @IsString()
    name: string;
    @ValidateIf(o => o.company != undefined)
    @IsString()
    company: string;
    @ValidateIf(o => o.country != undefined)
    @IsString()
    country: string;
    @ValidateIf(o => o.color != undefined)
    @IsString()
    color: string;
    @ValidateIf(o => o.type != undefined)
    @IsString()
    type: string;
    @ValidateIf(o => o.price != undefined)
    @IsInt()
    price: number;
    @ValidateIf(o => o.description != undefined)
    @IsString()
    description: string | null;
}