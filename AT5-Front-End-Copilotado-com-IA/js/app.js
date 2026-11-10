document.addEventListener("DOMContentLoaded", () => {
  const raiz = document.documentElement;
  const btnTema = document.querySelector(".btn-tema");
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const formContato = document.getElementById("form-contato");
  const formStatus = document.getElementById("form-status");
  let grafico = null;

  function lerTema() {
    try {
      return localStorage.getItem("tema");
    } catch (e) {
      return null;
    }
  }

  function salvarTema(tema) {
    try {
      localStorage.setItem("tema", tema);
    } catch (e) {}
  }

  function estaEscuro() {
    return raiz.classList.contains("dark-mode");
  }

  function atualizarBotao() {
    if (btnTema) {
      btnTema.setAttribute("aria-pressed", String(estaEscuro()));
    }
  }

  function atualizarGrafico() {
    if (!grafico) return;
    const cor = estaEscuro() ? "#adb5bd" : "#343638";
    const grade = estaEscuro() ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)";
    grafico.options.scales.x.ticks.color = cor;
    grafico.options.scales.y.ticks.color = cor;
    grafico.options.scales.y.grid.color = grade;
    grafico.update();
  }

  if (lerTema() === "dark") {
    raiz.classList.add("dark-mode");
  }
  atualizarBotao();

  if (btnTema) {
    btnTema.addEventListener("click", () => {
      raiz.classList.toggle("dark-mode");
      salvarTema(estaEscuro() ? "dark" : "light");
      atualizarBotao();
      atualizarGrafico();
    });
  }

  if (formContato && formStatus) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.textContent = "Este formulário é uma demonstração acadêmica e não envia mensagens. Para falar com a dupla, use os perfis do GitHub abaixo.";
      formStatus.classList.remove("d-none");
      formContato.reset();
    });
  }

  const quizForm = document.getElementById("quiz-form");
  const resultadoContainer = document.getElementById("resultado-container");
  const resultadoTitulo = document.getElementById("resultado-titulo");
  const resultadoTexto = document.getElementById("resultado-texto");

  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const p1 = parseInt(document.getElementById("p1").value, 10);
      const p2 = parseInt(document.getElementById("p2").value, 10);
      const p3 = parseInt(document.getElementById("p3").value, 10);
      const pontuacaoTotal = p1 + p2 + p3;

      let classe;
      resultadoContainer.className = "mt-4 p-4 rounded-3"; // Reseta classes anteriores

      if (pontuacaoTotal >= 8) {
        classe = "resultado-bom";
        resultadoTitulo.textContent = "Equilíbrio saudável 🌱";
        resultadoTexto.textContent = "Você consegue aproveitar a autonomia do trabalho remoto sem perder o contato social e o sentimento de pertencimento.";
      } else if (pontuacaoTotal >= 5) {
        classe = "resultado-medio";
        resultadoTitulo.textContent = "Alerta de isolamento médio ⚠️";
        resultadoTexto.textContent = "A sua rotina remota funciona, mas começa a dar sinais de desconexão. Tente incluir mais momentos presenciais ou pausas ativas durante a semana.";
      } else {
        classe = "resultado-risco";
        resultadoTitulo.textContent = "Perfil: expatriado de sofá em risco 🚨";
        resultadoTexto.textContent = "A sua rotina indica um elevado nível de isolamento digital. Considere resgatar conexões locais e estabelecer limites mais claros entre o trabalho e a vida pessoal.";
      }

      resultadoContainer.classList.add(classe);
      resultadoContainer.classList.remove("d-none");
      resultadoContainer.scrollIntoView({ behavior: "smooth" });
    });
  }

  const ctx = document.getElementById("graficoDesafios");
  if (ctx) {
    const corTextoGrafico = estaEscuro() ? "#adb5bd" : "#343638";
    const corGridGrafico = estaEscuro() ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)";

    grafico = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["100% Remoto", "Híbrido", "Presencial"],
        datasets: [{
          label: "Relatam solidão diária (%)",
          data: [25, 21, 16],
          backgroundColor: ["#D9A56C", "#A8B5A2", "#172B3A"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: reduzMovimento ? 0 : 1000
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: corTextoGrafico,
              font: { family: "Montserrat" }
            },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            max: 30,
            ticks: {
              color: corTextoGrafico,
              font: { family: "Montserrat" }
            },
            grid: {
              color: corGridGrafico
            }
          }
        }
      }
    });
  }
});