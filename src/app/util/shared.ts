import { Constants } from './constants';
import { Report } from '../model/report';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {


    localStorage.setItem(Constants.REPORTS_KEY, JSON.stringify([]));
  }
}