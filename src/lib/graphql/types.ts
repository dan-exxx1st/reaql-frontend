export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    email: Scalars['String'];
    name: Scalars['String'];
    surname: Scalars['String'];
    avatar: Scalars['String'];
    createdAt: Scalars['String'];
    updatedAt: Scalars['String'];
};

export type Session = {
    __typename?: 'Session';
    id: Scalars['ID'];
    accessToken: Scalars['String'];
    refreshToken: Scalars['String'];
    createdAt: Scalars['String'];
    updatedAt: Scalars['String'];
};

export type Dialog = {
    __typename?: 'Dialog';
    id: Scalars['ID'];
    users: Array<Maybe<User>>;
    dialogProps: Array<Maybe<DialogProps>>;
    lastMessage?: Maybe<Scalars['String']>;
    lastMessageDate?: Maybe<Scalars['String']>;
};

export type DialogProps = {
    __typename?: 'DialogProps';
    id: Scalars['ID'];
    user: User;
    userRole: Dialog_User_Roles;
    unreadMessages?: Maybe<Scalars['Int']>;
    lastMessageStatus?: Maybe<Message_Statuses>;
};

export type UserAndSession = {
    __typename?: 'UserAndSession';
    user: User;
    session?: Maybe<Session>;
};

export type Query = {
    __typename?: 'Query';
    user: User;
    searchUsers: Array<User>;
    dialogs: Array<Maybe<Dialog>>;
};

export type QueryUserArgs = {
    email: Scalars['String'];
};

export type QuerySearchUsersArgs = {
    email: Scalars['String'];
    selfEmail?: Maybe<Scalars['String']>;
};

export type QueryDialogsArgs = {
    userId: Scalars['String'];
};

export type SignUpInput = {
    email: Scalars['String'];
    name: Scalars['String'];
    surname: Scalars['String'];
    password: Scalars['String'];
};

export type SignInInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    rememberUser: Scalars['Boolean'];
};

export type CreateDialogInput = {
    userId: Scalars['String'];
    role: Dialog_User_Roles;
};

export type Mutation = {
    __typename?: 'Mutation';
    signUp: UserAndSession;
    signIn: UserAndSession;
    refreshSession: Session;
    createDialog?: Maybe<Dialog>;
};

export type MutationSignUpArgs = {
    input: SignUpInput;
};

export type MutationSignInArgs = {
    input: SignInInput;
};

export type MutationRefreshSessionArgs = {
    refreshToken: Scalars['String'];
};

export type MutationCreateDialogArgs = {
    input: Array<Maybe<CreateDialogInput>>;
};

export type Subscription = {
    __typename?: 'Subscription';
    dialogCreated: Dialog;
};

export type SubscriptionDialogCreatedArgs = {
    userId: Scalars['String'];
};

export enum Dialog_User_Roles {
    Admin = 'ADMIN',
    User = 'USER',
}

export enum Message_Statuses {
    Sended = 'SENDED',
    Recived = 'RECIVED',
    Readed = 'READED',
}
