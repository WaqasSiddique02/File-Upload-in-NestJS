import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class FileUploadService {
    uploadFile(file: Express.Multer.File): { message: string; file: string } {
        return {
          message: 'File uploaded successfully!',
          file: file.filename,
        };
      }

      static getMulterOptions() {
        return {
          storage: diskStorage({
            destination: './uploads', // Set destination folder
            filename: (req, file, cb) => {
              const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
              const ext = extname(file.originalname);
              const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
              cb(null, filename);
            },
          }),
          limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
        };
      }

}