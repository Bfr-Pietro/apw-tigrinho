// Função para validar o formulário
document.getElementById('promoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const promoCode = document.getElementById('promo-code').value;
    
    // Verificando se pelo menos um checkbox foi marcado
    const platformChecked = document.querySelector('input[name="platform"]:checked');
  
    if (!platformChecked) {
      document.getElementById('form-message').textContent = "Você deve escolher uma plataforma!";
      document.getElementById('form-message').style.color = "#dc3545";
      return;
    }
  
    if (name && email && promoCode) {
      document.getElementById('form-message').textContent = "Cupom solicitado com sucesso! Confira seu e-mail.";
      document.getElementById('form-message').style.color = "#28a745";
    } else {
      document.getElementById('form-message').textContent = "Preencha todos os campos corretamente.";
      document.getElementById('form-message').style.color = "#dc3545";
    }
  });
  
  // ScrollReveal
  ScrollReveal().reveal('.banner-content', { delay: 300, origin: 'top', distance: '50px', opacity: 0 });
  ScrollReveal().reveal('.form-section', { delay: 300, origin: 'bottom', distance: '50px', opacity: 0 });
  ScrollReveal().reveal('.footer', { delay: 300, origin: 'bottom', distance: '50px', opacity: 0 });
  