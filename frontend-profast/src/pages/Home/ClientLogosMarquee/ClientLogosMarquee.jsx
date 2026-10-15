import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/brands/amazon.png';
import logo2 from '../../../assets/brands/amazon_vector.png';
import logo3 from '../../../assets/brands/casio.png';
import logo4 from '../../../assets/brands/moonstar.png';
import logo5 from '../../../assets/brands/randstad.png';
import logo6 from '../../../assets/brands/star.png';
import logo7 from '../../../assets/brands/start_people.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogosMarque = () => {
	return (
		<section className="py-16 bg-base-200">
			{/* Section Title */}
			<div className="text-center mb-10">
				<h2 className="text-3xl md:text-4xl font-bold">Trusted By</h2>
				<p className="text-gray-500 mt-2">
					Companies that trust our delivery services
				</p>
			</div>

			{/* Logo Marquee */}
			<Marquee
				pauseOnHover={true}
				speed={50}
				gradient={true}
				gradientColor={[240, 240, 240]}
			>
				{logos.map((logo, index) => (
					<div key={index} className="mx-12 flex items-center justify-center">
						<img
							src={logo}
							alt="client logo"
							className="h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
						/>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default ClientLogosMarque;
