import Head from "next/head"
import { useState } from "react"

import { Header, Main, Footer } from "../styles/Home"

export default function Home() {
	const [ledRed, setLedRed] = useState(false)
	const [ledGreen, setLedGreen] = useState(false)

	return (
		<>
			<Head>
				<title>ESP32</title>
			</Head>

			<Header></Header>

			<Main>
				<div>
					<img
						src={ledRed ? "/vermelho.png" : "/apagado.png"}
						alt="led vermelho"
					/>
					<div>
						<span>VERMELHO</span>
						<button
							onClick={() => {
								if (ledRed == false) {
									setLedRed(true)
									if (ledGreen == true) {
										setLedGreen(false)
									}
								} else {
									setLedRed(false)
								}
							}}
						>
							{ledRed ? "Desligar" : "Ligar"}
						</button>
					</div>
				</div>

				<div>
					<img
						src={ledGreen ? "/verde.png" : "/apagado.png"}
						alt="led verde"
					/>
					<div>
						<span>VERDE</span>
						<button
							onClick={() => {
								if (ledGreen == false) {
									setLedGreen(true)
									if (ledRed == true) {
										setLedRed(false)
									}
								} else {
									setLedGreen(false)
								}
							}}
						>
							{ledGreen ? "Desligar" : "Ligar"}
						</button>
					</div>
				</div>
			</Main>

			<Footer></Footer>
		</>
	)
}
