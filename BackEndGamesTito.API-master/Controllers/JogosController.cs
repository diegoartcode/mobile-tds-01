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
    [ApiController]
    [Route("api/[controller]")]
    public class JogosController : ControllerBase
    {
        private readonly JogoRepository _jogoRepository;

        public JogosController(JogoRepository jogoRepository)
        {
            _jogoRepository = jogoRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var jogos = await _jogoRepository.GetAllJogosAsync();
            return Ok(jogos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var jogo = await _jogoRepository.GetJogoByIdAsync(id);

            if (jogo == null)
            {
                return NotFound(new { erro = true, message = "Jogo não encontrado." });
            }

            return Ok(jogo);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] JogoRequestModel model)
        {
            try
            {
                var novoJogo = new Jogo
                {
                    JogoNome = model.JogoNome,
                    JogoDescricao = model.JogoDescricao,
                    JogoCapa = model.JogoCapa,
                    JogoPreco = model.JogoPreco
                };

                await _jogoRepository.CreateJogoAsync(novoJogo);

                return CreatedAtAction(nameof(GetAll), new { message = "Jogo cadastrado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new { erro = true, message = "Erro ao cadastrar jogo.", detalhe = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] JogoRequestModel model)
        {
            try
            {
                var jogoExistente = await _jogoRepository.GetJogoByIdAsync(id);

                if (jogoExistente == null)
                {
                    return NotFound(new { erro = true, message = "Jogo não encontrado." });
                }

                var jogoAtualizado = new Jogo
                {
                    JogoNome = model.JogoNome,
                    JogoDescricao = model.JogoDescricao,
                    JogoCapa = model.JogoCapa,
                    JogoPreco = model.JogoPreco
                };

                await _jogoRepository.UpdateJogoAsync(id, jogoAtualizado);

                return Ok(new { erro = false, message = "Jogo atualizado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new { erro = true, message = "Erro ao atualizar jogo.", detalhe = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var sucesso = await _jogoRepository.DeleteJogoAsync(id);

                if (!sucesso)
                {
                    return NotFound(new { erro = true, message = "Jogo não encontrado." });
                }

                return Ok(new { erro = false, message = "Jogo deletado com sucesso!" });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new { erro = true, message = "Erro ao deletar jogo.", detalhe = ex.Message });
            }
        }

        // ✅ NOVO ENDPOINT DE TESTE
        [HttpGet("teste")]
        public IActionResult Teste()
        {
            return Ok("API funcionando!");
        }
    }
}