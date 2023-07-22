import { Dialog, Transition } from '@headlessui/react';
import Script from 'next/script';
import { Fragment, useEffect, useState } from 'react';

export default function Modal({ isOpen, setIsOpen, children, slot = '1' }) {
	// let [isOpen, setIsOpen] = useState(true);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// useEffect(() => {
	// 	Tally.loadEmbed();
	// }, []);

	return (
		<>
			{/* <div className="fixed inset-0 flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Open dialog
				</button>
			</div> */}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Slot Booking
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">Are you sure you want to book slot {slot}?</p>

										<div className="relative w-full h-[88vh]">
											<Script src="https://tally.so/embed/v1/embed.js" onLoad={() => Tally.loadEmbeds()} />

											<iframe
												data-tally-src={`https://tally.so/embed/wvrkGD?hideTitle=1&transparentBackground=1&slot_id=${slot}`}
												loading="lazy"
												width="100%"
												height="100%"
												frameBorder="0"
												title="EME: PoC"
												className="absolute inset-0 z-50 w-full"
											></iframe>
										</div>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
											// Tally Popup embed attributes
											data-tally-open="wvrkGD"
											data-tally-layout="modal"
											data-tally-width="600"
											data-tally-align-left="1"
											data-tally-hide-title="1"
											data-tally-overlay="1"
											data-tally-emoji-text="👋"
											data-tally-emoji-animation="wave"
											data-tally-auto-close="10000"
										>
											Yes, Book it
										</button>

										{/* <a href="https://tally.so#tally-open=wvrkGD&tally-layout=modal&tally-width=600&tally-align-left=1&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=10000">
											Click me
										</a> */}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
