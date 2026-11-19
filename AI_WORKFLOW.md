# 🤖 Flujo de Desarrollo Asistido por IA

Este proyecto fue desarrollado utilizando un flujo de trabajo avanzado **Human-in-the-Loop (Humano en el Bucle)**. En lugar de dejar que la IA escriba código a ciegas, orquesté al agente utilizando reglas arquitectónicas estrictas, gestión de memoria y protocolos de verificación automatizada.

## 🛠️ Stack de Herramientas
- **IDE:** ZCode (Entorno de desarrollo nativo con IA)
- **Enrutamiento de Modelos:** OmniRoute (Proxy local para uso eficiente de modelos)
- **Modelos:** Groq / DeepSeek (vía endpoints compatibles con OpenAI)
- **Control de Versiones:** Git con Conventional Commits

## 🧠 Arquitectura del Agente
Para garantizar la calidad del código y prevenir alucinaciones o refactorizaciones innecesarias por parte de la IA, implementé un framework personalizado (`AGENTS.md`) con los siguientes principios:

### 1. Reglas Inviolables
El agente está restringido por límites estrictos, como:
- Cero dependencias externas (Vanilla JS puro).
- Separación obligatoria de responsabilidades (HTML, CSS y JS en archivos distintos).
- Prohibición de fallos silenciosos o uso de `alert()`.

### 2. Protocolo "Regla 13" (Auto-verificación + Validación Humana)
Se le prohíbe al agente marcar una tarea como "completada" en la memoria del proyecto hasta pasar una verificación de dos pasos:
1. **Auto-verificación interna:** La IA debe revisar internamente la sintaxis, la coincidencia de elementos del DOM y los casos borde antes de presentar el código.
2. **Checkpoint humano:** La IA proporciona una lista de pruebas manuales. La memoria del proyecto **solo** se actualiza después de que el desarrollador confirma explícitamente: *"FUNCIONA"*.

### 3. Memoria Persistente (`memoria.md`)
Un archivo de estado local actúa como el "cerebro externo" de la IA, rastreando componentes funcionales, bugs conocidos y decisiones arquitectónicas entre sesiones, garantizando que el agente nunca rompa una funcionalidad existente.

## 💡 ¿Por qué este enfoque?
Confiar ciegamente en la IA genera código espagueti y funcionalidades rotas. Al imponer un **flujo de trabajo consultivo** y **aprobaciones basadas en diffs**, este proyecto demuestra cómo aprovechar la IA para una productividad 10x, manteniendo estándares de ingeniería estrictos y el 100% del control del código.