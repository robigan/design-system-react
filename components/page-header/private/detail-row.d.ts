import React from 'react';
type Props = {
	children?: React.ReactNode;
	/**
	 * Optional class name
	 */
	className?: any[] | Record<string, any> | string;
	/**
	 * An array of detail blocks
	 */
	details?: any[];
};

declare function Component(props: Props): JSX.Element;
export default Component;
