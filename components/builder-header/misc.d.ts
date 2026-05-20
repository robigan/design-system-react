import React from 'react';
type Props = {
	/**
	 * Provide custom content in place of Page Type label
	 * ```
	 * <BuilderHeader>
	 *   <BuilderHeaderMisc>
	 *     Custom content
	 *   </BuilderHeaderMisc>
	 * </BuilderHeader>
	 * ```
	 */
	children?: React.ReactNode;
};

function Component(props: Props): JSX.Element;
export default Component;
