import { ConcreteBuilder } from './builder/concrete-builder.js';
import { Director } from './director.js';

const builder = new ConcreteBuilder();
const director = new Director(builder);

director.construct();

const product = builder.getResult();
product.show();

/*************************************************************************************************************************************************************************
 * The builder pattern gives you more control over the construction process.                                                                                             *
 * It isolates the construction code from the business logic of the product.                                                                                             *
 * Allow to change the internal representation of the product.                                                                                                           *
 * Unlike the abstract factory pattern, the builder pattern creates complex products step by step/peace by peace when abstract factory returns the whole product at once.*
 * The abstract factory pattern creates families of products.                                                                                                            *
 *************************************************************************************************************************************************************************/

/**
 * Output:
 * Building part A
 * Building part B
 * Building part C
 * Product parts:
 * Part A
 * Part B
 * Part C
 */
