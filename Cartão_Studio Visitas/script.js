/*
  Studio Glamourosas

  © 2026 Studio Glamourosas — Todos os direitos reservados.

  Este código não pode ser copiado, redistribuído ou reutilizado
  sem autorização prévia da responsável pelo Studio Glamourosas.
*/



/* ================================================================
   ÁREA DE ALTERAÇÃO RÁPIDA

   Edite aqui textos, imagens, links e WhatsApp do site.

   ================================================================ */

const SITE_CONFIG = {

  /* ==============================================================
     TEXTOS
     ============================================================== */

  textos: {

    telefone: '(84) 98707-6878',

    instagram: '@studio_glamourosas',

    endereco:
      'Rua dos Caicos, Natal, Rio Grande do Norte 59037-700'

  },


  /* ==============================================================
     IMAGENS

     Área reservada para futuras alterações de imagens.
     ============================================================== */

  imagens: {

    observacao:
      'As imagens da galeria podem ser adicionadas futuramente nos elementos .g-item.'

  },


  /* ==============================================================
     LINKS
     ============================================================== */

  links: {

    instagram:
      'https://www.instagram.com/studio_glamourosas/'

  },


  /* ==============================================================
     WHATSAPP
     ============================================================== */

  whatsapp: {

    numero: '5584987076878',

    mensagens: {

      geral:
        'Olá! Vim pelo cartão digital do Studio Glamourosas e quero saber mais 😊',

      agendamento:
        'Olá! Vim pelo cartão digital do Studio Glamourosas e quero solicitar um agendamento ⏰',

      servicos:
        'Olá! Vim pelo cartão digital do Studio Glamourosas e gostaria de saber mais sobre os serviços disponíveis ',

      curso:
        'Olá! Vim pelo cartão digital do Studio Glamourosas e gostaria de saber mais informações sobre os cursos ',

      galeria:
        'Olá! Vi a galeria do Studio Glamourosas e gostaria de saber mais sobre esse resultado'

    }

  }

};


/* ================================================================
   FUNÇÃO PARA CRIAR LINK DO WHATSAPP
   ================================================================ */

const whatsappLink = (mensagem) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;


/* ================================================================
   APLICA CONFIGURAÇÕES AO SITE
   ================================================================ */

const aplicarConfiguracao = () => {

  document
    .querySelectorAll('[data-edit="phone-display"]')
    .forEach(el => {
      el.textContent = SITE_CONFIG.textos.telefone;
    });


  document
    .querySelectorAll('[data-edit="instagram-handle"]')
    .forEach(el => {
      el.textContent = SITE_CONFIG.textos.instagram;
    });


  document
    .querySelectorAll('[data-edit="address"]')
    .forEach(el => {
      el.textContent = SITE_CONFIG.textos.endereco;
    });


  document
    .querySelectorAll('[data-edit="instagram-link"]')
    .forEach(el => {
      el.href = SITE_CONFIG.links.instagram;
    });


  document
    .querySelectorAll('[data-whatsapp]')
    .forEach(el => {

      const tipo = el.dataset.whatsapp;

      el.href = whatsappLink(
        SITE_CONFIG.whatsapp.mensagens[tipo] ||
        SITE_CONFIG.whatsapp.mensagens.geral
      );

    });

};


/*
  Studio Glamourosas
  © 2026 Studio Glamourosas — Todos os direitos reservados.

  Este código não pode ser copiado, redistribuído ou reutilizado
  sem autorização prévia da responsável pelo Studio Glamourosas.
*/


/* ================================================================
   APLICA A CONFIGURAÇÃO ASSIM QUE O DOM ESTIVER DISPONÍVEL
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  aplicarConfiguracao();
});


/* ================================================================
   TELA DE CARREGAMENTO
   ================================================================ */

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  setTimeout(() => {

    loader.classList.add('loader-hidden');

  }, 800);

});


/* ================================================================
   MENU MOBILE
   ================================================================ */

const menuBtn =
  document.getElementById('menuBtn');

const navList =
  document.getElementById('navList');


menuBtn.addEventListener('click', () => {

  const open =
    navList.classList.toggle('open');

  menuBtn.setAttribute(
    'aria-expanded',
    open
  );

});


navList
  .querySelectorAll('a')
  .forEach(a => {

    a.addEventListener('click', () => {

      navList.classList.remove('open');

      menuBtn.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });