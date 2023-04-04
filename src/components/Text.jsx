import styled from "styled-components";

const Text = () => {
	return (
		<Container>
			<Heading>Improve your front-end skills by building projects</Heading>
			<Para>
				Scan the QR code to visit Frontend Mentor and take your coding skills to
				the next level
			</Para>
		</Container>
	);
};

const Container = styled.div`
	padding: 10px;
	font-size: 15px;
	text-align: center;
`;

const Heading = styled.h1`
	font-size: 23px;
	color: hsl(218, 44%, 22%);
	font-weight: 700;
	margin-block: 8px;
`;

const Para = styled.p`
	padding: 8px;
	color: hsl(220, 15%, 55%);
`;

export default Text;
