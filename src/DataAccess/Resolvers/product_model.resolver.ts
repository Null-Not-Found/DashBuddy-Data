import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ClientService } from '../Services/client.service';
import { AttributeService } from '../Services/attribute.service';
import { Product_modelService } from '../Services/product_model.service';
import { Product_modelType } from '../Datamodels/product_model.type';

@Resolver((of) => Product_modelType)
export class Product_modelResolver {
  constructor(
    private attributeService: AttributeService,
    private product_modelService: Product_modelService,
    private clientService: ClientService,
  ) {}
  @Query((returns) => Product_modelType)
  productModel(@Args('id') id: string) {
    return this.product_modelService.getProductModel(id);
  }
  @Query((returns) => [Product_modelType])
  brands() {
    return this.product_modelService.getProductModels();
  }

  @ResolveField()
  async attributes(@Parent() productModel: Product_modelType) {
    return this.attributeService.getManyAttributes(productModel.attributes);
  }
  @ResolveField()
  async owner_id(@Parent() productModel: Product_modelType) {
    return this.clientService.getClient(productModel.client_id);
  }
}
