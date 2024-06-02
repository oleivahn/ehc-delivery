"use server";

import { schema } from "@/components/Form/formSchema";
import connectDB from "@/lib/database-connection";
import User from "@/models/user";

import { green, red } from "console-log-colors";
import { revalidatePath } from "next/cache";

// - What we return
export type FormState = {
  message: string;
  data: object | null | string;
  error?: boolean | null;
};

// - Form Action
// export const getDataAction = async (): Promise<FormState> => {
export const getDataAction = async () => {
  try {
    // - Do something here
    await connectDB();
    const users = await User.find();
    revalidatePath("/testimonies");
    console.log(green("Data received successfully"));

    return users;
  } catch (error: unknown) {
    console.log(red("DB Error: Could not create record:"));
    console.log((error as Error).message);
    return {
      message: (error as Error).message,
      // data: formData,
      error: true,
    };
  }
};
