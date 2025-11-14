import { useState } from "preact/hooks";
import {
  ButtonContainer,
  ButtonLogin,
  CardLogin,
  CardLoginContent,
  FormLogin,
  Input,
  LoginContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../services/userServices";

export function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setError(null)

    if (isRegister) {
      if (form.password !== form.confirmPassword) {
        setError("As senhas não coincidem");
        return;
      }
      try {
        await registerUser({ name: form.name, email: form.email, password: form.password })
        navigate("/home")
      } catch (err: any) {
        setError(err.message)
      }
    } else {
      try {
        await loginUser({ email: form.email, password: form.password })
        navigate("/home ")
      } catch (err: any) {
        setError(err.message)
      }
    }

  }

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <LoginContainer>
      <h1>Bem vindo ao ecommerce front</h1>

      <CardLogin>
        <CardLoginContent>
          <FormLogin onSubmit={handleSubmit}>
            {isRegister ? (
              <>
                <Input
                  placeholder="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onInput={handleChange}
                  required
                />
                <Input
                  placeholder="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onInput={handleChange}
                  required
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  name="password"
                  value={form.password}
                  onInput={handleChange}
                  required
                />
                <Input
                  placeholder="Digite sua senha novamente"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onInput={handleChange}
                  required
                />
              </>
            ) : (
              <>
                <Input
                  placeholder="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onInput={handleChange}
                  required
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  name="password"
                  value={form.password}
                  onInput={handleChange}
                  required
                />
              </>
            )}
            {error && <span style={{ color: "red" }}>{error}</span>}
            <ButtonContainer>
              <ButtonLogin type="submit">
                {isRegister ? "Cadastrar" : "Entrar"}
              </ButtonLogin>
              <ButtonLogin
                type="button"
                onClick={() => {
                  setIsRegister((prev) => !prev)
                  setError(null)
                }}
              >
                {isRegister ? "Entrar" : "Cadastre-se"}
              </ButtonLogin>
            </ButtonContainer>
          </FormLogin>
        </CardLoginContent>
      </CardLogin>
    </LoginContainer>
  );
}
