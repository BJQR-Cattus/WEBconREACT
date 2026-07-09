import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const socialLinks = [
    {
      href: "#",
      label: "Facebook Link",
      src: "https://cdn.lordicon.com/oemjpisw.json",
      trigger: "hover",
      state: "hover-roll",
      colors: "primary:#ebe6ef,secondary:#0f6bff",
    },
    {
      href: "#",
      label: "Google Link",
      src: "https://cdn.lordicon.com/dznelzdk.json",
      trigger: "hover",
      colors:
        "primary:#30e8bd,secondary:#0a5c15,tertiary:#c76f16,quaternary:#000000,quinary:#848484,senary:#e4e4e4",
    },
    {
      href: "#",
      label: "YouTube Link",
      src: "https://cdn.lordicon.com/dbcganmh.json",
      trigger: "hover",
      colors: "primary:#ffffff,secondary:#ff0000",
    },
    {
      href: "mailto:drahuancavelicaoficial@gmail.com",
      label: "Gmail Link",
      src: "https://cdn.lordicon.com/ipyszerf.json",
      trigger: "hover",
      colors: "primary:#16c72e,secondary:#3a3347,tertiary:#ebe6ef",
    },
    {
      href: "#",
      label: "WhatsApp Link",
      src: "https://cdn.lordicon.com/edecmgef.json",
      trigger: "hover",
      state: "hover-draw",
      colors: "primary:#30e849,secondary:#848484",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <a href="/">
            <img
              src="/images/homes/img_index/logo.png"
              alt="Logo DRA Huancavelica"
            />
          </a>
          <p>Impulsando el desarrollo agrario</p>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-right">
          <h4 className="visitanos-text">Visítanos en:</h4>
          <div className="footer-visit-icons lordicon-container">
            {socialLinks.map((s, i) => (
              <a href={s.href} key={i} aria-label={s.label}>
                <lord-icon
                  src={s.src}
                  trigger={s.trigger}
                  state={s.state}
                  colors={s.colors}
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>
          © 2025 Dirección Regional de Agricultura Huancavelica. Todos los
          derechos reservados.
        </p>
        <p>Desarrollado por Brayan JQR</p>
      </div>
    </footer>
  );
}

export default Footer;