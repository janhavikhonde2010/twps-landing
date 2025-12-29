import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function ResellerPage() {
  // High-quality assets from attachments
  const thumbsUpParrot = "https://cdn.builder.io/api/v1/image/assets%2F45192b2c68a54ab78a6c12221a1dbb89%2Fa682d8c02b4c4265acb38f5670a26d86?format=webp&width=800";
  const foldedArmsParrot = "https://cdn.builder.io/api/v1/image/assets%2F45192b2c68a54ab78a6c12221a1dbb89%2F5ff2fb310a4f492fb98c45c084e2c46f?format=webp&width=800";
  const pointingParrot = "https://cdn.builder.io/api/v1/image/assets%2F45192b2c68a54ab78a6c12221a1dbb89%2F6ec6536df0864d9681e73db2c7d08372?format=webp&width=800";
  const offerBrush = "https://cdn.builder.io/api/v1/image/assets%2F45192b2c68a54ab78a6c12221a1dbb89%2Fb48d53775f864c49ab9961fb29caaf4e?format=webp&width=800";

  return (
    <div className="min-h-screen bg-[#042f2e] text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#042f2e] via-[#0a3030] to-[#0f3f3e] px-4 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-down">
            <div className="inline-block relative">
              <h1 className="mb-6 font-black text-5xl md:text-8xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent uppercase tracking-tighter animate-fade-in drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                A NEW LIFE BEGINS TODAY
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
            </div>
            <p className="mt-8 text-2xl md:text-4xl text-yellow-100/90 italic font-medium animate-fade-in-up drop-shadow-lg tracking-tight">
              Your Life Is About to Change Forever
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content Box */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 md:p-12 border border-white/10 animate-fade-in-left animate-delay-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 hover:rotate-y-2">
                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1]">
                  <span className="text-white">Join </span>
              
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    The Wise Parrot
                  </span>
                  <br />
                  <span className="text-white"> Growth Army</span>
                </h2>

                <div className="space-y-8">
                  <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-light">
                    Where ordinary people earn extraordinary income
                    using{" "}
                    <span className="text-orange-400 font-normal border-b-2 border-orange-400/30">
  AI.
</span>

                  </p>

                  <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-6 rounded-r-2xl backdrop-blur-sm">
                    <p className="text-yellow-100 text-xl font-bold italic tracking-wide">
                      No tech - No investment - No pressure.
                    </p>
                  </div>

                  <p className="text-2xl font-medium">
                    <span className="text-white/60">Sirf </span>
                    <span className="text-orange-400 font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                      Guidance + System + Opportunity.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Character Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right animate-delay-300">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full blur-[100px] group-hover:blur-[120px] transition-all duration-700"></div>
                <img
                  src={pointingParrot}
                  alt="Wise Parrot Business Character"
                  className="h-auto w-[450px] relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16 animate-scale-in animate-delay-400">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <a
  href="https://wa.me/message/T6SQB5N6UUJXE1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="relative rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 text-black font-black text-2xl px-16 py-8 shadow-[0_10px_40px_rgba(250,204,21,0.4)] transition-all duration-500 hover:scale-110 active:scale-95 border-b-4 border-orange-600">
    Start Your New Income Journey
  </Button>
</a>

            </div>
          </div>

          {/* Footer Text */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in-up animate-delay-300">
            {["No Joining Fee", "No Risk", "Real Business", "Real Product"].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <span className="text-gray-200 text-lg md:text-xl font-bold tracking-tight">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Is Different Section */}
      <section className="bg-gradient-to-b from-[#fffce8] to-[#fef3c7] px-4 py-24 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] border-[40px] border-orange-500 rounded-full"></div>
          <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] border-[30px] border-emerald-500 rounded-full"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Header Badge */}
          <div className="mb-20 animate-fade-in text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#042f2e] via-emerald-600 to-[#042f2e] rounded-full blur-lg opacity-40 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative bg-[#042f2e] text-white px-14 py-5 rounded-full font-black text-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 tracking-tight">
                WHY THIS IS DIFFERENT?
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              <div className="animate-fade-in-left animate-delay-200">
                <h3 className="text-6xl md:text-7xl font-black text-[#042f2e] mb-4 leading-[0.9] tracking-tighter">
                  This is{" "}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent drop-shadow-sm">NOT</span>
                  <br />
                  a job
                </h3>
                <p className="text-4xl font-bold text-[#042f2e]/80 italic">
                  Not a startup
                </p>
                <p className="text-4xl font-bold text-[#042f2e]/80 italic">
                  Not a MLM
                </p>
              </div>

              <div className="animate-fade-in-left animate-delay-300">
                <h3 className="text-3xl md:text-4xl font-black text-[#042f2e] leading-snug tracking-tight">
                  This is a{" "}
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent border-b-4 border-orange-500/20">
                    Movement for Automating Business
                  </span>
                </h3>
                <h3 className="text-3xl md:text-4xl font-black text-[#042f2e] mt-4">
                  Growth using{" "}
<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
  Ai
</span>
                </h3>
              </div>

              {/* No-Nos Box */}
              <div className="relative group perspective-1000">
                <div className="absolute -inset-1 bg-[#042f2e]/10 rounded-[2rem] blur-2xl group-hover:bg-[#042f2e]/20 transition-all duration-700"></div>
                <div className="relative border-2 border-[#042f2e]/10 rounded-[2rem] p-10 md:p-12 bg-white/80 backdrop-blur-xl animate-scale-in animate-delay-400 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:-rotate-x-2 group-hover:rotate-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      "No Product to build",
                      "No Tech skills needed",
                      "No Investment",
                      "No Office",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 group/item"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#042f2e] text-orange-400 group-hover/item:scale-110 transition-transform shadow-lg">
                          <span className="text-xl font-bold">▶</span>
                        </div>
                        <span className="text-xl font-black text-[#042f2e] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - You Get Box */}
            <div className="flex flex-col animate-fade-in-right animate-delay-300">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#042f2e] rounded-[2.5rem] p-12 md:p-16 text-white animate-scale-in animate-delay-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-emerald-400/20 overflow-hidden">
                  {/* Internal Glow */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                  
                  <h4 className="text-4xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-12 relative z-10">
                    You get:
                  </h4>
                  <ul className="space-y-8 relative z-10">
                    {[
                      "A real SaaS product",
                      "A ready-made earning system",
                      "Leadership path",
                      "Support & Mentorship",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-6 group/li cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.3)] group-hover/li:scale-110 transition-all duration-300 group-hover/li:rotate-12">
                          <Check className="h-7 w-7 text-white stroke-[4]" />
                        </div>
                        <span className="text-2xl text-yellow-100/90 font-bold group-hover/li:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Just 3 Steps Section */}
      <section className="relative bg-[#042f2e] px-4 py-24 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
        
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 animate-fade-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-yellow-400/40 transition-all"></div>
              <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl">
                <img
                  src={thumbsUpParrot}
                  alt="Wise Parrot Character"
                  className="w-full h-full rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] px-12 py-6 shadow-2xl">
              <h2 className="font-black text-4xl text-white uppercase tracking-tighter text-center">
                WHAT <span className="text-orange-400">EXACTLY</span> YOU WILL DO?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Steps Circle */}
            <div className="flex justify-center animate-fade-in-left animate-delay-200">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-10 bg-orange-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="relative w-[450px] h-[450px] bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full border-[12px] border-white/10 shadow-[0_0_100px_rgba(251,191,36,0.3)] flex items-center justify-center transition-all duration-700 group-hover:scale-105 group-hover:rotate-3">
                  <div className="absolute inset-4 rounded-full border-4 border-dashed border-white/20 animate-spin-slow"></div>
                  <div className="text-center relative z-10">
                    <h3 className="font-black text-8xl text-[#042f2e] mb-10 drop-shadow-[0_5px_5px_rgba(255,255,255,0.3)] tracking-tighter">
                      JUST 3<br />
                      STEPS
                    </h3>
                    <div className="flex justify-center gap-6">
                      <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg animate-bounce" />
                      <div className="w-6 h-6 rounded-full bg-green-500 shadow-lg animate-bounce delay-150" />
                      <div className="w-6 h-6 rounded-full bg-red-500 shadow-lg animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content Boxes */}
            <div className="space-y-8 animate-fade-in-right animate-delay-300">
              {[
                { title: "SELL & EARN", color: "from-blue-600 to-blue-400", desc: "25% lifetime commission. Sell The Wise Parrot subscriptions and earn." },
                { title: "BUILD A TEAM", color: "from-emerald-600 to-emerald-400", desc: "After 5 sales, become a Leader. Get 10% on your team's sales." },
                { title: "LEADERSHIP OVERRIDES", color: "from-pink-600 to-rose-400", desc: "Grow your reseller network and enjoy an added 1% income from tier 3 sales." }
              ].map((step, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-[2rem] blur-lg opacity-20 group-hover:opacity-60 transition duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 flex gap-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10 shadow-2xl">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text 3xl font-black shadow-lg`}>
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="font-black text-2xl mb-3 uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-lg text-white/70 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#042f2e] px-6 py-20 text-white">
  <div className="max-w-5xl mx-auto flex flex-col items-center">
    
    {/* Header */}
    <div className="flex items-center gap-4 mb-10">
      <div className="bg-white text-[#042f2e] px-8 py-2 rounded-full font-bold text-sm tracking-tight shadow">
        REAL INCOME CALCULATOR
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F789794b886f54c429b420239536dee00?format=webp&width=800"
        className="h-12 w-12 rounded-full"
        alt="Mascot"
      />
    </div>

    {/* Box Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

      {/* Left Box */}
      <div className="border border-green-500 rounded-3xl p-8">
        <div className="bg-green-500 text-[#042f2e] inline-block px-5 py-1 rounded-full font-medium mb-6">
          Aap kitna earn kar sakte ho?
        </div>

        <ul className="space-y-4 text-[17px] leading-relaxed">
          <li>10 clients = ₹12,500 per month</li>
          <li>20 clients = ₹25,000 per month</li>
          <li>50 clients = ₹62,500 per month</li>
          <li className="text-yellow-400 font-semibold">
            100 clients = ₹1,25,000 per month
          </li>
        </ul>
      </div>

      {/* Right Box */}
      <div className="border border-orange-500 rounded-3xl p-8">
        <div className="bg-orange-500 text-[#042f2e] inline-block px-5 py-1 rounded-full font-medium mb-6">
          Team banayi?
        </div>

        <ul className="space-y-4 text-[17px] leading-relaxed">
          <li>• 4 log team me</li>
          <li>• Har ek 10 sale/month</li>
          <li>• Aap - 10% override</li>
        </ul>

        <p className="mt-5 text-[17px] font-semibold leading-relaxed">
          <span className="text-yellow-400">
            = EXTRA ₹20,000 to ₹40,000 monthly
          </span>
          <br />
          <span className="text-green-400">
            WITHOUT WORKING
          </span>
        </p>
      </div>

    </div>
  </div>
</section>


      

      {/* Why You Will Win Section */}
      <section className="relative bg-gradient-to-br from-[#042f2e] to-[#0a3030] px-4 py-24 overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-16 flex justify-center animate-fade-in">
            <div className="bg-yellow-400 text-[#042f2e] px-12 py-4 rounded-2xl font-black text-2xl uppercase shadow-[0_10px_30px_rgba(250,204,21,0.3)] rotate-1">
              WHY YOU WILL WIN?
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-3xl group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            <div className="relative border border-white/10 rounded-[3rem] bg-black/40 backdrop-blur-3xl p-12 md:p-16 mb-16 animate-fade-in-up shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-orange-400 font-black text-3xl mb-10 leading-tight">
                    Because for the first time<br />in your life...
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Aapko koi product nahi banana",
                      "Aapko marketing nahi seekhni",
                      "Aapko tech nahi aata tab bhi chalega",
                      "Aapko koi Investment nahi karni",
                      "Aapko koi Office nahi chahiye",
                      "Aapko koi fancy English nahi chahiye",
                      "Aapko koi scam nahi karna",
                      "Aapko khi akele nahi rehna",
                    ].map((item, idx) => (
                      <li key={idx} className="text-yellow-100/80 text-xl flex items-center gap-4 font-light">
                        <span className="text-yellow-400 text-2xl">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-[2rem] p-10 border border-white/10">
                  <h3 className="text-orange-400 font-black text-3xl mb-10 leading-tight">
                    You only need:
                  </h3>
                  <ul className="space-y-8">
                    {[
                      "Willingness",
                      "1 hour daily",
                      "Ek mobile",
                      "Ek dil jo chahata hai change",
                    ].map((item, idx) => (
                      <li key={idx} className="text-white text-2xl flex items-center gap-6 font-bold italic">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                          <Check className="h-6 w-6 stroke-[4]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The Miracle Offer Section - Updated with selected images */}
          <div className="relative mb-20 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-center md:text-left">
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={offerBrush} alt="Offer brush" className="w-96 h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-[100px] animate-pulse"></div>
                <img src={foldedArmsParrot} alt="Wise Parrot Character" className="h-80 w-auto relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:rotate-3 group-hover:scale-105" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-400 font-black text-4xl drop-shadow-lg animate-bounce-slow">
              For Growth Army members:
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-[#1a4d4a] px-4 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center justify-center mb-24 gap-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-orange-500/50 rounded-full blur-3xl opacity-50"></div>
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 p-2 shadow-2xl border-8 border-white/10 overflow-hidden group">
                <img src={foldedArmsParrot} alt="Parrot character" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[2.5rem] px-20 py-8 shadow-[0_20px_60px_rgba(251,191,36,0.4)] border-b-8 border-orange-700">
              <h2 className="font-black text-6xl text-[#042f2e] uppercase text-center leading-none tracking-tighter">
                WHAT <br /> YOU GET?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
  {
    name: "Partner Kit",
    items: [
      "WhatsApp sales scripts",
      "Elevator pitch & sales formula",
      "Demo script + Objection handling pack",
      "30-day closing calendar",
      "Broadcast templates & Ads playbook"
    ]
  },
  {
    name: "Content Kit",
    items: [
      "100 ready-to-use reels",
      "100 story templates",
      "Digital posters & carousels",
      "30 UGC video scripts"
    ]
  },
  {
    name: "Funnel Kit",
    items: [
      "Personal referral code",
      "Personal landing page",
      "Automated WhatsApp onboarding flow"
    ]
  },
  {
    name: "Training Kit",
    items: [
      "The Wise Parrot basics",
      "Closing mastery",
      "Business growth psychology",
      "How to make your first 5 sales",
      "Leadership & team-building training"
    ]
  },
  {
    name: "Leader Kit (after 5 clients)",
    items: [
      "Team training scripts",
      "Leader certificate",
      "Team leaderboard",
      "Exclusive campaigns",
      "Income booster templates",
      "Priority support & mastermind access"
    ]
  }
]
.map((kit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white mb-6 leading-tight">{kit.name}</h3>
                <ul className="space-y-4">
                  {kit.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/60 font-medium leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* WHY NOW CARD (No Animation) */}
  {/* WHY NOW CARD */}
<div className="text-center mt-28 relative z-10">
  <h2 className="text-yellow-400 font-extrabold text-4xl mb-12 tracking-wide">
    WHY NOW?
  </h2>

  {/* Wrapper to allow overflow image */}
  <div className="relative max-w-md mx-auto">

    {/* Card */}
    <div className="bg-[#fff4dd] rounded-[32px] px-12 py-14 shadow-xl text-left relative z-10">
      
      {/* Title */}
      <h3 className="text-orange-500 font-extrabold text-2xl leading-snug mb-8">
        Leader is not a title,<br />
        It is a lifestyle.
      </h3>

      {/* Bullet List */}
      <ul className="space-y-3 text-lg font-semibold text-[#0b2f6b]">
        <li>• Monthly earning</li>
        <li>• Recognition</li>
        <li>• Team</li>
        <li>• Impact</li>
        <li>• Growth</li>
        <li>• Respect</li>
        <li>• Freedom</li>
      </ul>

      {/* Bottom Highlight */}
      <div className="mt-10 inline-block border border-[#042f2e]/30 rounded-xl px-6 py-3 text-sm font-medium text-[#042f2e] bg-white/70">
        Your identity will shift,<br />
        Your earning will too.
      </div>
    </div>

    {/* HALF-OVERFLOW MASCOT */}
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F45192b2c68a54ab78a6c12221a1dbb89%2Fa682d8c02b4c4265acb38f5670a26d86?format=webp&width=600"
      alt="Wise Parrot"
      className="
        absolute
        bottom-0
        -right-20
        h-56
        w-auto
        z-20
        pointer-events-none
      "
    />
  </div>

  {/* CTA */}
  <a
  href="https://wa.me/message/JEKHUQ7TRAD4F1"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-14 bg-yellow-400 text-[#042f2e] px-14 py-4 rounded-full text-lg font-extrabold shadow-lg">
    YES, I WANT TO CHANGE MY LIFE
  </button>
</a>


  {/* Quote */}
  <p className="mt-12 text-white/70 italic text-base">
    “Your one decision today will change your next 10 years”
  </p>
</div>




      {/* Huge Offer Section */}
      <section className="relative bg-gradient-to-br from-[#042f2e] via-[#0a3030] to-[#042f2e] px-4 py-32 overflow-hidden">
        <div className="mx-auto max-w-5xl text-center relative z-10">
          
          
          <div className="flex justify-center mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-[120px]"></div>
              <img src={thumbsUpParrot} alt="Excited character" className="h-96 w-auto relative z-10 drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />
            </div>
          </div>
          <a
  href="https://wa.me/message/FDKD5HIY2RKBF1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-4xl px-24 py-12 shadow-[0_20px_80px_rgba(251,191,36,0.5)] hover:scale-110 transition-all duration-500 border-b-8 border-orange-700">
    JOIN NOW
  </Button>
</a>

        </div>
      </section>
    </div>
  );
}
