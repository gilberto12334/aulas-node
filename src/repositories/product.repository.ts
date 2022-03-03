import { getRepository } from "typeorm";
import { ProductDTO } from "../api-dto/product.dto";
import { ProductUpdateDTO } from "../api-dto/product.update.dto";
import { ProductModel } from "../models/product.model";

export class ProductRepository {


    async createProduct(data: ProductDTO): Promise<ProductModel> {

        const productRepository = getRepository(ProductModel);

        const product = productRepository.create(data)

        return await productRepository.save(product);
    }

    async getProducts(): Promise<ProductModel[]> {
        const productRepository = getRepository(ProductModel);
        return await productRepository.find();
    }

    async getOneProduct(id: string): Promise<ProductModel> {
        try {
            const productRepository = getRepository(ProductModel);
            return await productRepository.findOneOrFail({ id });

        } catch (error) {
            throw Error(error)
        }
    }

    async UpdateProduct(data: ProductUpdateDTO): Promise<ProductModel> {
        try {
            const productRepository = getRepository(ProductModel);

            return await productRepository.save(data);
        } catch (error) {
            throw Error(error)
        }
    }


}