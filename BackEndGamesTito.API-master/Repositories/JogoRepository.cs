// Importa o modelo Jogo que representa a estrutura do objeto Jogo
using BackEndGamesTito.API.Data.Models;

// Biblioteca para trabalhar com SQL Server
using Microsoft.Data.SqlClient;

// Permite acessar configurações do projeto (como appsettings.json)
using Microsoft.Extensions.Configuration;

// Biblioteca base do C#
using System;

// Permite trabalhar com listas genéricas
using System.Collections.Generic;

// Permite trabalhar com programação assíncrona (async/await)
using System.Threading.Tasks;

// Define o namespace onde esta classe está organizada
namespace BackEndGamesTito.API.Repositories
{
    // Classe responsável por acessar o banco de dados (Repository)
    public class JogoRepository
    {
        // Variável privada que irá armazenar a string de conexão com o banco
        private readonly string _connectionString = string.Empty;

        // Construtor da classe que recebe as configurações da aplicação
        public JogoRepository(IConfiguration configuration)
        {
            // Obtém a string de conexão chamada "DefaultConnection" do appsettings.json
            _connectionString = configuration.GetConnectionString("DefaultConnection")

                // Caso não encontre a string de conexão, lança um erro
                ?? throw new ArgumentNullException("String de conexão 'DefaultConnection' não encontrada");
        }

        // Método assíncrono que retorna uma lista de jogos do banco
        public async Task<List<Jogo>> GetAllJogosAsync()
        {
            // Cria uma lista vazia para armazenar os jogos retornados
            var jogos = new List<Jogo>();

            // Cria uma conexão com o banco de dados usando a string de conexão
            using (var connection = new SqlConnection(_connectionString))
            {
                // Abre a conexão com o banco de forma assíncrona
                await connection.OpenAsync();

                // Query SQL que será executada
                var commandText = @"SELECT * FROM dbo.Jogos";

                // Cria o comando SQL que será executado
                using (var command = new SqlCommand(commandText, connection))

                // Executa o comando e retorna um leitor de dados (SqlDataReader)
                using (var reader = await command.ExecuteReaderAsync())
                {
                    // Percorre todas as linhas retornadas pela consulta
                    while (await reader.ReadAsync())
                    {
                        // Adiciona um novo objeto Jogo na lista
                        jogos.Add(new Jogo
                        {
                            // Lê o valor da coluna JogoId como inteiro
                            JogoId = reader.GetInt32(reader.GetOrdinal("JogoId")),

                            // Lê o nome do jogo
                            JogoNome = reader.GetString(reader.GetOrdinal("JogoNome")),

                            // Verifica se a coluna é NULL antes de ler
                            JogoDescricao = reader.IsDBNull(reader.GetOrdinal("JogoDescricao"))
                                ? null
                                : reader.GetString(reader.GetOrdinal("JogoDescricao")),

                            // Verifica se a capa é NULL antes de ler
                            JogoCapa = reader.IsDBNull(reader.GetOrdinal("JogoCapa"))
                                ? null
                                : reader.GetString(reader.GetOrdinal("JogoCapa")),

                            // Verifica se o preço é NULL antes de ler
                            JogoPreco = reader.IsDBNull(reader.GetOrdinal("JogoPreco"))
                                ? null
                                : reader.GetFloat(reader.GetOrdinal("JogoPreco"))
                        });
                    }
                }
            }

            // Retorna a lista de jogos encontrada
            return jogos;
        }

        // Método que retorna um jogo específico baseado no ID
        public async Task<Jogo?> GetJogoByIdAsync(int id)
        {
            // Cria conexão com o banco
            using (var connection = new SqlConnection(_connectionString))
            {
                // Abre a conexão
                await connection.OpenAsync();

                // Query SQL que busca apenas um jogo com o ID informado
                var commandText = @"SELECT TOP 1 * FROM dbo.Jogos WHERE JogoId = @JogoId";

                // Cria o comando SQL
                using (var command = new SqlCommand(commandText, connection))
                {
                    // Adiciona o parâmetro para evitar SQL Injection
                    command.Parameters.AddWithValue("@JogoId", id);

                    // Executa a consulta
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        // Verifica se encontrou algum registro
                        if (await reader.ReadAsync())
                        {
                            // Retorna o objeto Jogo preenchido
                            return new Jogo
                            {
                                JogoId = reader.GetInt32(reader.GetOrdinal("JogoId")),
                                JogoNome = reader.GetString(reader.GetOrdinal("JogoNome")),
                                JogoDescricao = reader.IsDBNull(reader.GetOrdinal("JogoDescricao"))
                                    ? null
                                    : reader.GetString(reader.GetOrdinal("JogoDescricao")),
                                JogoCapa = reader.IsDBNull(reader.GetOrdinal("JogoCapa"))
                                    ? null
                                    : reader.GetString(reader.GetOrdinal("JogoCapa")),
                                JogoPreco = reader.IsDBNull(reader.GetOrdinal("JogoPreco"))
                                    ? null
                                    : reader.GetFloat(reader.GetOrdinal("JogoPreco"))
                            };
                        }
                    }
                }
            }

            // Caso não encontre nenhum jogo, retorna null
            return null;
        }

        // Método responsável por inserir um novo jogo no banco
        public async Task CreateJogoAsync(Jogo jogo)
        {
            // Cria conexão com o banco
            using (var connection = new SqlConnection(_connectionString))
            {
                // Abre a conexão
                await connection.OpenAsync();

                // Query SQL para inserir um novo jogo
                var commandText = @"INSERT INTO dbo.Jogos (JogoNome, JogoDescricao, JogoCapa, JogoPreco) 
                                    VALUES (@JogoNome, @JogoDescricao, @JogoCapa, @JogoPreco)";

                // Cria o comando SQL
                using (var command = new SqlCommand(commandText, connection))
                {
                    // Adiciona os parâmetros com os valores do objeto jogo
                    command.Parameters.AddWithValue("@JogoNome", jogo.JogoNome);

                    // Se for null envia DBNull para o banco
                    command.Parameters.AddWithValue("@JogoDescricao", (object)jogo.JogoDescricao ?? DBNull.Value);
                    command.Parameters.AddWithValue("@JogoCapa", (object)jogo.JogoCapa ?? DBNull.Value);
                    command.Parameters.AddWithValue("@JogoPreco", (object)jogo.JogoPreco ?? DBNull.Value);

                    // Executa o comando de inserção
                    await command.ExecuteNonQueryAsync();
                }
            }
        }

        // Método responsável por atualizar um jogo existente
        public async Task<bool> UpdateJogoAsync(int id, Jogo jogo)
        {
            // Cria conexão com o banco
            using (var connection = new SqlConnection(_connectionString))
            {
                // Abre a conexão
                await connection.OpenAsync();

                // Query SQL para atualizar o jogo
                var commandText = @"UPDATE dbo.Jogos 
                                    SET JogoNome = @JogoNome, 
                                        JogoDescricao = @JogoDescricao, 
                                        JogoCapa = @JogoCapa, 
                                        JogoPreco = @JogoPreco 
                                    WHERE JogoId = @JogoId";

                // Cria o comando SQL
                using (var command = new SqlCommand(commandText, connection))
                {
                    // Adiciona os parâmetros
                    command.Parameters.AddWithValue("@JogoId", id);
                    command.Parameters.AddWithValue("@JogoNome", jogo.JogoNome);
                    command.Parameters.AddWithValue("@JogoDescricao", (object)jogo.JogoDescricao ?? DBNull.Value);
                    command.Parameters.AddWithValue("@JogoCapa", (object)jogo.JogoCapa ?? DBNull.Value);
                    command.Parameters.AddWithValue("@JogoPreco", (object)jogo.JogoPreco ?? DBNull.Value);

                    // Executa o update e retorna quantas linhas foram afetadas
                    int rowsAffected = await command.ExecuteNonQueryAsync();

                    // Se alterou alguma linha retorna true
                    return rowsAffected > 0;
                }
            }
        }

        // Método responsável por excluir um jogo do banco
        public async Task<bool> DeleteJogoAsync(int id)
        {
            // Cria conexão com o banco
            using (var connection = new SqlConnection(_connectionString))
            {
                // Abre a conexão
                await connection.OpenAsync();

                // Query SQL para deletar o jogo
                var commandText = @"DELETE FROM dbo.Jogos WHERE JogoId = @JogoId";

                // Cria o comando SQL
                using (var command = new SqlCommand(commandText, connection))
                {
                    // Passa o ID como parâmetro
                    command.Parameters.AddWithValue("@JogoId", id);

                    // Executa o delete
                    int rowsAffected = await command.ExecuteNonQueryAsync();

                    // Retorna true se algum registro foi removido
                    return rowsAffected > 0;
                }
            }
        }
    }
}