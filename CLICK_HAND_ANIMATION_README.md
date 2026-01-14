# ClickHandAnimation - Componente de Interação Visual

## 📋 Descrição

Um componente React reutilizável que exibe uma animação de mão clicando para incentivar a interação do usuário em dispositivos móveis. Perfeito para guiar usuários a clicarem em imagens ou elementos interativos.

## ✨ Características

- ✅ Animação suave de clique com movimento vertical e redução de escala
- ✅ Loop infinito com intervalo configurável
- ✅ Responsivo - aparece apenas em telas pequenas (customizável)
- ✅ Posicionamento flexível (left, center, right, top, bottom, custom)
- ✅ Não bloqueia interação (`pointer-events: none`)
- ✅ Efeito de pulso visual adicional
- ✅ TypeScript com tipos completos
- ✅ Bem documentado com JSDoc
- ✅ Zero dependências além de React e Framer Motion

## 📦 Instalação

O componente já está criado em `src/components/ClickHandAnimation.tsx`. Apenas certifique-se de que as dependências estão instaladas:

```bash
npm install react framer-motion
```

## 🚀 Uso Básico

```tsx
import { ClickHandAnimation } from './components/ClickHandAnimation';

export function MyComponent() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <img src="my-image.jpg" alt="Click me" style={{ width: '100%', height: '100%' }} />
      <ClickHandAnimation />
    </div>
  );
}
```

## 🎨 Props (Propriedades)

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `breakpoint` | `number` | `640` | Largura máxima da tela (px) para exibir a animação. Útil para responsividade. |
| `xPosition` | `string` | `'center'` | Posição horizontal: `'left'`, `'center'`, `'right'` ou valor customizado (ex: `'20px'`) |
| `yPosition` | `string` | `'center'` | Posição vertical: `'top'`, `'center'`, `'bottom'` ou valor customizado (ex: `'50px'`) |
| `size` | `number` | `40` | Tamanho da imagem da mão em pixels |
| `loopDelay` | `number` | `1500` | Intervalo entre repetições da animação em milissegundos |

## 📝 Exemplos de Uso

### Exemplo 1: Uso Padrão (Centro da Tela)
```tsx
<div style={{ position: 'relative', width: '100%', height: '300px' }}>
  <img src="image.jpg" alt="Click" style={{ width: '100%', height: '100%' }} />
  <ClickHandAnimation />
</div>
```

### Exemplo 2: Canto Inferior Direito
```tsx
<ClickHandAnimation 
  xPosition="right"
  yPosition="bottom"
  size={48}
/>
```

### Exemplo 3: Breakpoint para Tablets
```tsx
<ClickHandAnimation 
  breakpoint={768}
  loopDelay={2000}
/>
```

### Exemplo 4: Posição Customizada
```tsx
<ClickHandAnimation 
  xPosition="calc(100% - 60px)"
  yPosition="30px"
  size={56}
  loopDelay={1800}
/>
```

## 🎯 Animação Detalhada

A animação consiste em:

1. **Movimento Vertical** (Y): `0px → 12px → 0px`
   - A mão desce sutilmente ao "clicar"
   - Retorna à posição original

2. **Escala**: `1 → 0.9 → 1`
   - Reduz ligeiramente ao simular o "pressionar"
   - Cria efeito de compressão realista

3. **Pulso Visual**: 
   - Círculo ao redor da mão se expande e desaparece
   - Reforça o efeito visual da interação

4. **Timing**:
   - Duração: 600ms por clique
   - Intervalo entre cliques: customizável (padrão 1500ms)

## 📱 Responsividade

Por padrão, o componente aparece apenas em telas menores que **640px** (breakpoint padrão mobile).

Para customizar:
```tsx
<ClickHandAnimation breakpoint={768} /> // Aparece em telas < 768px
<ClickHandAnimation breakpoint={1024} /> // Aparece em telas < 1024px
```

## 🎬 Estrutura Técnica

### Componente
- **Local**: `src/components/ClickHandAnimation.tsx`
- **Tipo**: Functional Component com Hooks
- **Dependências**: React, Framer Motion

### Estados e Effects
- `useEffect`: Monitora redimensionamento de janela
- `useState`: Controla visibilidade baseado no breakpoint

### Animação
- Usa `motion.div` do Framer Motion
- Variantes configuráveis
- Loop infinito com `repeat: Infinity`

## 🛠️ Customização Avançada

### Alterar Imagem da Mão
Se quiser usar uma imagem diferente, edite o caminho em `ClickHandAnimation.tsx`:

```tsx
<img
  src="/images/click.png" // ← Altere aqui
  alt="Clique aqui"
  // ...
/>
```

### Alterar Duração da Animação
Edite a propriedade `duration` em `handVariants`:

```tsx
const handVariants = {
  click: {
    y: [0, 12, 0],
    scale: [1, 0.9, 1],
    transition: {
      duration: 0.6, // ← Altere aqui (em segundos)
      times: [0, 0.5, 1],
      ease: 'easeInOut',
    },
  },
};
```

### Alterar Cor do Pulso
Edite a cor da `borderRadius` no efeito de pulso:

```tsx
<motion.div
  style={{
    // ...
    border: '2px solid rgba(59, 130, 246, 0.5)', // ← Altere a cor aqui
  }}
/>
```

## ⚡ Performance

- ✅ Renderização condicional (apenas em mobile)
- ✅ Sem re-renders desnecessários
- ✅ Otimizado com `pointer-events: none`
- ✅ Animações via GPU (Framer Motion)
- ✅ Sem impacto em telas desktop

## 🚨 Problemas Comuns

### A animação não aparece
1. Certifique-se que o container pai tem `position: 'relative'`
2. Verifique se a tela é menor que o `breakpoint`
3. Verifique se a imagem `public/images/click.png` existe

### A imagem fica cortada
- Aumente o valor de `size`
- Ajuste as posições (`xPosition`, `yPosition`)
- Verifique o `zIndex` do container

### Animação muito rápida/lenta
- Ajuste `loopDelay` para aumentar o intervalo entre cliques
- Edite `duration` em `handVariants` para mudar a velocidade da animação

## 📄 Licença

MIT - Use livremente em seus projetos!

## 🤝 Contribuições

Sinta-se livre para customizar e estender este componente conforme suas necessidades!
