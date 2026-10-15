import React from 'react';
import Banner from '../Banner/Banner';
import ServiceSection from '../Services/ServiceSection';
import ClientLogosMarque from '../ClientLogosMarquee/ClientLogosMarquee';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ServiceSection></ServiceSection>
			<ClientLogosMarque></ClientLogosMarque>
		</div>
	);
};

export default Home;
