import React, { useState, useEffect, useRef } from 'react';

/* ─── Data ─── */
const PRODUCTS = [
  { name: 'Sahel Sunrise', origin: 'Cap Bon Peninsula', roast: 'Light', notes: 'Citrus · Jasmine · Honey', price: 38, badge: 'Best Seller', color: '#E8D5B7' },
  { name: 'Kairouan Noir', origin: 'Kairouan Highlands', roast: 'Dark', notes: 'Dark Chocolate · Tobacco · Spice', price: 42, badge: 'Limited Edition', color: '#4A2C2A' },
  { name: 'Djerba Gold', origin: 'Djerba Island', roast: 'Medium', notes: 'Caramel · Almond · Fig', price: 36, badge: 'New', color: '#C8A97E' },
];

const FEATURES = [
  { icon: '🏔️', title: 'Heritage Terroir', desc: 'Grown at 800m elevation in the Tunisian dorsal mountains, where Mediterranean breezes and ancient soil create unmatched complexity.' },
  { icon: '🔥', title: 'Master Roasted', desc: 'Each batch is artisanally roasted by our maître torréfacteur using techniques passed through three generations of Tunisian coffee artisans.' },
  { icon: '🤝', title: 'Direct Trade', desc: 'We work directly with 47 family farms across Tunisia. No middlemen. Fair prices. Complete traceability from seed to cup.' },
  { icon: '🌿', title: 'Organic Certified', desc: '100% organic cultivation. No pesticides, no synthetic fertilizers — just pure Tunisian earth and traditional farming wisdom.' },
  { icon: '✈️', title: 'Roasted to Order', desc: 'Your coffee is roasted within 24 hours of your order and shipped worldwide. Maximum freshness, guaranteed.' },
  { icon: '🎁', title: 'Curated Experience', desc: 'Each shipment includes tasting notes, origin story, and pairing suggestions. A complete sensory journey with every box.' },
];

const TESTIMONIALS = [
  { name: 'Leïla Ben Ali', role: 'Hotel Director, La Maison Dorée', text: 'The Kairouan Noir has become the signature coffee of our five-star restaurant. Our guests consistently ask for it by name. It\'s simply extraordinary.', initials: 'LB', color: '#0A95FF' },
  { name: 'Marcus van der Berg', role: 'Specialty Coffee Buyer, Amsterdam', text: 'I\'ve sourced coffee from 30+ countries. Tunisian Coffee Co. offers something genuinely unique — a flavor profile that exists nowhere else on Earth.', initials: 'MB', color: '#9616FF' },
  { name: 'Sophie Laurent', role: 'Michelin-Starred Chef, Paris', text: 'The depth and complexity of these beans is remarkable. Djerba Gold pairs beautifully with our Tunisian-inspired desserts. A revelation.', initials: 'SL', color: '#EE0DDB' },
  { name: 'Youssef Hamdi', role: 'CEO, Carthage Trading Co.', text: 'As a corporate gift, nothing compares. Our clients are always impressed. The packaging, the story, the quality — it speaks volumes about our brand.', initials: 'YH', color: '#19E306' },
];

const PLANS = [
  {
    name: 'Discovery',
    price: 29,
    period: '/month',
    desc: 'Perfect for exploring Tunisian coffee culture',
    features: ['1 bag (250g) monthly', 'Rotating single-origin selection', 'Tasting notes & origin card', 'Free worldwide shipping', 'Cancel anytime'],
    cta: 'Start Discovering',
    popular: false,
  },
  {
    name: 'Heritage',
    price: 49,
    period: '/month',
    desc: 'Our most popular experience for true connoisseurs',
    features: ['2 bags (250g each) monthly', 'Exclusive small-batch releases', 'Priority access to limited editions', 'Coffee tasting kit on signup', 'Personal pairing recommendations', 'Free worldwide express shipping'],
    cta: 'Join Heritage',
    popular: true,
  },
  {
    name: 'Connoisseur',
    price: 89,
    period: '/month',
    desc: 'The ultimate Tunisian coffee journey',
    features: ['4 bags (250g each) monthly', 'All Heritage perks included', 'Quarterly virtual tasting events', 'Annual farm visit invitation', 'Dedicated coffee concierge', 'Custom roast profile option'],
    cta: 'Go Connoisseur',
    popular: false,
  },
];

const FAQS = [
  { q: 'Where exactly is your coffee grown?', a: 'Our coffee is cultivated across three distinct regions of Tunisia: the Cap Bon Peninsula (light roasts), the Kairouan Highlands (dark roasts), and Djerba Island (medium roasts). Each terroir imparts unique flavor characteristics that cannot be replicated elsewhere.' },
  { q: 'How fresh is the coffee when I receive it?', a: 'We roast to order. Your beans are roasted within 24 hours of your order and shipped immediately. Most customers receive their coffee within 3–5 days of roasting — significantly fresher than supermarket or even most specialty brands.' },
  { q: 'Can I choose my roast preference?', a: 'Absolutely. Heritage and Connoisseur members can set their roast preferences in their account. Discovery members receive our curator\'s selection, which rotates monthly to showcase the best of each harvest.' },
  { q: 'Do you ship internationally?', a: 'Yes. We ship to 60+ countries worldwide. All memberships include free shipping. Express shipping (2–3 days) is included with Heritage and Connoisseur plans.' },
  { q: 'What if I\'m not satisfied?', a: 'We offer a 100% satisfaction guarantee. If your coffee doesn\'t meet your expectations, we\'ll replace it or refund your order — no questions asked. We stand behind every bean we ship.' },
];

const STEPS = [
  { num: '01', title: 'Choose Your Experience', desc: 'Select a membership tier that matches your coffee journey — from casual discovery to full connoisseur.' },
  { num: '02', title: 'We Roast & Ship', desc: 'Your selection is artisanally roasted to order and shipped fresh within 24 hours from our Tunisian roastery.' },
  { num: '03', title: 'Savor the Story', desc: 'Each box arrives with origin notes, pairing suggestions, and the rich heritage behind every bean.' },
];

/* ─── Components ─── */

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FFFDFB]/95 backdrop-blur-md shadow-sm border-b border-[#EBD5C1]/50' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4801] to-[#C8A97E] flex items-center justify-center text-white font-display font-bold text-lg">T</div>
          <span className="font-display text-xl text-[#2C1810] tracking-tight">Tunisian Coffee Co.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Heritage', 'Collection', 'Experience', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#521000] hover:text-[#FF4801] transition-colors tracking-wide uppercase font-medium">{item}</a>
          ))}
          <a href="#cta" className="btn-luxury !py-3 !px-6 !text-sm">Order Now</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#2C1810]">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/></svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[#FFFDFB] border-t border-[#EBD5C1] px-6 py-4 space-y-4 animate-fade-in">
          {['Heritage', 'Collection', 'Experience', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-[#521000] hover:text-[#FF4801]">{item}</a>
          ))}
          <a href="#cta" className="btn-luxury !text-sm w-full text-center justify-center">Order Now</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-[#4A2C2A] to-[#1a0f0a]" />
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200,169,126,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,72,1,0.15) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(200,169,126,0.2) 0%, transparent 50%)'}} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2C1810] to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[#C8A97E] text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF4801] animate-pulse" />
              Est. 1927 · Tunis, Tunisia
            </span>
          </div>
          <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-7xl text-white leading-[1.1] mb-8">
            Where <span className="italic text-[#C8A97E]">Ancient Soil</span> Meets Modern Craft
          </h1>
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-[#E8D5B7]/80 max-w-lg mb-10 leading-relaxed">
            Single-origin Arabica, hand-picked from Tunisian highland farms. Roasted by third-generation artisans. Delivered to your door within days of roasting.
          </p>
          <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
            <a href="#cta" className="btn-luxury">
              Shop Collection
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10m-4-4l4 4-4 4"/></svg>
            </a>
            <a href="#heritage" className="btn-outline !border-[#C8A97E] !text-[#C8A97E] hover:!bg-[#C8A97E] hover:!text-white">
              Our Heritage
            </a>
          </div>
          <div className="animate-fade-up delay-400 mt-12 flex items-center gap-8 text-white/50 text-sm">
            <div><span className="text-2xl font-display text-[#C8A97E]">47</span><br/>Partner Farms</div>
            <div className="w-px h-10 bg-white/20" />
            <div><span className="text-2xl font-display text-[#C8A97E]">60+</span><br/>Countries</div>
            <div className="w-px h-10 bg-white/20" />
            <div><span className="text-2xl font-display text-[#C8A97E]">100%</span><br/>Organic</div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="relative animate-float">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#C8A97E]/20 to-[#FF4801]/10 flex items-center justify-center animate-pulse-glow">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#C8A97E]/30 to-[#FF4801]/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-2">☕</div>
                  <p className="font-display text-lg text-[#C8A97E] italic">Since 1927</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card !bg-white/10 !border-white/20 rounded-2xl px-4 py-3 text-white text-sm">
              <span className="text-[#C8A97E]">★★★★★</span><br/>"Extraordinary" — Vogue
            </div>
            <div className="absolute -bottom-2 -left-6 glass-card !bg-white/10 !border-white/20 rounded-2xl px-4 py-3 text-white text-sm">
              🏔️ Cap Bon · 800m alt.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Heritage = () => (
  <section id="heritage" className="py-24 bg-[#FFFBF5]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[#FF4801] text-sm uppercase tracking-[0.2em] font-medium">Our Heritage</span>
        <h2 className="font-display text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6">Three Generations of Mastery</h2>
        <div className="section-divider" />
        <p className="text-[#521000] max-w-2xl mx-auto text-lg leading-relaxed">
          From the sun-drenched hills of Cap Bon to your morning cup, every bean carries nearly a century of Tunisian coffee tradition — a story of patience, passion, and uncompromising quality.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <div key={i} className="relative p-8 bg-white rounded-2xl border border-[#EBD5C1] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <span className="text-6xl font-display text-[#FF4801]/10 group-hover:text-[#FF4801]/20 transition-colors">{step.num}</span>
            <h3 className="font-display text-2xl text-[#2C1810] mt-4 mb-3">{step.title}</h3>
            <p className="text-[#521000] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="experience" className="py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[#FF4801] text-sm uppercase tracking-[0.2em] font-medium">The Experience</span>
        <h2 className="font-display text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6">Why Discerning Palates Choose Us</h2>
        <div className="section-divider" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feat, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-white border border-[#EBD5C1] hover:border-[#FF4801]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform">{feat.icon}</span>
            <h3 className="font-display text-xl text-[#2C1810] mb-3">{feat.title}</h3>
            <p className="text-[#521000] leading-relaxed text-[15px]">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Collection = () => (
  <section id="collection" className="py-24 bg-gradient-to-b from-[#2C1810] to-[#1a0f0a]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[#C8A97E] text-sm uppercase tracking-[0.2em] font-medium">The Collection</span>
        <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6">Our Signature Blends</h2>
        <div className="section-divider" />
        <p className="text-[#E8D5B7]/70 max-w-xl mx-auto text-lg">Each blend tells the story of its terroir — the soil, the altitude, the Mediterranean climate that makes Tunisian coffee unlike any other.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PRODUCTS.map((p, i) => (
          <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#C8A97E]/30 transition-all duration-500">
            <div className="h-56 flex items-center justify-center" style={{background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)`}}>
              <span className="text-8xl group-hover:scale-110 transition-transform duration-500">☕</span>
            </div>
            {p.badge && (
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-[#FF4801] text-white">{p.badge}</span>
            )}
            <div className="p-8">
              <p className="text-[#C8A97E] text-sm mb-1">{p.origin}</p>
              <h3 className="font-display text-2xl text-white mb-2">{p.name}</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 rounded bg-white/10 text-[#C8A97E] text-xs">{p.roast} Roast</span>
              </div>
              <p className="text-[#E8D5B7]/60 text-sm mb-6">{p.notes}</p>
              <div className="flex items-center justify-between">
                <span className="text-white text-2xl font-display">${p.price}</span>
                <button className="px-5 py-2 rounded-full bg-[#FF4801] text-white text-sm hover:bg-[#FF7038] transition">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-[#FFFBF5]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[#FF4801] text-sm uppercase tracking-[0.2em] font-medium">Membership</span>
        <h2 className="font-display text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6">Choose Your Journey</h2>
        <div className="section-divider" />
        <p className="text-[#521000] max-w-xl mx-auto text-lg">From casual discovery to full connoisseurship. Every membership includes free worldwide shipping and our freshness guarantee.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <div key={i} className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'bg-white border-2 border-[#FF4801] shadow-2xl scale-105' : 'bg-white border border-[#EBD5C1] shadow-sm hover:shadow-lg'}`}>
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF4801] text-white text-sm font-medium">Most Popular</span>
            )}
            <h3 className="font-display text-2xl text-[#2C1810] mb-2">{plan.name}</h3>
            <p className="text-[#521000] text-sm mb-6">{plan.desc}</p>
            <div className="mb-8">
              <span className="text-5xl font-display text-[#2C1810]">${plan.price}</span>
              <span className="text-[#521000]">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-[#521000] text-[15px]">
                  <svg className="w-5 h-5 text-[#FF4801] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta" className={`block w-full text-center py-3 rounded-full transition ${plan.popular ? 'btn-luxury !block w-full text-center justify-center' : 'border-2 border-[#FF4801] text-[#FF4801] hover:bg-[#FF4801] hover:text-white'}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-[#FF4801] text-sm uppercase tracking-[0.2em] font-medium">Testimonials</span>
        <h2 className="font-display text-4xl md:text-5xl text-[#2C1810] mt-4 mb-6">Trusted by Connoisseurs</h2>
        <div className="section-divider" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-[#EBD5C1] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1 text-[#C8A97E] mb-4">★★★★★</div>
            <blockquote className="font-display text-lg text-[#2C1810] italic leading-relaxed mb-6">"{t.text}"</blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{background: t.color}}>{t.initials}</div>
              <div>
                <p className="font-medium text-[#2C1810]">{t.name}</p>
                <p className="text-sm text-[#521000]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-[#FFFBF5]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF4801] text-sm uppercase tracking-[0.2em] font-medium">FAQ</span>
          <h2 className="font-display text-4xl text-[#2C1810] mt-4 mb-6">Common Questions</h2>
          <div className="section-divider" />
        </div>
        <div>
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                <span className="font-display text-lg text-[#2C1810] pr-4">{faq.q}</span>
                <span className="faq-icon text-[#FF4801] text-2xl shrink-0">+</span>
              </button>
              <div className="faq-answer text-[#521000] leading-relaxed pb-5">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="cta" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4801] to-[#FF7038]" />
    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 30% 40%, white 0%, transparent 50%), radial-gradient(circle at 70% 60%, white 0%, transparent 40%)'}} />
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Begin Your Tunisian Coffee Journey</h2>
      <p className="text-white/80 text-lg mb-10">Join thousands of connoisseurs who have discovered the extraordinary world of Tunisian single-origin coffee.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4801] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#FFFDFB] hover:shadow-xl transition-all">
          Subscribe Now
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10m-4-4l4 4-4 4"/></svg>
        </a>
        <a href="#collection" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#FF4801] transition-all">
          View Collection
        </a>
      </div>
      <p className="mt-8 text-white/60 text-sm">No commitment. Cancel anytime. 100% satisfaction guaranteed.</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#2C1810] text-[#E8D5B7] py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4801] to-[#C8A97E] flex items-center justify-center text-white font-display font-bold text-sm">T</div>
            <span className="font-display text-lg text-white">Tunisian Coffee Co.</span>
          </div>
          <p className="text-[#E8D5B7]/60 text-sm leading-relaxed">Artisanal Tunisian coffee since 1927. Single-origin, organic, roasted to order.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-[#E8D5B7]/60">
            <li><a href="#collection" className="hover:text-[#C8A97E] transition">Our Collection</a></li>
            <li><a href="#pricing" className="hover:text-[#C8A97E] transition">Memberships</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Gift Sets</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Corporate Gifts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-[#E8D5B7]/60">
            <li><a href="#heritage" className="hover:text-[#C8A97E] transition">Our Heritage</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">The Farms</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Sustainability</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-[#E8D5B7]/60">
            <li><a href="#" className="hover:text-[#C8A97E] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Refund Policy</a></li>
            <li><a href="#" className="hover:text-[#C8A97E] transition">Shipping Info</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E8D5B7]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#E8D5B7]/40">
        <p>© 2026 Tunisian Coffee Co. All rights reserved.</p>
        <p>Crafted with ❤ in Tunis, Tunisia</p>
      </div>
    </div>
  </footer>
);

/* ─── Main App ─── */
const App = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Heritage />
    <Features />
    <Collection />
    <Pricing />
    <Testimonials />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

export default App;
