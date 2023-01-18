export type AuthGet = {
  message:String
}

export type AuthCreateUser = {
  email:string, 
  username:string,
  password:string,
  role:number,
}

export type AuthSession  = {
  token:string | undefined,
  date:Date | undefined,
  isValid:boolean | undefined
}

export type AuthSessionOk = {
  isOk:boolean,
  session:AuthSession
}

export type AuthUserOk = {
  isCreated:boolean,
  user:AuthCreateUser
}

export type AuthUser = {
  email:string | undefined,
  username:string | undefined,
  password?:string | undefined,
  role?:number | undefined
}

export type AuthUserFound = {
  user?:AuthUser,
  found:boolean
}

export type AuthUserSessionOk = {
  userName?:string,
  role?:number
  isValidated:boolean
}
