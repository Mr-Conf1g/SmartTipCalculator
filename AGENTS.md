# AGENTS.md - Calculadora de Propinas

## 1. CONTEXTO
Calculadora web para calcular propinas en restaurantes.
Stack: HTML5 + CSS3 (con variables) + JavaScript ES6+ (vanilla, sin frameworks).
Ejecución: Se abre directamente en el navegador (doble clic en index.html).
Estado: Desarrollo inicial.

## 2. REGLAS INVIOLABLES
1. NUNCA usar frameworks o librerías externas (nada de React, Vue, jQuery, Bootstrap, CDNs).
2. NUNCA borrar o sobrescribir archivos sin mi confirmación explícita.
3. NUNCA poner código JavaScript dentro del HTML (separar en script.js).
4. NUNCA poner CSS inline en el HTML (nada de style="...").
5. NUNCA usar `alert()` para mostrar resultados o errores (usar el DOM).
6. NUNCA inventar funciones o APIs del navegador que no existan.
7. NUNCA agregar dependencias de npm o CDN sin mi permiso.
8. NUNCA reescribir un archivo completo si solo cambian 2-3 líneas.
9. NUNCA modificar código que ya funciona y fue probado sin avisarme primero.
10. **SIEMPRE leer `memoria.md` COMPLETO antes de hacer cualquier cambio.** Es obligatorio.
11. **SIEMPRE actualizar `memoria.md` después de cada cambio exitoso.** Si no lo haces, la tarea no está terminada.
12. **ESTRATEGIA DE EDICIÓN (elige la más adecuada):**
    - **Opción A (Ideal):** Cambios quirúrgicos con `replace` o `insert_line` cuando sean 1-3 líneas y el archivo sea pequeño (<6,000 caracteres).
    - **Opción B (Permitida):** Reescribir el archivo completo con `write_to_file` cuando:
      - El archivo tenga más de 6,000 caracteres (límite de `editor`)
      - `insert_line` haya fallado o corrompido el archivo
      - Los cambios afecten más del 30% del archivo
    - **OBLIGATORIO:** Antes de elegir Opción B, explícame por qué no usaste la Opción A.
    - **NUNCA:** Uses `insert_line` múltiples veces sin verificar que las líneas no se desplazaron.
13. **PROTOCOLO DE AUTO-VERIFICACIÓN Y VALIDACIÓN HUMANA:**
    Antes de darme el código final, DEBES realizar una auto-verificación interna y reportármela:
    - **Revisión de Sintaxis:** Confirma que no hay errores de JS (ej: variables no definidas, faltan puntos y coma).
    - **Revisión de Conexión:** Verifica que los `id` o `class` de JS coincidan exactamente con los del `index.html`.
    - **Revisión de Casos Borde:** Confirma que manejaste valores como `0`, negativos o campos vacíos.
    
    **Flujo Obligatorio:**
    1. Escribe el código.
    2. Muéstrame un breve resumen de tu "Auto-Verificación" (ej: "✅ Verifiqué que el ID 'resultado' existe en HTML").
    3. Entrégame el Checklist de Pruebas Manuales para mí.
    4. ESPERA mi respuesta. NO actualices `memoria.md` hasta que yo escriba explícitamente: "FUNCIONA".
    5. Si yo digo "FALLA", NO actualices `memoria.md`. Repara el error basándote en mi feedback y vuelve al paso 1.
14. **ACTUALIZACIÓN AUTOMÁTICA DE CHANGELOG:**
    Cuando yo diga "FUNCIONA" y actualices memoria.md, TAMBIÉN debes:
    - Agregar una entrada al CHANGELOG.md bajo la versión actual
    - Usar formato: "## [X.Y.Z] - YYYY-MM-DD" con bullets de lo cambiado
    - Si no existe CHANGELOG.md, créalo con el formato estándar

# 3. ESTRUCTURA DEL PROYECTO

calculadora/
├── index.html (Solo estructura HTML)
├── styles.css (Solo estilos, con variables CSS)
├── script.js (Solo lógica, ES6+)
├── memoria.md (Estado actual del proyecto)
└── AGENTS.md (Este archivo)

# 4. FORMATO DE CÓDIGO

### JavaScript (ES6+):
- Usar `const` y `let` (NUNCA `var`).
- Arrow functions cuando sea apropiado.
- Template literals (`` `Hola ${nombre}` ``) en lugar de concatenación.
- NO usar variables globales innecesarias.
- Máximo 3 niveles de anidamiento.
- Una función = una responsabilidad (máximo 20-30 líneas).
- Nombres de funciones y variables en inglés.

### CSS (con variables):
- Definir variables en `:root` (colores, espaciados, tamaños).
- Usar `var(--nombre-variable)` en todo el CSS.
- Diseño responsive con flexbox/grid.
- Funciona en desktop y móvil (mínimo 320px).

### Comentarios:
- En español, cortos y útiles.
- Explicar el "por qué", no el "qué".
- NO comentar lo obvio.

# 5. FUNCIONALIDADES REQUERIDAS
- Campo para ingresar monto de la cuenta.
- Botones rápidos para propinas: 10%, 15%, 20%.
- Campo para porcentaje personalizado.
- Mostrar: monto de propina y total a pagar.
- **Validaciones estrictas:**
  - Solo números (no letras ni símbolos).
  - No montos negativos ni cero.
  - No porcentajes fuera de rango (0-100%).
  - Mensajes de error visibles en la interfaz (NO alerts).
- Diseño responsive y accesible (labels asociados a inputs, botones `<button>`, buen contraste).

# 6. PROTOCOLO DE MODIFICACIÓN
Cuando te pida modificar o agregar algo:

1. **ANÁLISIS PREVIO:**
   - Lee `memoria.md` completo para conocer el estado actual.
   - Lee TODOS los archivos del proyecto.
   - Identifica qué archivos necesitan modificación.

2. **PLAN DE ACCIÓN:**
   - Explícame qué vas a cambiar y por qué (1-2 líneas).
   - Confirma que NO romperás funcionalidad existente.
   - Espera mi "OK" antes de escribir código.

3. **EJECUCIÓN SEGURA:**
   - Haz cambios MÍNIMOS (solo lo necesario).
   - Reutiliza código existente cuando sea posible.
   - NO reescribas archivos completos.

4. **VERIFICACIÓN POST-CAMBIO:**
   - Confirma que todo lo que funcionaba antes sigue funcionando.
   - Si algo se rompió, repórtalo inmediatamente.
   - Actualiza `memoria.md` con el cambio exitoso.

## 7. SISTEMA DE MEMORIA (memoria.md)

**Cómo actualizar memoria.md después de cada cambio exitoso:**
- Agrega qué se modificó con líneas específicas del código.
- Confirma explícitamente que se probó y funciona.
- Agrega la fecha del cambio.

**NUNCA:**
- Borrar entradas de "funcionalidades que funcionan".
- Marcar algo como "funciona" sin haberlo probado.
- Dejar información falsa o desactualizada.

## 8. FLUJO DE TRABAJO (Modo Consultivo)
Para CADA tarea que te pida:
1. Analiza lo que necesito.
2. Explícame tu plan en 1-2 líneas.
3. Espera mi "OK" o "adelante".
4. Ejecuta el cambio.
5. Entrégame un checklist de 3-4 pruebas manuales que debo hacer en el navegador.
6. Espera mi confirmación de que todo funciona.
7. Actualiza `memoria.md`.

## 9. PROHIBICIONES ABSOLUTAS
- NUNCA dejes código huérfano (funciones/variables que no se usan).
- NUNCA rompas funcionalidad existente sin avisar.
- NUNCA mezcles responsabilidades (HTML con JS, JS con CSS).
- NUNCA hardcodees valores mágicos (usa variables CSS o constantes JS).