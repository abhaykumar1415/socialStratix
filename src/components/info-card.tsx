import React from 'react';

import { Typography, Card, CardBody } from '@material-tailwind/react';

interface InfoCardProps {
	title: string;
	children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
	return (
		<Card color='transparent' shadow={false} placeholder={undefined}>
			<CardBody className='grid px-0' placeholder={undefined}>
				<Typography variant='h2' color='blue-gray' className='mb-2' placeholder={undefined}>
					{title}
				</Typography>
				<Typography className=' font-normal' placeholder={undefined}>
					{children}
				</Typography>
			</CardBody>
		</Card>
	);
}

export default InfoCard;
