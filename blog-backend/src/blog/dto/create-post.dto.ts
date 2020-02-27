import { IsString ,IsNotEmpty } from 'class-validator';
import { ApiModelProperty} from '@nestjs/swagger';

export class CreatePostDTO {
    @ApiModelProperty({ description: '标题', example: '博客标题',})
    @IsNotEmpty({ message: '请填写标题' })
    @IsString()
    readonly title: string;
    @ApiModelProperty({ description: '说明', example: '详细说明',})
    @IsNotEmpty({ message: '请填写说明' })
    @IsString()
    readonly description: string;
    @ApiModelProperty ({ description: '正文', example: '正文内容',})
    @IsNotEmpty({ message: '请填写正文' })
    @IsString()  
    readonly body: string;
    @ApiModelProperty({ description: '作者', example: '美妆博主',})
    @IsNotEmpty({ message: '请填写作者' })
    @IsString() 
    readonly author: string;
    @ApiModelProperty ({ description: '日期', example: '当前日期',})
    readonly date_posted: string
}