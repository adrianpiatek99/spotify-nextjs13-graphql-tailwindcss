type GraphqlError = {
  message: string;
  path: string[];
};

export const getReactQueryError = (error: unknown) => {
  const err = error as any;

  const message = (err?.response?.errors[0]?.message ?? "") as string;
  const errors = err?.response?.errors as GraphqlError[];

  return { message, errors };
};
