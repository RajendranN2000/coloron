const Differentiators = () => {
    const items = [
        {
            title: "Precision-driven printing",
            image: "/images/different_1.png"
        },
        {
            title: "Reliable and fast delivery",
            image: "/images/different_2.png"
        },
        {
            title: "Eco-conscious printing solutions",
            image: "/images/different_3.png"
        },
        {
            title: "Customer relationships, not just transactions",
            image: "/images/different_4.png"
        }
    ];

    return (
        <div className="text-center mt-14 px-4 md:px-24">
            <h2 className="text-3xl font-semibold mb-6">
                What Makes Us Different
            </h2>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 p-6">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-center">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Differentiators;
