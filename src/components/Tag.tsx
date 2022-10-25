interface TagProps {
	text: string;
}

const Tag = ({ text }: TagProps) => {
	return (
		<div className="px-2 py-1 mb-2 mr-4 text-xs font-sans font-medium text-yellow-800 bg-yellow-400 rounded-full last:mr-0">
			#{text}
		</div>
	);
};

export default Tag;
