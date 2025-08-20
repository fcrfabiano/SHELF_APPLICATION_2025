# Vitrine de Produtos - Ofertas da Semana

Aplicação de vitrine de produtos desenvolvida em **React**, com foco em **boas práticas de desenvolvimento**, **arquitetura organizada (MVVM + DDD)** e **layout claro e responsivo**.

---

## 🚀 Requisitos Principais

- Criar um projeto com **React**  
- Implementar uma rota/página chamada `/ofertas`  
- Estruturar a página com as seguintes seções:  
  - **Banner estático** no topo  
  - **Título:** `Ofertas da Semana`  
  - **Vitrine de produtos** (6 itens), exibindo:  
    - Imagem  
    - Nome (title)  
    - Preço (price)  
    - Botão `"Comprar"`  

---

## 📐 Arquitetura

A aplicação deve seguir **MVVM (Model-View-ViewModel)** para separação de responsabilidades e **DDD (Domain-Driven Design)** para organização em camadas de domínio, aplicação e infraestrutura.


### Estrutura

```
src/
├── domain/ # Entidades, value objects, interfaces de repositórios
├── application/ # Casos de uso e serviços de aplicação
├── infrastructure/ # Implementações concretas de APIs, persistência etc.
├── presentation/ # Views e ViewModels (MVVM)
│ ├── components/ # Componentes reutilizáveis
│ └── pages/ # Página /ofertas
├── hooks/ # Hooks customizados (favoritos, paginação, etc.)
├── tests/ # Testes automatizados
└── assets/ # Imagens e estilos globais
```

## 🛠️ Tecnologias

- **React** 
- **HTML semântico**  
- **Tailwind**
- **JavaScript (ES6+)**

---

## 🌐 API Utilizada

Dados dos produtos são consumidos de:  
👉 [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---