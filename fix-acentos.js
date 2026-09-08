const fs = require('fs');
const path = require('path');
const SRC = path.join(__dirname, 'src');

const replacements = [
  // palavras sem acento -> com acento
  { from: 'Aquisicao', to: 'Aquisição' },
  { from: 'acompanhe o projeto ate', to: 'acompanhe o projeto até' },
  { from: 'Checklist padrao', to: 'Checklist padrão' },
  { from: 'Ultima comun.', to: 'Última comun.' },
  { from: 'saude do sistema', to: 'saúde do sistema' },
  { from: 'conteudo', to: 'conteúdo' },
  { from: 'regulatorio', to: 'regulatório' },
  { from: 'Estagio', to: 'Estágio' },
  { from: 'Anual', to: 'Anual' },
  { from: 'energia solar sem complicacao', to: 'energia solar sem complicação' },
  { from: 'Simule, projete, acompanhe e monitore seu sistema fotovoltaico em uma plataforma unica.', to: 'Simule, projete, acompanhe e monitore seu sistema fotovoltaico em uma plataforma única.' },
  { from: 'Area utilizada', to: 'Área utilizada' },
  { from: 'Area necessária', to: 'Área necessária' },
  { from: 'Area aproximada', to: 'Área aproximada' },
  { from: 'Area estimada', to: 'Área estimada' },
  { from: 'Area do cliente', to: 'Área do cliente' },
  { from: '>Area<', to: '>Área<' },
  { from: 'Potencia', to: 'Potência' },
  { from: 'Localizacao', to: 'Localização' },
  { from: 'Configuracao', to: 'Configuração' },
  { from: 'Irradiacao', to: 'Irradiação' },
  { from: 'Historico', to: 'Histórico' },
  { from: 'Informacoes', to: 'Informações' },
  { from: 'Orientacao', to: 'Orientação' },
  { from: 'Geracao', to: 'Geração' },
  { from: 'Proximos', to: 'Próximos' },
  { from: 'Ola', to: 'Olá' },
  { from: 'Visao', to: 'Visão' },
  { from: 'Instalacao', to: 'Instalação' },
  { from: 'Simulacao', to: 'Simulação' },
  { from: 'Analise', to: 'Análise' },
  { from: 'Documentacao', to: 'Documentação' },
  { from: 'Solicitacao', to: 'Solicitação' },
  { from: 'operacao', to: 'operação' },
  { from: 'Operacao', to: 'Operação' },
  { from: 'Fibrocimento', to: 'Fibrocimento' },
  { from: 'nao e ', to: 'não é ' },
  { from: ' nao ', to: ' não ' },
  { from: ' nao ', to: ' não ' },
  { from: 'ha ', to: 'há ' },
  { from: ' e ', to: ' é ' },
  { from: 'Conheca', to: 'Conheça' },
  { from: 'orientacoes', to: 'orientações' },
  { from: 'especificas', to: 'específicas' },
  { from: 'Glossario', to: 'Glossário' },
  { from: 'degradacao', to: 'degradação' },
  { from: 'aquisicao', to: 'aquisição' },
  { from: 'implantacao', to: 'implantação' },
  { from: 'gestao', to: 'gestão' },
  { from: 'administracao', to: 'administração' },
  { from: 'secoes', to: 'seções' },
  { from: 'Duvidas', to: 'Dúvidas' },
  { from: 'Configuracoes', to: 'Configurações' },
  { from: 'alteracoes', to: 'alterações' },
  { from: 'Gestao', to: 'Gestão' },
  { from: 'Instalacoes', to: 'Instalações' },
  { from: 'Acoes', to: 'Ações' },
  { from: 'ficticias', to: 'fictícias' },
  { from: 'versao', to: 'versão' },
  { from: 'Notificacoes', to: 'Notificações' },
  { from: 'reinicializacao', to: 'reinicialização' },
  { from: 'inspecao', to: 'inspeção' },
  { from: 'depreciacao', to: 'depreciação' },
  { from: 'inflacao', to: 'inflação' },
  { from: 'mudancas', to: 'mudanças' },
  { from: 'tarifarias', to: 'tarifárias' },
  { from: 'Caracteristica', to: 'Característica' },
  { from: 'edicao', to: 'edição' },
  { from: 'servico', to: 'serviço' },
  { from: 'Limitacao', to: 'Limitação' },
  { from: 'decisoes', to: 'decisões' },
  { from: 'VoltarProximo', to: 'Voltar Próximo' },
];

let modified = 0;

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  replacements.forEach(r => {
    content = content.split(r.from).join(r.to);
  });
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('✓', path.relative(__dirname, file));
    modified++;
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(js|json|html|md)$/.test(p)) processFile(p);
  });
}

walk(SRC);
console.log('Arquivos modificados:', modified);
