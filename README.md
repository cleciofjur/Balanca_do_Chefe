Balança do Chef - Conversor de Unidades

Este é um projeto simples para converter unidades de medida usadas em receitas de cozinha. O sistema permite que você insira um valor, escolha uma unidade de origem e uma unidade de destino, e visualize o resultado da conversão diretamente na página.

Tecnologias Utilizadas

- HTML5: Para a estrutura da página.
- CSS3: Para estilização (exemplo ausente no código, mas pode ser incluído no arquivo `style.css`).
- JavaScript: Para implementar a lógica de conversão de unidades.

Funcionalidades

1. Conversão entre as seguintes unidades:
   - Xícaras
   - Colheres de sopa
   - Colheres de chá
   - Gramas
   - Mililitros
2. Resultado exibido diretamente na página.
3. Mensagens de validação e erros exibidos para entradas inválidas.

Como Usar

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Abra o arquivo `index.html` no seu navegador.
3. Insira o valor a ser convertido, escolha a unidade de origem e a unidade de destino.
4. Clique em "Converter" para ver o resultado na página.

Estrutura do Projeto

raiz/
├── index.html         Arquivo principal do HTML
├── style.css          Estilização da página (opcional)
└── conversor.js       Lógica de conversão em JavaScript

Exemplo de Uso

1. Insira o valor, por exemplo: `2`.
2. Escolha as unidades:
   - De: Xícaras
   - Para: Colheres de sopa
3. Clique em "Converter".
4. O resultado aparecerá como: `O valor convertido é: 32 Colheres de sopa`.

Funcionalidade Adicional

A função de exibição de casas decimais só quando necessário está incluída:

function formatarNumero(numero) {
  return Number.isInteger(numero) ? numero.toString() : numero.toFixed(2);
}


Possíveis Melhorias

- Adicionar mais unidades de medida, como litros, quilos, etc.
- Melhorar o design com um CSS mais elaborado.
- Adicionar suporte para diferentes idiomas.
- Implementar testes unitários para validação da lógica de conversão.

Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
   
3. Crie uma branch para sua funcionalidade ou correção:
   git checkout -b minha-nova-funcionalidade

4. Faça commit de suas alterações:
   git commit -m "Adicionei nova funcionalidade"

5. Envie suas alterações:
   git push origin minha-nova-funcionalidade

6. Abra um Pull Request.

Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

---

Desenvolvido com por Clecio Júnior - cleciofjur
