1	# MEMORIA.md - Calculadora de Propinas
2	*Última actualización: 2026-11-19*
3	*Estado: Proyecto completado con éxito*
4	
5	## ✅ FUNCIONALIDADES QUE FUNCIONAN
6	- Estructura HTML semántica y accesible (index.html)
7	- Formulario con input para monto de cuenta (validación nativa min/step)
8	- Botones rápidos 10%/15%/20% con data-tip y aria-pressed
9	- Input personalizado para porcentaje (0-100)
10	- Área de resultados oculta (propina + total)
11	- Área de errores con role="alert"
12	- Separación HTML/CSS/JS correcta
13	- Estilos CSS completos con variables en :root
14	- Diseño responsive (móvil 320px - desktop)
15	- Tarjeta centrada con sombras y bordes redondeados
16	- Botones rápidos destacados con estados hover/active/focus
17	- Área de resultados visible con animación fadeIn
18	- Mensajes de error en rojo (inline + banner global)
19	- **Fix: inputs con box-sizing: border-box → márgenes simétricos correctos**
20	- **Lógica JS implementada en script.js con cálculo manual (botones solo seleccionan, calcular al presionar "Calcular")**
21	- Validaciones estrictas en DOM (sin alerts)
22	- Template literals en JavaScript
23- Estado global de porcentaje con `currentTipPercentage`
24- Event listeners para botones rápidos, input custom y botón Calcular
25- Form submit manejado correctamente
26
27	## 🐛 BUGS CONOCIDOS
28	*(Vacío por ahora - se llenará si encontramos algo)*
29	
30	## 📝 DECISIONES ARQUITECTÓNICAS
31	- Stack: HTML + CSS (con variables) + JS ES6+ (vanilla)
32	- Separación estricta: HTML / CSS / JS
33	- Comentarios en español, código en inglés
34	- Sin frameworks ni librerías externas
35	- Modo de trabajo: Consultivo (la IA explica antes de actuar)
36- Uso de validación nativa HTML5 + validación JS personalizada
37- Botones tipo button (no submit) para porcentajes rápidos
38- aria-live en mensajes de error para accesibilidad
39- Variables CSS para colores, espaciados, tipografía y sombras
40- Mobile-first con breakpoints en 480px y 360px
41- box-sizing: border-box global para evitar desbordes
42- **Cálculo manual: quick tips solo seleccionan porcentaje, cálculo final en botón "Calcular"**
43
44	## 📊 HISTORIAL DE CAMBIOS
45	- 2026-11-19: Creación del proyecto y archivos base (AGENTS.md, MEMORIA.md)
46	- 2026-11-19: Creación de index.html con estructura completa (líneas 1-58)
47	- 2026-11-19: Creación de styles.css limpio y completo (250 líneas)
48	- 2026-11-19: Creación de script.js con lógica de cálculo de propinas (ES6+)
49	- 2026-11-19: **Modificación de UX: botones rápidos ahora solo seleccionan porcentaje, cálculo ocurre solo al presionar "Calcular"**
50	- 2026-11-19: **Auto-verificación completada exitente con todas las validaciones**
51
52	## 🎯 PRÓXIMOS PASOS PENDIENTES
53	- [x] Crear estructura HTML básica (index.html)
54	- [x] Crear estilos base (styles.css)
55	- [x] Implementar lógica de cálculo (script.js)
56	- [x] Agregar validaciones de inputs
57	- [x] Agregar botones rápidos (10%, 15%, 20%) y UX de cálculo manual
58	- [ ] Pruebas en navegadores adicionales (Chrome, Firefox, Edge)
59	- [ ] Agregar modo oscuro (dark mode) opcional