import { PartialType } from '@nestjs/mapped-types';
import { CreateIamDto } from './create-iam.dto';

export class UpdateIamDto extends PartialType(CreateIamDto) {}
