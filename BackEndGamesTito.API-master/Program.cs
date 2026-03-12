
using BackEndGamesTito.API.Repositories;
using BackEndGamesTito.API.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Configura��o do CORS (Fundamental para multiplataformas)
builder.Services.AddCors(options =>
{
    options.AddPolicy("GamesTitoPolicy", policy =>
    {
        policy.AllowAnyOrigin() // Permite que o seu sistema web, desktop ou mobile acesse a API
              .AllowAnyHeader() // Permite qualquer cabe�alho HTTP (tokens e json)
              .AllowAnyMethod(); // Permite qualquer m�todo HTTP (GET, POST, PUT, DELETE, etc.)
    });
});

builder.Services.AddScoped<UsuarioRepository>();


builder.Services.AddScoped<EmailService>();
builder.Services.AddScoped<SmsService>(); 
builder.Services.AddScoped<JogoRepository>(); 

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// Habilita o CORS antes do mapeamento dos controllers
app.UseCors("GamesTitoPolicy"); // ativa a politica antes de tudo

app.UseHttpsRedirection();

// Importante: Habilita o uso de arquivos est�ticos (para a sua p�gina de reset-password)
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();
