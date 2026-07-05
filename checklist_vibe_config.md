# ✅ Checklist — Vibe Coding Responsável

> Use a IA como **acelerador**, mas **revise, entenda e teste** tudo que ela produz.
>
> **Teste de ouro (pergunte-se sempre):** _"Eu consigo explicar esse código com minhas próprias palavras?"_
> Se a resposta for **não**, ele **não sobe**.

---

## 1. Antes de pedir qualquer código

- [ ] Escrevi em uma frase o que quero e **como saberei que ficou pronto** (critério de aceite).
- [ ] Estou no **controle de versão (git)** e fiz um commit limpo antes de começar.
- [ ] **Fatiei o trabalho:** vou pedir uma peça pequena por vez, não "o app inteiro".

## 2. Ao pedir (gerando o código)

- [ ] Dei **contexto**: stack, padrões do projeto e restrições.
- [ ] Para algo não trivial, pedi o **plano primeiro** ("explique como pretende fazer antes de escrever").
- [ ] Pedi mudanças **pequenas e localizadas** (mais fáceis de revisar).

## 3. Ao receber (ENTENDER — a etapa que a maioria pula)

- [ ] **Li cada linha** do que a IA gerou.
- [ ] Perguntei "por que isso?" em qualquer trecho que não entendi — nada de código "mágico".
- [ ] Fiz a varredura de **segurança** (segredos expostos, injeção, autenticação).
- [ ] Conferi **tratamento de erros** e **casos de borda** (entrada vazia, nula, muito grande).
- [ ] Revisei as **dependências** adicionadas (é necessária? é mantida? é confiável?).
- [ ] Apliquei o teste do "eu explico?": o que não sei explicar, eu estudo ou descarto.

## 4. Ao validar (TESTAR — não confie no "funciona")

- [ ] **Rodei** o código.
- [ ] Testei o **caminho feliz** E os **casos de erro/borda** de propósito.
- [ ] Escrevi (ou pedi) **testes automatizados** e rodei.
- [ ] Verifiquei **regressão**: não quebrei o que já funcionava.

## 5. Ao integrar

- [ ] Fiz o **commit com mensagem clara** (o que mudou e por quê).
- [ ] **Refatorei para ficar meu**: nomes e estilo consistentes com o resto do código.

## 6. Depois (o que faz você crescer, não atrofiar)

- [ ] Anotei **uma coisa que aprendi** nesta sessão.

---

## 🚫 Regras inegociáveis (valem o tempo todo)

- [ ] A IA **nunca** manuseia credenciais/segredos reais — nem no código, nem em prints.
- [ ] **Eu sou o responsável** pelo código, não a IA.
- [ ] Quanto mais crítico o código (pagamento, auth, dados de usuário), **mais devagar e mais revisão**.

---

_Protótipo pessoal pode ser mais solto. Produção, não._
