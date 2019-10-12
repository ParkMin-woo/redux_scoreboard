import React , {useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
import {NavLink} from "react-router-dom";

// export class Menu extends React.Component {
export const Menu = (props) => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" dark expand="md">
				<NavLink className="navbar-brand" to="/">React</NavLink>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							{/* href 속성은 페이지를 다시 loading시킨다. */}
							<NavLink className="nav-link" to="/heroes">Heroes</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/scoreboard">Scoreboard</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Option 1
								</DropdownItem>
								<DropdownItem>
									Option 2
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Reset
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}