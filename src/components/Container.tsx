import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return <main className="container max-w-6xl px-4 mx-auto">{children}</main>;
}
