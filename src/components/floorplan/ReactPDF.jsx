import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
	const [file, setFile] = useState(
		process.env.NEXT_PUBLIC_FLOORPLAN || `https://ik.imagekit.io/prashant/easemyexpo/floorplans/Floor_Layout_PrintExpo_2023___Pack_Print_Expo.pdf`
	);
	const [numPages, setNumPages] = useState(null);

	function onFileChange(event) {
		setFile(event.target.files[0]);
	}

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<div>
			<div>
				<label htmlFor="file">Load from file:</label> <input onChange={onFileChange} type="file" />
			</div>
			<div>
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
					{Array.from({ length: numPages }, (_, index) => (
						<Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
					))}
				</Document>
			</div>
		</div>
	);
}

// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// export default function ReactPDF() {
// 	const pdf =
// 		process.env.NEXT_PUBLIC_FLOORPLAN || `https://ik.imagekit.io/prashant/easemyexpo/floorplans/Floor_Layout_PrintExpo_2023___Pack_Print_Expo.pdf`;

// 	const [numPages, setNumPages] = useState(null);
// 	const [pageNumber, setPageNumber] = useState(1);

// 	function onDocumentLoadSuccess({ numPages }) {
// 		setNumPages(numPages);
// 	}

// 	return (
// 		<div>
// 			<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
// 				<Page pageNumber={pageNumber} />
// 			</Document>
// 			<p>
// 				Page {pageNumber} of {numPages}
// 			</p>
// 		</div>
// 	);
// }
