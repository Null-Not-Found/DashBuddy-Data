import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { BrandType } from '../Datamodels/Types/brand.type';
import { AssignProductToBrandInput } from './assignProductToBrand.input';
import { ProductService } from '../product/product.service';

@Resolver((of) => BrandType)
export class BrandResolver {
  constructor(
    private brandServise: BrandService,
    private productService: ProductService,
  ) {}
  @Query((returns) => BrandType)
  brand(@Args('id') id: string) {
    return this.brandServise.getBrand(id);
  }
  @Query((returns) => [BrandType])
  brands() {
    return this.brandServise.getBrands();
  }

  @Mutation((returns) => BrandType)
  deleteBrand(@Args('id') id: string) {
    return this.brandServise.deleteBrand(id);
  }

  @Mutation((returns) => BrandType)
  assingProductToBrand(
    @Args('assingProductToBrandInput')
    assingProductToBrandInput: AssignProductToBrandInput,
  ) {
    const { brandID, productIDs } = assingProductToBrandInput;
    return this.brandServise.assingProductToBrand(brandID, productIDs);
  }

  @ResolveField()
  async products(@Parent() brand: BrandType) {
    return this.productService.getManyProducts(brand.products);
  }
}
