import { Typed } from '@quick-toolkit/class-transformer';
import { ApiProperty, ApiRequest } from '@quick-toolkit/http';

@ApiRequest({
  url: '/sign',
  method: 'post',
  description: '用户登录',
})
export class UserSignDto {
  @ApiProperty({
    description: '用户账户',
    required: true,
    locales: {
      zh_CN: '账户',
      en_US: 'UserName',
    },
  })
  @Typed({ required: true })
  public username: string;

  @ApiProperty({
    description: '用户密码',
    required: true,
    locales: {
      zh_CN: '密码',
      en_US: 'Password',
    },
  })
  @Typed({ required: true })
  public password: string;
}
