// Define o namespace onde este modelo está organizado dentro do projeto.
// Geralmente a pasta Data.Models contém as classes que representam tabelas do banco de dados.
namespace BackEndGamesTito.API.Data.Models
{
    // Classe que representa a entidade Jogo.
    // Essa classe normalmente corresponde diretamente a uma tabela no banco de dados.
    public class Jogo
    {
        // Propriedade que representa o identificador único do jogo.
        // Geralmente corresponde à chave primária (PRIMARY KEY) da tabela no banco.
        public int JogoId { get; set; }

        // Propriedade que representa o nome do jogo.
        // string.Empty define um valor padrão vazio para evitar que a variável fique nula.
        public string JogoNome { get; set; } = string.Empty;

        // Propriedade que representa a descrição do jogo.
        // O "?" indica que o valor pode ser nulo (campo opcional no banco).
        public string? JogoDescricao { get; set; }

        // Propriedade que representa o caminho ou URL da imagem de capa do jogo.
        // Também é opcional, podendo armazenar null caso não exista capa.
        public string? JogoCapa { get; set; }

        // Propriedade que representa o preço do jogo.
        // float? indica que o valor é numérico decimal e também pode ser nulo.
        public float? JogoPreco { get; set; }
    }
}