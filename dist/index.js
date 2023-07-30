$(document).ready(function () {
  // Обработчик события для ссылки с якорем
  $('a[href^="#"]').click(function (e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    var targetDiv = $($(this).attr('href')); // Получаем целевой div
    var offset = targetDiv.offset().top; // Получаем его отступ от верха страницы

    // Плавно прокручиваем страницу до целевого div
    $('html, body').animate(
      {
        scrollTop: offset - ($(window).height() - targetDiv.outerHeight()) / 2,
      },
      1000
    );
  });
  $('.calc-in-btn').on('click', function () {
    var calcIn = parseFloat($('.calc-in-input').val());
    if (isNaN(calcIn) || calcIn < 1) {
      $('.calc-out-val').text('0');
    } else {
      var calcOut = calcIn * 3.8;
      $('.calc-out-val').text(calcOut.toFixed(0) + '€/мес.');
    }
  });
});

$(document).ready(function() {
    $('.main-poper>div').fadeOut()
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(".main-poper div").each(function(index) {
            const $div = $(this);
            $div.delay(index * 500).fadeIn(500);
            });
            observer.disconnect();
        }
        });
  });
  observer.observe($(".main-poper")[0]);
});

$(document).ready(function () {
  const inputtop = document.querySelector('#topphone');
  const ititop = window.intlTelInput(inputtop, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
  });
});
$(document).ready(function () {
  const inputbot = document.querySelector('#botphone');
  const itibot = window.intlTelInput(inputbot, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
  });
});

