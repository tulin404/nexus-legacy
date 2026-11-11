import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { mkdir, writeFile } from 'node:fs/promises';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        private readonly configService: ConfigService,
    ) {};

    async create(
        createProductDto: CreateProductDto,
        file: Express.Multer.File,
    ) {
        const uploadPath = this.configService.get<string>('UPLOAD_PATH') ?? join(process.cwd(), 'uploads');
        const filename = `${randomUUID()}${extname(file.originalname)}`;
        const filepath = join(uploadPath, filename);

        await mkdir(uploadPath, { recursive: true });
        await writeFile(filepath, file.buffer);

        await this.productRepository.save({
            ...createProductDto,
            img_name: filename
        });
    };

    findAll() {
        return `This action returns all products`;
    };

    findOne(id: number) {
        return `This action returns a #${id} product`;
    };

    update(id: number, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`;
    };

    remove(id: number) {
        return `This action removes a #${id} product`;
    };
};
