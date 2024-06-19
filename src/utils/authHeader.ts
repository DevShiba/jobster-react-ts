interface ThunkAPI {
  getState: () => {
    user: {
      user: {
        token: string;
      };
    };
  };
}

const authHeader = (
  thunkAPI: ThunkAPI
): { headers: { authorization: string } } => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
