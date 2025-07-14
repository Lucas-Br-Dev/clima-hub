# 🌦️ Clima-Hub

Acesse pelo link: https://clima-hub.vercel.app/

**Clima-Hub** é uma aplicação web desenvolvida para exibir dados climáticos de qualquer localidade do **Brasil**. O site é totalmente **responsivo** e conta com um sistema de **alternância de tema (claro/escuro)**, com um botão animado para melhorar a experiência do usuário.
Está é uma aplicação "simples", para demonstrar que estou apto para lidar com consumo de APIs, HOOKS do React e demais tecnologias.
---

## 🚀 Tecnologias Utilizadas

- **React.js**
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **HTML**
- **Git**
- **API Rest**

---

## ⚙️ Funcionalidades

- 🔍 **Busca de clima por cidade brasileira**
- 🌤️ **Exibição de dados climáticos em tempo real**, incluindo:
  - Temperatura atual
  - Condição do tempo (ensolarado, chuvoso, etc.)
  - Umidade relativa do ar
  - Velocidade do vento
- 🌓 **Alternância entre modo claro e escuro**
- 📱 **Design responsivo**, adaptado para dispositivos móveis e desktop

---

## 🔌 Consumo de API

O projeto utiliza a função nativa `fetch` do JavaScript (com suporte do TypeScript) para realizar chamadas síncronas a uma **API de clima**.  
Essas requisições buscam os dados meteorológicos de acordo com a cidade informada pelo usuário.

##Principais desafios

Principal desafio deste projeto foi realmente em como lidar com a requisição no React em si, tive alguns problemas pois a API só aceitava coordenadas como LATITUDE e LONGITUDE, mas que foi de fácil resolução pois a mesma empresa responsavel disponibilizava uma outra API para buscar as coordenadas atráves do nome de municipios.

Oque eu fiz então foi fazer uma requisição para a API que buscar as coordenadas, logo após inserir as coordenadas na outra API e realizar a requisição, e então componentizar, organizar e exibir os dados para o cliente.
