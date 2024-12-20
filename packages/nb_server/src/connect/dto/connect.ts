import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SendConnectRequestDTO {
    @ApiProperty({
        type: 'string',
    })
    @IsString()
    hostname: string;

    @ApiProperty({
        type: 'number',
    })
    @IsNumber()
    port: number;

    @ApiProperty({
        type: 'string',
        required: false,
    })
    @IsString()
    @IsOptional()
    username: string;
}
