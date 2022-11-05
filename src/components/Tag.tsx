interface TagProps {
	text: string;
}

const Tag = ({ text }: TagProps) => {
	return (
		<div className="px-2 py-1 mb-2 mr-4 text-xs uppercase font-sans font-base text-yellow-800 bg-yellow-200 rounded-full last:mr-0">
			#{text}
		</div>
	);
};

export default Tag;
