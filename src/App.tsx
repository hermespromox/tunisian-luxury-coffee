import React from 'react';

const Header = () => (
  <header className="fixed w-full bg-[#FFFDFB]/80 backdrop-blur-sm border-b border-[#EBD5C1] z-50">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-medium text-[#521000]">Tunisian Coffee Co.</div>
      <div className="flex items-center gap-8">
        {['Features', 'Product', 'Pricing', 'Testimonials'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[#521000] hover:text-[#FF4801]">{item}</a>
        ))}
        <a href="#cta" className="bg-[#FF4801] text-white px-6 py-2 rounded-full hover:bg-[#FF7038] transition">Order Now</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="container mx-auto text-center">
      <span className="inline-block px-4 py-1 rounded-full bg-[#FEF7ED] text-[#FF4801] text-sm font-medium mb-6">Experience the Essence of Tunisia</span>
      <h1 className="text-6xl font-medium text-[#140400] mb-6">From <span className="text-[#FF4801]">Tunisian Highlands</span> to Your Morning Ritual.</h1>
      <p className="text-xl text-[#521000] max-w-2xl mx-auto mb-10">Artisanally roasted coffee beans, directly sourced from Tunisian heritage farms. A luxury experience, refined for the modern palate.</p>
      <div className="flex justify-center gap-4">
        <a href="#cta" className="bg-[#FF4801] text-white px-8 py-4 rounded-full text-lg hover:bg-[#FF7038] transition">Shop Collection</a>
        <a href="#product" className="bg-white border border-[#EBD5C1] px-8 py-4 rounded-full text-lg text-[#521000] hover:border-[#FF4801] transition">View Heritage</a>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 bg-[#FFFBF5]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl text-center text-[#140400] mb-16">Why Choose Our Artisan Coffee?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Ethically Sourced', desc: 'Direct trade with small-scale Tunisian coffee farmers.' },
          { title: 'Small-Batch Roasted', desc: 'Roasted daily in small quantities for maximum freshness.' },
          { title: 'Heritage Quality', desc: 'Ancient cultivation techniques for unmatched depth.' }
        ].map((feat, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-[#EBD5C1] shadow-sm">
            <h3 className="text-2xl mb-4 text-[#140400]">{feat.title}</h3>
            <p className="text-[#521000]">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl text-[#140400] mb-16">Choose Your Membership</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { name: 'Essentials', price: '$29', features: ['Monthly shipment', 'Classic Roast', 'Free Shipping'] },
          { name: 'Heritage Pro', price: '$49', features: ['Monthly shipment', 'Exclusive Small-Batch', 'Priority Support', 'Coffee Tasting Kit'], accent: true }
        ].map((plan, i) => (
          <div key={i} className={`p-10 rounded-2xl border ${plan.accent ? 'border-[#FF4801] shadow-lg' : 'border-[#EBD5C1]'} shadow-sm`}>
            <h3 className="text-2xl mb-2">{plan.name}</h3>
            <p className="text-5xl font-medium mb-8">{plan.price}<span className="text-lg text-[#521000]">/mo</span></p>
            <ul className="text-left mb-8 space-y-4">
              {plan.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <a href="#cta" className={`block w-full py-3 rounded-full ${plan.accent ? 'bg-[#FF4801] text-white' : 'border border-[#FF4801] text-[#FF4801]'}`}>Subscribe</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="min-h-screen bg-[#FFFDFB]">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <footer className="py-12 border-t border-[#EBD5C1] text-center text-[#521000]">
      <p>&copy; 2026 Tunisian Luxury Coffee Co. All rights reserved.</p>
    </footer>
  </div>
);

export default App;
