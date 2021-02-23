import { container } from 'tsyringe';
import IHashPovider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashPovider>('HashProvider', BCryptHashProvider);
