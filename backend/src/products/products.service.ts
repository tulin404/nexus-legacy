import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {};

    create(createProductDto: CreateProductDto) {
        return 'This action adds a new product';
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
