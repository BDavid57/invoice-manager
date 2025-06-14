import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10'
  ) {
    return this.invoicesService.findAll(+page, +limit);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.invoicesService.findOne(id);
  }
}
