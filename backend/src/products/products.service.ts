import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { mkdir, unlink, writeFile } from 'node:fs/promises';

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

        try {
            await writeFile(filepath, file.buffer);

            return await this.productRepository.save({
                ...createProductDto,
                img_name: filename
            });
        } catch(error) {
            // Error supression for returning the original one
            await unlink(filepath).catch(() => {});
            throw error;
        };
    };

    findAll() {
        return this.productRepository.find();
    };

    async findOne(id: string) {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            throw new NotFoundException('Product not found');
        };

        return product;
    };

    async update(
        id: string,
        updateProductDto: UpdateProductDto,
    ) {
        const result = await this.productRepository.update(id, updateProductDto);
        if (result.affected === 0) {
            throw new NotFoundException('Product not found');
        };

        return result;
    };

    async remove(id: string) {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            throw new NotFoundException('Product not found');
        };

        const uploadPath = this.configService.get<string>('UPLOAD_PATH') ?? join(process.cwd(), 'uploads');
        const filepath = join(uploadPath, product.img_name);

        await this.productRepository.delete(id);
        await unlink(filepath);

        return product;
    };
};
