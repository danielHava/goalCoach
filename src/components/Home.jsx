import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Jumbotron,
	Button,
	Breadcrumb,
	BreadcrumbItem,
	Form,
	FormGroup,
	Input
} from 'reactstrap';
import SlideShow from "./SlideShow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BreadCrumbs = () => {
	return(
		<Breadcrumb>
			<BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
			<BreadcrumbItem><a href="/">Library</a></BreadcrumbItem>
			<BreadcrumbItem active>Data</BreadcrumbItem>
		</Breadcrumb>
	);
}
class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid>
					<Container>
						<Row>
							<Col>
								<h1 className="display-3">Motivate yourself to achieve more.</h1>
								<p className="lead">It's time to have fun when you get things done!</p>
								<hr className="my-2" />
								<p className="lead">
									<Form inline>
										<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
											<Input type="text" name="Search tasks" id="home_search" placeholder="Search..." />
										</FormGroup>
										<Button color="success" size="lg" className="jumbotron_btn">
											<FontAwesomeIcon icon="search" color="#fff" size="1x" />
										</Button>
									</Form>
								</p>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				<Container className="mb-4">
					<Row>
						<Col>
							<SlideShow />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;