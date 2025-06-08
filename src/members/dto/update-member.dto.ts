import { PartialType } from "@nestjs/mapped-types"
import { CreateMemberDto } from "./create-member.dto"

export UpdateMemberDto extends PartialType(CreateMemberDto){};