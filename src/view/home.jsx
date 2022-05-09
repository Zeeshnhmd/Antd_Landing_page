import React from 'react';
import About from '../components/home/about';
import Contact from '../components/home/contact';
import FAQ from '../components/home/faq';
import Features from '../components/home/feature';

import Hero from '../components/home/hero';
import Pricing from '../components/home/pricing';
import Works from '../components/home/works';

const Home = () => {
	return (
		<div className="main">
			<Hero />
			<About />
			<Features />
			<Works />
			<FAQ />
			<Pricing />
			<Contact />
		</div>
	);
};

export default Home;
