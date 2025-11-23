const pets = [
    { id: 1, name: "Lord e Leon", size: "Médio", gender: "Macho", age: "7 a 11 meses", description: "Adote Lord e Leon, gatinhos siameses adoráveis, sociáveis e saudáveis. Eles são perfeitos para qualquer lar. Torne sua família mais feliz com eles!", image: "fotos/lord-leon.png" },
    { id: 2, name: "Romeu", size: "Médio", gender: "Macho", age: "3 anos", description: "Adote Romeu, um adorável cachorro de 3 anos com temperamento calmo e dócil. Ele está pronto para ser seu companheiro leal e cheio de amor. Adoção responsável!", image: "fotos/romeu.png" },
    { id: 3, name: "Tinoco", size: "Grande", gender: "Macho", age: "3 anos", description: "Encontre o gentil Tinoco, um gato macho de 3 anos, castrado e vermifugado, que procura um lar seguro. Ele precisa de carinho e um ambiente tranquilo.", image: "fotos/tinoco.png" },
    { id: 4, name: "Lizi", size: "Médio", gender: "Fêmea", age: "6 ou mais anos", description: "Ajude a encontrar a Lizi! Cadela SRD desaparecida na Avenida das Torres. Gordinha, dócil e brincalhona, pode ter sido atropelada. Compartilhe!", image: "fotos/lizi.png" },
    { id: 5, name: "Beto", size: "Médio", gender: "Macho", age: "4 anos", description: "Adote Beto, um cachorro SRD de 4 anos, dócil e sociável. Ele procura um lar com quintal e cuidados especiais. Dê uma chance a esse amor!", image: "fotos/beto.png" },
    { id: 6, name: "Pandora", size: "Médio", gender: "Fêmea", age: "7 a 11 meses", description: "Adote Pandora, uma cadelinha SRD fofa e sociável. Ideal para famílias com crianças e pets. Dê a ela o carinho e espaço que merece! Transforme vidas!", image: "fotos/pandora.png" }
];

function renderPets() {
    const container = document.getElementById('petsContainer');
    container.innerHTML = '';
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <div class="pet-details">
                    <span class="detail-badge">${pet.size}</span>
                    <span class="detail-badge">${pet.gender}</span>
                    <span class="detail-badge">${pet.age}</span>
                </div>
                <p>${pet.description}</p>
                <button class="btn btn-adopt" onclick="handleAdopt('${pet.name}')">Quero Adotar ❤️</button>
            </div>
        `;
        container.appendChild(petCard);
    });
}

function handleAdopt(petName) {
    const modal = document.getElementById('adoptModal');
    const petNameField = document.getElementById('petNameField');
    petNameField.value = petName;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // foco no primeiro campo
    setTimeout(() => {
        const nome = document.getElementById('nome');
        if (nome) nome.focus();
    }, 120);
}

function closeAdoptModal() {
    const modal = document.getElementById('adoptModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

// Fechar modal ao clicar fora do dialog e tratar submit
document.addEventListener('DOMContentLoaded', () => {
    const adoptModal = document.getElementById('adoptModal');
    if (adoptModal) {
        adoptModal.addEventListener('click', (e) => {
            if (e.target === adoptModal) closeAdoptModal();
        });
    }

    const form = document.getElementById('adoptForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const payload = Object.fromEntries(data.entries());
            // Aqui você pode enviar os dados para um servidor via fetch
            alert(`Obrigado! Sua solicitação para adotar ${payload.petName} foi enviada.\n\nEntraremos em contato pelo WhatsApp ou telefone informado.`);
            form.reset();
            closeAdoptModal();
        });
    }

    renderPets();
});

 document.getElementById('cadastroForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const city = document.getElementById('city').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validação: campos vazios
            if (!name || !email || !phone || !city || !password) {
                alert('⚠️ Por favor, preencha todos os campos!');
                return;
            }
            
            // Validação: formato de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ Por favor, digite um e-mail válido!');
                return;
            }
            
            // Validação: tamanho da senha
            if (password.length < 6) {
                alert('⚠️ A senha deve ter pelo menos 6 caracteres!');
                return;
            }
            
            // Sucesso
            alert(`✅ Cadastro realizado com sucesso!\n\nBem-vindo(a), ${name}! 🎉\n\nAgora você já pode fazer login e conhecer nossos pets disponíveis para adoção. 🐾`);
            window.location.href = 'login.html';
        });


           // Saudação automática baseada no horário
        function updateGreeting() {
            const hour = new Date().getHours();
            const greetingElement = document.getElementById('greeting');
            
                if (hour >= 5 && hour < 12) {
                    greetingElement.textContent = 'Bom dia! 👋';
                } else if (hour >= 12 && hour < 18) {
                    greetingElement.textContent = 'Boa tarde! 👋';
                } else {
                    greetingElement.textContent = 'Boa noite! 👋';
                }
        }
        
        updateGreeting();

         document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validação: campos vazios
            if (!email || !password) {
                alert('⚠️ Por favor, preencha todos os campos!');
                return;
            }
            
            // Validação: formato de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ Por favor, digite um e-mail válido!');
                return;
            }
            
            // Sucesso
            alert('✅ Login realizado com sucesso!\n\nBem-vindo de volta! 🐾');
            window.location.href = 'index.html';
        });
