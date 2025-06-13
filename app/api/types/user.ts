
export type User = {
    _id: string;             // ObjectID hex string
    username: string;
    email: string;
    password_hash: string;
    token?: string;
    roles: string[];
  
    joined: string;
    bio?: string;
    avatar?: string;
    isActive?: boolean;
    lastActive?: string;
  }
