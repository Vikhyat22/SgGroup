'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-poppins text-6xl font-bold text-gold mb-4">Oops</p>
        <h1 className="font-poppins text-2xl font-bold text-white mb-3">
          Something Went Wrong
        </h1>
        <p className="font-inter text-white/60 text-sm leading-relaxed mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-poppins font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 active:translate-y-0"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
