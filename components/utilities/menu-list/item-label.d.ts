import React from 'react';
type Props = {
	data?: Record<string, any>;
	icon?: React.ReactNode;
	index?: number;
	inverted?: boolean;
	isSelected?: boolean;
	label?: string;
	value?: PropTypes.any;
};

declare function Component(props: Props): JSX.Element;
export default Component;
