# Recuperação de senha

**RF - Requisitos Funcionais**

- O usuario deve poder recuperar sua senha informando seu email;
- O usuario deve receber um email com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF - Requisitos Não-Funcionais**

- utilizar mailtrap em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em producao;
- O envio de emails deve acontecer em segundo plano (background job);

**RN - Regras de Negócio**

- O link enviado por email para resetar sua senha, deve expirar depois de um tempo;
- O usuario precisa confirmar a nova senha para efetuar a operacao de recuperacao;

# Atualização do Perfil
**RF - Requisitos Funcionais**
- O usuario deve poder atualizar seu nome, email e senha

**RN - Regras de Negócio**
- O usuario nao pode alterar seu email por outro email ja em uso
- Para atualizar sua senha o usuario deve informar a sua senha antiga
- Para atualizar sua senha o usuario deve confirmar sua nova senha

# Painel do Prestador
**RF - Requisitos Funcionais**

- O prestador deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**RNF - Requisitos Não-Funcionais**

- Os agendamentos do prestador deve ser armazenado em cache;
- As notificacoes devem ser armazenadas no MongoDB
- As notificacoes do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN - Regras de Negócio**

- A notificacao deve ter um status de lida ou nao lida para que o prestador possa controlar;


# Agendamento de Serviços,

**RF - Requisitos Funcionais**

- O usuario deve poder listar todos os prestadores de servicos cadastrados;
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;
**RNF - Requisitos Não-Funcionais**

- A listagem de prestadores deve ser armazenada em cache

**RN - Regras de Negócio**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponiveis entre 8h as 18h (primeiro atendimento as 8 e ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar servicos consigo mesmo;
