# MEMORIA.md - Calculadora de Propinas
*Última actualización: 2026-11-19*
*Estado: Proyecto en desarrollo inicial*

## ✅ FUNCIONALIDADES QUE FUNCIONAN
- Estructura HTML semántica y accesible (index.html)
- Formulario con input para monto de cuenta (validación nativa min/step)
- Botones rápidos 10%/15%/20% con data-tip y aria-pressed
- Input personalizado para porcentaje (0-100)
- Área de resultados oculta (propina + total)
- Área de errores con role="alert"
- Separación HTML/CSS/JS correcta
- Estilos CSS completos con variables en :root
- Diseño responsive (móvil 320px - desktop)
- Tarjeta centrada con sombras y bordes redondeados
- Botones rápidos destacados con estados hover/active/focus
- Área de resultados visible con animación fadeIn
- Mensajes de error en rojo (inline + banner global)
- **Fix: inputs con box-sizing: border-box → márgenes simétricos correctos**

## 🐛 BUGS CONOCIDOS
*(Vacío por ahora - se llenará si encontramos algo)*

## 📝 DECISIONES ARQUITECTÓNICAS
- Stack: HTML + CSS (con variables) + JS ES6+ (vanilla)
- Separación estricta: HTML / CSS / JS
- Comentarios en español, código en inglés
- Sin frameworks ni librerías externas
- Modo de trabajo: Consultivo (la IA explica antes de actuar)
- Uso de validación nativa HTML5 + validación JS personalizada
- Botones tipo button (no submit) para porcentajes rápidos
- aria-live en mensajes de error para accesibilidad
- Variables CSS para colores, espaciados, tipografía y sombras
- Mobile-first con breakpoints en 480px y 360px
- box-sizing: border-box global para evitar desbordes

## 📊 HISTORIAL DE CAMBIOS
- 2026-11-19: Creación del proyecto y archivos base (AGENTS.md, MEMORIA.md)
- 2026-11-19: Creación de index.html con estructura completa (líneas 1-58)
- 2026-11-19: Creación de styles.css limpio y completo (250 líneas)

## 🎯 PRÓXIMOS PASOS PENDIENTES
- [x] Crear estructura HTML básica (index.html)
- [x] Crear estilos base (styles.css)
- [ ] Implementar lógica de cálculo (script.js)
- [ ] Agregar validaciones de inputs
- [ ] Agregar botones rápidos (10%, 15%, 20%)