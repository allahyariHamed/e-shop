import Link from "next/link";

const AdminFooter = () => {
    const hrefs = [
        { href: '#', text: 'Orders' },
        { href: '/admin/allProducts', text: 'All Products' },
        { href: '/admin/addProduct', text: 'Add Product' },
        { href: '/', text: 'Home' },
    ]

    return (
        <div className="w-full sticky bottom-0 bg-white">
            <div className="px-3 shadow bg-violet-200 rounded-md py-2 flex justify-around">
                {
                    hrefs.map((element, i) => (
                        <Link key={i} href={element.href}>
                            <div className="text-xs bg-white p-1 rounded font-bold shadow">
                                {element.text}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminFooter;