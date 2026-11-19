# Historial de Cambios (Changelog)

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [1.1.0] - 2026-11-19
### Modificado
- **Cambio de UX**: Botones rápidos 10%/15%/20% ahora solo seleccionan porcentaje, cálculo ocurre al presionar "Calcular" (cálculo manual)
- Se mantuvo el botón "Calcular" para disparar la evaluación
- Se actualizó la lógica de `currentTipPercentage` estado global

## [1.0.0] - 2026-11-18
### Agregado
- Lanzamiento inicial de SmartTip Calculator
- Cálculo de propinas (10%, 15%, 20% y personalizado)
- Validación de inputs (no se permiten números negativos ni cero)
- Mensajes de error mostrados directamente en el DOM (sin `alert()`)
- Diseño responsivo con variables CSS
- Desarrollo 100% en Vanilla JS (ES6+)