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
import { ClientService } from '../Services/client.service';

@Resolver((of) => BrandType)
export class BrandResolver {
  constructor(
    private brandService: BrandService,
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

  @ResolveField()
  async owner_id(@Parent() brand: BrandType) {
    return this.clientService.getClient(brand.owner_id);
  }
}
