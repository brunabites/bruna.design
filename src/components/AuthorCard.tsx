import Avatar from './Avatar';
import ExternalLink from './Link';

const AuthorCard = () => {
	return (
		<div className="flex flex-row items-center justify-start mt-4">
			<Avatar href="/images/bruna-bites.png" />
			<div className="flex flex-col items-start justify-start ml-4">
				<ExternalLink
					href="/about"
					className="mb-0 text-base font-medium animated-underline"
				>
					Bruna Bites
				</ExternalLink>
			</div>
		</div>
	);
};

export default AuthorCard;
