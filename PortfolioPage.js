export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Guy Maya – Enterprise Sales Executive</h1>
        <p className="text-lg">Driving revenue through relationships. Transitioning luxury expertise into tech innovation.</p>
        <div className="space-x-4">
          <a href="/Guy_Maya_CV_2025RSM.pdf" className="px-6 py-2 bg-black text-white rounded-2xl shadow">Download Resume</a>
          <a href="#contact" className="px-6 py-2 border border-black rounded-2xl shadow">Contact Me</a>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I'm a results-driven sales professional with over 7 years of experience spanning B2B sales, account management, and strategic business development. After leading regional operations and closing multimillion-dollar deals in the luxury goods industry, I'm pivoting to the tech space—ready to apply my deep expertise in relationship management, negotiation, and team leadership to help tech or VC-backed companies grow revenue and reach new markets.
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold">Sales Wins & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold">Managed $6–7M Portfolio, Exceeded Quotas by 25%</h3>
            <p>As Regional Sales Manager at OMD Inc., I drove consistent growth despite a 32% market downturn, maintained relationships with 60+ enterprise clients, and led a satellite office including 2 AEs and a coordinator.</p>
          </div>
          <div className="p-4 border rounded-2xl shadow">
            <h3 className="text-xl font-bold">Founded E-Commerce Brand, Reduced Costs by 45%</h3>
            <p>I launched MANOTAUR, an online men's fashion store, where I led digital campaigns (FB, IG), grew traffic by 80%, and streamlined the supply chain to cut operational costs nearly in half.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border p-2 rounded-lg">B2B Sales & Biz Dev</div>
          <div className="border p-2 rounded-lg">Strategic Planning</div>
          <div className="border p-2 rounded-lg">Barak CRM</div>
          <div className="border p-2 rounded-lg">Salesforce</div>
          <div className="border p-2 rounded-lg">Client Relations</div>
          <div className="border p-2 rounded-lg">Negotiation & Closing</div>
          <div className="border p-2 rounded-lg">Consultative Selling</div>
          <div className="border p-2 rounded-lg">Cold Outreach & Lead Gen</div>
          <div className="border p-2 rounded-lg">Pipeline Management</div>
          <div className="border p-2 rounded-lg">Public Speaking</div>
          <div className="border p-2 rounded-lg">Market Research</div>
          <div className="border p-2 rounded-lg">Team Leadership</div>
        </div>
      </section>

      {/* Project Deck */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Sample Strategy Deck</h2>
        <p>Take a look at how I’d approach scaling an early-stage SaaS product or optimizing sales operations for a VC-backed startup.</p>
        <a
          href="https://docs.google.com/presentation/..."
          className="underline text-blue-600"
          target="_blank"
        >
          View Sales Strategy Deck
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Let’s Connect</h2>
        <p>Email: <a href="mailto:Guy1723@gmail.com" className="underline">Guy1723@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mayag1723/" className="underline">linkedin.com/in/mayag1723</a></p>
      </section>
    </div>
  );
}
