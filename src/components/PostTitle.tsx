import classNames from '@/utils/classnames';
import React from 'react';

interface PostTitleProps {
	center?: boolean;
	children: React.ReactNode;
	rest?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function Post({ center, children, ...rest }: PostTitleProps) {
	return (
		<h1
			className={classNames(
				center ? 'mx-auto' : '',
				'max-w-6xl mb-6 mt-4 text-3xl font-medium leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl moveUp'
			)}
			{...rest}
		>
			{children}
		</h1>
	);
}
