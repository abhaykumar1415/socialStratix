'use client';

import React from 'react';
import { Typography, Card, CardBody, Avatar } from '@material-tailwind/react';
import { UserIcon } from '@heroicons/react/24/solid';
import TestimonialCard from '../components/testimonial-card';

const TESTIMONIALS = [
	{
		feedback:
			"Since partnering with this platform, our social media presence has skyrocketed. The targeted campaigns and creative content have not only increased our followers but also significantly boosted our sales. Their team's expertise in leveraging social trends is unmatched. Truly a game-changer for our business!",
		client: 'Jessica Devis',
		title: 'CEO of FreshFashions',
		img: '/image/avatar1.jpg',
	},
	{
		feedback:
			"This agency transformed our social marketing approach. The data-driven insights they provided helped us understand our audience better, leading to more engaging campaigns. Their 24/7 support is phenomenal. We've seen a 50% increase in customer engagement since we started!",
		client: 'Mary Joshiash',
		title: 'Marketing Director, TechAdvance',
		img: '/image/avatar2.jpg',
	},
	{
		feedback:
			"What stood out for us was the comprehensive campaign management. The platform's ability to handle everything from strategy to analytics meant we could focus on our core business, while they took care of making our brand shine online. Our online customer base has grown by 40%!",
		client: 'Marcell Glock',
		title: 'Owner, PeakFitness',
		img: '/image/avatar3.jpg',
	},
];

export function Testimonials() {
	return (
		<section className='px-10 !py-20'>
			<div className='container mx-auto'>
				<div className='mb-20 flex w-full flex-col items-center'>
					<div className='mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white '>
						<UserIcon className='h-6 w-6' />
					</div>
					<Typography variant='h2' color='blue-gray' className='mb-2' placeholder={undefined}>
						What Clients Say
					</Typography>
					<Typography variant='lead' className='mb-10 max-w-3xl text-center !text-gray-600' placeholder={undefined}>
						Discover what our valued clients have to say about their experiences with our services. We take pride in
						delivering exceptional results and fostering lasting partnerships.
					</Typography>
				</div>
				<div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20'>
					{TESTIMONIALS.map((props, key) => (
						<TestimonialCard key={key} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
export default Testimonials;
