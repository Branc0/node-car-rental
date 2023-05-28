import jwt from "jsonwebtoken";
import { inject, injectable } from "inversify";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcrypt";
import { IAuthResponseDTO } from "../../../cars/DTOs/IAuthResponseDTO";
import AppError from "../../../../shared/errors/appError";

interface IAuthParams {
  email: string;
  password: string;
}

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute({ password, email }: IAuthParams): Promise<IAuthResponseDTO> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Invalid Credentials", 401);
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new AppError("Invalid Credentials", 401);
    }

    const token = jwt.sign({}, TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    const response: IAuthResponseDTO = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return response;
  }
}
