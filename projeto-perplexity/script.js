document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.getElementById('enviar');
    const perguntaInput = document.getElementById('pergunta');
    const loadingIndicator = document.getElementById('loading');
    const respostaContainer = document.getElementById('resposta-container');
    const respostaTexto = document.getElementById('resposta-texto');
    
    botaoEnviar.addEventListener('click', async () => {
      const pergunta = perguntaInput.value.trim();
      
      if (!pergunta) {
        alert('Por favor, digite uma pergunta.');
        return;
      }
      
      // Mostrar indicador de carregamento
      loadingIndicator.style.display = 'flex';
      respostaContainer.style.display = 'none';
      
      try {
        // Chamar a função que interage com a API
        const resposta = await perguntarPerplexity(pergunta);
        
        // Exibir resposta
        respostaTexto.textContent = resposta;
        
        // Esconder indicador de carregamento e mostrar resultado
        loadingIndicator.style.display = 'none';
        respostaContainer.style.display = 'block';
      } catch (erro) {
        console.error('Erro:', erro);
        respostaTexto.textContent = 'Ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.';
        
        loadingIndicator.style.display = 'none';
        respostaContainer.style.display = 'block';
      }
    });
    
    // Permitir envio ao pressionar Enter com Shift
    perguntaInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        botaoEnviar.click();
      }
    });
  });
  
  // Inclua a função perguntarPerplexity definida anteriormente
  
// Função para fazer requisição direta
async function perguntarPerplexity(pergunta) {
    const url = 'https://api.perplexity.ai/chat/completions';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer SUA_CHAVE_API_PERPLEXITY`
    };
    
    const dados = {
      model: 'mistral-7b-instruct',
      messages: [
        {
          role: 'system',
          content: 'Seja preciso e conciso em suas respostas.'
        },
        {
          role: 'user',
          content: pergunta
        }
      ],
      max_tokens: 1024,
      temperature: 0.7
    };
    
    try {
      const resposta = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dados)
      });
      
      const resultado = await resposta.json();
      return resultado.choices[0].message.content;
    } catch (erro) {
      console.error('Erro ao chamar a API:', erro);
      return 'Ocorreu um erro ao processar sua solicitação.';
    }
  }
  