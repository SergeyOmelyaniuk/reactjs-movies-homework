import React, { ReactNode } from 'react';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

interface IState {
	hasError: boolean;
}

interface IProps {
	children: ReactNode;
}

class ErrorBoundary extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: Object) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorPage />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
