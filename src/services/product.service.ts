import { ProductDTO } from "../api-dto/product.dto";
import { ProductUpdateDTO } from "../api-dto/product.update.dto";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {

    async createProduct(data: ProductDTO) {
        try {
            const productRepository = new ProductRepository();

            return await productRepository.createProduct(data);
        }
        catch (error) {
            throw Error(error)
        }


    }

    async getProducts() {
        try {
            const productRepository = new ProductRepository();

            return await productRepository.getProducts();
        }
        catch (error) {
            throw Error(error)
        }
    }



    async getOneProduct(id: string) {
        try {
            const productRepository = new ProductRepository();

            return await productRepository.getOneProduct(id);
        }
        catch (error) {
            throw Error(error)
        }
    }

    async UpdateProduct(id: string, data: ProductUpdateDTO) {

            const productRepository = new ProductRepository();
            await productRepository.getOneProduct(id);
            return await productRepository.UpdateProduct(data);
      
    }
}