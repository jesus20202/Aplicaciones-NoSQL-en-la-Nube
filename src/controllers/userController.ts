import firestore from '../config/database';
import { User, userConverter } from '../models/user';
import { Request, Response } from 'express';

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { username, email } = req.body;
      const newUser: User = {
        username,
        email,
        createdAt: new Date()
      };

      const userRef = firestore.collection('users').withConverter(userConverter);
      const docRef = await userRef.add(newUser);

      res.status(201).json({ 
        message: 'Usuario creado', 
        userId: docRef.id 
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Error al crear usuario', 
        error: (error as Error).message 
      });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userRef = firestore.collection('users').doc(userId).withConverter(userConverter);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json(userDoc.data());
    } catch (error) {
      res.status(500).json({ 
        message: 'Error al obtener usuario', 
        error: (error as Error).message 
      });
    }
  }
}