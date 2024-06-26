import { z } from "zod";

// Info: All these fields mustd be supplied for proper validation
export const schema = z.object({
  // employeeId: z.string().min(2, {
  //   message: "Employee ID must be at least 2 characters.",
  // }),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  shiftDate: z.coerce.date({
    errorMap: ({ code }, { defaultError }) => {
      if (code == "invalid_date") return { message: "Date is required" };
      return { message: defaultError };
    },
  }),
  location: z.string().min(2, {
    message: "Location must be filled.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(1, {
    message: "The message area cannot be empty, please add a message.",
  }),
});
