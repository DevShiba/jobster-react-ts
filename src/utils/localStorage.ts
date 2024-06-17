interface User {
  // name: string;
  // age: number;
  [key: string]: any; 
}

export const addUserToLocalStorage = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeFromLocalStorage = (): void => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = (): User | null => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
