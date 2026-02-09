export default function Index() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F6a56d757e6a4425a90872cf4d2f657d9%2F05f98297e18a4351b846c4f1cf0169c0?format=webp&width=800&height=1200"
          alt="Announcements icon"
          className="w-10 h-10 mb-4 opacity-75"
        />
        <p className="text-slate-500 text-lg text-center">
          You don't have any
          <br />
          announcements yet
        </p>
      </div>
    </div>
  );
}
