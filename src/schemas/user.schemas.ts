import { z } from "zod";

export const UserSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1)
})

export const userRegisterBodySchema = UserSchema.omit({id: true})

export const userLoginBodySchema = userRegisterBodySchema.omit({name: true})

export const userReturnSchema = UserSchema.omit({password: true})

export type TUser = z.infer<typeof UserSchema>

export type TUserRegisterBody = z.infer<typeof userRegisterBodySchema>

export type TUserLoginBody = z.infer<typeof userLoginBodySchema>

export type TUserReturn = z.infer<typeof userReturnSchema>

export type TUserLoginReturn = {
    accessToken: string,
    user: TUserReturn
}
