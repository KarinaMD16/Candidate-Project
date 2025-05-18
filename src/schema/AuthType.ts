
import type { loginSchema, registerSchema } from "./schemaAuth";
import type { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;

export type RegisterFormFields = z.infer<typeof registerSchema>;