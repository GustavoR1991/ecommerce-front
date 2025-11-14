import { useEffect, useState } from "preact/hooks"
import { getUserById } from "../../services/userServices";
import { HomeContainer, Text } from "./styles";

export function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getUserById(Number(userId))
        .then(setUser)
        .catch(() => setUser(null));
    }
  }, []);
  return (
    <HomeContainer>
      <Text>
        {user ? `Bem-vindo, ${user.name} essa é a sua página inicial, Está em construção ainda!` : "Home Page"}
      </Text>
    </HomeContainer>
  )
}