
export type User = {
    id: string;             // ObjectID hex string
    username: string;
    email: string;
    token?: string;
    roles: string[];
  
    joined: string;
    bio?: string;
    avatar?: string;
    isActive?: boolean;
    lastActive?: string;
  }

  