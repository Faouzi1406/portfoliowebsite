import { PrismaClient } from '@prisma/client';
import type { AuthCreateUser, AuthSession, AuthSessionOk, AuthUser, AuthUserFound, AuthUserOk , AuthUserSessionOk } from "src/types/AuthResponses";
import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";
import { v4 as uuidv4 } from 'uuid';

//Bcrypt 
const salt = genSaltSync(10);

export class AuthUserSession {
  async checkSession(sessionToken:string):Promise<AuthUserSessionOk> {
    let prisma = new PrismaClient();
    let user:AuthUserSessionOk = {
      isValidated:false,
    }
    const checkSession  = await prisma.sessions.findUnique({
      include:{
      user:true
      },
      where:{
        token:sessionToken
      }
    }).then(e => {
      if(e?.userName != undefined){
        user.isValidated = true;
        user.userName = e.userName;
        user.role = e.user.role;
      }
      prisma.$disconnect();
    }).catch(e => {
      user.isValidated = false;
      prisma.$disconnect();
    });
    
    return user;
  }
}

// Note that prisma is being used in this class THIS CLASS is server side only
export class AuthUserCreation {
  private user:AuthCreateUser;

  constructor(user:AuthCreateUser){
    this.user  =   user;
  }

  // Return true if all fields have te correct lengths 
  // Will not check the role field considering that this is always 0 at creation
  validateFields():boolean {
    // Check eerst of een van de values null is 
    const checkNull:boolean =   this.user.username != null && this.user.email != null && this.user.password != null;
    if(!checkNull) {
      return checkNull
    }
    
    //  Check of de values correcte lengths hebben
    const check:boolean     =   this.user.email.length >= 6 && this.user.password.length >= 6 && this.user.username.length >= 6;
    return check;
  }
  
  async createUser():Promise<AuthUserOk> {
    const userValidate:boolean = this.validateFields();
    const prismaClient = new PrismaClient();
    let isCreated:boolean = false;

    if(!userValidate) {
      let userNotCreated:AuthUserOk = {
        isCreated:false,
        user:this.user
      };
      return userNotCreated;
    }

    const createUser = await prismaClient.user.create({
      data: {
        username:   this.user.username,
        password:   hashSync(this.user.password),
        email:      this.user.email,
        role:       this.user.role
      }
    }).then(o => {
      isCreated   = true;
      prismaClient.$disconnect();
    })
    .catch(e => {
        isCreated = false;
        prismaClient.$disconnect();
    });

    return {
      isCreated,
      user:this.user
    };
  }
}

export class AuthGetUser {
  userName:string;

  constructor(userName:string) {
    this.userName = userName;
  }
  
  //returns all userinfo including password
  async getUserInfo():Promise<AuthUserFound> {
    const prisma  =  new PrismaClient();
    let foundUser = false;

    let userInfo:AuthUser = {
      username:   undefined,
      password:   undefined,
      email:      undefined,
      role:       0
    };



    let user = await prisma.user.findUnique({
      where: {
        username:   this.userName
      },
      select: {
        password:true,
        username:true,
        email:true,
        role:true
      }
    }).then(e => {
      userInfo = {
        email:    e?.email,
        username: e?.username,
        password: e?.password,
        role:     e?.role
      };

      if(userInfo.username != undefined){
          foundUser = true;
      }
      prisma.$disconnect();
    }).catch(e => {
      foundUser = false;
      prisma.$disconnect();
    });
    
    let foundUserInfo:AuthUserFound = {
      user:userInfo,
      found:foundUser
    };

    
    return foundUserInfo;
  }

  async createSession(username:any):Promise<AuthSession> {
    let prisma  = new PrismaClient();
    let token   = uuidv4();

    let session = prisma.sessions.create({
      data:{
        userName:username,
        isValid:true,
        token
      }
    });

    let sessionCreated:AuthSession = {
      token:undefined,
      date:undefined,
      isValid:undefined
    };

    await session.then(e => {
      sessionCreated.date     = e.date;
      sessionCreated.isValid  = e.isValid;
      sessionCreated.token    = e.token;
      console.log(e)
      prisma.$disconnect();
    }).catch(e => {
      console.log(e);
      prisma.$disconnect();
    });

    return sessionCreated;
  }

  async loginUser(password:string):Promise<AuthSessionOk> {
    let getUser = await this.getUserInfo();
    //If user not found
    if(!getUser.found){
      let sessionInfo:AuthSessionOk = {
        isOk:false,
        session:{
          token:undefined,
          date:undefined,
          isValid:undefined
        }
      };
      return sessionInfo;
    }

    if(compareSync(password, getUser.user.password)){
    let createSession = await this.createSession(getUser.user?.username)
    console.log(createSession);
    
      if(
        createSession.isValid != undefined && 
        createSession.date != undefined && 
        createSession.token != undefined )
      {
        return {
          isOk:true,
          session:createSession
        }
      }
      else{
        let sessionInfo:AuthSessionOk = {
          isOk:false,
          session:{
            token:undefined,
            date:undefined,
            isValid:undefined
          }
        };

        return  sessionInfo;
      }
    }
    else {
      let sessionInfo:AuthSessionOk = {
        isOk:false,
        session:{
          token:undefined,
          date:undefined,
          isValid:undefined
        }
      };

      return  sessionInfo;
    }
  }
}
