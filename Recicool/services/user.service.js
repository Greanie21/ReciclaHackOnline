import { HttpService } from "../services/http.service";

export class UserService {
  constructor() {
    this.httpService = new HttpService();
  }

  doLogin(email, password) {
    return this.httpService
      .post("/Acesso", { Email: email, Senha: password })
      .then((response) => ({
        token: response?.data?.token,
      }))
      .catch((error) => {
        let message = "";

        switch (error.response.status) {
          case 401:
            message =
              "Suas credenciais estão incorretas! Por favor, verifique.";
            break;
          case 0:
            message = JSON.stringify(error);
            break;
          default:
            message = error.response.data.item1.Message;
        }

        return {
          error: message,
        };
      });
  }

  getUsuario() {
    return this.httpService
      .get("/Usuario")
      .then((response) => ({
        user: response?.data,
      }))
      .catch((error) => ({}));
  }

  register(data) {
    return this.httpService
      .post("/franqueado", data)
      .then((response) => ({
        success: "Cadastro efetuado com sucesso!",
      }))
      .catch((error) => ({
        error: error.response.data,
      }));
  }
}
