import Link from "next/link";

const AdminFooter = () => {
    const hrefs = [
        { href: '#', text: 'Orders' },
        { href: '/admin/allProducts', text: 'All Products' },
        { href: '/admin/addProduct', text: 'Add Product' },
        { href: '/', text: 'Home' },
    ]

    return (
        <div className="w-full sticky top-0 bg-white py-2">
            <div className="shadow bg-violet-200 rounded py-2 flex justify-between px-2">
                {
                    hrefs.map((element, i) => (
                        <Link key={i} href={element.href}>
                            <div className="text-xs bg-white px-2 py-1 rounded font-bold shadow">
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