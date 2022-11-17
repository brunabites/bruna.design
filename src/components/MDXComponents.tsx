import InternalImage from './Image';
import FullImage from './ImageFull';
import Image from 'next/image'
import ExternalLink from './Link';
import Pre from './Pre';
import Emoji from './Emoji';
import Admonition from './Admonition';
import FeatureCard from './FeatureCard';
import CaseCard from './CaseCard';
import LocalVideo from './Video';
import Tooltip
 from './Tooltip';
const MDXComponents = {
	a: ExternalLink,
	pre: Pre,
	Image,
	InternalImage,
	FullImage,
	Emoji,
	Admonition,
	FeatureCard,
	CaseCard,
	LocalVideo,
	Tooltip,
};

export default MDXComponents;
