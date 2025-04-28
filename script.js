function mostrarTexto(caso) {
  const textos = {
    1: "A viagem espacial é para quem deseja conhecer o espaço.\n\nContudo, é claro que não é qualquer viagem.\n\nNão recomendamos que grávidas com mais de um mês de gestação, ou que pretendam permanecer no espaço por mais de três semanas, façam a viagem, pois impactaria na saúde do feto.\n\nTambém fica o aviso do sério risco para pessoas com marca-passo e que dependem de instrumentos médicos para ajudar na regulação do organismo.\n\nPessoas com claustrofobia devem procurar ajuda para se acostumarem aos ambientes menores que serão alocadas durante o trajeto, e pessoas que dependem de transfusão de sangue devem se programar devidamente para não precisarem fazer uma operação dessas no espaço.",

    2: "Sim, existe.\n\nPara um ser humano médio, o ideal é ficar menos de um mês no espaço.\n\nSim, é legal ver a Terra pisando na Lua, e fazer castelos de areia em Marte, mas é um risco ao seu organismo permanecer no espaço por períodos prolongados.\n\nVeja as recomendações:\n\n  * Crianças menores de 10 anos - Limite: 1 semana.\n  * Crianças e adolescentes de 10 a 17 anos - Limite: 2 semanas.\n- Jovens e adultos de 18 a 30 anos — Limite: 1 mês.\n  * Adultos de 31 a 50 anos - Limite: 2 semanas e quatro dias.\n  * Maiores de 51 anos - Limite: 1 semana e dois dias.\n\nImportante: No exame de aptidão física pode ser atribuído um limite de permanência diferente do que o apresentado aqui, tanto para mais quanto para menos, devido a fatores biológicos individuais do passageiro.",

    3: "Fique tranquilo.\n\nEm todas as viagens, minimamente um quinto dos tripulantes são profissionais treinados para lidar com emergências.\n\nSiga as instruções deles e aquilo que aprendeu no Treinamento Básico.\n\n(Não nos responsabilizamos por qualquer incidente causado por você mesmo).",

    4: "Essa é uma boa pergunta.\n\nE a resposta é bem simples.\n\nComo você vai poder conferir mais à frente na sessão Rotas e Valores, temos uma parceria com o Bradesco, o único banco brasileiro que atende suas necessidades tanto na Terra quanto nas estrelas de maneira simplificada e rápida.\n\nNa sessão de Rotas e Valores, faça a simulação de financiamento ou parcelamento com o Bradesco, e veja o quão longe você pode ir sem estourar o orçamento.",

    5: "Fique à vontade para entrar em contato conosco: Email: solaratendimento@solar.com.br\nWhatsapp: +55 11 99999 9999\nNúmero de telefone: +55 800-999\n\n(Tempo médio para retorno: 2 horas)" 
  };

  document.getElementById("opcoes_texto").textContent = textos[caso];



  const opcoes = document.querySelectorAll(".opcao");
  opcoes.forEach((op, index) => {
    op.classList.remove("active");
    if (index === caso - 1) {
      op.classList.add("active");
    }
  });
}
/*

function mostrarTexto(caso) {
  const textos = {
    1: "Texto do caso 1",
    2: "Texto do caso 2",
    3: "Texto do caso 3"
  };
 
  document.getElementById("conteudo").textContent = textos[caso];
 
  // Atualiza a aparência da opção ativa
  const opcoes = document.querySelectorAll(".option");
  opcoes.forEach((op, index) => {
    op.classList.remove("active");
    if (index === caso - 1) {
      op.classList.add("active");
    }
  });
}
*/

