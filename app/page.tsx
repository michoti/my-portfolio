import MatrixRain from "@/components/MatrixRain";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
      <main className="relative min-h-screen" style={{ background: '#1C1C1C' }}>
        <MatrixRain />
        <Navigation />

        {/* Noise overlay */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          
        </div>

      </main>
  );
}
