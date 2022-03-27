import StickyTopNavbar from "../navbar/StickyTopNavbar";

const Layout = ({ children }) => {
	return (
		<div>
			<StickyTopNavbar />
			{children}
		</div>
	);
};

export default Layout;
