import * as z from "zod";
import { FormData } from "../../types";

export const TodoSchema: z.ZodType<FormData> = z.object({
  title: z
    .string()
    .min(2, { message: "타이틀은 두 글자 이상이어야 합니다." })
    .max(20, { message: "타이틀은 20글자 이내여야 합니다." }),
  content: z
    .string()
    .max(80, { message: "내용은 80글자 이내여야 합니다." })
    .optional(),
});
