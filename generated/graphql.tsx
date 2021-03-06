import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "memes" */
export type Memes = {
  __typename?: 'memes';
  description: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  title: Scalars['String'];
  /** An array relationship */
  user_memes: Array<User_Memes>;
};


/** columns and relationships of "memes" */
export type MemesUser_MemesArgs = {
  distinct_on?: Maybe<Array<User_Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Memes_Order_By>>;
  where?: Maybe<User_Memes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "memes". All fields are combined with a logical 'AND'. */
export type Memes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Memes_Bool_Exp>>>;
  _not?: Maybe<Memes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Memes_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user_memes?: Maybe<User_Memes_Bool_Exp>;
};

/** ordering options when selecting data from "memes" */
export type Memes_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "memes" */
export type Memes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "memes" */
export enum Memes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Title = 'title'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user_memes" */
  delete_user_memes?: Maybe<User_Memes_Mutation_Response>;
  /** delete single row from the table: "user_memes" */
  delete_user_memes_by_pk?: Maybe<User_Memes>;
  /** insert data into the table: "user_memes" */
  insert_user_memes?: Maybe<User_Memes_Mutation_Response>;
  /** insert a single row into the table: "user_memes" */
  insert_user_memes_one?: Maybe<User_Memes>;
  /** update data of the table: "user_memes" */
  update_user_memes?: Maybe<User_Memes_Mutation_Response>;
  /** update single row of the table: "user_memes" */
  update_user_memes_by_pk?: Maybe<User_Memes>;
};


/** mutation root */
export type Mutation_RootDelete_User_MemesArgs = {
  where: User_Memes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Memes_By_PkArgs = {
  meme_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_User_MemesArgs = {
  objects: Array<User_Memes_Insert_Input>;
  on_conflict?: Maybe<User_Memes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Memes_OneArgs = {
  object: User_Memes_Insert_Input;
  on_conflict?: Maybe<User_Memes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_User_MemesArgs = {
  _inc?: Maybe<User_Memes_Inc_Input>;
  _set?: Maybe<User_Memes_Set_Input>;
  where: User_Memes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Memes_By_PkArgs = {
  _inc?: Maybe<User_Memes_Inc_Input>;
  _set?: Maybe<User_Memes_Set_Input>;
  pk_columns: User_Memes_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "memes" */
  memes: Array<Memes>;
  /** fetch data from the table: "memes" using primary key columns */
  memes_by_pk?: Maybe<Memes>;
  /** fetch data from the table: "user_memes" */
  user_memes: Array<User_Memes>;
  /** fetch data from the table: "user_memes" using primary key columns */
  user_memes_by_pk?: Maybe<User_Memes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootMemesArgs = {
  distinct_on?: Maybe<Array<Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memes_Order_By>>;
  where?: Maybe<Memes_Bool_Exp>;
};


/** query root */
export type Query_RootMemes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_MemesArgs = {
  distinct_on?: Maybe<Array<User_Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Memes_Order_By>>;
  where?: Maybe<User_Memes_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Memes_By_PkArgs = {
  meme_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memes" */
  memes: Array<Memes>;
  /** fetch data from the table: "memes" using primary key columns */
  memes_by_pk?: Maybe<Memes>;
  /** fetch data from the table: "user_memes" */
  user_memes: Array<User_Memes>;
  /** fetch data from the table: "user_memes" using primary key columns */
  user_memes_by_pk?: Maybe<User_Memes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootMemesArgs = {
  distinct_on?: Maybe<Array<Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Memes_Order_By>>;
  where?: Maybe<Memes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMemes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_MemesArgs = {
  distinct_on?: Maybe<Array<User_Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Memes_Order_By>>;
  where?: Maybe<User_Memes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Memes_By_PkArgs = {
  meme_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_memes" */
export type User_Memes = {
  __typename?: 'user_memes';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  meme: Memes;
  meme_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** input type for inserting array relation for remote table "user_memes" */
export type User_Memes_Arr_Rel_Insert_Input = {
  data: Array<User_Memes_Insert_Input>;
  on_conflict?: Maybe<User_Memes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_memes". All fields are combined with a logical 'AND'. */
export type User_Memes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Memes_Bool_Exp>>>;
  _not?: Maybe<User_Memes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Memes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  meme?: Maybe<Memes_Bool_Exp>;
  meme_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_memes" */
export enum User_Memes_Constraint {
  /** unique or primary key constraint */
  UserMemesPkey = 'user_memes_pkey'
}

/** input type for incrementing integer column in table "user_memes" */
export type User_Memes_Inc_Input = {
  meme_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_memes" */
export type User_Memes_Insert_Input = {
  meme_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_memes" */
export type User_Memes_Mutation_Response = {
  __typename?: 'user_memes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Memes>;
};

/** input type for inserting object relation for remote table "user_memes" */
export type User_Memes_Obj_Rel_Insert_Input = {
  data: User_Memes_Insert_Input;
  on_conflict?: Maybe<User_Memes_On_Conflict>;
};

/** on conflict condition type for table "user_memes" */
export type User_Memes_On_Conflict = {
  constraint: User_Memes_Constraint;
  update_columns: Array<User_Memes_Update_Column>;
  where?: Maybe<User_Memes_Bool_Exp>;
};

/** ordering options when selecting data from "user_memes" */
export type User_Memes_Order_By = {
  created_at?: Maybe<Order_By>;
  meme?: Maybe<Memes_Order_By>;
  meme_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_memes" */
export type User_Memes_Pk_Columns_Input = {
  meme_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_memes" */
export enum User_Memes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemeId = 'meme_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_memes" */
export type User_Memes_Set_Input = {
  meme_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_memes" */
export enum User_Memes_Update_Column {
  /** column name */
  MemeId = 'meme_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  user_memes: Array<User_Memes>;
};


/** columns and relationships of "users" */
export type UsersUser_MemesArgs = {
  distinct_on?: Maybe<Array<User_Memes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Memes_Order_By>>;
  where?: Maybe<User_Memes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_memes?: Maybe<User_Memes_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type MemesQueryVariables = Exact<{ [key: string]: never; }>;


export type MemesQuery = (
  { __typename?: 'query_root' }
  & { memes: Array<(
    { __typename?: 'memes' }
    & Pick<Memes, 'title' | 'image_url' | 'description'>
  )> }
);


export const MemesDocument = gql`
    query Memes {
  memes {
    title
    image_url
    description
  }
}
    `;

/**
 * __useMemesQuery__
 *
 * To run a query within a React component, call `useMemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemesQuery(baseOptions?: Apollo.QueryHookOptions<MemesQuery, MemesQueryVariables>) {
        return Apollo.useQuery<MemesQuery, MemesQueryVariables>(MemesDocument, baseOptions);
      }
export function useMemesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemesQuery, MemesQueryVariables>) {
          return Apollo.useLazyQuery<MemesQuery, MemesQueryVariables>(MemesDocument, baseOptions);
        }
export type MemesQueryHookResult = ReturnType<typeof useMemesQuery>;
export type MemesLazyQueryHookResult = ReturnType<typeof useMemesLazyQuery>;
export type MemesQueryResult = Apollo.QueryResult<MemesQuery, MemesQueryVariables>;