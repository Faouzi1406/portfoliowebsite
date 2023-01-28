import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";
import { v4 } from "uuid";
genSaltSync(10);
class AuthUserSession {
  async checkSession(sessionToken) {
    let prisma = new PrismaClient();
    let user = {
      isValidated: false
    };
    await prisma.sessions.findUnique({
      include: {
        user: true
      },
      where: {
        token: sessionToken
      }
    }).then((e) => {
      if (e?.userName != void 0) {
        user.isValidated = true;
        user.userName = e.userName;
        user.role = e.user.role;
      }
      prisma.$disconnect();
    }).catch((e) => {
      user.isValidated = false;
      prisma.$disconnect();
    });
    return user;
  }
}
class AuthUserCreation {
  constructor(user) {
    this.user = user;
  }
  // Return true if all fields have te correct lengths 
  // Will not check the role field considering that this is always 0 at creation
  validateFields() {
    const checkNull = this.user.username != null && this.user.email != null && this.user.password != null;
    if (!checkNull) {
      return checkNull;
    }
    const check = this.user.email.length >= 6 && this.user.password.length >= 6 && this.user.username.length >= 6;
    return check;
  }
  async createUser() {
    const userValidate = this.validateFields();
    const prismaClient = new PrismaClient();
    let isCreated = false;
    if (!userValidate) {
      let userNotCreated = {
        isCreated: false,
        user: this.user
      };
      return userNotCreated;
    }
    await prismaClient.user.create({
      data: {
        username: this.user.username,
        password: hashSync(this.user.password),
        email: this.user.email,
        role: this.user.role
      }
    }).then((o) => {
      isCreated = true;
      prismaClient.$disconnect();
    }).catch((e) => {
      isCreated = false;
      prismaClient.$disconnect();
    });
    return {
      isCreated,
      user: this.user
    };
  }
}
class AuthGetUser {
  constructor(userName) {
    this.userName = userName;
  }
  //returns all userinfo including password
  async getUserInfo() {
    const prisma = new PrismaClient();
    let foundUser = false;
    let userInfo = {
      username: void 0,
      password: void 0,
      email: void 0,
      role: 0
    };
    await prisma.user.findUnique({
      where: {
        username: this.userName
      },
      select: {
        password: true,
        username: true,
        email: true,
        role: true
      }
    }).then((e) => {
      userInfo = {
        email: e?.email,
        username: e?.username,
        password: e?.password,
        role: e?.role
      };
      if (userInfo.username != void 0) {
        foundUser = true;
      }
      prisma.$disconnect();
    }).catch((e) => {
      foundUser = false;
      prisma.$disconnect();
    });
    let foundUserInfo = {
      user: userInfo,
      found: foundUser
    };
    return foundUserInfo;
  }
  async createSession(username) {
    let prisma = new PrismaClient();
    let token = v4();
    let session = prisma.sessions.create({
      data: {
        userName: username,
        isValid: true,
        token
      }
    });
    let sessionCreated = {
      token: void 0,
      date: void 0,
      isValid: void 0
    };
    await session.then((e) => {
      sessionCreated.date = e.date;
      sessionCreated.isValid = e.isValid;
      sessionCreated.token = e.token;
      console.log(e);
      prisma.$disconnect();
    }).catch((e) => {
      console.log(e);
      prisma.$disconnect();
    });
    return sessionCreated;
  }
  async loginUser(password) {
    let getUser = await this.getUserInfo();
    if (!getUser.found) {
      let sessionInfo = {
        isOk: false,
        session: {
          token: void 0,
          date: void 0,
          isValid: void 0
        }
      };
      return sessionInfo;
    }
    if (compareSync(password, getUser.user.password)) {
      let createSession = await this.createSession(getUser.user?.username);
      console.log(createSession);
      if (createSession.isValid != void 0 && createSession.date != void 0 && createSession.token != void 0) {
        return {
          isOk: true,
          session: createSession
        };
      } else {
        let sessionInfo = {
          isOk: false,
          session: {
            token: void 0,
            date: void 0,
            isValid: void 0
          }
        };
        return sessionInfo;
      }
    } else {
      let sessionInfo = {
        isOk: false,
        session: {
          token: void 0,
          date: void 0,
          isValid: void 0
        }
      };
      return sessionInfo;
    }
  }
}
export {
  AuthUserSession as A,
  AuthGetUser as a,
  AuthUserCreation as b
};
