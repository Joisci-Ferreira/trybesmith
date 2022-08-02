import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService';

const secret = 'user';

export default class UserController {
  constructor(private userService = new UserService()) {}
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.userService.create(user);
    const token = jwt.sign({ username: user.username, newUser }, secret);
    res.status(201).json({ token });
  };
}