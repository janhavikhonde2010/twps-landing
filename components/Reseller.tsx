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
                    Where ordinary & hungry people earn extraordinary income.
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
  {/* Background Shapes */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] border-[40px] border-orange-500 rounded-full" />
    <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] border-[30px] border-emerald-500 rounded-full" />
  </div>

  <div className="mx-auto max-w-6xl relative z-10">
    {/* Header */}
    <div className="mb-20 text-center">
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#042f2e] via-emerald-600 to-[#042f2e] rounded-full blur-lg opacity-40" />
        <div className="relative bg-[#042f2e] text-white px-14 py-5 rounded-full font-black text-3xl shadow-2xl tracking-tight">
          WHY THIS IS DIFFERENT?
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* LEFT SIDE */}
      <div className="space-y-12">
        <h3 className="text-5xl md:text-6xl font-extrabold text-[#042f2e]">
          This Is
        </h3>

        {/* NOT statements */}
        <div className="space-y-6 pl-8 border-l-4 border-[#042f2e]/20">
          <p className="text-2xl md:text-3xl font-semibold text-[#042f2e]">
            <span className="text-red-600 font-extrabold mr-2">NOT</span>a Job
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-[#042f2e]">
            <span className="text-red-600 font-extrabold mr-2">NOT</span>a Startup
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-[#042f2e]">
            <span className="text-red-600 font-extrabold mr-2">NOT</span>an MLM
          </p>
        </div>

        <div className="w-20 h-1 bg-orange-400 rounded-full" />

        {/* ONE LINE UPDATED TEXT */}
        <h4 className="text-3xl md:text-4xl font-extrabold text-[#042f2e]">
          This is a{" "}
          <span className="text-orange-500">
            Movement for Automating Business Growth using AI
          </span>
        </h4>

        {/* No-Nos Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-yellow-100/20 to-emerald-200/20 rounded-[3rem] blur-2xl" />
          <div className="relative bg-white/90 rounded-[3rem] px-16 py-16 shadow-xl">
            <div className="space-y-8">
              {[
                "No Product to build",
                "No Tech skills needed",
                "No Investment",
                "No Office",
              ].map((item) => (
                <p
                  key={item}
                  className="pl-8 border-l-4 border-[#042f2e]/60 text-2xl md:text-3xl font-extrabold text-[#042f2e]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/25 via-teal-300/20 to-yellow-300/20 rounded-[3rem] blur-3xl" />

        <div className="relative bg-[#042f2e] rounded-[3rem] px-16 py-16 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.45)] border border-emerald-400/20">
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-14">
            You get
          </h3>

          <ul className="space-y-10">
            {[
              "A real SaaS product",
              "A ready-made earning system",
              "Leadership path",
              "Support & Mentorship",
            ].map((item) => (
              <li
                key={item}
                className="pl-6 border-l-4 border-white/30 text-2xl md:text-3xl font-semibold text-yellow-100"
              >
                {item}
              </li>
            ))}
          </ul>
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
                { title: "SELL ,IMPLEMENT & EARN.", color: "from-blue-600 to-blue-400", desc: "20% lifetime commission. Sell The Wise Parrot subscriptions and earn." },
                { title: "BUILD A TEAM", color: "from-emerald-600 to-emerald-400", desc: "After 5 sales, become a Leader. Get 7% on your team's sales." },
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
      <ul className="grid grid-cols-3 gap-y-6 gap-x-10 text-lg font-semibold text-[#0b2f6b]">
  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Monthly earning
  </li>
  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Recognition
  </li>
  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Team
  </li>

  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Impact
  </li>
  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Growth
  </li>
  <li className="flex items-center gap-2">
    <span className="text-orange-500">•</span> Respect
  </li>

  <li className="flex items-center gap-2 col-span-3">
    <span className="text-orange-500">•</span> Freedom
  </li>
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
