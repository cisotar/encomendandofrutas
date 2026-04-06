// mensagem.js
function montarMensagemWhatsApp(dados) {
    const { nome, tel, end, pag, destinoNome, cesta } = dados;

    // 1. Saudação e Introdução
    let msg = `Bom dia,\n\nGostaria de deixar registrado um pedido para entrega.\n\n`;
    
    // 2. Cabeçalho Dinâmico (muda conforme o número/nome selecionado)
    const bancaFormatada = destinoNome.includes('--') ? "PEDIDO" : destinoNome.toUpperCase();
    msg += `*NOVO PEDIDO - ${bancaFormatada}*\n`;
    msg += `══════════════════════════════\n\n`;

    // 3. Dados do Cliente
    msg += `👤 *Cliente:* ${nome}\n`;
    msg += `📱 *WhatsApp:* ${tel}\n`;
    msg += `📍 *Endereço:* ${end}\n`;
    msg += `💳 *Pagamento:* ${pag}\n\n`;
    
    msg += `══════════════════════════════\n`;
    msg += `🛒 *ITENS DO PEDIDO:*\n\n`;
    
    // 4. Listagem de Itens da Cesta
    cesta.forEach(it => {
        msg += `✅ *${it.quantidade}x ${it.nome}*\n`;
        msg += `└ Unidade: ${it.unidade}\n`;
        msg += `└ Ponto: ${it.maturacao}\n`;
        if(it.observacao) msg += `└ 📝 Obs: ${it.observacao}\n`;
        msg += `\n`;
    });
    
    // 5. Encerramento e Observação sobre o Tarciso
    msg += `══════════════════════════════\n`;
    msg += `Caso tentem entrar em contato comigo e eu não responda, podem entrar em contato com meu sobrinho Tarciso, o número do telefone dele é 11949406898. Sou idosa e pode ser que eu não veja mensagem ou não ouça o telefone tocando.\n\n`;
    msg += `_Pedido gerado via Catálogo Digital_`;

    return msg;
}