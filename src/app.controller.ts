import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('your-controller') // Add a tag for your controller
@Controller('your-controller')
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Endpoint summary' })
  @ApiResponse({ status: 200, description: 'Success response' })
  getHello(): string {
    return 'Hello World!';
  }
}
