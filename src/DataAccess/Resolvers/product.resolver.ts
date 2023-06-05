import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductType } from '../Datamodels/product.type';
import { ProductService } from '../Services/product.service';
import { BrandService } from '../Services/brand.service';
import { Product_modelService } from '../Services/product_model.service';
import { ClientService } from '../Services/client.service';
import { Product_statusService } from '../Services/product_status.service';
import { AttributeService } from '../Services/attribute.service';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private product_modelService: Product_modelService,
    private clientService: ClientService,
    private product_statusService: Product_statusService,
    private attributeService: AttributeService,
  ) {}
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

  @ResolveField()
  async brand(@Parent() product: ProductType) {
    return this.brandService.getBrand(product.brand);
  }
  @ResolveField()
  async model(@Parent() product: ProductType) {
    return this.product_modelService.getProductModel(product.model);
  }
  @ResolveField()
  async owner_id(@Parent() product: ProductType) {
    return this.clientService.getClient(product.owner_id);
  }
  @ResolveField()
  async product_statuses_id(@Parent() product: ProductType) {
    return this.product_statusService.getProductStatus(
      product.product_statuses_id,
    );
  }
  @ResolveField()
  async fields(@Parent() product: ProductType) {
    return product.fields;
  }
}
