import styled from "styled-components"
// import { color } from "./Components/Colors.js"

export const Header = styled.header``

export const Main = styled.main`
	height: 90vh;
	width: 98vw;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10vw;

	div {
		width: 30vw;
		height: 30vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			width: 5vw;
			padding: 2.5vw;
		}

		div {
			display: flex;
			flex-direction: column;
			bottom: 15vh;
			position: absolute;
			gap: 1.5vw;

			span {
				font-size: 1.5vw;
			}
			button {
				width: 20vw;
				height: 6vh;

				font-size: 1.5vw;
				padding: 0.5vw 2vw 0.5vw 2vw;
				border-radius: 1vw;

				:hover {
					cursor: pointer;
				}
			}
		}
	}
`

export const Footer = styled.footer``
