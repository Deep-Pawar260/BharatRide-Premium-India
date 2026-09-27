import {Link} from 'react-router-dom'

const services = [
  {icon:'🚕', title:'City Rides', text:'Cabs, autos and bikes for quick everyday travel.'},
  {icon:'✈️', title:'Airport Transfer', text:'Comfortable pickups and drops with scheduled booking.'},
  {icon:'🛣️', title:'Intercity', text:'Travel between cities with transparent fares.'},
  {icon:'📦', title:'Bharat Parcel', text:'Simple doorstep delivery for small packages.'}
]

export default function Start(){
  return <div className="landing-premium">
    <div className="tricolor-line"><i/><i/><i/></div>
    <header className="landing-nav premium-nav">
      <Link to="/" className="brand brand-premium">
        <div className="brand-mark"><img src="/bharatride-logo.svg" alt="BharatRide logo"/></div>
        <div><b>Bharat<span>Ride</span></b><small>भारत की स्मार्ट राइड</small></div>
      </Link>
      <div className="nav-links premium-links">
        <a href="#services">Services</a><a href="#why">Why BharatRide</a><a href="#safety">Safety</a>
        <Link to="/login" className="nav-login">Log in</Link>
        <Link className="nav-cta premium-cta" to="/signup">Get Started →</Link>
      </div>
    </header>

    <main className="premium-hero">
      <div className="hero-copy premium-copy">
        <div className="india-badge"><span>🇮🇳</span> Made for India · Built for Bharat</div>
        <h1>Your journey.<br/><em>Your Bharat.</em><br/>Your ride.</h1>
        <p className="hero-lead">Move through India's cities with one modern mobility platform for cabs, autos, bikes, airport rides and intercity travel.</p>
        <div className="hero-actions">
          <Link className="btn big hero-main-btn" to="/signup">Book your first ride <b>→</b></Link>
          <Link className="btn ghost big hero-secondary-btn" to="/login">Already a member? Log in</Link>
        </div>
        <div className="hero-stats">
          <div><b>4.8★</b><span>Rider rating</span></div><div><b>24×7</b><span>Safety support</span></div><div><b>₹ Fair</b><span>Upfront pricing</span></div>
        </div>
      </div>

      <div className="premium-hero-art">
        <div className="monument-glow"/>
        <div className="route-board">
          <div className="route-top"><span><span className="green-dot"/> Live routes</span><b>09:41</b></div>
          <div className="route-map">
            <div className="map-grid"/><div className="road road-a"/><div className="road road-b"/><div className="road road-c"/>
            <div className="route-path"/><div className="map-pin start-pin">●</div><div className="map-pin end-pin">●</div>
            <div className="map-label label-a">Pune</div><div className="map-label label-b">Viman Nagar</div>
            <div className="map-monument">◈</div>
          </div>
          <div className="route-info"><div><small>Pickup</small><b>📍 Pune Railway Station</b></div><span>₹248</span></div>
          <div className="route-info"><div><small>Destination</small><b>📍 Viman Nagar</b></div><em>12 min</em></div>
          <div className="ride-options"><span>🚕 Prime</span><span>🛺 Auto</span><span>🏍️ Bike</span></div>
        </div>
        <div className="floating-india-card card-top"><strong>🇮🇳 Bharat Verified</strong><small>Trusted drivers & safer rides</small></div>
        <div className="floating-india-card card-bottom"><strong>🛡️ Safety Center</strong><small>SOS · Share trip · Support</small></div>
        <div className="chakra-watermark">✺</div>
      </div>
    </main>

    <section className="trust-strip" id="why"><div><b>Designed around Bharat</b><span>Indian cities · Indian payments · Indian riders</span></div><div className="trust-items"><span>UPI ready</span><span>Cash friendly</span><span>Multicity rides</span><span>Transparent fares</span></div></section>

    <section id="services" className="landing-section premium-services">
      <div className="section-heading"><span className="eyebrow">ONE PLATFORM · EVERY JOURNEY</span><h2>Everything you need to <em>move freely.</em></h2><p>From a short auto ride to a weekend trip, BharatRide brings everyday mobility into one simple experience.</p></div>
      <div className="service-grid premium-service-grid">{services.map(s=><article key={s.title}><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><span className="service-arrow">Explore →</span></article>)}</div>
    </section>

    <section id="safety" className="bharat-banner">
      <div><span className="eyebrow">SAFETY FIRST · ALWAYS</span><h2>Technology with an Indian heart.</h2><p>Driver details, trip sharing, live tracking and emergency controls stay close at every step of your journey.</p><Link to="/signup" className="btn white-btn">Explore BharatRide <b>→</b></Link></div>
      <div className="safety-orbit"><div>🛡️<b>Safety</b></div><div>📍<b>Live GPS</b></div><div>🆘<b>SOS</b></div><div>🤝<b>Support</b></div></div>
    </section>

    <section className="city-section"><div className="city-copy"><span className="eyebrow">FROM METROS TO GROWING CITIES</span><h2>One Bharat.<br/><em>Many destinations.</em></h2><p>Designed to feel familiar whether you're heading to the office, station, airport or your next city.</p><div className="city-pills"><span>🏙️ Mumbai</span><span>🌆 Pune</span><span>🏛️ Delhi</span><span>🌴 Bengaluru</span><span>🌊 Chennai</span><span>🌇 Hyderabad</span></div></div><div className="india-card"><div className="india-shape">भारत</div><div><b>BharatRide Network</b><span>Smart mobility for modern India</span></div></div></section>

    <footer className="landing-footer premium-footer"><div className="footer-brand"><img src="/bharatride-logo.svg" alt="BharatRide"/><b>BharatRide</b></div><span>© 2026 BharatRide · Frontend demonstration project</span><span>Made with ♥ for Bharat</span></footer>
  </div>
}
