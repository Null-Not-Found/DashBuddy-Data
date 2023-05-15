import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from './product.type';
import { ProductService } from './product.service';
import { ProductInput } from './product.input';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private productServise: ProductService) {}
  @Query((returns) => ProductType)
  product(@Args('id') id: string) {
    return this.productServise.getProduct(id);
  }
  @Query((returns) => [ProductType])
  products() {
    return this.productServise.getProducts();
  }

  @Mutation((returns) => ProductType)
  createProduct(@Args('productInput') productInput: ProductInput) {
    return this.productServise.createProduct(productInput);
  }
  @Mutation((returns) => ProductType)
  updateProduct(
    @Args('productInput') productInput: ProductInput,
    @Args('id') id: string,
  ) {
    return this.productServise.updateProduct(id, productInput);
  }

  @Mutation((returns) => ProductType)
  deleteProduct(@Args('id') id: string) {
    return this.productServise.deleteProduct(id);
  }
}
