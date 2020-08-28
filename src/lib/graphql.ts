export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type IMutation = {
	__typename?: 'Mutation';
	createTodo: ITodo;
};

export type IMutationCreateTodoArgs = {
	text: Scalars['String'];
};

export type IQuery = {
	__typename?: 'Query';
	todos: Array<ITodo>;
};

export type ITodo = {
	__typename?: 'Todo';
	id: Scalars['ID'];
	text: Scalars['String'];
};
