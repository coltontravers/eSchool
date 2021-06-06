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
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  classroom?: Maybe<Classroom>;
  classrooms: Array<Classroom>;
  user?: Maybe<User>;
  users: Array<User>;
  event?: Maybe<Event>;
  events: Array<Event>;
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


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  where?: Maybe<EventWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EventWhereUniqueInput>;
  after?: Maybe<EventWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneclassroom: Classroom;
  createOneuser: User;
  createOneevent: Event;
};


export type MutationCreateOneclassroomArgs = {
  data: ClassroomCreateInput;
};


export type MutationCreateOneuserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneeventArgs = {
  data: EventCreateInput;
};

export type Classroom = {
  __typename?: 'classroom';
  id: Scalars['Int'];
  name: Scalars['String'];
  teacher: Scalars['String'];
  time: Scalars['String'];
  grade: Scalars['Int'];
};

export type User = {
  __typename?: 'user';
  id: Scalars['Int'];
  email: Scalars['String'];
};

export type Event = {
  __typename?: 'event';
  id: Scalars['Int'];
  name: Scalars['String'];
  user_id?: Maybe<Scalars['Int']>;
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
  grades?: Maybe<GradeCreateNestedManyWithoutClassroomInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  givenName?: Maybe<StringFilter>;
  familyName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  apiToken?: Maybe<StringFilter>;
  event?: Maybe<EventListRelationFilter>;
};

export type UserCreateInput = {
  givenName: Scalars['String'];
  familyName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  apiToken: Scalars['String'];
  event?: Maybe<EventCreateNestedManyWithoutUserInput>;
};

export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type EventWhereInput = {
  AND?: Maybe<Array<EventWhereInput>>;
  OR?: Maybe<Array<EventWhereInput>>;
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  user_id?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
};

export type EventCreateInput = {
  name: Scalars['String'];
  user?: Maybe<UserCreateNestedOneWithoutEventInput>;
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

export type GradeCreateNestedManyWithoutClassroomInput = {
  create?: Maybe<Array<GradeCreateWithoutClassroomInput>>;
  connectOrCreate?: Maybe<Array<GradeCreateOrConnectWithoutClassroomInput>>;
  createMany?: Maybe<GradeCreateManyClassroomInputEnvelope>;
  connect?: Maybe<Array<GradeWhereUniqueInput>>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EventListRelationFilter = {
  every?: Maybe<EventWhereInput>;
  some?: Maybe<EventWhereInput>;
  none?: Maybe<EventWhereInput>;
};


export type EventCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<EventCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<EventCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<EventCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<EventWhereUniqueInput>>;
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

export type UserCreateNestedOneWithoutEventInput = {
  create?: Maybe<UserCreateWithoutEventInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutEventInput>;
  connect?: Maybe<UserWhereUniqueInput>;
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

export type GradeCreateOrConnectWithoutClassroomInput = {
  where: GradeWhereUniqueInput;
  create: GradeCreateWithoutClassroomInput;
};

export type GradeCreateManyClassroomInputEnvelope = {
  data?: Maybe<Array<GradeCreateManyClassroomInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GradeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EventCreateWithoutUserInput = {
  name: Scalars['String'];
};

export type EventCreateOrConnectWithoutUserInput = {
  where: EventWhereUniqueInput;
  create: EventCreateWithoutUserInput;
};

export type EventCreateManyUserInputEnvelope = {
  data?: Maybe<Array<EventCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
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

export type UserCreateWithoutEventInput = {
  givenName: Scalars['String'];
  familyName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  apiToken: Scalars['String'];
};

export type UserCreateOrConnectWithoutEventInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutEventInput;
};

export type GradeCreateManyClassroomInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  grade: Scalars['Int'];
};

export type EventCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
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