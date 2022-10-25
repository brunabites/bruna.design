import ExternalLink from './Link';
import React, { useState, useRef } from 'react';

const Logo = () => {
	return (
		<div className="flex items-center">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.4112 25.7216C15.126 25.7216 18.9733 22.7453 18.9733 18.1521C18.9733 15.3962 17.3891 13.3018 14.7865 12.2361C16.7856 11.1705 18.1057 9.14955 18.1057 6.68762C18.1057 2.71914 14.6394 0 10.2802 0H2V25.7216H10.4112Z" fill="#611998"/>
			<path d="M16.376 27.9401C21.0908 27.9401 24.9381 24.9638 24.9381 20.3706C24.9381 17.6147 23.3539 15.5203 20.7514 14.4547C22.7504 13.389 24.0706 11.3681 24.0706 8.90613C24.0706 4.93765 20.6043 2.21851 16.2451 2.21851H7.96484V27.9401H16.376Z" fill="#00FFD6"/>
			<path d="M16.2293 2.21851C17.4015 3.36492 18.1053 4.89948 18.1053 6.68771C18.1053 9.14964 16.7852 11.1706 14.7861 12.2362C17.3887 13.3018 18.9729 15.3963 18.9729 18.1522C18.9729 22.6994 15.2022 25.662 10.552 25.7208L10.4108 25.7217H7.96484V2.21851H16.2293Z" fill="#9143CD"/>
			</svg> 
			<ExternalLink href="/" className="text-2xl font-bold pulse ml-2">
			bruna<span className="font-normal">bites.</span>
			</ExternalLink>
		</div>
	);
};

export default Logo;
