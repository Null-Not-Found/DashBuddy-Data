import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BrandService } from '../Services/brand.service';
import { BrandType } from '../Datamodels/brand.type';
import { AssignProductToBrandInput } from '../Datamodels/assignProductToBrand.input';
import { ProductService } from '../Services/product.service';
import { ClientService } from '../Services/client.service';
import { forwardRef, Inject } from '@nestjs/common';

@Resolver((of) => BrandType)
export class BrandResolver {
  constructor(
    private brandService: BrandService,
    @Inject(forwardRef(() => ProductService))
    private productService: ProductService,
    private clientService: ClientService,
  ) {}
  @Query((returns) => BrandType)
  brand(@Args('id') id: string) {
    return this.brandService.getBrand(id);
  }
  @Query((returns) => [BrandType])
  brands() {
    return this.brandService.getBrands();
  }

  @Mutation((returns) => BrandType)
  deleteBrand(@Args('id') id: string) {
    return this.brandService.deleteBrand(id);
  }

  @Mutation((returns) => BrandType)
  assingProductToBrand(
    @Args('assingProductToBrandInput')
    assingProductToBrandInput: AssignProductToBrandInput,
  ) {
    const { brandID, productIDs } = assingProductToBrandInput;
    return this.brandService.assingProductToBrand(brandID, productIDs);
  }

  @ResolveField()
  async products(@Parent() brand: BrandType) {
    return this.productService.getManyProducts(brand.products);
  }
  @ResolveField()
  async owner_id(@Parent() brand: BrandType) {
    return this.clientService.getClient(brand.owner_id);
  }
}
