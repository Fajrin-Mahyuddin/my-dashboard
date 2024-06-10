import { User } from "constants/user";
import { z } from "zod";

export type TUsers = z.infer<typeof User> & { id?: string };
