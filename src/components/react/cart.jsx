//import { Navbar } from '../components/navbar';
import { useState } from 'react';

export const Cart = () => {
	const [count, setCount] = useState(3);
	const [cart, setCart] = useState([
		{
			id: '1',
			name: 'Apples',
			price: 0.99,
			img: 'https://lh3.googleusercontent.com/proxy/w8X1QKw6IAGdfXSALEZW5sQ67o6ZXBRlcpNLO9Ut6qpiRweNdY1JZCO2uVDsC-uExHRlCVIqA15fzK_BFkw3i6ug',
			inventory: 20,
		},
		{
			id: '2',
			name: 'Lasagna',
			price: 4.99,
			img: 'https://www.goodnes.com/sites/g/files/jgfbjl131/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/stouffers-fzjleuokzb74uwwi15sl.png.webp?itok=zQP4NbXG',
			inventory: 12,
		},
		{
			id: '3',
			name: 'Pizza',
			price: 6.32,
			img: 'https://i5.walmartimages.com/asr/94f8eec3-a197-4bbb-9305-85cea4a43665.5631c100b474672cdfdd2e21b9a514ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
			inventory: 34,
		},
	]);

	var total = 0;

	const changeCart = () => {
		setCount(count - 1);
	};
	const handleDelete = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	const buttonClick = (id) => {
		changeCart();
		handleDelete(id);
	};

	return (
		<>
			<Navbar count={count} />
			{cart.map((item) => {
				total = total + item.price;
				return (
					<div key={item.itemID} className="text-center flex py-2">
						<h1 className="pr-2">{item.name}</h1>
						<h1 className="pr-2">${item.price}</h1>
						<button
							className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-10 rounded text-center focus:outline-none"
							onClick={() => buttonClick(item.id)}
						>
							Remove Item
						</button>
					</div>
				);
			})}
			<h1 className="text-center py-5 font-bold">
				Cart Total: ${Math.ceil(total * 100) / 100}
			</h1>
			<a
				key="checkout"
				href="/checkout"
				className="hover:bg-green-700 text-black text-lg px-3 py-2 rounded-md text-sm font-medium mr-2"
			>
				Checkout
			</a>
		</>
	);
};
