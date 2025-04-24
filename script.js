function mostrarTexto(caso) {
    const textos = {
      1: "A viagem espacial é para quem deseja conhecer o espaço. Contudo, é claro que não é qualquer viagem. Não recomendamos que Grávidas com mais de um mês de gestação, o que pretendam permanecer no espaço por mais de três semanas façam a viagem, pois impactaria na saúde do feto. Também fica o aviso do sério risco para pessoas com marca-passo e que dependem de instrumentos médicos para ajudar na regulação do organismo. Pessoas com claustrofobia devem procurar ajuda para se acostumarem aos ambientes menores que serão alocadas durante o tragéto, e pessoas que dependem de transfusão de sangue devem se programar devidamente para não precisarem fazer uma operação dessas no espaço.",

      2: "Sim, existe. Para um ser humano médio, o ideal é ficar menos de um mês no espaço. Sim, é legal ver a terra pisando na lua, e fazer castelos de areia em Marte, mas é um risco ao seu organismo permanecer no espaço por períodos prolongados. Veja as recomendações:\n Crianças menores de 10 anos - Limite: 1 semana.\n Crianças e Adolecentes de 10 a 17 anos - Limite: 2 semana.\n Jovens e adultos 18 a 30 anos - Limite:  1 mês.\n Adultos de 31 a 50 anos - Limite: 2 semanas e quatro dias.\n Maiores de 51 anos - Limite: 1 semana e dois dias.\n Importante: No exame de aptidão física pode ser atribuido um limite de permanecia diferente do que o apresentado aqui, tanto para mais, quanto para menos, devido a fatores bialógicos individuais do passageiro.",

      3: "Fique tranquilo. Em todas as viagens, minimamente um quinto dos tripulantes são profissionais treinados para lidar com emergências. Siga as intruções deles e aquilo que aprendeu no Treinamento Básico.\n\n (Não nos responsabilizamos por qualquer incidente causado por você mesmo).",

      4: "Essa é uma boa pergunta. E a resposta é bem simples. Como você vai poder conferir mais a frente na sessão Rotas e Valores, temos uma parceria com o Bradesco, o único banco brasileiro que atende suas necessidades tanto na terra quanto nas estelas de maneira simplificada e rápida. Na sessão de Rotas e Valores, faça a simulação de financiamento ou parcelamento com Bradesco, e veja o quão longe você pode ir sem estourar o orçamento.",

      5: "Fique a vontade para entrar em contato conosco: Email: solaratendimento@solar.com.br\nWhatsapp: +55 11 99999 9999\nNúmero de telefone: +55 800-999\n(Tempo médio para retorno: 2 horas)"
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
  
  