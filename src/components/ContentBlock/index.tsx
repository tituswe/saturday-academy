import LeftContentBlock from './LeftContentBlock';
import RightContentBlock from './RightContentBlock';
import TopContentBlock from './TopContentBlock';
import { ContentBlockProps } from './types';

const ContentBlock = (props: ContentBlockProps) => {
	if (props.type === 'left') return <LeftContentBlock {...props} />;
	if (props.type === 'right') return <RightContentBlock {...props} />;
	if (props.type === 'top') return <TopContentBlock {...props} />;
	return null;
};

export default ContentBlock;
