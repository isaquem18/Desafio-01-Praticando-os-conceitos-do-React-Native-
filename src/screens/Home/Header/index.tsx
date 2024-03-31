import Logo from "@Assets/logos/logo.svg";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <Logo width={120} height={36} style={{ marginTop: -27 }} />
    </S.Container>
  );
}
