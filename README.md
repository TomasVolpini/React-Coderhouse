# 🌿 Blumix - Tienda Virtual de Jardinería Smart

**Blumix** es una tienda virtual de fantasía dedicada a la venta de productos para **jardinería inteligente (smart gardening)**.

---

## 🚀 Funcionalidades

- **Visualización de productos**: Los productos se obtienen dinámicamente desde una **base de datos**.
- **Renderizado condicional**: Cada producto se muestra según su disponibilidad y estado.
- **Carrito de compras**:
  - Agrega productos al carrito.
  - Edita las cantidades o elimina ítems.
  - Visualiza el total actualizado en tiempo real.
- **Checkout ficticio**:
  - Permite finalizar la compra mediante un formulario de contacto.
  - La información se guarda en una base de datos (sin pasarela de pago).

---

## 🧩 Dependencias Principales

| Dependencia                                         | Descripción                                             |
| --------------------------------------------------- | ------------------------------------------------------- |
| [Firebase](https://firebase.google.com/docs)        | Backend para almacenamiento y gestión de datos.         |
| [React](https://react.dev/)                         | Librería principal para la construcción de la interfaz. |
| [React DOM](https://react.dev/reference/react-dom)  | Renderizado del árbol de componentes en el navegador.   |
| [React Hot Toast](https://react-hot-toast.com/docs) | Sistema de notificaciones visuales para mejorar la UX.  |
| [React Router](https://reactrouter.com/en/main)     | Manejo de rutas y navegación dentro de la aplicación.   |

---

## 🧠 Arquitectura General

- **Frontend:** React + Vite
- **Base de Datos:** Firebase Firestore
- **Estado Global:** Hooks y Context API
- **Notificaciones:** React Hot Toast
- **Ruteo:** React Router

---

## ⚙️ Instalación y Uso

Para ejecutar el proyecto localmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/TomasVolpini/JS-Entrega-final.git

# 2. Entrar al directorio del proyecto
cd JS-Entrega-final

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador (la dirección aparecerá en la terminal)
http://localhost:5173
```

## ⚖️ Disclaimer

Las imágenes utilizadas en este proyecto **no son de mi autoría**.  
Se emplean bajo la regulación de **fair use**, con fines **personales, educativos y sin ánimo de lucro**.  
Blumix es una **marca ficticia** creada únicamente para fines demostrativos y académicos.

---

## 👨‍💻 Autor

Proyecto desarrollado por **Tomás Volpini** 🌱
