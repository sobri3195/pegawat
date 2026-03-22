import Link from "next/link";
import { ArrowRight, Bot, Github, Globe, Mail, HeartHandshake, Youtube, Send, MessageCircle, Music2, ShoppingBag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Pegawat | WhatsApp Gateway Dashboard",
  description: "Pegawat adalah platform WhatsApp Gateway self-hosted untuk dashboard, broadcast, auto reply, webhook, dan dokumentasi API.",
  openGraph: {
    title: "Pegawat | WhatsApp Gateway Dashboard",
    description: "Kelola sesi WhatsApp, auto reply, API, dan otomasi dari satu dashboard Pegawat.",
    type: "website",
  },
};

const quickLinks = [
  { href: "https://github.com/sobri3195", label: "GitHub", icon: Github },
  { href: "https://muhammadsobrimaulana.netlify.app", label: "Website", icon: Globe },
  { href: "mailto:muhammadsobrimaulana31@gmail.com", label: "Email", icon: Mail },
  { href: "https://lynk.id/muhsobrimaulana", label: "Donasi", icon: HeartHandshake },
];

const communityLinks = [
  { href: "https://www.youtube.com/@muhammadsobrimaulana6013", label: "YouTube", icon: Youtube },
  { href: "https://t.me/winlin_exploit", label: "Telegram", icon: Send },
  { href: "https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl", label: "Grup WhatsApp", icon: MessageCircle },
  { href: "https://www.tiktok.com/@dr.sobri", label: "TikTok", icon: Music2 },
];

const supportLinks = [
  { href: "https://lynk.id/muhsobrimaulana", label: "Lynk" },
  { href: "https://trakteer.id/g9mkave5gauns962u07t", label: "Trakteer" },
  { href: "https://maulanasobri.gumroad.com/", label: "Gumroad" },
  { href: "https://karyakarsa.com/muhammadsobrimaulana", label: "KaryaKarsa" },
  { href: "https://nyawer.co/MuhammadSobriMaulana", label: "Nyawer" },
];

export default function Home() {
  const packagePath = path.join(process.cwd(), "package.json");
  let version = "v1.0.0";
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    version = `v${packageJson.version}`;
  } catch (error) {
    console.error("Failed to read package.json", error);
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <header className="fixed top-4 inset-x-4 md:inset-x-auto md:top-6 md:left-1/2 md:-translate-x-1/2 z-50 md:w-full md:max-w-6xl transition-all duration-300">
        <div className="glass rounded-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between mx-auto shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/40 dark:border-white/10">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-primary text-white shadow-inner">
              <Bot className="h-5 w-5 md:h-6 md:w-6" />
              <div className="absolute inset-0 rounded-full bg-primary blur-md -z-10 opacity-50 animate-pulse-glow" />
            </div>
            <span className="text-foreground tracking-tight hidden sm:inline-block">Pegawat</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#fitur" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fitur</Link>
            <Link href="#komunitas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Komunitas</Link>
            <Link href="https://github.com/sobri3195" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="https://lynk.id/muhsobrimaulana" target="_blank">
              <Button size="sm" variant="glass" className="rounded-full px-4 hidden sm:flex">Donasi</Button>
            </Link>
            <Link href="/auth/login">
              <Button size="sm" className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/10 hidden sm:flex">
                Masuk
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative pt-32 pb-32 lg:pt-44 lg:pb-44 overflow-hidden flex items-center justify-center min-h-[92vh]">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[30rem] h-[30rem] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-10 max-w-[5xl] mx-auto">
              <div className="inline-flex items-center rounded-full glass-panel px-4 py-1.5 text-sm font-medium text-foreground/80 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Pegawat {version} siap digunakan
                <ChevronRight className="h-4 w-4 ml-1 opacity-50" />
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl w-full">
                  <span className="block text-foreground pb-2">WhatsApp Gateway</span>
                  <span className="text-gradient block pb-2">untuk otomasi modern.</span>
                </h1>
                <p className="mx-auto max-w-[48rem] text-muted-foreground text-lg sm:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                  Pegawat membantu Anda mengelola sesi WhatsApp, broadcast, auto reply, webhook, dan integrasi API dari satu dashboard self-hosted yang rapi dan cepat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full sm:w-auto px-4">
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-14 px-8 rounded-full text-base sm:text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/40 group">
                    Buka Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/docs" className="w-full sm:w-auto">
                  <Button size="lg" variant="glass" className="w-full h-14 px-8 rounded-full text-base sm:text-lg transition-all hover:bg-white/40 dark:hover:bg-white/10">
                    Lihat Dokumentasi
                  </Button>
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl pt-4">
                {quickLinks.map(({ href, label, icon: Icon }) => (
                  <Link key={label} href={href} target="_blank" className="glass-panel rounded-2xl px-4 py-4 text-left hover-lift">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-3"><Icon className="h-5 w-5 text-primary" /></div>
                      <div>
                        <p className="font-semibold text-foreground">{label}</p>
                        <p className="text-sm text-muted-foreground">Akses cepat Pegawat</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fitur" className="py-28 relative">
          <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/30 border-y border-border" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">Fitur Pegawat</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Dirancang untuk kebutuhan operasional, edukasi, eksperimen integrasi, dan otomasi pesan WhatsApp.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <FeatureCard title="Multi Session" description="Kelola banyak akun WhatsApp dalam satu dashboard dengan kontrol yang terpusat." />
              <FeatureCard title="Broadcast & Scheduler" description="Siapkan pengiriman pesan massal dan jadwal pesan otomatis sesuai kebutuhan operasional." />
              <FeatureCard title="Bot & Auto Reply" description="Atur auto reply berbasis kata kunci dan bot command untuk respon yang lebih cepat." />
              <FeatureCard title="Webhook & REST API" description="Integrasikan Pegawat ke sistem lain melalui webhook real-time dan endpoint API." />
              <FeatureCard title="Dokumentasi Lengkap" description="Akses dokumentasi publik dan Swagger UI untuk mempercepat implementasi developer." />
              <FeatureCard title="Brand Sobri" description="Tautan proyek, identitas author, kontak, komunitas, dan kanal donasi sudah terhubung langsung." />
            </div>
          </div>
        </section>

        <section id="komunitas" className="py-24 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start max-w-6xl mx-auto">
              <div className="glass-panel rounded-[2rem] p-8 md:p-10">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Author & Contact</p>
                <h3 className="text-3xl font-bold tracking-tight mb-4">Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hubungi melalui email <Link href="mailto:muhammadsobrimaulana31@gmail.com" className="text-primary underline underline-offset-4">muhammadsobrimaulana31@gmail.com</Link> atau kunjungi website resmi dan kanal komunitas untuk update Pegawat.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {communityLinks.map(({ href, label, icon: Icon }) => (
                    <Link key={label} href={href} target="_blank" className="flex items-center gap-3 rounded-2xl border border-border/60 px-4 py-3 hover:bg-accent transition-colors">
                      <div className="rounded-xl bg-primary/10 p-2.5"><Icon className="h-5 w-5 text-primary" /></div>
                      <span className="font-medium text-foreground">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Donasi & Dukungan</p>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Dukung pengembangan Pegawat</h3>
                <div className="space-y-3 mb-6">
                  {supportLinks.map(({ href, label }) => (
                    <Link key={label} href={href} target="_blank" className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3 hover:bg-accent transition-colors">
                      <span className="font-medium text-foreground">{label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
                <div className="rounded-2xl bg-primary/5 border border-primary/10 p-4 text-sm text-muted-foreground">
                  Tautan tambahan: <Link href="https://muhammad-sobri-maulana-kvr6a.sevalla.page/" target="_blank" className="text-primary underline underline-offset-4">Landing Page</Link> dan <Link href="https://pegasus-shop.netlify.app" target="_blank" className="text-primary underline underline-offset-4">Toko Online Sobri</Link>.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl py-12 relative z-10">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Pegawat</span>
            </div>
            <div className="flex gap-6 text-sm font-medium flex-wrap justify-center">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              <Link href="https://github.com/sobri3195" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
              <Link href="https://muhammadsobrimaulana.netlify.app" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">Website</Link>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Pegawat · Author Muhammad Sobri Maulana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative p-8 glass-panel rounded-[2rem] hover-lift overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-background/50 backdrop-blur-md shadow-sm border border-border group-hover:scale-110 transition-transform duration-500 ease-out">
          <ShoppingBag className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
