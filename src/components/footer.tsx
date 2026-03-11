export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="text-xl font-bold text-foreground">
              Tiro con Arco
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Presentación de la técnica básica de tiro con arco.
          </p>


        </div>
      </div>
    </footer>
  )
}
