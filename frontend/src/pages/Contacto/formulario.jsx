import { useState } from "react";
import "./contacto.css";

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        institucion: "",
        motivo: "",
        mensaje: "",
    });

    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Validación básica
        if (!formData.nombre || !formData.email || !formData.telefono || !formData.motivo || !formData.mensaje) {
            setError("Por favor completa todos los campos obligatorios.");
            return;
        }

        setEnviando(true);

        try {
            // TODO (Fase backend): reemplazar por el envío real, por ejemplo:
            // await fetch("https://tu-api.com/api/contacto", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(formData),
            // });
            //
            // Alternativa sin backend propio: usar un servicio como EmailJS
            // para enviar el correo directamente desde el frontend.

            // Simulación temporal de envío (quitar cuando se conecte el backend real)
            await new Promise((resolve) => setTimeout(resolve, 800));

            setEnviado(true);
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                institucion: "",
                motivo: "",
                mensaje: "",
            });
        } catch {
            setError("Ocurrió un error al enviar tu solicitud. Inténtalo de nuevo.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <main className="contact-hub">
            <div className="form-wrapper">
                <h1>Contacto y Consultas DRAH</h1>
                <p className="subtitle">
                    Si tiene algún problema, déjenos sus datos y nos pondremos en
                    contacto.
                </p>

                {enviado && (
                    <div className="form-alert success">
                        <i className="fas fa-circle-check"></i> Tu solicitud fue enviada
                        correctamente. Nos pondremos en contacto pronto.
                    </div>
                )}

                {error && (
                    <div className="form-alert error">
                        <i className="fas fa-triangle-exclamation"></i> {error}
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombres y Apellidos</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                placeholder="Ej: Brayan"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Ej: correo@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                required
                                placeholder="Ej: 987654321"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="institucion">Sector/Institución</label>
                            <input
                                type="text"
                                id="institucion"
                                name="institucion"
                                placeholder="Ej: Comunidad ABC... (Opcional)"
                                value={formData.institucion}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="motivo">Motivo de Consulta</label>
                        <select
                            id="motivo"
                            name="motivo"
                            required
                            value={formData.motivo}
                            onChange={handleChange}
                        >
                            <option value="" disabled>
                                Seleccione una opción
                            </option>
                            <option value="consulta">Consulta General</option>
                            <option value="problema">Problema o Queja</option>
                            <option value="informacion">Información Específica</option>
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="mensaje">Mensaje y/o Descripción</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="5"
                            required
                            placeholder="Describa el motivo de su requerimiento con detalle..."
                            value={formData.mensaje}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit" disabled={enviando}>
                        {enviando ? "Enviando..." : "Enviar Solicitud"}
                        <span className="btn-shine"></span>
                    </button>
                </form>
            </div>

            <aside className="info-wrapper">
                <h2>Visítanos</h2>

                <article className="info-card">
                    <h3>Dirección</h3>
                    <p>Av. Augusto B. Leguía N°171</p>
                    <p className="highlight">Huancavelica, Perú</p>
                </article>

                <article className="info-card">
                    <h3>Línea Directa</h3>
                    <p className="highlight">067 - 451373</p>
                </article>

                <article className="info-card">
                    <h3>Correo</h3>
                    <p className="highlight">drahuancavelicaoficial@gmail.com</p>
                </article>

                <article className="info-card">
                    <h3>Horario de Atención</h3>
                    <p>
                        <time>Lun - Vie | 08:00 AM - 5:30 PM</time>
                    </p>
                    <p className="muted">UTC-5</p>
                </article>
            </aside>
        </main>
    );
}

export default Contacto;
