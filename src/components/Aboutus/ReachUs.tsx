const ReachUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-24 mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Reach us</h2>

      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl border items-stretch">
        <div className="md:w-1/2">
          <img src="/images/logo.png" className="h-10 mb-4" />

          <p className="text-gray-600 mb-4">
            No.73-A, 2nd street Extension, 100 feet road,
            Gandhipuram, Coimbatore
          </p>

          <div className="space-y-2 max-w-xs">
            <div className="bg-[#E8EFFF] p-2 rounded">GSTIN - 33APDPJ8280D1ZB</div>
            <div className="bg-[#E8EFFF] p-2 rounded">+91 73563 19828</div>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src="/images/map.png" className="rounded-lg w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
