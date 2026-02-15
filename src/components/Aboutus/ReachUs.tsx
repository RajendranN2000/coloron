const ReachUs = () => {
  return (
    <div className=" mx-auto px-24 mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Reach us
      </h2>

      <div className="flex gap-6 bg-white p-6 rounded-xl border">
        <div className="w-[40%]">
          <img src="/images/logo.png" className="h-10 mb-4" />

          <p className="text-gray-600 mb-4">
            No.73-A, 2nd street Extension, 100 feet road,
            Gandhipuram, Coimbatore
          </p>

          <div className="space-y-2">
            <div className="bg-[#E8EFFF] p-2 rounded">
              GSTIN - 33APDPJ8280D1ZB
            </div>
            <div className="bg-[#E8EFFF] p-2 rounded">
              +91 73563 19828
            </div>
          </div>
        </div>

        <img
          src="/images/map.png"
          className="rounded-lg h-full object-cover w-[60%]"
        />
      </div>
    </div>
  );
};

export default ReachUs;
