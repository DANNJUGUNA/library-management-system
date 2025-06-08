import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}
  @Get()
  getAllMember() {
    return this.membersService.getAllMembers();
  }
  @Get(':id')
  getMemberById(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.getMemberById(id);
  }
  @Post()
  addMember(@Body(ValidationPipe) createMemberDto: CreateMemberDto) {
    return this.membersService.addMember(createMemberDto);
  }
  @Patch(':id')
  updateMember(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.updateMember(id, updateMemberDto);
  }
  @Delete(':id')
  deleteMember(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.deleteMember(id);
  }
}
