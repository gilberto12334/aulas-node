import { Request, Response } from "express";
import { ProductDTO } from "../api-dto/product.dto";
import { ProductUpdateDTO } from "../api-dto/product.update.dto";
import { ProductService } from "../services/product.service";

export class ProductController {

    async createProduct(request: Request, response: Response) {

        const data: ProductDTO = request.body;

        const productService = new ProductService();

        const result = await productService.createProduct(data)

        if (result instanceof Error)
            return response.status(400).json(result.message)
        else
            return response.json(result)
    }

    async getProducts(request: Request, response: Response) {
        const productService = new ProductService();

        const result = await productService.getProducts()

        if (result instanceof Error)
            return response.status(400).json(result.message)
        else
            return response.json(result)
    }

    async getOneProduct(request: Request, response: Response) {
        const productService = new ProductService();
        const { id } = request.params;
        const result = await productService.getOneProduct(id)

        if (result instanceof Error)
            return response.status(400).json(result.message)
        else
            return response.json(result)
    }

    async updateProduct(request: Request, response: Response) {
        const { id } = request.params;
        const data: ProductUpdateDTO = request.body;

        const productService = new ProductService();

        return await productService.UpdateProduct(id, data)

       
    }

}