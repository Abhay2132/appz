import "./css/imgD.css";
import { useEffect } from "react";
export default function ImgD() {
	useEffect(() => {
		document.title = "Image Downloader"
	}, [])

	function submit(e) {
		e.preventDefault();
	}
	return (<div className="imgD-box">
		<form onSubmit={submit} className="imgD-form">
			<h2 className="imgD-h2"> Enter URLs </h2>
			<div className="input-box">
				<img src="/icons/url.svg" height='30px' width='30px' class="imgD-icon" alt="url"/>
				<input type="text" name='' placeholder="Enter Website URL" required />
			</div>
			<button className="add-url">Add URL</button>
			<button className="imgD-submit">Submit </button>
		</form>
	</div>)
}