import "./App.css";

function App() {
  return (
    <main className="home">

      <header className="navbar">
        <div className="logo">
          <span className="logo-main">MEIVE</span>
          <span className="logo-sub">BEAUTY STUDIO</span>
        </div>

        <nav className="nav-links">
          <a href="#servicos">SERVIÇOS</a>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>

        <div className="nav-actions">
          <button className="cart-button" aria-label="Carrinho">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </button>

          <a href="#agendamento" className="schedule-button">
            AGENDAR
          </a>
        </div>
      </header>

      <section className="hero">

        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-title">
            <span>MEIVE</span>
            <span>BEAUTY</span>
            <span>STUDIO</span>
          </div>

          <p className="hero-description">
            Transformando olhares através da Minha Arte.
          </p>

          <div className="hero-buttons">
            <a href="#agendamento" className="primary-button">
              AGENDAR AGORA
            </a>

            <a href="#servicos" className="secondary-button">
              VER SERVIÇOS
            </a>
          </div>

          <div className="stats">

            <div className="stat">
              <strong>500+</strong>
              <span>CLIENTES</span>
            </div>

            <div className="stat">
              <strong>3 anos</strong>
              <span>EXPERIÊNCIA</span>
            </div>

            <div className="stat">
              <strong>98%</strong>
              <span>5 ESTRELAS</span>
            </div>

          </div>

        </div>

        <div className="featured-card">

          <span className="card-label">
            MAIS POPULAR
          </span>

          <h2>
            VOLUME RUSSO
          </h2>

          <p>
            O lash que vira vício — cheio, dramático
            e perfeito.
          </p>

          <div className="card-footer">
            <strong>R$ 280</strong>
            <span>3 horas</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default App;