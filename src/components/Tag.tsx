interface TagProps {
	text: string;
}

const Tag = ({ text }: TagProps) => {
	return (
		<div className="px-2 py-1 mb-2 mr-4 text-xs uppercase font-mono font-base text-teal-900 bg-teal-200 rounded-full last:mr-0">
			#{text}
		</div>
	);
};

export default Tag;