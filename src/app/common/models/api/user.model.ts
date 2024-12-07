export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
    phone: number;
  }
  
  export interface CreateUserPayload {
    user: {
      email: string;
      username: string;
      password: string;
      phone: number;
    }
  }
  
  export interface LoginUserPayload {
    user: {
      email: string;
      password: string;
      phone: number;
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
      phone: number;
    }
  }