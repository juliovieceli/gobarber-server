export default interface IHashProvier {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hased: string): Promise<boolean>;
}
