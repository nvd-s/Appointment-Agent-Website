import { KalravWidget } from '@irisidea/kalrav-ai/react'
import './App.css'

function App() {
  const widgetConfig = {
    agentId: import.meta.env.VITE_KALRAV_AGENT_ID || undefined,
    apiKey: import.meta.env.VITE_KALRAV_API_KEY || undefined,
    analyticsUserId: import.meta.env.VITE_KALRAV_ANALYTICS_USER_ID || undefined,
    primaryColor: '#167d73',
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Harborview Medical Institute home"><span className="brand-mark">+</span><span>Harborview <b>Medical</b></span></a>
        <nav aria-label="Main navigation"><a href="#care">Our care</a><a href="#specialties">Specialties</a><a href="#about">About us</a></nav>
        <a className="nav-cta" href="#contact">Book a visit <span aria-hidden="true">↗</span></a>
      </header>
      <main id="top">
        <section className="hero-section"><div className="hero-copy"><p className="eyebrow">Compassionate care, close to home</p><h1>Better health begins with <em>being heard.</em></h1><p className="hero-intro">Harborview brings thoughtful medicine, advanced expertise, and a deeply human approach together under one roof.</p><div className="hero-actions"><a className="button button-dark" href="#contact">Find your care team <span aria-hidden="true">↗</span></a><a className="text-link" href="#care">Explore our services <span aria-hidden="true">↓</span></a></div><div className="trust-note"><span className="status-dot" /> Accepting new patients <span className="dot-divider">·</span> Same-week appointments available</div></div><div className="hero-visual"><div className="image-frame"><img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85" alt="Doctor speaking with a patient in a bright clinic" /></div><div className="image-caption"><span>01</span><span>Care that sees the whole person</span></div><div className="seal" aria-hidden="true"><span>Since</span><strong>1987</strong><span>Harborview</span></div></div></section>
        <section className="stat-strip" aria-label="Harborview highlights"><div><strong>38</strong><span>Years of trusted care</span></div><div><strong>94%</strong><span>Patient satisfaction</span></div><div><strong>24/7</strong><span>Care when you need it</span></div><p>“The kind of care that makes you feel like a person, not a number.”</p></section>
        <section className="care-section" id="care"><div className="section-heading"><p className="eyebrow">How we help</p><h2>Care designed around <em>your life.</em></h2></div><p className="section-lede">From your first checkup to complex treatment, our teams work together to make every next step feel clear.</p><div className="care-grid" id="specialties"><article><span className="card-number">01</span><h3>Primary care</h3><p>Personalized prevention, wellness, and everyday care for every chapter.</p><a href="#contact">Meet our providers <span>↗</span></a></article><article><span className="card-number">02</span><h3>Women’s health</h3><p>Expert, respectful care for your body, your family, and your future.</p><a href="#contact">Explore women’s health <span>↗</span></a></article><article><span className="card-number">03</span><h3>Heart &amp; vascular</h3><p>Modern diagnostics and experienced specialists focused on a stronger tomorrow.</p><a href="#contact">View heart care <span>↗</span></a></article></div></section>
        <section className="story-section" id="about"><div><p className="eyebrow">Medicine with meaning</p><h2>Expertise is important.<br /><em>How we make you feel is, too.</em></h2></div><div className="story-copy"><p>We believe exceptional medicine starts with an honest conversation. Our clinicians listen closely, explain clearly, and stay with you through every decision.</p><a className="text-link" href="#contact">Why Harborview <span>↗</span></a></div></section>
        <section className="contact-section" id="contact"><div><p className="eyebrow">Your next step</p><h2>Let’s make a plan<br /><em>for your health.</em></h2></div><div><p>Have a question or ready to find your provider? Our care team is here to help.</p><a className="button button-light" href="tel:18005550198">Call 1 (800) 555-0198 <span>↗</span></a></div></section>
      </main>
      <footer><span>© 2026 Harborview Medical Institute</span><span>Good care, thoughtfully delivered.</span><a href="#top">Back to top ↑</a></footer>
      <KalravWidget {...widgetConfig} />
    </div>
  )
}

export default App
