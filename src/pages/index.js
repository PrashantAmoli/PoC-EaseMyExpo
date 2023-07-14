import Image from 'next/image';
import Script from 'next/script';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react';

export default function Home() {
	const floorplan = `https://eroynvzloxrunluahpdh.supabase.co/storage/v1/object/public/floorplans/Floor%20Layout%20PrintExpo%202023%20&%20Pack&Print%20Expo.pdf`;
	return (
		<>
			<Script
				src="https://tally.so/widgets/embed.js"
				strategy="lazyOnload"
				onLoad={() => {
					console.log('loaded', Tally);
					Tally.loadEmbeds();
				}}
			/>

			<main className={`flex min-h-screen flex-col items-center justify-between`}>
				<TabGroup>
					<TabPanels className="min-h-[96vh]">
						<TabPanel className="m-0">
							<embed src={floorplan} type="application/pdf" loading="lazy" width="100%" height="100%" frameBorder="0" className="h-screen"></embed>
						</TabPanel>

						<TabPanel className="m-0">
							<iframe
								data-tally-src="https://tally.so/embed/wvrkGD?alignLeft=0&hideTitle=1&transparentBackground=1"
								loading="lazy"
								width="100%"
								height="100%"
								frameBorder="0"
								title="EME: PoC"
								className="absolute inset-0 z-20 w-full"
							></iframe>
							<div className="w-full h-16 sm:h-14 bg-white absolute z-30 bottom-0 inset-x-0 sm:right-0 min-[500px]:left-auto min-[500px]:w-1/2"></div>
						</TabPanel>
					</TabPanels>

					<TabList className="fixed z-40 mx-auto w-fit inset-x-0 bottom-1 text-lg rounded-md shadow-blue-300 shadow-2xl sm:gap-16">
						<Tab className="bg-white hover:scale-110	transition-all w-24 font-semibold text-lg hover:text-white px-5 rounded-md shadow-2xl">
							Floorplan
						</Tab>
						<Tab className="bg-white hover:scale-110	transition-all w-24 font-semibold text-lg hover:text-white px-5 rounded-md shadow-2xl animate-pulse">
							Book Now
						</Tab>
					</TabList>
				</TabGroup>

				{/* <iframe
					data-tally-src="https://tally.so/embed/wvrkGD?alignLeft=0&hideTitle=1&transparentBackground=1"
					loading="lazy"
					width="100%"
					height="100%"
					frameBorder="0"
					title="EME: PoC"
					className="absolute inset-0 z-20 w-full"
				>
					<div className="w-full h-16 sm:h-14 bg-white absolute z-30 bottom-0 inset-x-0 sm:right-0 min-[500px]:left-auto min-[500px]:w-1/2"></div>
				</iframe>
				<div className="w-full h-16 sm:h-14 bg-white absolute z-30 bottom-0 inset-x-0 sm:right-0 min-[500px]:left-auto min-[500px]:w-1/2"></div> */}
			</main>
		</>
	);
}
