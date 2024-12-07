export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
    phone: string;
  }
  
  export interface CreateUserPayload {
    user: {
      email: string;
      username: string;
      password: string;
      phone: string;
    }
  }
  
  export interface LoginUserPayload {
    user: {
      email: string;
      password: string;
      phone: string;
    }
  }
  
  export interface LoginUserResponse {
    user: User;
  }
  
  export interface UpdateUserPayload  {
    user: {
      email?: string;
      username?: string;
      bio?: string;
      image?: string;
      password?: string;
      phone: string;
    }
  }