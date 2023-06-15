import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AttributeService } from '../Services/attribute.service';
import { Product_fieldType } from '../Datamodels/product_field.type';
import { AttributeType } from '../Datamodels/attribute.type';

@Resolver((of) => Product_fieldType)
export class Product_fieldsResolver {
  constructor(private attributeService: AttributeService) {}
  @ResolveField((returns) => AttributeType)
  async attribute(@Parent() productField: Product_fieldType) {
    const attributeId = productField.attribute;
    return this.attributeService.getAttribute(attributeId);
  }
}
