'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';

import { CursorArrowRaysIcon, HeartIcon, LightBulbIcon, LockClosedIcon } from '@heroicons/react/24/solid';

import FeatureCard from '../components/feature-card';

const FEATURES = [
	{
		icon: CursorArrowRaysIcon,
		title: 'Comprehensive Campaign Management',
		children: 'End-to-end social media strategy and execution.',
	},
	{
		icon: HeartIcon,
		title: 'Creative Content Studio',
		children: ' Innovative, platform-specific visual and interactive content creation.',
	},
	{
		icon: LockClosedIcon,
		title: 'Data-Driven Insights and Analytics',
		children: 'Informed decisions using detailed metrics and analysis.',
	},
	{
		icon: LightBulbIcon,
		title: 'Influencer Collaboration and Management',
		children: 'Strategic influencer partnerships for enhanced brand reach.',
	},
];

export function Features() {
	return (
		<section className='py-28 px-4'>
			<div className='container mx-auto mb-20 text-center'>
				<Typography color='blue-gray' className='mb-2 font-bold uppercase' placeholder={undefined}>
					Your Social Engagement Platform
				</Typography>
				<Typography variant='h1' color='blue-gray' className='mb-4' placeholder={undefined}>
					One Platform, All Games!
				</Typography>
				<Typography
					variant='lead'
					className='mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 '
					placeholder={undefined}
				>
					Manage all your creators, campaigns, payments, and performance.
				</Typography>
			</div>
			<div className='container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2'>
				{FEATURES.map((props, idx) => (
					<FeatureCard key={idx} {...props} />
				))}
			</div>
		</section>
	);
}
export default Features;
