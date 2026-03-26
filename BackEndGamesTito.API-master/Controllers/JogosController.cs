// Importa a classe Jogo que representa a entidade do banco de dados
using BackEndGamesTito.API.Data.Models;

// Importa o modelo usado para receber dados enviados pelo cliente na API
using BackEndGamesTito.API.Models;

// Importa a classe responsável por acessar o banco de dados (Repository)
using BackEndGamesTito.API.Repositories;

// Biblioteca do ASP.NET usada para criação de APIs e Controllers
using Microsoft.AspNetCore.Mvc;

// Biblioteca para trabalhar com métodos assíncronos
using System.Threading.Tasks;

// Define o namespace onde o controller está localizado
namespace BackEndGamesTito.API.Controllers
{
    // Indica que esta classe é um controller de API
    // Habilita recursos automáticos como validação de modelo e respostas HTTP padronizadas
    [ApiController]

    // Define a rota base da API
    // [controller] será substituído automaticamente pelo nome do controller sem "Controller"
    // Neste caso: api/jogos
    [Route("api/[controller]")]
    public class JogosController : ControllerBase
    {
        // Variável privada que armazenará a instância do repositório
        private readonly JogoRepository _jogoRepository;

        // Construtor do controller que recebe o repository por Injeção de Dependência
        public JogosController(JogoRepository jogoRepository)
        {
            // Atribui o repository recebido à variável privada
            _jogoRepository = jogoRepository;
        }

        // Define que este método responde a requisições HTTP GET
        // Endpoint: GET api/jogos
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            // Chama o método do repository que busca todos os jogos
            var jogos = await _jogoRepository.GetAllJogosAsync();

            // Retorna status HTTP 200 (OK) com a lista de jogos
            return Ok(jogos);
        }

        // Define que este método responde a requisições GET com parâmetro
        // Endpoint: GET api/jogos/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            // Busca um jogo específico pelo ID
            var jogo = await _jogoRepository.GetJogoByIdAsync(id);

            // Se não encontrar o jogo
            if (jogo == null)
            {
                // Retorna status HTTP 404 (Not Found)
                return NotFound(new { erro = true, message = "Jogo não encontrado." });
            }

            // Caso encontre, retorna o jogo com status 200
            return Ok(jogo);
        }

        // Define que este método responde a requisições HTTP POST
        // Endpoint: POST api/jogos
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] JogoRequestModel model)
        {
            try
            {
                // Cria um novo objeto Jogo com base nos dados recebidos do RequestModel
                var novoJogo = new Jogo
                {
                    JogoNome = model.JogoNome,
                    JogoDescricao = model.JogoDescricao,
                    JogoCapa = model.JogoCapa,
                    JogoPreco = model.JogoPreco
                };

                // Envia o novo jogo para ser inserido no banco
                await _jogoRepository.CreateJogoAsync(novoJogo);

                // Retorna status 201 (Created) indicando que o recurso foi criado
                return CreatedAtAction(nameof(GetAll), new { message = "Jogo cadastrado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                // Caso ocorra algum erro interno, retorna status 500
                return StatusCode(500, new { erro = true, message = "Erro ao cadastrar jogo.", detalhe = ex.Message });
            }
        }

        // Define que este método responde a requisições HTTP PUT
        // Endpoint: PUT api/jogos/1
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] JogoRequestModel model)
        {
            try
            {
                // Verifica primeiro se o jogo existe no banco
                var jogoExistente = await _jogoRepository.GetJogoByIdAsync(id);

                // Caso não exista
                if (jogoExistente == null)
                {
                    // Retorna erro 404
                    return NotFound(new { erro = true, message = "Jogo não encontrado." });
                }

                // Cria um novo objeto com os dados atualizados
                var jogoAtualizado = new Jogo
                {
                    JogoNome = model.JogoNome,
                    JogoDescricao = model.JogoDescricao,
                    JogoCapa = model.JogoCapa,
                    JogoPreco = model.JogoPreco
                };

                // Envia os novos dados para atualizar no banco
                await _jogoRepository.UpdateJogoAsync(id, jogoAtualizado);

                // Retorna status 200 informando que a atualização foi realizada
                return Ok(new { erro = false, message = "Jogo atualizado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                // Caso ocorra erro interno
                return StatusCode(500, new { erro = true, message = "Erro ao atualizar jogo.", detalhe = ex.Message });
            }
        }

        // Define que este método responde a requisições HTTP DELETE
        // Endpoint: DELETE api/jogos/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                // Tenta excluir o jogo no banco
                var sucesso = await _jogoRepository.DeleteJogoAsync(id);

                // Se não encontrou o registro para deletar
                if (!sucesso)
                {
                    return NotFound(new { erro = true, message = "Jogo não encontrado." });
                }

                // Caso consiga deletar retorna sucesso
                return Ok(new { erro = false, message = "Jogo deletado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                // Caso ocorra erro interno
                return StatusCode(500, new { erro = true, message = "Erro ao deletar jogo.", detalhe = ex.Message });
            }
        }
    }
}