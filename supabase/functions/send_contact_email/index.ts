import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data = await req.json();
    const { name, phone, email, equipment_types, message } = data;

    const equipmentList = Array.isArray(equipment_types) 
      ? equipment_types.join(", ")
      : equipment_types;

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #d87934; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .footer { background-color: #2b2220; color: white; padding: 15px; border-radius: 0 0 5px 5px; text-align: center; font-size: 12px; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #874234; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #d87934; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Solicitação de Orçamento - MD Locadora</h1>
    </div>
    <div class="content">
      <p>Você recebeu uma nova solicitação de orçamento através do formulário de contato do site.</p>
      
      <div class="field">
        <div class="label">Nome do Cliente:</div>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <div class="label">Telefone:</div>
        <div class="value">${phone}</div>
      </div>
      
      <div class="field">
        <div class="label">E-mail:</div>
        <div class="value">${email}</div>
      </div>
      
      <div class="field">
        <div class="label">Equipamentos Solicitados:</div>
        <div class="value">${equipmentList}</div>
      </div>
      
      <div class="field">
        <div class="label">Mensagem:</div>
        <div class="value">${message || "(Sem mensagem adicional)"}</div>
      </div>
      
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">Data: ${new Date().toLocaleString("pt-BR")}</p>
    </div>
    <div class="footer">
      <p>Este é um e-mail automático do sistema de contato da MD Locadora.</p>
    </div>
  </div>
</body>
</html>
    `;

    const mailgunDomain = Deno.env.get("MAILGUN_DOMAIN");
    const mailgunApiKey = Deno.env.get("MAILGUN_API_KEY");
    const ownerEmail = Deno.env.get("OWNER_EMAIL") || "contato@mdlocadora.com.br";

    if (!mailgunDomain || !mailgunApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Configuração de email não disponível",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const formData = new FormData();
    formData.append("from", `MD Locadora <noreply@${mailgunDomain}>`);
    formData.append("to", ownerEmail);
    formData.append("subject", `Nova Solicitação de Orçamento - ${name}`);
    formData.append("html", emailContent);

    const auth = btoa(`api:${mailgunApiKey}`);

    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Mailgun error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Erro ao enviar e-mail",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Solicitação enviada com sucesso!",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro ao processar solicitação",
        error: String(error),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
