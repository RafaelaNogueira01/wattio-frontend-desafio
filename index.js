const planos = [
    {
      id: 1,
      nome: "EnerBásico",
      valorMinimoMensal: 0.0,
      valorMaximoMensal: 1500.0,
      desconto: 0.1,
      contratoPF: true,
      contratoPJ: false,
    },
    {
      id: 2,
      nome: "EnerPopular",
      valorMinimoMensal: 0.0,
      valorMaximoMensal: 2500.0,
      desconto: 0.15,
      contratoPF: true,
      contratoPJ: false,
    },
    {
      id: 3,
      nome: "EnerFácil",
      valorMinimoMensal: 1000.0,
      valorMaximoMensal: 40000.0,
      desconto: 0.18,
      contratoPF: true,
      contratoPJ: true,
    },
    {
      id: 4,
      nome: "EnerPro",
      valorMinimoMensal: 2000.0,
      valorMaximoMensal: 10000.0,
      desconto: 0.2,
      contratoPF: false,
      contratoPJ: true,
    },
    {
      id: 5,
      nome: "EnerLimpa",
      valorMinimoMensal: 10000.0,
      valorMaximoMensal: 80000.0,
      desconto: 0.25,
      contratoPF: true,
      contratoPJ: true,
    },
    {
      id: 6,
      nome: "EnerGrande",
      valorMinimoMensal: 40000.0,
      valorMaximoMensal: 100000.0,
      desconto: 0.3,
      contratoPF: false,
      contratoPJ: true,
    },
  ];
  
  function encontrarPlano(valor, tipoContrato) {
    const planosFiltrados = planos.filter((plano) => {
      if (tipoContrato === "PF") {
        return plano.contratoPF;
      } else if (tipoContrato === "PJ") {
        return plano.contratoPJ;
      } else {
        return false;
      }
    });
  
    const planoEncontrado = planosFiltrados.filter((plano) => {
      return valor >= plano.valorMinimoMensal && valor <= plano.valorMaximoMensal;
    });
  
    if (planoEncontrado.length === 0) {
      return {
        erro: "Nenhum plano encontrado para o valor e tipo de contrato informados.",
      };
    }
  
    const valorComDesconto = planoEncontrado.map((plano) => {
      const valorDesconto = (valor * plano.desconto).toFixed(2);
  
      return { ...plano, valorDesconto };
    });
  
    return valorComDesconto;
  }
  
  console.log(encontrarPlano(5000, "PF"));
  