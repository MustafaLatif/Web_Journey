const CartHeader = () => {
    return (
        <div className="bg-white text-black  flex flex-col items-center justify-center lg:max-w-[1200px] mx-auto lg:min-h-[150px]">
            <p className="text-xl font-bold">
                Váš košík
            </p>
            <p className="mt-2  text-[#999999]">
                V košíku máte aktuálne 2 produkty
            </p>
        </div>
    );
};

export default CartHeader;
