import { useState, useEffect } from 'react';
import { Copy, Download, Film, Check, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [xmlContent, setXmlContent] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/theme.xml')
      .then(res => res.text())
      .then(text => setXmlContent(text))
      .catch(err => console.error('Failed to load theme:', err));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neomax-blogger-theme.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#080809] text-white font-sans selection:bg-red-500/30">
      {/* Header */}
      <header className="border-bottom border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
              <Film className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              NEOMAX <span className="text-red-500">PRO</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 text-sm font-medium"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy XML'}
            </button>
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-500 rounded-full transition-all shadow-lg shadow-red-600/20 text-sm font-bold"
            >
              <Download className="w-4 h-4" />
              Download Theme
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
              Blogger Second-Gen XML
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tighter">
              CINEMATIC <br />
              <span className="text-red-600">EXPERIENCE</span> <br />
              FOR BLOGGER.
            </h2>
            <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              A production-ready, SEO-optimized theme for movie reviews, trailers, and video magazines. 
              Built with modern CSS variables and valid Blogger XML structure.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                AdSense Ready
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Fully Responsive
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                SEO Optimized
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#121214] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img 
                src="https://picsum.photos/seed/cinema-preview/1200/900" 
                alt="Theme Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">NeoMax Premium</h3>
                    <p className="text-white/60 text-sm">v1.0.0 • Production Ready</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-1 h-8 bg-red-600 rounded-full" />
              Theme Source Code
            </h3>
            <span className="text-sm text-slate-500 font-mono">theme.xml</span>
          </div>
          <div className="relative group">
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={handleCopy}
                className="p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-lg border border-white/10 transition-all"
                title="Copy Code"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="max-h-[600px] overflow-auto rounded-2xl border border-white/10 bg-[#0a0a0b] p-6 font-mono text-sm text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
              <pre><code>{xmlContent}</code></pre>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cinematic UI",
              desc: "Dark mode by default with high-contrast red accents and smooth backdrop-blur effects."
            },
            {
              title: "Video Support",
              desc: "Native support for YouTube, Vimeo, and custom iframe embeds with responsive aspect ratios."
            },
            {
              title: "Label Blocks",
              desc: "Dynamic homepage sections controlled by Blogger labels for easy content management."
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all">
              <h4 className="text-lg font-bold mb-3 text-red-500">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-black/30">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; 2026 NeoMax Theme Engine. Built for Google AI Studio Build.</p>
        </div>
      </footer>
    </div>
  );
}
