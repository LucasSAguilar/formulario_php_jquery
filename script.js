$("#form_basico").submit((e) => {
  e.preventDefault();

  const dados = new FormData($("#form_basico")[0]);
  $.ajax({
    type: "POST",
    url: "backend/server.php",
    processData: false,
    contentType: false,
    data: dados,
    success: (res) => {
      console.log(`Tudo certo: ${res}`);
    },
    error: (err) => {
      console.error(`Ocorreu um erro: ${err}`);
    },
  });
});
