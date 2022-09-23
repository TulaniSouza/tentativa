import React from "react";

import * as S from "./style";

export function Header() {
  return (
    <S.Container>
      <S.List>
        <a href="/">
          <p>Home</p>
        </a>
        <p>Sobre</p>
        <p>Contatos</p>
      </S.List>
    </S.Container>
  );
}
