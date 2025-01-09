var usuarios = [];



window.onload = () => {
    document.getElementById('formCreateUser').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var usuario = document.getElementById('nomeUsuario').value
        var senha = document.getElementById('senha').value
        var email = document.getElementById('email').value
        
        usuarios.push({
            usuario: usuario,
            senha: senha,
            email: email
        })

        renderTableBody(usuarios)
        
    })
}

function renderTableBody(usuarios)
{
    
    var tbody = document.querySelector('.tabela-dinamica tbody')

    tbody.innerHTML = "";

    usuarios.forEach(usuario => {
        var tr = document.createElement('tr')


        var tdName = document.createElement('td')
        tdName.textContent = usuario.usuario
        tr.appendChild(tdName)


        var tdNascimento = document.createElement('td')
        tdNascimento.textContent = usuario.senha
        tr.appendChild(tdNascimento)


        var tdCargo = document.createElement('td')
        tdCargo.textContent = usuario.email
        tr.appendChild(tdCargo)

        tbody.appendChild(tr)

    });                                                   
    
}