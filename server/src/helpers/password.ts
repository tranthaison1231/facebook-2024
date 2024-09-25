import bcrypt from "bcrypt";

export const hashPassword = async (password: string, salt?:string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const genSalt = () => bcrypt.genSaltSync();
