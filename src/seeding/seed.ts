import mongoose from 'mongoose';
import { Client } from '../DataAccess/Datamodels/client.type';
import { Brand } from '../DataAccess/Datamodels/brand.type';
import { Product } from '../DataAccess/Datamodels/product.type';
import { Attribute } from '../DataAccess/Datamodels/attribute.type';
import { ProductField } from '../DataAccess/Datamodels/product_field.type';
import { ProductStatus } from '../DataAccess/Datamodels/product_status.type';
import { ProductModel } from '../DataAccess/Datamodels/product_model.type';

main();

async function main() {
  await mongoose.connect('mongodb://localhost:27017/data');
  //
  // CLIENTS-------------------------------------------------------------
  //
  await Client.create({
    id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    name: 'Robert Johnson',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await Client.create({
    id: '94f1b4a9-715c-48d0-b563-52725b008369',
    name: 'Richard Dominican',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await Client.create({
    id: '0530bea0-7909-4797-9e87-8d71bf73e68c',
    name: 'Jo Jo',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  //
  // BRANDS--------------------------------------------------------------
  //
  await Brand.create({
    id: '9bc21ad0-f434-462b-8361-c3886e664f5f',
    name: 'Coca cola',
    description: 'Biggest supply for your diabetes',
    owner_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
    products: [
      'e3067984-c5e0-4be1-bd9d-212693b9d733',
      '706c7e3d-315d-4c4c-8998-15adc23b75a9',
      '87363ed2-e4a2-465c-b36f-25b1ac2c4637',
    ],
  });
  await Brand.create({
    id: '8f14be5a-45bf-40ff-acda-dea0b2c4942b',
    name: 'Doritos',
    description: 'Biggest supply for your diarrhea',
    owner_id: '94f1b4a9-715c-48d0-b563-52725b008369',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
    products: ['5ceb65b3-1b80-4e4b-9210-1ff53851502d'],
  });
  await Brand.create({
    id: '4f32f935-4a1b-4cbe-8787-7c474a54de38',
    name: 'Red bull',
    description: 'Oh ye, you know that feeling',
    owner_id: '0530bea0-7909-4797-9e87-8d71bf73e68c',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
    products: ['affc8423-ef75-4330-a50e-ae2656169c4f'],
  });
  //
  // PRODUCT STATUSES----------------------------------------------------
  //
  await ProductStatus.create({
    id: '52181d96-9872-4929-a606-915ef53f4e1b',
    label: 'Ready',
    color: 'Green',
    order: 2264561,
    Allowed_to_publish: true,
    created_at: Date.now(),
    updated_at: null,
  });
  await ProductStatus.create({
    id: 'e3bf2ea9-a355-4b6d-b5ae-1ab8802ff382',
    label: 'Awaiting shipment',
    color: 'Orange',
    order: 2264531,
    Allowed_to_publish: false,
    created_at: Date.now(),
    updated_at: null,
  });
  await ProductStatus.create({
    id: '94871b40-1888-4f15-9fdf-b9ea2ce48f0b',
    label: 'Restocking',
    color: 'Red',
    order: 2264571,
    Allowed_to_publish: false,
    created_at: Date.now(),
    updated_at: null,
  });
  //
  // ATTRIBUTES----------------------------------------------------------
  //
  await Attribute.create({
    id: 'bd84115f-33bf-432d-98a7-5dc19f477122',
    name: 'Price',
    required: true,
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await Attribute.create({
    id: '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
    name: 'Volume',
    required: true,
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await Attribute.create({
    id: '67301e0c-079e-4899-9ddc-2e17c565cbbf',
    name: 'Weight',
    required: true,
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });

  await Attribute.create({
    id: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    name: 'Calories',
    required: false,
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  //
  // PRODUCT MODELS------------------------------------------------------
  //
  await ProductModel.create({
    id: 'ddcfeb0d-fa1a-4f70-b806-44f9a150c8b8',
    name: 'Coca-cola',
    attributes: [
      'bd84115f-33bf-432d-98a7-5dc19f477122',
      '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
      '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    ],
    client_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await ProductModel.create({
    id: '7e5390f6-353d-4998-8850-0b3ca79d5621',
    name: 'Fanta',
    attributes: [
      'bd84115f-33bf-432d-98a7-5dc19f477122',
      '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
      '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    ],
    client_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await ProductModel.create({
    id: 'aee99f94-54bc-4d66-9afe-4345d46856b6',
    name: 'Sprite',
    attributes: [
      'bd84115f-33bf-432d-98a7-5dc19f477122',
      '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
      '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    ],
    client_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await ProductModel.create({
    id: '288b8cb0-cad6-4be3-9c28-6ce8a8388f27',
    name: 'Cheese Doritos',
    attributes: [
      'bd84115f-33bf-432d-98a7-5dc19f477122',
      '67301e0c-079e-4899-9ddc-2e17c565cbbf',
      '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    ],
    client_id: '94f1b4a9-715c-48d0-b563-52725b008369',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  await ProductModel.create({
    id: '9760f85e-d52a-4959-a58c-d9535f14ee57',
    name: 'Red Bull',
    attributes: [
      'bd84115f-33bf-432d-98a7-5dc19f477122',
      '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
      '9fc5a7db-58ab-4510-8b06-84c014060ec5',
    ],
    client_id: '0530bea0-7909-4797-9e87-8d71bf73e68c',
    updated_at: null,
    deleted_at: null,
    created_at: Date.now(),
  });
  //
  // PRODUCTS------------------------------------------------------------
  // Brand:Coca Cola
  await Product.create({
    id: 'e3067984-c5e0-4be1-bd9d-212693b9d733',
    name: 'Coca-cola',
    brand: '9bc21ad0-f434-462b-8361-c3886e664f5f',
    model: 'ddcfeb0d-fa1a-4f70-b806-44f9a150c8b8',
    owner_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    fields: [
      new ProductField({
        attribute: 'bd84115f-33bf-432d-98a7-5dc19f477122',
        value: '1 Euro',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
        value: '0.5 Liter',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
        value: '10000000 cal',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
    ],
    gtin: '',
    product_statuses_id: '52181d96-9872-4929-a606-915ef53f4e1b',
    created_at: Date.now(),
    deleted_at: null,
    updated_at: null,
  });
  await Product.create({
    id: '706c7e3d-315d-4c4c-8998-15adc23b75a9',
    name: 'Fanta',
    brand: '9bc21ad0-f434-462b-8361-c3886e664f5f',
    model: '7e5390f6-353d-4998-8850-0b3ca79d5621',
    owner_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    fields: [
      new ProductField({
        attribute: 'bd84115f-33bf-432d-98a7-5dc19f477122',
        value: '1.20 Euro',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
        value: '0.33 Liter',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
        value: '50000000 cal',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
    ],
    gtin: '',
    product_statuses_id: '94871b40-1888-4f15-9fdf-b9ea2ce48f0b',
    created_at: Date.now(),
    deleted_at: null,
    updated_at: null,
  });
  await Product.create({
    id: '87363ed2-e4a2-465c-b36f-25b1ac2c4637',
    name: 'Sprite',
    brand: '9bc21ad0-f434-462b-8361-c3886e664f5f',
    model: 'aee99f94-54bc-4d66-9afe-4345d46856b6',
    owner_id: '1a401f0f-d9f3-479c-8823-1efcc9fa709f',
    fields: [
      new ProductField({
        attribute: 'bd84115f-33bf-432d-98a7-5dc19f477122',
        value: '1.35 Euro',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
        value: '1 Liter',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
        value: '70000000 cal',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
    ],
    gtin: '',
    product_statuses_id: 'e3bf2ea9-a355-4b6d-b5ae-1ab8802ff382',
    created_at: Date.now(),
    deleted_at: null,
    updated_at: null,
  });
  // Brand: Doritos
  await Product.create({
    id: '5ceb65b3-1b80-4e4b-9210-1ff53851502d',
    name: 'Cheese Doritos',
    brand: '8f14be5a-45bf-40ff-acda-dea0b2c4942b',
    model: '288b8cb0-cad6-4be3-9c28-6ce8a8388f27',
    owner_id: '94f1b4a9-715c-48d0-b563-52725b008369',
    fields: [
      new ProductField({
        attribute: 'bd84115f-33bf-432d-98a7-5dc19f477122',
        value: '1.35 Euro',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '67301e0c-079e-4899-9ddc-2e17c565cbbf',
        value: '300 g',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
        value: '70000000 cal',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
    ],
    gtin: '',
    product_statuses_id: 'e3bf2ea9-a355-4b6d-b5ae-1ab8802ff382',
    created_at: Date.now(),
    deleted_at: null,
    updated_at: null,
  });
  // Brand: Red Bull
  await Product.create({
    id: 'affc8423-ef75-4330-a50e-ae2656169c4f',
    name: 'Red Bull',
    brand: '4f32f935-4a1b-4cbe-8787-7c474a54de38',
    model: '9760f85e-d52a-4959-a58c-d9535f14ee57',
    owner_id: '0530bea0-7909-4797-9e87-8d71bf73e68c',
    fields: [
      new ProductField({
        attribute: 'bd84115f-33bf-432d-98a7-5dc19f477122',
        value: '1.35 Euro',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9ea2bb8f-564e-492a-b0d0-0b4ecdbed893',
        value: '0.33 Liter',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
      new ProductField({
        attribute: '9fc5a7db-58ab-4510-8b06-84c014060ec5',
        value: '70000000 cal',
        updated_at: null,
        deleted_at: null,
        created_at: Date.now(),
      }),
    ],
    gtin: '',
    product_statuses_id: '52181d96-9872-4929-a606-915ef53f4e1b',
    created_at: Date.now(),
    deleted_at: null,
    updated_at: null,
  });
}
