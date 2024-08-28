import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { UploadController } from './file-upload.controller';

@Module({
  controllers: [UploadController],
  providers: [FileUploadService]
})
export class FileUploadModule {}