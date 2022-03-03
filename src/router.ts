import { Router } from 'express';   
import { ProductController } from './controller/product.controller';

const router = Router();

router.post("/product", new ProductController().createProduct);
router.get("/product", new ProductController().getProducts);
router.get("/product/:id", new ProductController().getOneProduct);
router.put("/product/:id", new ProductController().updateProduct);

    
export { router }