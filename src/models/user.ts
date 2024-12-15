export interface User {
    id?: string;
    username: string;
    email: string;
    createdAt: Date;
    lastLogin?: Date;
  }
  
  export const userConverter = {
    toFirestore: (user: User) => ({
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin || null
    }),
    fromFirestore: (snapshot: FirebaseFirestore.DocumentSnapshot): User => {
      const data = snapshot.data()!;
      return {
        id: snapshot.id,
        username: data.username,
        email: data.email,
        createdAt: data.createdAt.toDate(),
        lastLogin: data.lastLogin ? data.lastLogin.toDate() : undefined
      };
    }
  };