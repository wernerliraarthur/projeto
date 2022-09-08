console.log(document);
emailjs.init("nREo2BAVqq_t3LIl4");

var formulario = document.querySelector('form#form_contato');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);

    //enviar esses dados por email
    var templateParams = {
        nome: nome,
        email: email,
        motivo: motivo,
        turma: turma,
        mensagem: mensagem,
        notes: 'Check this out!'
    };
    
    emailjs.send('service_071f1is', 'template_nxbgnka', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

    var resultado = document.createElement('p')
    resultado.innerHTML = `
     ${nome}, sua mensagem foi enviada com sucesso!
    `

    formulario.append(resultado)
});



