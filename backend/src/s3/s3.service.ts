import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  private s3: S3;
  private bucketName = process.env.S3_BUCKET_NAME || 'javanest';

  constructor() {
    this.s3 = new S3({
      endpoint: process.env.AWS_ENDPOINT_URL_S3,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      s3ForcePathStyle: true,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const fileKey = `${uuidv4()}-${file.originalname}`;
    await this.s3
      .upload({
        Bucket: this.bucketName,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      })
      .promise();
    return `${process.env.AWS_PREVIEW_URL}/${fileKey}`;
  }
}
