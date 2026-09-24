# Sistema de Validacíón de Acceso en JavaScript

Un script interactivo en JavaScript que simula el proceso de inicio de sesión de un usuario con un límite máximo de intentos antes de bloquear el acceso.

---

## 📌 Descripción

Este proyecto contiene una función llamada `validarAcceso()` que evalúa si las credenciales ingresadas por un usuario coinciden con los datos almacenados de forma predeterminada. El programa otorga un máximo de **3 intentos** para ingresar las credenciales correctas; de lo contrario, el sistema bloquea al usuario.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** JavaScript (ES6)
* **Entorno:** Navegador web (utiliza las API nativas `prompt()` y `console.log()`)

---

## 🚀 Funcionamiento del Código

1. **Variables y Constantes:**
   * `USUARIO_CORRECTO`: Define el usuario autorizado (`JuanIsaza.net`).
   * `CONTRASEÑA_CORRECTA`: Define la clave requerida (`1020`).
   * `MAX_INTENTOS`: Límite máximo de intentos permitidos (`3`).
2. **Ciclo de Validación (`while`):**
   * Solicita el usuario y la contraseña mediante cuadros de diálogo (`prompt`).
   * Valida la igualdad estricta (`===`) de ambas credenciales.
   * Si las credenciales son correctas, muestra un mensaje de bienvenida en la consola y finaliza el ciclo.
   * Si son incorrectas, incrementa el contador de intentos y muestra el progreso restante.
3. **Bloqueo:**
   * Si el usuario agota los 3 intentos sin éxito, se muestra un mensaje de advertencia indicando que ha sido bloqueado.

---

## 📋 Ejemplo de Uso

### Credenciales válidas de prueba:
| Campo | Valor |
| :--- | :--- |
| **Usuario** | `JuanIsaza.net` |
| **Contraseña** | `1020` |

---

## 💻 Cómo Ejecutar el Proyecto

1. Copia el código fuente del script.
2. Abre tu navegador de preferencia (Chrome, Edge, Firefox, etc.).
3. Abre las herramientas de desarrollador haciendo clic derecho -> **Inspeccionar** o presionando `F12`.
4. Dirígete a la pestaña **Consola (Console)**.
5. Pega el código y presiona `Enter`. Se desplegarán las ventanas flotantes para ingresar tus datos.
