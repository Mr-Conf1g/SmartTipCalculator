# MEMORIA.md - Calculadora de Propinas

*Última actualización: 2026-11-19*
*Estado: Proyecto completado con éxito*

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
- **Lógica JS implementada en script.js con cálculo manual (botones solo seleccionan, calcular al presionar "Calcular")**
- Validaciones estrictas en DOM (sin alerts)
- Template literals en JavaScript
- Estado global de porcentaje con `currentTipPercentage`
- Event listeners para botones rápidos, input custom y botón Calcular
- Form submit manejado correctamente

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
- **Cálculo manual: quick tips solo seleccionan porcentaje, cálculo final en botón "Calcular"**

## 📊 HISTORIAL DE CAMBIOS

- 2026-11-19: Creación del proyecto y archivos base (AGENTS.md, MEMORIA.md)
- 2026-11-19: Creación de index.html con estructura completa (líneas 1-58)
- 2026-11-19: Creación de styles.css limpio y completo (250 líneas)
- 2026-11-19: Creación de script.js con lógica de cálculo de propinas (ES6+)
- 2026-11-19: **Modificación de UX: botones rápidos ahora solo seleccionan porcentaje, cálculo ocurre solo al presionar "Calcular"**
- 2026-11-19: **Auto-verificación completada exitente con todas las validaciones**

## 🎯 PRÓXIMOS PASOS PENDIENTES

- [x] Crear estructura HTML básica (index.html)
- [x] Crear estilos base (styles.css)
- [x] Implementar lógica de cálculo (script.js)
- [x] Agregar validaciones de inputs
- [x] Agregar botones rápidos (10%, 15%, 20%) y UX de cálculo manual
- [ ] Pruebas en navegadores adicionales (Chrome, Firefox, Edge)
- [ ] Agregar modo oscuro (dark mode) opcional