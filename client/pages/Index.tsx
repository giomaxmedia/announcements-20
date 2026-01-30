export default function Index() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="50" height="50" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000"%3E%3Cpath d="M0 0h1v1H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-300" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Blank Page
          </h1>
          
          <p className="text-lg text-slate-500 max-w-md mx-auto font-light leading-relaxed">
            A fresh start. Ready for your content.
          </p>
        </div>
      </div>
    </div>
  );
}
