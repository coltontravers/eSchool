import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  classroom?: Maybe<Classroom>;
  classrooms: Array<Classroom>;
};


export type QueryClassroomArgs = {
  where: ClassroomWhereUniqueInput;
};


export type QueryClassroomsArgs = {
  where?: Maybe<ClassroomWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ClassroomWhereUniqueInput>;
  after?: Maybe<ClassroomWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneclassroom: Classroom;
};


export type MutationCreateOneclassroomArgs = {
  data: ClassroomCreateInput;
};

export type Classroom = {
  __typename?: 'classroom';
  id: Scalars['Int'];
  name: Scalars['String'];
  teacher: Scalars['String'];
  time: Scalars['String'];
  grade: Scalars['Int'];
};

export type ClassroomWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ClassroomWhereInput = {
  AND?: Maybe<Array<ClassroomWhereInput>>;
  OR?: Maybe<Array<ClassroomWhereInput>>;
  NOT?: Maybe<Array<ClassroomWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  teacher?: Maybe<StringFilter>;
  grade?: Maybe<IntFilter>;
  time?: Maybe<StringFilter>;
  grades?: Maybe<GradeListRelationFilter>;
};

export type ClassroomCreateInput = {
  name: Scalars['String'];
  teacher: Scalars['String'];
  grade: Scalars['Int'];
  time: Scalars['String'];
  grades?: Maybe<GradeCreateManyWithoutClassroomInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type GradeListRelationFilter = {
  every?: Maybe<GradeWhereInput>;
  some?: Maybe<GradeWhereInput>;
  none?: Maybe<GradeWhereInput>;
};

export type GradeCreateManyWithoutClassroomInput = {
  create?: Maybe<Array<GradeCreateWithoutClassroomInput>>;
  connect?: Maybe<Array<GradeWhereUniqueInput>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type GradeWhereInput = {
  AND?: Maybe<Array<GradeWhereInput>>;
  OR?: Maybe<Array<GradeWhereInput>>;
  NOT?: Maybe<Array<GradeWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  grade?: Maybe<IntFilter>;
  classroom_id?: Maybe<IntNullableFilter>;
  classroom?: Maybe<ClassroomWhereInput>;
};

export type GradeCreateWithoutClassroomInput = {
  name: Scalars['String'];
  grade: Scalars['Int'];
};

export type GradeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type ClassroomsQueryVariables = Exact<{
  id?: Scalars['Boolean'];
  name?: Scalars['Boolean'];
  teacher?: Scalars['Boolean'];
  grade?: Scalars['Boolean'];
  time?: Scalars['Boolean'];
}>;


export type ClassroomsQuery = (
  { __typename?: 'Query' }
  & { classrooms: Array<(
    { __typename?: 'classroom' }
    & Pick<Classroom, 'id' | 'name' | 'teacher' | 'grade' | 'time'>
  )> }
);


export const ClassroomsDocument = gql`
    query classrooms($id: Boolean! = true, $name: Boolean! = true, $teacher: Boolean! = true, $grade: Boolean! = true, $time: Boolean! = true) {
  classrooms {
    id @include(if: $id)
    name @include(if: $name)
    teacher @include(if: $teacher)
    grade @include(if: $grade)
    time @include(if: $time)
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    classrooms(variables?: ClassroomsQueryVariables): Promise<ClassroomsQuery> {
      return withWrapper(() => client.request<ClassroomsQuery>(print(ClassroomsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;