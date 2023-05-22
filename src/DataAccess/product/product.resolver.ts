import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from '../Datamodels/Types/product.type';
import { ProductService } from './product.service';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private productService: ProductService) {}
  @Query((returns) => ProductType)
  product(@Args('id') id: string) {
    return this.productService.getProduct(id);
  }
  @Query((returns) => [ProductType])
  products() {
    return this.productService.getProducts();
  }

  @Mutation((returns) => ProductType)
  deleteProduct(@Args('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
