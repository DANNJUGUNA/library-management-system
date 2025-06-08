import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  private Members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jdoe@info.com',
      book: 'Naturing Self Peace',
    },
    {
      id: 2,
      name: 'Peter Keans',
      email: 'pk@info.com',
    },
    {
      id: 3,
      name: 'Ethan Leak',
      email: 'el@info.com',
      book: 'The Seal',
    },
    {
      id: 4,
      name: 'Jennifer Perez',
      email: 'jp@info.com',
      book: 'The Seal',
    },
    {
      id: 5,
      name: 'James Dean ',
      email: 'jd@info.com',
      book: 'The Daring King',
    },
  ];
  getAllMembers() {
    return this.Members;
  }

  getMemberById(id: number) {
    const member = this.Members.find((member) => member.id === id);
    return member;
  }
  addMember(createMemberDto: CreateMemberDto) {
    const membersByHighestId = [...this.Members].sort((a, b) => b.id - a.id);
    const newMember = {
      id: membersByHighestId[0].id + 1,
      ...createMemberDto,
    };
    this.Members.push(newMember);
    return newMember;
  }
  updateMember(id: number, updateMemberDto: UpdateMemberDto) {
    this.Members = this.Members.map((member) => {
      if (member.id) {
        return { ...member, ...updateMemberDto };
      }
      return member;
    });
    return this.getMemberById(id);
  }
  deleteMember(id: number) {
    const deletedMember = this.getMemberById(id);
    this.Members = this.Members.filter((member) => member.id !== id);
    return deletedMember;
  }
}
