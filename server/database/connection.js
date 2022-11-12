import mangoose, { mongo } from "mangoose";

export default async () => {
  return mangoose.connect(MONGO_URI);
};
