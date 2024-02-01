'use client';

import React from 'react';
import { Typography, Card } from '@material-tailwind/react';

const FAQS = [
	{
		title: 'What services does your social media marketing agency offer?',
		desc: 'We offer comprehensive campaign management, creative content creation, data analytics, influencer collaborations, and customized training workshops.',
	},
	{
		title: 'How do you tailor your campaigns to different businesses and industries?',
		desc: 'Our strategies are customized based on in-depth market research and client-specific needs, ensuring relevance and effectiveness across various industries.',
	},
	{
		title: 'What is your approach to content creation and strategy?',
		desc: 'We focus on innovative, engaging content tailored to each platform, backed by a strategic plan that aligns with your brand’s goals.',
	},
	{
		title: 'How do you measure the success of your social media campaigns?',
		desc: 'Success is measured using key performance indicators like engagement rates, follower growth, and conversion rates, alongside client-specific metrics.',
	},
	{
		title: "Can you provide examples of successful campaigns you've managed in the past?",
		desc: 'Absolutely! Our portfolio includes successful campaigns across various sectors, showcasing our expertise in driving engagement and growth.',
	},
	{
		title: 'What makes your agency unique compared to other social media marketing agencies?',
		desc: 'Our unique blend of creative talent, data-driven strategies, and personalized client service sets us apart in delivering exceptional results.',
	},
];

export function Faqs() {
	return (
		<section className='px-8 py-20'>
			<div className='container max-w-6xl mx-auto'>
				<div className='text-center'>
					<Typography variant='h1' color='blue-gray' className='mb-4' placeholder={undefined}>
						Frequently Asked Questions
					</Typography>
					<Typography variant='lead' className='mx-auto mb-24 !text-gray-500 lg:w-3/5' placeholder={undefined}>
						A lot of people don&apos;t appreciate the moment until it&apos;s passed. I&apos;m not trying my hardest, and
						I&apos;m not trying to do
					</Typography>
				</div>

				<div className='grid gap-20 md:grid-cols-1 lg:grid-cols-3'>
					{FAQS.map(({ title, desc }) => (
						<Card key={title} shadow={false} color='transparent' placeholder={undefined}>
							<Typography color='blue-gray' className='pb-6' variant='h4' placeholder={undefined}>
								{title}
							</Typography>
							<div className='pt-2'>
								<Typography className='font-normal !text-gray-500' placeholder={undefined}>
									{desc}
								</Typography>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default Faqs;
