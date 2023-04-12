import { CardSection, Content, Index, Title } from './styles';

interface Props {
	id: string;
	title: string;
	content: string;
}

const SyllabusCard = ({ id, title, content }: Props) => {
	return (
		<CardSection>
			<Index>{id}</Index>
			<Title>{title}</Title>
			<Content>{content}</Content>
		</CardSection>
	);
};

export default SyllabusCard;
