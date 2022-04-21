import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  restaurants: Array<Restaurant>;
  totalRestaurants: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type CreateDishInput = {
  description?: InputMaybe<Scalars['String']>;
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  restaurantId: Scalars['Float'];
};

export type CreateDishOutput = {
  __typename?: 'CreateDishOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type CreateOrderInput = {
  items: Array<CreateOrderItemInput>;
  restaurantId: Scalars['Float'];
};

export type CreateOrderItemInput = {
  dishId: Scalars['Float'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type CreatePaymentInput = {
  restaurantId: Scalars['Float'];
  transactionId: Scalars['String'];
};

export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type CreateRestaurantInput = {
  address: Scalars['String'];
  categoryName: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type DeleteDishInput = {
  dishId: Scalars['Float'];
};

export type DeleteDishOutput = {
  __typename?: 'DeleteDishOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type DeleteRestaurantInput = {
  restaurantId: Scalars['Float'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type Dish = {
  __typename?: 'Dish';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dishOptions?: Maybe<Array<DishOption>>;
  id: Scalars['Float'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  restaurant: Restaurant;
  restaurantId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type DishOption = {
  __typename?: 'DishOption';
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type DishOptionInputType = {
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
};

export type EditDishInput = {
  description?: InputMaybe<Scalars['String']>;
  dishId: Scalars['Float'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type EditDishOutput = {
  __typename?: 'EditDishOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type EditOrderInput = {
  id: Scalars['Float'];
  status?: InputMaybe<Status>;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type EditProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type EditRestaurantInput = {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
};

export type EditRestaurantOutput = {
  __typename?: 'EditRestaurantOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createDish: CreateDishOutput;
  createOrder: CreateOrderOutput;
  createPayment: CreatePaymentOutput;
  createRestaurant: CreateRestaurantOutput;
  deleteDish: DeleteDishOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editDish: EditDishOutput;
  editOrder: EditOrderOutput;
  editProfile: EditProfileOutput;
  editRestaurant: EditRestaurantOutput;
  login: LoginOutput;
  resetPassword: ResetPasswordOutput;
  sendPasswordReset: SendPasswordResetOutput;
  takeOrder: TakeOrderOutput;
  verifyEmail: VerifyEmailOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateDishArgs = {
  input: CreateDishInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreateRestaurantArgs = {
  input: CreateRestaurantInput;
};


export type MutationDeleteDishArgs = {
  input: DeleteDishInput;
};


export type MutationDeleteRestaurantArgs = {
  input: DeleteRestaurantInput;
};


export type MutationEditDishArgs = {
  input: EditDishInput;
};


export type MutationEditOrderArgs = {
  input: EditOrderInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEditRestaurantArgs = {
  input: EditRestaurantInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendPasswordResetArgs = {
  input: SendPasswordResetInput;
};


export type MutationTakeOrderArgs = {
  input: TakeOrderInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  customer?: Maybe<User>;
  customerId: Scalars['Float'];
  driver?: Maybe<User>;
  driverId: Scalars['Float'];
  id: Scalars['Float'];
  orderItems: Array<OrderItem>;
  restaurant?: Maybe<Restaurant>;
  restaurantId: Scalars['Float'];
  status: Status;
  totalPrice?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime'];
  dish: Dish;
  dishOptions?: Maybe<Array<DishOption>>;
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type OrderUpdateInput = {
  id: Scalars['Float'];
};

export type Payment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  restaurant: Restaurant;
  restaurantId: Scalars['Float'];
  transactionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  searchRestaurants: SearchRestaurantsOutput;
  seeAllCategories: SeeAllCategoriesOutput;
  seeAllOrders: SeeAllOrdersOutput;
  seeAllPayments: SeeAllPaymentsOutput;
  seeAllRestaurants: SeeAllRestaurantsOutput;
  seeCategory: SeeCategoryOutput;
  seeMe: User;
  seeOrder: SeeOrderOutput;
  seeProfile: SeeProfileOutput;
  seeRestaurant: SeeRestaurantOutput;
};


export type QuerySearchRestaurantsArgs = {
  input: SearchRestaurantsInput;
};


export type QuerySeeAllOrdersArgs = {
  input: SeeAllOrdersInput;
};


export type QuerySeeAllRestaurantsArgs = {
  input: SeeAllRestaurantsInput;
};


export type QuerySeeCategoryArgs = {
  input: SeeCategoryInput;
};


export type QuerySeeOrderArgs = {
  input: SeeOrderInput;
};


export type QuerySeeProfileArgs = {
  input: SeeProfileInput;
};


export type QuerySeeRestaurantArgs = {
  input: SeeRestaurantInput;
};

export type ResetPasswordInput = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ResetPasswordOutput = {
  __typename?: 'ResetPasswordOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  category?: Maybe<Category>;
  createdAt: Scalars['DateTime'];
  dishes: Array<Dish>;
  id: Scalars['Float'];
  imageUrl: Scalars['String'];
  isPromoted: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['Float'];
  payments: Array<Payment>;
  promotedUntilDate?: Maybe<Scalars['DateTime']>;
  restaurantOrders: Array<Order>;
  updatedAt: Scalars['DateTime'];
};

export enum Role {
  Any = 'Any',
  Customer = 'Customer',
  Driver = 'Driver',
  Owner = 'Owner'
}

export type SearchRestaurantsInput = {
  page?: InputMaybe<Scalars['Float']>;
  restaurantName: Scalars['String'];
};

export type SearchRestaurantsOutput = {
  __typename?: 'SearchRestaurantsOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Float']>;
  totalRestaurants?: Maybe<Scalars['Float']>;
};

export type SeeAllCategoriesOutput = {
  __typename?: 'SeeAllCategoriesOutput';
  category?: Maybe<Array<Category>>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type SeeAllOrdersInput = {
  status?: InputMaybe<Status>;
};

export type SeeAllOrdersOutput = {
  __typename?: 'SeeAllOrdersOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
};

export type SeeAllPaymentsOutput = {
  __typename?: 'SeeAllPaymentsOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  payments?: Maybe<Array<Payment>>;
};

export type SeeAllRestaurantsInput = {
  page?: InputMaybe<Scalars['Float']>;
};

export type SeeAllRestaurantsOutput = {
  __typename?: 'SeeAllRestaurantsOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Float']>;
  totalRestaurants?: Maybe<Scalars['Float']>;
};

export type SeeCategoryInput = {
  categoryName: Scalars['String'];
  page?: InputMaybe<Scalars['Float']>;
};

export type SeeCategoryOutput = {
  __typename?: 'SeeCategoryOutput';
  category?: Maybe<Category>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Float']>;
  totalRestaurants?: Maybe<Scalars['Float']>;
};

export type SeeOrderInput = {
  id: Scalars['Float'];
};

export type SeeOrderOutput = {
  __typename?: 'SeeOrderOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
};

export type SeeProfileInput = {
  id: Scalars['Float'];
};

export type SeeProfileOutput = {
  __typename?: 'SeeProfileOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type SeeRestaurantInput = {
  restaurantId: Scalars['Float'];
};

export type SeeRestaurantOutput = {
  __typename?: 'SeeRestaurantOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  restaurant?: Maybe<Restaurant>;
};

export type SendPasswordResetInput = {
  email: Scalars['String'];
};

export type SendPasswordResetOutput = {
  __typename?: 'SendPasswordResetOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export enum Status {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Delivered = 'Delivered',
  Pending = 'Pending',
  PickedUp = 'PickedUp'
}

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrder: Order;
  orderUpdate: Order;
  pendingOrder: Order;
};


export type SubscriptionOrderUpdateArgs = {
  input: OrderUpdateInput;
};

export type TakeOrderInput = {
  id: Scalars['Float'];
};

export type TakeOrderOutput = {
  __typename?: 'TakeOrderOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  customerOrders: Array<Order>;
  driverOrders: Array<Order>;
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  id: Scalars['Float'];
  password: Scalars['String'];
  payments: Array<Payment>;
  restaurants: Array<Restaurant>;
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  message: Scalars['String'];
  ok: Scalars['Boolean'];
};

export type CreateAccountMutationVariables = Exact<{
  input: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CreateAccountOutput', ok: boolean, message: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, message: string, token?: string | null } };

export type SeeMeQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeMeQuery = { __typename?: 'Query', seeMe: { __typename?: 'User', id: number, email: string, username: string, emailVerified: boolean, role: Role, createdAt: any, updatedAt: any } };


export const CreateAccountDocument = gql`
    mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    ok
    message
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ok
    message
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SeeMeDocument = gql`
    query SeeMe {
  seeMe {
    id
    email
    username
    emailVerified
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSeeMeQuery__
 *
 * To run a query within a React component, call `useSeeMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeMeQuery(baseOptions?: Apollo.QueryHookOptions<SeeMeQuery, SeeMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeMeQuery, SeeMeQueryVariables>(SeeMeDocument, options);
      }
export function useSeeMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeMeQuery, SeeMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeMeQuery, SeeMeQueryVariables>(SeeMeDocument, options);
        }
export type SeeMeQueryHookResult = ReturnType<typeof useSeeMeQuery>;
export type SeeMeLazyQueryHookResult = ReturnType<typeof useSeeMeLazyQuery>;
export type SeeMeQueryResult = Apollo.QueryResult<SeeMeQuery, SeeMeQueryVariables>;