import styled from "styled-components";
import Text from "./Text";

const Card = () => {
	return (
		<Container>
			<Image src="./images/image-qr-code.png" alt="QR code" />
			<Text />
		</Container>
	);
};

const Container = styled.div`
	background-color: white;
	padding: 12px;
	border-radius: 20px;
	max-width: 330px;
`;
const Image = styled.img`
	border-radius: 10px;
`;
export default Card;
