import ExternalImage from './Image';
import FullImage from './ImageFull';
import Image from 'next/image'
import ExternalLink from './Link';
import Pre from './Pre';
import Emoji from './Emoji';
import Admonition from './Admonition';
import FeatureCard from './FeatureCard';
import CaseCard from './CaseCard';

const MDXComponents = {
	a: ExternalLink,
	pre: Pre,
	Image,
	ExternalImage,
	FullImage,
	Emoji,
	Admonition,
	FeatureCard,
	CaseCard,
};

export default MDXComponents;
